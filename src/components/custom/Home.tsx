'use client';

// System imports
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/navigation';

// Fonts imports
import { Notable, Tinos } from 'next/font/google';

const notable = Notable({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const tinos = Tinos({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const Home = () => {

  const buttonControls = useAnimation();
  const buttonTextControls = useAnimation();

  const router = useRouter();

  React.useEffect(() => {
    buttonControls.start({
      opacity: 1,
      width: 150,
      height: 45,
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 8,
      paddingBottom: 8,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }
    }).then(() => {
      buttonTextControls.start({
        opacity: 1,
        transition: {
          duration: 0.1,
          ease: 'easeIn',
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }
      });
    });

  }, [buttonControls, buttonTextControls])

  return (
    <React.Fragment>
      <section className=' h-fit w-screen flex flex-col justify-center items-center'>
        <div className=' w-screen flex justify-center items-start gap-20 max-md:gap-8 flex-wrap text-wrap'>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: 0.2,
              type: 'spring',
              stiffness: 120,
              damping: 20
            }}
            className={` text-9xl max-md:text-7xl ${notable.className} text-center tracking-wider pt-6 max-lg:pt-2 max-md:pt-12 text-wrap`}
          >
            Code More, Drift Less.
          </motion.h1>

          <span className=' flex flex-col justify-center items-center gap-4'>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
                delay: 0.4,
                type: 'spring',
                stiffness: 120,
                damping: 20
              }}
              className={`text-xl max-lg:text-base max-md:text-sm font-medium text-center ${tinos.className}`}
            >
              Track your coding time effortlessly.
              <br />
              Unlock deep insights to boost your productivity.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, width: 0, height: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0 }}
              animate={buttonControls}
              className={` w-fit px-6 py-2.5 bg-gray-200 hover:bg-black text-black hover:text-white cursor-pointer rounded-full text-wrap text-center ${tinos.className}`}
              onClick={() => router.push('/login')}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={buttonTextControls}
              >
                Getting Started
              </motion.span>
            </motion.button>
          </span>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home