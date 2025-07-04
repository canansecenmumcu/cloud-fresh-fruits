"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeUp } from '@/utility/animation'

const Banner2 = () => {
    return (
        <section className='' >
                <div className='container grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0 ' >
                    {/* Brand Info */}
                    <div className='flex flex-col justify-center' >
                        <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
                            <motion.h1
                                variants={FadeUp(0.5)}
                                initial='hidden'
                                animate='visible'
                                viewport={{ once: true }}
                                className='text-3xl font-bold lg:text-6xl uppercase' >Online fruit store</motion.h1>
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
                                className='flex justify-center md:justify-start'>
                                <button
                                    className='primary-btn' >
                                    Dowload the app
                                </button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Banner Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex justify-center items-center'
                    >
                        <Image
                            src={'/assets/fruit-plate2.png'}
                            alt='banner'
                            width={1920} height={1080}
                            className='w-[350px] md:w-[500px] drop-shadow h-full object-cover '
                        />
                    </motion.div>
                </div>
        </section>
    )
}

export default Banner2