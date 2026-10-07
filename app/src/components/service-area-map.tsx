import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

type ServicePoint = {
  name: string
  lat: number
  lng: number
  kind: 'city' | 'scheduled' | 'village' | 'route'
  detail: string
}

const points: ServicePoint[] = [
  { name: 'Isparta Merkez', lat: 37.7636722, lng: 30.5550569, kind: 'city', detail: 'Adres ve alım günü için arayıp teyit edin.' },
  { name: 'Atabey', lat: 37.9509348, lng: 30.6374073, kind: 'scheduled', detail: 'Servis günleri: Salı ve Cuma.' },
  { name: 'Eğirdir', lat: 37.8744344, lng: 30.8500433, kind: 'scheduled', detail: 'Servis günleri: Salı ve Cuma.' },
  { name: 'Gönen', lat: 37.9575448, lng: 30.5128626, kind: 'route', detail: 'Adres ve servis günü için arayıp teyit edin.' },
  { name: 'Büyük Gökçeli', lat: 37.874832, lng: 30.733236, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Küçük Gökçeli', lat: 37.8682425, lng: 30.6968486, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Büyük Hacılar', lat: 37.7912954, lng: 30.6399947, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Küçük Hacılar', lat: 37.8107385, lng: 30.6330386, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Ali Köyü', lat: 37.8106476, lng: 30.6241808, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Harmanören', lat: 37.91816, lng: 30.709398, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'Kuleönü', lat: 37.873558, lng: 30.6193851, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
  { name: 'İslamköy', lat: 37.9258769, lng: 30.655921, kind: 'village', detail: 'Çevre güzergâhı; adres teyidi gerekir.' },
]

export function ServiceAreaMap() {
  const mapElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: import('leaflet').Map | undefined
    let cancelled = false

    void import('leaflet').then((leaflet) => {
      if (cancelled || !mapElement.current) return
      map = leaflet.map(mapElement.current, {
        zoomControl: false,
        scrollWheelZoom: false,
        preferCanvas: true,
      })
      leaflet.control.zoom({ position: 'topright' }).addTo(map)
      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap katkıda bulunanlar</a>',
      }).addTo(map)

      const bounds = leaflet.latLngBounds([])
      points.forEach((point) => {
        const color = point.kind === 'scheduled' ? 'scheduled' : point.kind === 'city' ? 'city' : point.kind === 'route' ? 'route' : 'village'
        const marker = leaflet.marker([point.lat, point.lng], {
          icon: leaflet.divIcon({
            className: 'ipek-map-marker-shell',
            html: `<span class="ipek-map-pin ipek-map-pin--${color}"><i></i></span>`,
            iconSize: [30, 38],
            iconAnchor: [15, 36],
            popupAnchor: [0, -32],
          }),
          title: point.name,
          alt: point.name,
        }).addTo(map!)
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${point.lat},${point.lng}`
        marker.bindPopup(`<div class="ipek-map-popup"><b>${point.name}</b><span>${point.detail}</span><a href="${mapsUrl}" target="_blank" rel="noreferrer">Haritada aç ↗</a></div>`)
        bounds.extend([point.lat, point.lng])
      })
      map.fitBounds(bounds.pad(0.14), { animate: false })
      window.setTimeout(() => map?.invalidateSize(), 120)
    }).catch(() => {
      if (mapElement.current) mapElement.current.dataset.mapError = 'true'
    })

    return () => {
      cancelled = true
      map?.remove()
    }
  }, [])

  return <div className="service-map-shell">
    <div ref={mapElement} className="service-area-map" role="region" aria-label="İpek Halı Yıkama servis bölgeleri haritası" />
    <div className="service-map-caption"><span><i className="map-legend-dot map-legend-city" /> Isparta merkez</span><span><i className="map-legend-dot map-legend-scheduled" /> Salı · Cuma</span><span><i className="map-legend-dot map-legend-village" /> Çevre güzergâhı · gün teyidi</span></div>
  </div>
}
