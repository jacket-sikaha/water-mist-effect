import { useEffect } from 'react';
import './index.css';

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
