// Wavy section divider. `fill` should match the colour of the section BELOW.
export function Wave({
  fill = "#f8f7fa",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div className={`${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block h-8 w-full sm:h-12"
      >
        <path
          d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,24 L1440,64 L0,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
