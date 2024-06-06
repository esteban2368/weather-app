import { Variants } from "framer-motion"

export const variantsPage = {
    hidden: {y: 20, opacity: 0},
    visible: {y:0, opacity: 1}
}

export const variantList: Variants = {
    open: {
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.7,
            delayChildren: 0.3,
            staggerChildren: 0.25
        }
    },
    closed: {
        transition: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        }
    }
}
export const variantListItem: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { 
        opacity: 0, 
        y: 20, 
        transition: { duration: 0.2 } 
    }
} 

export const variantHoverIcon: Variants = {
    initial:{opacity:0, x:-20},
    hover: {
        opacity: 1,
        x: 0
    }
}