import { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'motion/react';

export default function SlideInFromBottom({ children }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, y: 0 },
        { ease: 'easeOut', duration: 0.75 }
      );
    }
  }, [animate, isInView, scope]);

  return (
    <motion.div ref={scope} initial={{ opacity: 0, y: 150 }}>
      {children}
    </motion.div>
  );
}
