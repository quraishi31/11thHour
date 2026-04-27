import { useId } from 'react'

export function Logo({ className = 'h-14 w-auto' }: { className?: string }) {
  const gradientId = useId()

  return (
  <svg width="100%" viewBox="0 0 680 260" role="img" xmlns="http://www.w3.org/2000/svg" style="">
  <title style="fill:rgb(0, 0, 0);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">ENCORE Pakistan Final Logo</title>
  <desc style="fill:rgb(0, 0, 0);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto">Final wordmark logo for ENCORE Pakistan, EN in black and CORE in sea green</desc>

  <defs>
    
  <mask id="imagine-text-gaps-zp66gr" maskUnits="userSpaceOnUse"><rect x="0" y="0" width="680" height="260" fill="white"/><rect x="170" y="69" width="171.5749969482422" height="108" fill="black" rx="2"/><rect x="298" y="69" width="328.95001220703125" height="108" fill="black" rx="2"/><rect x="261.375" y="181.60000610351562" width="157.25" height="21.600000381469727" fill="black" rx="2"/></mask></defs>

  <!-- EN in black -->
  <text x="174" y="155" text-anchor="start" font-family="'Georgia', 'Times New Roman', serif" font-size="92" font-weight="700" letter-spacing="10" fill="#0d0d0d" style="fill:rgb(13, 13, 13);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:Georgia, &quot;Times New Roman&quot;, serif;font-size:92px;font-weight:700;text-anchor:start;dominant-baseline:auto">EN</text>

  <!-- CORE in sea green -->
  <text x="302" y="155" text-anchor="start" font-family="'Georgia', 'Times New Roman', serif" font-size="92" font-weight="700" letter-spacing="10" fill="#1a9e84" style="fill:rgb(26, 158, 132);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:Georgia, &quot;Times New Roman&quot;, serif;font-size:92px;font-weight:700;text-anchor:start;dominant-baseline:auto">CORE</text>

  <!-- Divider line -->
  <line x1="174" y1="170" x2="506" y2="170" stroke="#1a9e84" stroke-width="1" mask="url(#imagine-text-gaps-zp66gr)" style="fill:rgb(0, 0, 0);stroke:rgb(26, 158, 132);color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

  <!-- Dot accents -->
  <circle cx="174" cy="170" r="2.5" fill="#0d0d0d" style="fill:rgb(13, 13, 13);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>
  <circle cx="506" cy="170" r="2.5" fill="#1a9e84" style="fill:rgb(26, 158, 132);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Anthropic Sans&quot;, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, sans-serif;font-size:16px;font-weight:400;text-anchor:start;dominant-baseline:auto"/>

  <!-- PAKISTAN -->
  <text x="340" y="198" text-anchor="middle" font-family="'Trebuchet MS', 'Arial', sans-serif" font-size="15" font-weight="400" letter-spacing="11" fill="#1a9e84" style="fill:rgb(26, 158, 132);stroke:none;color:rgb(0, 0, 0);stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;opacity:1;font-family:&quot;Trebuchet MS&quot;, Arial, sans-serif;font-size:15px;font-weight:400;text-anchor:middle;dominant-baseline:auto">PAKISTAN</text>

</svg>
  )
}
