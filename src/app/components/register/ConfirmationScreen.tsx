import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MesnaZajednica } from './types';
import { CheckmarkCircleIcon } from '@navikt/aksel-icons';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface ConfirmationScreenProps {
  mesneZajednice: MesnaZajednica[];
  onClose: () => void;
  t: (s: string) => string;
}

export function ConfirmationScreen({ mesneZajednice, onClose, t }: ConfirmationScreenProps) {
  // Calculate center
  const lats = mesneZajednice.map(m => m.lat);
  const lons = mesneZajednice.map(m => m.lon);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);
  
  const centerLat = (minLat + maxLat) / 2;
  const centerLon = (minLon + maxLon) / 2;
  const center: [number, number] = [centerLat, centerLon];
  
  // Basic bounds calculation or fallback
  const bounds = L.latLngBounds(mesneZajednice.map(m => [m.lat, m.lon]));

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto pr-1 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-chart-2/10 rounded-full flex items-center justify-center mb-4">
          <CheckmarkCircleIcon className="text-chart-2 text-[32px]" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">{t('Успешна регистрација!')}</h3>
        <p className="text-sm text-muted-foreground mb-6 max-w-md">
          {t('Ваш захтев је примљен. Ово су локације које ће ваш збор покривати:')}
        </p>

        <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md border border-border relative z-0">
          <MapContainer 
            center={center} 
            zoom={13} 
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mesneZajednice.map(mz => (
              <Marker key={mz.id} position={[mz.lat, mz.lon]}>
                <Popup>
                  <span className="font-bold">{mz.name}</span>
                  <br />
                  {mz.opstina}, {mz.grad}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
           {mesneZajednice.map(mz => (
             <span key={mz.id} className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
               {mz.name}
             </span>
           ))}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-accent">
        <button
          onClick={onClose}
          className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-sm shadow-lg hover:bg-primary/90 transition-colors"
        >
          {t('Затвори')}
        </button>
      </div>
    </div>
  );
}