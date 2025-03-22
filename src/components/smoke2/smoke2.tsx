import { AnimationEventHandler, useEffect, useState } from 'react';
import './index.css';

const SmokeItem = () => {
  const [{ position, duration, isLeft }, setAaa] = useState({
    position: Math.random() * 50,
    duration: Math.random() * 5,
    isLeft: Math.random() > 0.5
  });

  const handleAniEnd: AnimationEventHandler<HTMLSpanElement> = (e) => {
    console.log('handleAniEnd:', handleAniEnd);
    setAaa({
      position: Math.random() * 50,
      duration: Math.random() * 2 + 2,
      isLeft: Math.random() > 0.5
    });
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
        style={{ animationDuration: duration + 's', left: position + 'px' }}
        onAnimationEnd={handleAniEnd}
      />
    );
  }

  return (
    <span
      className="ani2"
      style={{ animationDuration: duration + 'ms', left: position + 'px' }}
      onAnimationEnd={handleAniEnd}
    />
  );
};
function Smoke2() {
  useEffect(() => {
    const ele = document.querySelector('.smoke');
    const first = (e) => {
      const tmp = document.createElement('span');
      tmp.classList.add(Math.random() > 0.5 ? 'ani' : 'ani2');
      tmp.style.left = Math.random() * 100 + 'px';
      tmp.onanimationend = function () {
        console.log('onanimationend:', onanimationend);
        e.removeChild(tmp);
      };
      e.appendChild(tmp);
    };

    const t = setInterval(() => {
      first(ele);
    }, 100);
    return () => {
      clearInterval(t);
    };
  }, []);
  return (
    <div className="relative flex items-center h-full">
      <div className="smoke"></div>

      <span className="c text-4xl">C</span>
    </div>
  );
}

export default Smoke2;
