import { useId } from 'react'

export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  const gradientId = useId()

  return (
   <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 576 432">
    <defs>
        <style>
            .cls-1{fill:url(#linear-gradient);}.cls-2{fill:url(#linear-gradient-2);}.cls-3{fill:url(#linear-gradient-3);}.cls-4{font-size:72px;fill:#231f20;font-family:Fonarto;}
        </style>
        <linearGradient id="linear-gradient" x1="100.8" y1="251.96" x2="149.94" y2="214.03" gradientTransform="translate(-6.44 -16.08) rotate(-3.62)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#2bc4f3" />
            <stop offset="0.5" stop-color="#00aeee" />
            <stop offset="1" stop-color="#0085c1" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="112.55" y1="277.19" x2="169.96" y2="232.87" gradientTransform="translate(-6.44 -16.08) rotate(-3.62)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#2bc4f3" />
            <stop offset="0.5" stop-color="#00aeee" />
            <stop offset="1" stop-color="#0095da" />
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="164.45" y1="185.66" x2="184.13" y2="172.9" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient-2" />
    </defs>
    <path class="cls-1" d="M116.27,225.25c-.15-1-.26-2-.33-3a31.81,31.81,0,0,1,41.93-32.12C159,199,157.09,219.48,116.27,225.25Z" />
    <path class="cls-2" d="M179.4,218.27A31.79,31.79,0,0,1,117,228.6c9.11.38,43-.69,46.21-36.06A31.77,31.77,0,0,1,179.4,218.27Z" />
    <path class="cls-3" d="M164.53,185.76a1,1,0,0,1-.17-.78c.65-3.57,1.47-6.46,1.52-7,0-.1-.15-.16-.19-.06-.49,1.23-1.79,3.53-3,6.09a.81.81,0,0,1-.51.43l-8.23,2.29c-.05,0-.09,0-.05-.08l12.85-12s0,0,0,0l2.33,17.56a0,0,0,0,1,0,0Z" />
    <text class="cls-4" transform="translate(195.92 244.13)">ENCORE</text>
</svg>
  )
}
