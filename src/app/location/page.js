'use client';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const LocationPage = () => {
  useEffect(() => {
    const loadLeaflet = async () => {
      const L = await import('leaflet');
      const map = L.map('map').setView([51.505, -0.09], 13);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A sample location')
        .openPopup();
    };

    loadLeaflet();
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default LocationPage;