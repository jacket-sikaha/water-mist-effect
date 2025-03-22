import { useEffect, useRef, useState } from 'react';
import './index.css';

const SmokeItem = ({ delay = 1 }) => {
  console.log('SmokeItem:');
  const span = useRef<HTMLSpanElement>(null);
  const [{ position, left, isLeft }, setAaa] = useState({
    position: Math.random() * 100 - 100,
    left: Math.random() * 30,
    duration: Math.random() * 5,
    isLeft: Math.random() > 0.5
  });
  const newspaperSpinning = [
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

  const newspaperTiming = {
    duration: 3000,
    iterations: Infinity
  };

  useEffect(() => {
    const t = setTimeout(() => {
      span.current?.animate(newspaperSpinning, newspaperTiming);
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
        {new Array(500).fill(0).map((item, i) => (
          <SmokeItem key={i} delay={i} />
        ))}
      </div>
    </div>
  );
}

export default Smoke;
