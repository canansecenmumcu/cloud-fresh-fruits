"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeRight, FadeLeft } from '@/utility/animation'
/* import {fFruit1} from '/assets/fruits/apple.png' */

const MenusData = [
    {
        id: 1,
        title: 'Fresh Red Apples',
        link: 'apple.png',
        price: "$3.99",
        img: "Fruit1",
        delay: "0.3"

    },
    {
        id: 2,
        title: 'Fresh Oranges',
        link: 'orange.png',
        price: "$4.99",
        delay: "0.6"

    },
    {
        id: 3,
        title: 'Fresh Avocado',
        link: 'avocado.png',
        price: "$5.99",
        delay: "0.9"

    },
    {
        id: 4,
        title: 'Fresh Cherries',
        link: 'cherry.png',
        price: "$2.99",
        delay: "1.2"

    },
]

const Menus = () => {
    return (
        <section>
            <div className='container pt-12 pb-20' >
                <motion.h1
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className='pb-10 text-2xl font-bold uppercase text-left ' >Our Menu</motion.h1>
                {/* menus */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ' >
                    {MenusData.map((item) => (
                        <motion.div
                            variants={FadeLeft(item.delay)}
                            initial='hidden'
                            animate='visible'
                            key={item.id} className='bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] px-4 py-2 flex flex-row justify-around items-center gap-3 ' >
                            <Image
                                src={`/assets/fruits/${item.link}`}
                                alt='fruits'
                                width={60}
                                height={60}
                                className='w-[60px] mb-4 scale-125 transform -translate-y-6 '
                            />
                            <div className='flex flex-col items-start ' >
                                <h1 className='text-lg font-semibold' >{item.title}</h1>
                                <p className='text-lg font-semibold text-secondary' > {item.price} </p>
                            </div>
                        </motion.div>
                    )

                    )
                    }


                </div>

            </div>
        </section>
    )
}

export default Menus