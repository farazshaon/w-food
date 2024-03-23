'use client'
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import {Icon} from 'leaflet'
// leaflet css
import 'leaflet/dist/leaflet.css'

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { MapContainer, TileLayer } from "react-leaflet"

const markers = [
    {
        position: [34.052235, -118.243683],
        title: 'Loaction 1',
        subtitle: 'lorem ipsum dolor site amet',
        images: '/map/1.png'
    },
    {
        position: [33.9748, -118.3356],
        title: 'Loaction 2',
        subtitle: 'lorem ipsum dolor site amet',
        images: '/map/2.png'
    },
    {
        position: [34.0211, -118.3965],
        title: 'Loaction 3',
        subtitle: 'lorem ipsum dolor site amet',
        images: '/map/3.png'
    }
]

    const customIcon = new Icon({
        iconUrl: '/pin-solid.svg',
        iconSize: [40, 40],

    })

const Map = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
  return (
    <section id="contact">
      <MapContainer
      center={[34.052235, -118.243683]}
      zoom={10}
      className={` ${isMobile ? 'h-[300px]' : 'h-[900px]'} z-10`}
      zoomControl={false}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        />
      </MapContainer>
  
    </section>
  )
}

export default Map
