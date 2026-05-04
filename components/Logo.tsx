'use client'
import Image, { type StaticImageData } from 'next/image'
import encoreLogo from '../encore.png'

type LogoProps = {
  src?: string | StaticImageData
  alt?: string
  width?: number
  height?: number
  className?: string
}

export function Logo({
  src = encoreLogo,
  alt = 'Encore',
  width = 160,
  height = 40,
  className = '',
}: LogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  )
}

