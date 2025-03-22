import { AnimationEventHandler, useEffect, useState } from 'react';
import './index.css';

const SmokeItem = ({ delay = 1 }) => {
  const [{ position, duration, isLeft }, setAaa] = useState({
    position: Math.random() * 100,
    duration: Math.random() * 5,
    isLeft: Math.random() > 0.5
  });
  document.querySelector('body')?.animate;
  const handleAniEnd: AnimationEventHandler<HTMLSpanElement> = (e) => {
    console.log('handleAniEnd:', handleAniEnd);
    // setAaa({
    //   position: Math.random() * 50,
    //   duration: Math.random() * 2 + 2,
    //   isLeft: Math.random() > 0.5
    // });
  };

  useEffect(() => {
    return () => {
      console.log('useEffect:--------------------');
    };
  }, []);

  if (isLeft) {
    return (
      <span
        className="ani"
        style={{ animationDelay: delay * 100 + 'ms', left: position + 'px' }}
        onAnimationEnd={handleAniEnd}
      />
    );
  }

  return (
    <span
      className="ani2"
      style={{ animationDelay: delay * 50 + 'ms', left: position + 'px' }}
      onAnimationEnd={handleAniEnd}
    />
  );
};
function Smoke() {
  const [list, setList] = useState<number[]>([]);
  useEffect(() => {
    // const t = setInterval(() => {
    //   setList((list) => [...list, Date.now()]);
    // }, 100);
    // return () => {
    //   clearInterval(t);
    // };
  }, []);
  return (
    <div className="relative flex items-center h-full">
      <div className="smoke">
        {new Array(300).fill(0).map((item, i) => (
          <SmokeItem key={i} delay={i} />
        ))}
      </div>
    </div>
  );
}

export default Smoke;
