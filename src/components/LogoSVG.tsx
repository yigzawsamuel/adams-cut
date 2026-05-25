export function LogoSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="21" cy="21" r="21" fill="#2C1810" />
      <path
        d="M14 12 L28 30 M28 12 L14 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="12" r="2.5" fill="white" />
      <circle cx="28" cy="12" r="2.5" fill="white" />
      <circle cx="14" cy="30" r="2.5" fill="white" />
      <circle cx="28" cy="30" r="2.5" fill="white" />
    </svg>
  )
}
