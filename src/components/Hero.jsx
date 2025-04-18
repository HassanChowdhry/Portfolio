import { useEffect, useRef } from 'react';
import { styles } from '../style';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import QuickLinks from './QuickLinks';
import lottie from 'lottie-web';

const Hero = () => {
  const name = "Bilal".split('');
  const intro = "Hi I'm ".split('')
  const bio = "Experienced software engineer and mountaineering enthusiast.".split('');
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/pc.json',
      });
      
      return () => animation.destroy();
    }
}, []);
  return (
    <section className='w-full h-screen m-auto flex-1 item-center'>
      <div 
        className={`${styles.paddingX}
        mx-auto flex flex-row items-start gap-5 pt-4`}>
        
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

        <section className='flex flex-col md:gap-y-40 gap-y-20'>
          <motion.div>
            <h1 className={`${styles.heroHeadText}`}>
              {intro.map((c, i) => <motion.span variants={fadeIn("right", "tween", i*0.3, 0.7)} className='letters' key={i}>{c}</motion.span>)}
              <span className='text-[#915eff]'>
                {name.map((c, i) => <motion.span variants={fadeIn("right", "tween",(i+intro.length)*0.3, 0.7)} className='name' key={i}>{c}</motion.span>)}
              </span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              {bio.map((c, i) => <motion.span variants={fadeIn("right", "tween", i*0.08, 0.1)} className={`letters`} key={i}>{c}</motion.span>)}
            </p>
          </motion.div>

          <QuickLinks />
        </section>
      </div>
      <div ref={ref} className='flex m-auto md:w-2/4 w-5/6' />
    </section>
  )
}

export default SectionWrapper(Hero, "hero");