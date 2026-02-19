import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from 'react-leaflet';
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
const createCustomIcon = (type: 'zbor' | 'event' | 'protest', svg: string) => {
  const markerClass = type === 'zbor' ? 'marker-zbor' : type === 'event' ? 'marker-event' : 'marker-protest';
  
  return L.divIcon({
    className: 'custom-marker-container', 
    html: `<div class="map-marker ${markerClass}">
             ${svg}
           </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

const zborIcon = createCustomIcon('zbor', PERSON_GROUP_SVG); 
const eventIcon = createCustomIcon('event', CALENDAR_SVG);   
const protestIcon = createCustomIcon('protest', MEGAPHONE_SVG);

// Simple Cyrillic to Latin converter (duplicated here to avoid circular dependencies or import issues if not exported)
const cyrToLat = (text: string) => {
  const map: {[key: string]: string} = {
    'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Ђ': 'Đ', 'Е': 'E', 'Ж': 'Ž', 'З': 'Z', 'И': 'I',
    'Ј': 'J', 'К': 'K', 'Л': 'L', 'Љ': 'Lj', 'М': 'M', 'Н': 'N', 'Њ': 'Nj', 'О': 'O', 'П': 'P', 'Р': 'R',
    'С': 'S', 'Т': 'T', 'Ћ': 'Ć', 'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Č', 'Џ': 'Dž', 'Ш': 'Š',
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђ': 'đ', 'е': 'e', 'ж': 'ž', 'з': 'z', 'и': 'i',
    'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n', 'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r',
    'с': 's', 'т': 't', 'ћ': 'ć', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š'
  };
  return text.replace(/[А-Шња-шђџ]/g, char => map[char] || char);
};

interface MapComponentProps {
  zborovi: ZborData[];
  posts: PostData[];
  onZborClick: (zbor: ZborData) => void;
  onPostClick: (post: PostData) => void;
  language: 'cir' | 'lat';
}

const MapLegend = ({ language }: { language: 'cir' | 'lat' }) => {
  const isLat = language === 'lat';
  const t = (txt: string) => isLat ? cyrToLat(txt) : txt;

  return (
    <div className="absolute bottom-8 left-4 z-[1000] bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-gray-200 animate-in fade-in duration-300">
      <h4 className="text-xs font-bold mb-2 text-foreground uppercase tracking-wide">{t('Легенда')}</h4>
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-primary border-2 border-white/50 shadow-sm flex items-center justify-center relative">
             <div className="absolute inset-0 rounded-full border border-primary opacity-30 animate-pulse"></div>
          </div>
          <span className="text-xs font-medium text-foreground">{t('Збор')}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#EAB308] border-2 border-white shadow-sm"></div>
          <span className="text-xs font-medium text-foreground">{t('Догађај')}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#EF4444] border-2 border-white shadow-sm"></div>
          <span className="text-xs font-medium text-foreground">{t('Протест')}</span>
        </div>
      </div>
    </div>
  );
};

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

const FitBounds = ({ zborovi, posts }: { zborovi: ZborData[], posts: PostData[] }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds([]);
    let hasMarkers = false;

    zborovi.forEach(zbor => {
       const [lat, lng] = getMockCoords(zbor.id, zbor.location);
       bounds.extend([lat, lng]);
       hasMarkers = true;
    });

    posts.filter(p => p.type === 'dogadjaj' || p.type === 'protestna_setnja').forEach(post => {
       const [lat, lng] = getMockCoords(post.id, post.eventInfo?.location || '');
       bounds.extend([lat, lng]);
       hasMarkers = true;
    });

    if (hasMarkers && bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [zborovi, posts, map]);

  return null;
};

export default function MapComponent({ zborovi, posts, onZborClick, onPostClick, language }: MapComponentProps) {
  // Filter only events and protests from posts
  const mapEvents = posts.filter(p => p.type === 'dogadjaj' || p.type === 'protestna_setnja');
  
  // Use OpenStreetMap standard tiles which display local names (Cyrillic in Serbia).
  const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  return (
    <div className="h-full w-full relative z-0 font-['Noto_Sans']">
      <MapLegend language={language} />
      
      <MapContainer 
        center={[44.7866, 20.4489]} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        maxBounds={SERBIA_BOUNDS}
        minZoom={7}
        zoomControl={false}
      >
        <FitBounds zborovi={zborovi} posts={posts} />
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
             // Basic clustering for events
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
