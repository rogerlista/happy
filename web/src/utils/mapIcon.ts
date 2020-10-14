import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [38, 48],
  iconAnchor: [23, 46],
  popupAnchor: [126, 14],
})

export default mapIcon
