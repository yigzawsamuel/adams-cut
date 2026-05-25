interface LogoSVGProps {
  className?: string
  color?: string
}

export function LogoSVG({ className, color = '#D4A017' }: LogoSVGProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left blade */}
      <path d="M7 2 L18 24" stroke={color} strokeWidth="2.3" strokeLinecap="round"/>
      {/* Right blade */}
      <path d="M29 2 L18 24" stroke={color} strokeWidth="2.3" strokeLinecap="round"/>
      {/* Pivot */}
      <circle cx="18" cy="24" r="2.5" fill={color}/>
      {/* Left arm to ring */}
      <path d="M18 26.5 L12 34" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Right arm to ring */}
      <path d="M18 26.5 L24 34" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      {/* Left ring */}
      <circle cx="10" cy="38" r="6" stroke={color} strokeWidth="2" fill="none"/>
      {/* Right ring */}
      <circle cx="26" cy="38" r="6" stroke={color} strokeWidth="2" fill="none"/>
    </svg>
  )
}
