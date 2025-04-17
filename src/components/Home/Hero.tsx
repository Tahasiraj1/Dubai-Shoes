import React from 'react'
import HeroCarousel from '../layout/HeroCarousel'

const slides = [
    {
        src: '/HeroSlides/shoe1.jpg',
        alt: 'Hero Image 1'
    },
    {
        src: '/HeroSlides/shoe2.jpg',
        alt: 'Hero Image 2'
    },
    {
        src: '/HeroSlides/shoe3.jpg',
        alt: 'Hero Image 3'
    },
    {
        src: '/HeroSlides/shoe4.jpg',
        alt: 'Hero Image 4'
    },
]

const Hero = () => {
  return (
    <div>
      <HeroCarousel images={slides} />
    </div>
  )
}

export default Hero
