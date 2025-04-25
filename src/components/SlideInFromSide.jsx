import { useEffect, useRef } from 'react';
import { motion, useAnimate, useInView } from 'motion/react';

export default function SlideInFromSide({ children, directionFrom = 'left' }) {
  const ref = useRef(null);
  const [scope, animate] = useAnimate();
  const isInView = useInView(ref, { once: true, margin: '-300px' });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { x: 0, opacity: 1 },
        { type: 'spring', stiffness: 50, damping: 16, mass: 0.5, delay: 0.1 }
      );
    }
  }, [isInView, animate, scope]);

  const initialX = directionFrom === 'left' ? '-80%' : '80%';

  return (
    <motion.div ref={ref} className="w-full">
      <motion.div ref={scope} initial={{ x: initialX, opacity: 0 }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
