import '@/styles/animate-waves.css';
import clsx from 'clsx';

export default function AnimateWaves({ className }: { className?: string }) {
  return (
    <svg
      className={clsx('animate-waves-svg', className)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="animate-waves-svg-parallax">
        <use className="fill-primary" xlinkHref="#gentle-wave" x="50" y="0" />
        <use className="fill-secondary" xlinkHref="#gentle-wave" x="50" y="3" />
        <use
          className="fill-background"
          xlinkHref="#gentle-wave"
          x="50"
          y="8"
        />
      </g>
    </svg>
  );
}
