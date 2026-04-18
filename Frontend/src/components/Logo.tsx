interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const dims = { sm: 40, md: 56, lg: 80 };
  const d = dims[size];

  return (
    <svg
      width={d}
      height={d}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="60" r="58" fill="white" stroke="#1e3a8a" strokeWidth="3" />
      <circle cx="60" cy="60" r="52" fill="white" stroke="#1e3a8a" strokeWidth="1.5" />
      {[0, 15, -15, 30, -30, 45, -45, 60, -60].map((angle, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="18"
          rx="3.5"
          ry="7"
          fill="#1e3a8a"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}
      <path
        d="M60 35 C50 35 42 42 42 52 C42 58 45 63 50 66 L50 78 L70 78 L70 66 C75 63 78 58 78 52 C78 42 70 35 60 35Z"
        fill="#0f766e"
        opacity="0.9"
      />
      <ellipse cx="55" cy="48" rx="4" ry="5" fill="#f0fdf4" />
      <path d="M48 72 Q60 85 72 72" stroke="#1e3a8a" strokeWidth="2" fill="none" />
      <text x="60" y="97" textAnchor="middle" fill="#1e3a8a" fontSize="8" fontWeight="bold" fontFamily="Arial">MA SEBA</text>
    </svg>
  );
}
