"use client"
import Image from 'next/image'
import Date from './common/Date'
import Temperature from './common/Temperature'
import { motion } from 'framer-motion'
import { variantsPage } from '@/constant/variantsMotion'
import { WeatherResponse } from '@/types/services'
import styles from '@/styles/components/ImageCloud.module.scss'

const ImageCloud = ({info}:
    {info: WeatherResponse
    }) => {
    return (
        <>
            <div className="d-flex justify-c items-c p-relative overflow-h padding-t-10 padding-b-10">
                <motion.div
                    initial={{y: 100, opacity:0}}
                    animate={variantsPage.visible}
                >
                    <Image
                        className="z-10"
                        alt="Shower"
                        src={`${info.weather[0]?.icon}.svg`}
                        width={200}
                        height={200}

                    />
                </motion.div>
                <div className={`${styles.background} row p-absolute center`}>
                <div className="column-6">
                    <motion.div
                        initial={{x: -100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ease: 'easeInOut', duration: .9}}
                    >
                    <Image
                        className="object-cover padding-3 z-1 o-5"
                        alt="background cloud"
                        src="/Cloud-background-left.png"
                        priority
                        width={281}
                        height={326}
                    />
                    </motion.div>
                </div>
                <div className="column-6">
                    <motion.div
                        initial={{x: 100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{ease: 'easeInOut', duration: .9}}
                    >
                        <Image
                        className="object-cover padding-3 z-1 o-5"
                        alt="background cloud"
                        src="/Cloud-background-right.png"
                        priority
                        width={281}
                        height={326}
                        />
                    </motion.div>
                </div>
                </div>
            </div>
            <div className="text-center">
            <div className="color-lila margin-b-6">
                <Temperature value={info.main?.temp}/>
            </div>
            <span className="d-block heading-5 color-gray-light fw-semimed margin-b-8">{info.weather[0]?.main}</span>
            <div className="color-gray heading-4 margin-b-7">
                Today 
                <span className="padding-l-5 padding-r-5">•</span> 
                <Date time={info.dt}/>
            </div>
            <div className="d-flex justify-c items-c fw-semimed color-gray gap-1">
                <span className="material-symbols-outlined md-2 fill">
                    location_on
                </span>
                {info.name}, {info.sys?.country }
            </div>
            </div>
        </>
    )
}

export default ImageCloud