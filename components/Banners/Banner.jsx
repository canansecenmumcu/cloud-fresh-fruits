"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '@/utility/animation'


const Banner = () => {
  return (
    <section className='bg-secondary/10' >
      <div className='container' >
        <div className='grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0 ' >
          {/* Banner Image */}
          <motion.div
          initial={{opacity: 0, scale:0.5}}
          whileInView={{opacity: 1, scale:1}}
          transition={{type:"spring", stiffness:100, dleay:0.2}}
          viewport={{ once: true }}
            className='flex justify-center items-center'
          >
            <Image
              src={'/assets/fruits-splash.png'}
              alt='banner'
              width={1920} height={1080}
              className='w-[300px] md:w-[400px] drop-shadow h-full object-cover '
            />
          </motion.div>

          {/* Brand Info */}
          <div className='flex flex-col justify-center' >
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
              <motion.h1
                variants={FadeUp(0.5)}
                initial='hidden'
                animate='visible'
                viewport={{ once: true }}
                className='text-3xl font-bold lg:text-6xl uppercase' >Band Info</motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial='hidden'
                animate='visible'
                viewport={{ once: true }}
                className='mt-4 text-base ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!

              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial='hidden'
                animate='visible'
                viewport={{ once: true }}
                className='mt-4 text-base ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!
              </motion.p>
              <motion.div
                variants={FadeUp(1.1)}
                initial='hidden'
                animate='visible'
                viewport={{ once: true }}
                className='flex justify-center md:justify-start'
              >
                <button
                  className='primary-btn' >
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner