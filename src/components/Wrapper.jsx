import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion'

export const Wrapper = ({fade, type, index, children, className }) => {
  const isMobile = window.innerWidth < 850;
  console.log(isMobile)
  return (
    <>
      {isMobile ? (<div>{children}</div>) : (
        <motion.div className={className} variants={fadeIn(fade, type, index * 0.4, 0.6)}>
            {children}
        </motion.div>
      )}
    </>
  )
}