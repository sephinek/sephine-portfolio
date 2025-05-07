import { useEffect, useState } from 'react';
import { IoCaretUpOutline } from 'react-icons/io5';

export default function ScrollToTop() {
  const [shown, setShown] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const scrollCallback = () => {
      const scrollY = window.scrollY;
      setShown(scrollY > 300);

      const sentinel = document.querySelector('#footer-sentinel');
      if (sentinel) {
        const sentinelRect = sentinel.getBoundingClientRect();
        const offset = window.innerHeight - sentinelRect.top;

        if (offset > 0) {
          setTranslateY(offset);
        } else {
          setTranslateY(0);
        }
      }
    };

    window.addEventListener('scroll', scrollCallback);
    scrollCallback();

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  const handleClick = () => {
    window.lenis?.scrollTo(0);
  };

  return (
    <div className="fixed bottom-8 left-0 right-8 pointer-events-none z-50">
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <IoCaretUpOutline
          onClick={handleClick}
          className={`${
            shown ? 'scale-100' : 'scale-0'
          } text-xl pointer-events-auto cursor-pointer opacity-90 text-darkergrey  hover:text-primary transition-all duration-100 ease-in-out`}
          style={{ transform: `translateY(-${translateY}px)` }}
        />
      </div>
    </div>
  );
}
