import type { ReactNode } from 'react'

export type IconName =
  | 'menu'
  | 'close'
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'map-pin'
  | 'download'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'truck'
  | 'chart'
  | 'monitor'
  | 'users'
  | 'graduation-cap'
  | 'trending-up'

// Ícones de traço em grade 24x24. O tamanho acompanha o font-size do elemento pai.
const shapes: Record<IconName, ReactNode> = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.75v.01M12 16v-5.5M12 13a2.5 2.5 0 0 1 5 0V16" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  download: <path d="M12 3v12M7 10.5l5 5 5-5M4 20h16" />,
  'arrow-right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17 17 7M8 7h9v9" />,
  truck: (
    <>
      <path d="M3 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7.5" cy="17.5" r="1.75" />
      <circle cx="17.5" cy="17.5" r="1.75" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M8 17v-5M13 17V8M18 17v-3" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
      <circle cx="10" cy="8" r="3.5" />
      <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.65a3.5 3.5 0 0 1 0 6.7" />
    </>
  ),
  'graduation-cap': (
    <>
      <path d="M2 9.5 12 5l10 4.5-10 4.5z" />
      <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5M22 9.5V15" />
    </>
  ),
  'trending-up': <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
}

interface IconProps {
  name: IconName
  className?: string
}

export default function Icon({ name, className }: IconProps) {
  return (
    <svg
      className={className}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shapes[name]}
    </svg>
  )
}
