"use client"
import { motion } from "framer-motion"
import style from '@/styles/HomePage.module.scss'

interface props {
    degree: number
}
const WindDegree = ({
    degree
}: props) => {
    return (
        <motion.span 
            className={`${style.shape} d-flex items-c justify-c rounded-full bg-gray`}
            initial={{rotate: -45}}
            animate={{rotate: -45 + degree, transition: {duration: 1}}}
        >
            <span className="material-symbols-outlined color-lila md-05 fill">
                near_me
            </span>
        </motion.span>
    )
}

export default WindDegree