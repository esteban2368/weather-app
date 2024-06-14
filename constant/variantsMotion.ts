import { Variants } from "framer-motion"
import { exit } from "process"

export const variantsPage = {
    initial: {
        y: 20,
        opacity: 0
    },
    visible: {
        y:0,
        opacity: 1
    },
    exit: {
        x: 100,
        opacity: 0
    }
}
export const variantModal = {
    initial: {
        x:-100, 
        opacity: 0, 
        },
    visible: {
        x:0, 
        opacity: 1,
        transition: {
            dutation: .5
        }
    },
    exit: {
        x: -100, 
        opacity: 0,
        transition: {
            duration: .3
        }
    }
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