'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { variantsPage } from '@/constant/variantsMotion'

interface props {
    children: React.ReactNode
}

const Template = ({children} : props) =>{
    return (
        <AnimatePresence>
            <motion.div 
                variants={variantsPage}
                initial="initial"
                animate="visible"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
export default Template