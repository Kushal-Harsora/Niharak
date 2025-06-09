'use client';

// System imports
import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from "motion/react"


// Component imports

// Style imports
import '@/styles/Navbar.css';
import { AlignJustify } from 'lucide-react';

const Navbar = () => {

  const title = 'Niharak';

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
      <nav className=' h-[100px] w-screen'>
        <ul className="h-[80px] w-screen flex flex-row max-md:flex-row-reverse items-center justify-between px-12">
          <li className="flex-1 max-md:hidden">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 150,
                duration: 0.4
              }}
              className="text-lg bg-black hover:bg-gray-200 text-white hover:text-black nav-items cursor-pointer px-4 py-2 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Menu
            </motion.button>
          </li>

          <li className="flex md:hidden">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 150,
                duration: 0.4
              }}
              className="text-base bg-black hover:bg-gray-200 text-white hover:text-black nav-items cursor-pointer py-1 px-1 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <AlignJustify />
            </motion.button>
          </li>


          <li className="flex md:flex-1 justify-center">
            <Link href="/" className="text-4xl font-normal heading">
              {title.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    duration: 0.4,
                  }}
                  className="inline-block text-center"
                >
                  {letter}
                </motion.span>
              ))}
            </Link>
          </li>

          <li className="w-full flex-1 flex items-start justify-end pr-20 max-md:hidden">
            <div className="relative flex items-start">
              <Link href="/login">
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 150,
                    duration: 0.4
                  }}
                  className="z-10 bg-black hover:bg-gray-200 text-white hover:text-black  pl-8 pr-12 py-2.5 rounded-full font-medium text-base relative cursor-pointer nav-items"
                >
                  <span className="inline-block">Log</span> <span className="inline-block">in</span>
                </motion.button>
              </Link>

              <Link href="/signup">
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    stiffness: 120,
                    duration: 0.4
                  }}
                  className="z-20 w-[110%] bg-gray-200 hover:bg-black text-black hover:text-white px-6 py-2.5 rounded-full font-medium text-base absolute left-0 translate-x-[60%] cursor-pointer nav-items"
                >
                  <span className="inline-block">Sign</span> <span className="inline-block">up</span>
                </motion.button>
              </Link>
            </div>
          </li>

        </ul>

        <AnimatePresence mode='sync'>
          {menuOpen && (
            <motion.div
              key="menu"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20, transition: { visualDuration: 0.05, ease: "easeOut", } }}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
              className="fixed inset-0 bg-green-600 text-white z-20 overflow-y-auto"
            >
              <div className="flex justify-end p-6">
                <motion.button
                  className="text-lg font-medium px-6 py-2 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Close
                </motion.button>
              </div>

              <motion.ul className="flex flex-col items-center gap-6 mt-12 max-md:hidden">
                {[["Home", "/"], ["About", "/about"], ["Contact", "/contact"]].map(
                  ([name, path], index) => (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                      whileHover={{
                        scale: 1.1,
                        color: "#000",
                        transition: { duration: 0.2, ease: "easeInOut" },
                      }}
                      transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100,
                        duration: 0.4,
                      }}
                      className="text-9xl max-md:text-7xl font-bold uppercase tracking-wide menu-items"
                    >
                      <Link href={path} onClick={() => setMenuOpen(false)}>
                        <span className="cursor-pointer inline-block">
                          {name.split("").map((letter, i) => (
                            <motion.span
                              key={i}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                              }}
                              className="inline-block mx-[2px]"
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </span>
                      </Link>
                    </motion.li>
                  )
                )}
              </motion.ul>

              <motion.ul className="flex flex-col items-center gap-6 mt-12 md:hidden">
                {[["Home", "/"], ["About", "/about"], ["Contact", "/contact"], ["Login", "/login"], ["Sign Up", "/signup"]].map(
                  ([name, path], index) => (
                    <motion.li
                      key={name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                      transition={{
                        delay: index * 0.15,
                        type: "spring",
                        stiffness: 100,
                        duration: 0.4,
                      }}
                      className="text-6xl font-bold uppercase tracking-wide menu-items"
                    >
                      <Link href={path} onClick={() => setMenuOpen(false)}>
                        <span className="cursor-pointer inline-block">
                          {name.split("").map((letter, i) => (
                            <motion.span
                              key={i}
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{
                                delay: i * 0.1,
                                type: "spring",
                                stiffness: 100,
                                duration: 0.5,
                              }}
                              className="inline-block"
                            >
                              {letter}
                            </motion.span>
                          ))}
                        </span>
                      </Link>
                    </motion.li>
                  )
                )}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </React.Fragment>
  )
}

export default Navbar