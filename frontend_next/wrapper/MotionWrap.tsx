'use client';

import { motion } from 'framer-motion';

const MotionWrap = <P extends object>(Component: React.ComponentType<P>, classNames: string) => {
  const WrappedComponent: React.FC<P> = (props) => {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} app__flex`}
      >
        <Component {...props} />
      </motion.div>
    );
  };

  return WrappedComponent;
};

export default MotionWrap;
