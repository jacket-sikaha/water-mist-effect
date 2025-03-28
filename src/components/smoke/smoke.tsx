import { useEffect, useRef } from 'react';
import './index.css';

const SmokeItem = ({ delay = 1 }) => {
  console.log('SmokeItem:');
  const span = useRef<HTMLSpanElement>(null);
  const { position, left } = {
    position: Math.random() * 100 - 100,
    left: Math.random() * 30
  };
  const smokeAni = [
    {
      filter: `blur(0)`,
      opacity: 0
    },
    {
      filter: `blur(6px)`,
      opacity: 0,
      transform: `translate(${0}px, -30px) scale(1)`
    },
    {
      filter: `blur(4px)`,
      opacity: 0.8,
      transform: `translate(${position / 2}px, -200px) scale(1) rotate(360deg)`
    },
    {
      filter: `blur(4px)`,
      opacity: 0,
      transform: `translate(${position + 40}px, -300px) scale(2) rotate(360deg)`
    }
  ];

  const aniOpt = {
    duration: 3000,
    iterations: Infinity
  };

  useEffect(() => {
    const t = setTimeout(() => {
      span.current?.animate(smokeAni, aniOpt);
    }, delay * 100);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return <span ref={span} style={{ left: left + 'px' }} />;
};
function Smoke() {
  return (
    <div className="relative flex items-center h-full">
      <div className="smoke">
        {new Array(500).fill(0).map((_, i) => (
          <SmokeItem key={i} delay={i} />
        ))}
      </div>
    </div>
  );
}

export default Smoke;
