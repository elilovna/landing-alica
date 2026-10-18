import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false } as const;

export function Spark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path
        d="M12 0C13 8 16 11 24 12 16 13 13 16 12 24 11 16 8 13 0 12 8 11 11 8 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

const PETAL = "M0 0C-20-8-26-40 0-47 26-40 20-8 0 0Z";

export function Hibiscus(props: IconProps) {
  return (
    <svg viewBox="-50 -50 100 100" {...base} {...props}>
      <g fill="currentColor">
        {[0, 72, 144, 216, 288].map((deg) => (
          <path key={deg} d={PETAL} transform={`rotate(${deg})`} />
        ))}
      </g>
      <circle r="9" fill="#b8341f" opacity=".55" />
      <path d="M0 0L16-26" stroke="#f4b23e" strokeWidth="3" strokeLinecap="round" />
      <circle cx="16" cy="-27" r="4" fill="#f4b23e" />
      <circle cx="10" cy="-30" r="3" fill="#f4b23e" />
      <circle cx="21" cy="-21" r="3" fill="#f4b23e" />
    </svg>
  );
}

export function Frond(props: IconProps) {
  return (
    <svg viewBox="0 0 100 170" {...base} {...props}>
      <path d="M50 150Q53 80 50 6" stroke="currentColor" strokeWidth="3" fill="none" />
      <g fill="currentColor">
        <path d="M51 22Q34 8 22 18Q36 22 51 30Z" />
        <path d="M50 22Q66 8 78 18Q64 22 50 30Z" />
        <path d="M51 40Q26 24 10 40Q32 42 51 50Z" />
        <path d="M50 40Q74 24 90 40Q68 42 50 50Z" />
        <path d="M52 60Q22 46 2 66Q30 64 52 72Z" />
        <path d="M50 60Q80 46 98 66Q72 64 50 72Z" />
        <path d="M52 82Q22 70 4 92Q30 88 52 94Z" />
        <path d="M50 82Q80 70 96 92Q72 88 50 94Z" />
        <path d="M52 104Q28 96 12 116Q34 110 52 116Z" />
        <path d="M50 104Q74 96 88 116Q68 110 50 116Z" />
      </g>
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 30 30" {...base} {...props}>
      <path
        d="M4 16C8 18 10 21 12 25 15 16 20 9 27 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FlipFlop(props: IconProps) {
  return (
    <svg viewBox="0 0 60 120" {...base} {...props}>
      <path
        d="M30 4C50 4 56 24 54 46 52 66 46 78 46 96 46 110 40 116 30 116 20 116 14 110 14 96 14 78 8 66 6 46 4 24 10 4 30 4Z"
        fill="#f4b23e"
      />
      <path
        d="M30 30L12 58M30 30L48 58"
        stroke="#2e6b4f"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="30" cy="30" r="5" fill="#2e6b4f" />
    </svg>
  );
}

export function Arrow(props: IconProps) {
  return (
    <svg viewBox="0 0 150 80" fill="none" {...base} {...props}>
      <path
        d="M6 6C20 50 70 72 136 58"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M122 48L137 58 123 70"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
