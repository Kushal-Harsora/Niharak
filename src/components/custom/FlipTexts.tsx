import React from 'react'
import { motion } from 'framer-motion'

interface FlipTextsProps {
    text: string,
    href: string
}

const FlipTexts: React.FC<FlipTextsProps> = ({ text, href }) => {
  return (
    <React.Fragment>
        <motion.a
            initial="initial"
            whileHover="hover"
            href={href}
            className=' relative block overflow-hidden max-md:text-5xl max-lg:text-7xl text-[175px] lg:leading-48 whitespace-nowrap uppercase'
        >
            <div
                className=' cursor-pointer w-fit'
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            initial: { y: 0 },
                            hover: { y: "-100%" }
                        }}
                        transition={{
                            delay: index * 0.02,
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                            duration: 0.4
                        }}
                        className=' inline-block'
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            <div
                className=' absolute inset-0 cursor-pointer w-fit'
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            initial: { y: "100%" },
                            hover: { y: 0 }
                        }}
                        transition={{
                            delay: index * 0.02,
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                            duration: 0.4
                        }}
                        className=' inline-block'
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </motion.a>
    </React.Fragment>
  )
}

export default FlipTexts