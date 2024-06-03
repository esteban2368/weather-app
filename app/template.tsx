'use client'
import { motion } from 'framer-motion'
import { variantsPage } from '@/constant/variantsMotion'

interface props {
    children: React.ReactNode
}

const Template = ({children} : props) =>{
    return (
        <motion.div 
            initial={variantsPage.hidden} 
            animate={variantsPage.visible}
        >
            {children}
        </motion.div>
    )
}
export default Template