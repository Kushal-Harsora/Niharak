'use client';

// System imports
import React from 'react'
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion'
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Fonts imports
import { Notable, Tinos } from 'next/font/google';

// Register Plugin for use
gsap.registerPlugin(useGSAP);

const notable = Notable({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal']
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

  const cursor = React.useRef<HTMLDivElement | null>(null);
  const container = React.useRef<HTMLElement | null>(null);
  const header = React.useRef<HTMLHeadingElement | null>(null);
  const gettingStartedButton = React.useRef<HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 500, damping: 20 });
  const springY = useSpring(y, { stiffness: 500, damping: 20 });

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

  }, [buttonControls, buttonTextControls]);

  useGSAP(() => {
    const element = container.current || window;
    const hoverElement = header.current;
    const secondHover = gettingStartedButton.current;
    let isHovered = false;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      gsap.to(cursor.current, {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      if (isHovered) return;
      isHovered = true;
      cursor.current?.classList.add('mix-blend-difference');
      gsap.to(cursor.current, {
        scale: 10,
        backgroundColor: '#fff',
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const handleMouseEnterSecond = () => {
      if (isHovered) return;
      isHovered = true;

      cursor.current?.classList.add('mix-blend-difference');

      gsap.to(cursor.current, {
        scale: 3,
        backgroundColor: '#fff',
        duration: 0.25,
        ease: "power3.out",
      });

    };


    const handleMouseLeave = () => {
      if (!isHovered) return;
      isHovered = false;
      cursor.current?.classList.remove('mix-blend-difference');
      gsap.to(cursor.current, {
        scale: 1,
        backgroundColor: '#000',
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const handleMouseLeaveSecond = () => {
      if (!isHovered) return;
      isHovered = false;
      cursor.current?.classList.remove('mix-blend-difference');
      gsap.to(cursor.current, {
        scale: 1,
        backgroundColor: '#000',
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    hoverElement?.addEventListener('mouseenter', handleMouseEnter);
    hoverElement?.addEventListener('mouseleave', handleMouseLeave);

    secondHover?.addEventListener("mouseenter", handleMouseEnterSecond);
    secondHover?.addEventListener("mouseleave", handleMouseLeaveSecond);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      hoverElement?.removeEventListener('mouseenter', handleMouseEnter);
      hoverElement?.removeEventListener('mouseleave', handleMouseLeave);

      secondHover?.removeEventListener('mouseenter', handleMouseEnterSecond);
      secondHover?.removeEventListener('mouseleave', handleMouseLeaveSecond);
    };
  }, { scope: container });

  const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
    const rect = gettingStartedButton.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    x.set(deltaX * 0.2);
    y.set(deltaY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <React.Fragment>
      <section 
        ref={container}
        className=' w-screen flex flex-col justify-center items-center'
        style={{ height: 'calc(100vh - 75px)'}}
      >

        <div ref={cursor} className=' w-10 h-10 absolute top-0 left-0 rounded-full pointer-events-none z-50 max-lg:hidden'></div>

        <div
          className=' w-fit flex justify-center items-start gap-20 max-md:gap-8 flex-wrap text-wrap'
        >
          <div
            className=' overflow-hidden w-fit h-fit pb-6 cursor-none'
            ref={header}
          >
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
              className={` pointer-events-none lg:text-[150px] lg:leading-32 max-lg:text-8xl font-bold max-md:text-7xl ${notable.className} text-center tracking-wide text-wrap w-full`}
            >
              Code More, Drift Less.
            </motion.h1>
          </div>

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
              ref={gettingStartedButton}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
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