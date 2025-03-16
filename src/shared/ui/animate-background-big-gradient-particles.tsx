import '@/styles/animate-background-particles.css';
import clsx from 'clsx';

export default function AnimateBackgroundBigGradientParticles({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={clsx(className)}>
      <div className="particle-big"></div>
      <div className="particle-big"></div>
    </div>
  );
}
