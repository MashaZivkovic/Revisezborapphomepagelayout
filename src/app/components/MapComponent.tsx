import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import '../../styles/map.css';
import L from 'leaflet';
import { ZborData, PostData } from './Cards';

// Fix for default marker icon in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// SVG Strings for icons
const PERSON_GROUP_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
const CALENDAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
const MEGAPHONE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>`;

// Custom Icons
const createCustomIcon = (color: string, svg: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
             ${svg}
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

const zborIcon = createCustomIcon('#6B21A8', PERSON_GROUP_SVG); // Purple for Zborovi
const eventIcon = createCustomIcon('#EAB308', CALENDAR_SVG);   // Yellow for Events
const protestIcon = createCustomIcon('#EF4444', MEGAPHONE_SVG); // Red for Protests

interface MapComponentProps {
  zborovi: ZborData[];
  posts: PostData[];
  onZborClick: (zbor: ZborData) => void;
  onPostClick: (post: PostData) => void;
  language: 'cir' | 'lat';
}

// Bounds for Serbia (approximate)
const SERBIA_BOUNDS: L.LatLngBoundsExpression = [
  [41.7, 18.8], // South-West
  [46.2, 23.0], // North-East
];

// Helper to get coordinates (mocking since we don't have real coords in data yet)
const getMockCoords = (id: string, location: string): [number, number] => {
  // Simple deterministic hash to spread them out a bit
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const latOffset = (hash % 100) / 1000;
  const lngOffset = (hash % 50) / 1000;
  
  if (location.includes('Нови Сад') || location.includes('Novi Sad')) {
    return [45.2671 + latOffset, 19.8335 + lngOffset];
  }
  // Default to Belgrade
  return [44.7866 + latOffset, 20.4489 + lngOffset];
};

export default function MapComponent({ zborovi, posts, onZborClick, onPostClick, language }: MapComponentProps) {
  // Filter only events and protests from posts
  const mapEvents = posts.filter(p => p.type === 'dogadjaj' || p.type === 'protestna_setnja');
  
  // Use OpenStreetMap standard tiles which display local names (Cyrillic in Serbia).
  // This avoids the English "Montenegro" issue.
  // Note: Changing to Latin dynamically on raster tiles is limited without a custom vector tile server,
  // so we stick to the most authentic local source (OSM) which is correct for the region.
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className="h-full w-full relative z-0">
      <MapContainer 
        center={[44.7866, 20.4489]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        maxBounds={SERBIA_BOUNDS}
        minZoom={7}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={tileUrl}
        />
        
        <ZoomControl position="bottomright" />

        {/* Zborovi Cluster */}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster) => {
            return L.divIcon({
              html: `<div class="cluster-zbor"><div><span>${cluster.getChildCount()}</span></div></div>`,
              className: 'marker-cluster marker-cluster-small',
              iconSize: L.point(40, 40)
            });
          }}
        >
          {zborovi.map(zbor => (
            <Marker 
              key={`zbor-${zbor.id}`} 
              position={getMockCoords(zbor.id, zbor.location)} 
              icon={zborIcon}
              eventHandlers={{ click: () => onZborClick(zbor) }}
            >
              <Popup>
                <div className="font-['Noto_Sans']">
                  <h3 className="font-bold text-sm mb-1">{zbor.name}</h3>
                  <p className="text-xs text-gray-600">{zbor.location}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>

        {/* Event/Protest Cluster */}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster) => {
             // Check if cluster contains mostly protests or events
             // For now we default to event style unless we can inspect children props easily. 
             // Simple hack: check if majority of children have a specific property? 
             // Actually, `cluster.getAllChildMarkers()` returns the markers.
             // We can use that to determine the color.
             const markers = cluster.getAllChildMarkers();
             // Just use a generic "event" style (yellow) or "protest" style (red) if mixed?
             // Or separate them? The user said "brojevi dogadjaja i brojevi setnji".
             // Let's create TWO groups for events and protests if possible, but mapEvents is mixed.
             // I will refactor to separate them below.
            return L.divIcon({
              html: `<div class="cluster-event"><div><span>${cluster.getChildCount()}</span></div></div>`,
              className: 'marker-cluster marker-cluster-small',
              iconSize: L.point(40, 40)
            });
          }}
        >
            {/* Events (not protests) */}
            {mapEvents.filter(p => p.type === 'dogadjaj').map(post => (
              <Marker 
                key={`post-${post.id}`} 
                position={getMockCoords(post.id, post.eventInfo?.location || '')} 
                icon={eventIcon}
                eventHandlers={{ click: () => onPostClick(post) }}
              >
                 <Popup>
                  <div className="font-['Noto_Sans']">
                    <h3 className="font-bold text-sm mb-1">{post.title}</h3>
                    <p className="text-xs text-gray-600">{post.eventInfo?.location}</p>
                    <p className="text-xs text-gray-600">{post.eventInfo?.startTime}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
        
        {/* Protests Cluster */}
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={(cluster) => {
            return L.divIcon({
              html: `<div class="cluster-protest"><div><span>${cluster.getChildCount()}</span></div></div>`,
              className: 'marker-cluster marker-cluster-small',
              iconSize: L.point(40, 40)
            });
          }}
        >
             {mapEvents.filter(p => p.type === 'protestna_setnja').map(post => (
              <Marker 
                key={`post-${post.id}`} 
                position={getMockCoords(post.id, post.eventInfo?.location || '')} 
                icon={protestIcon}
                eventHandlers={{ click: () => onPostClick(post) }}
              >
                 <Popup>
                  <div className="font-['Noto_Sans']">
                    <h3 className="font-bold text-sm mb-1">{post.title}</h3>
                    <p className="text-xs text-gray-600">{post.eventInfo?.location}</p>
                    <p className="text-xs text-gray-600">{post.eventInfo?.startTime}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
