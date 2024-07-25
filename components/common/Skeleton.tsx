import { motion } from "framer-motion"
import { variantSkeleton } from "@/constant/variantsMotion"

import style from "@/styles/components/common/Skeleton.module.scss"

interface props {
    width: number | string,
    height: number,
    classStyle?: string
}
const Skeleton = ({
    width,
    height,
    classStyle
}: props) => {
    return (
        <motion.div
            initial="in"
            animate="out"
            variants={variantSkeleton}
            style={{
                width,
                height
            }}
            className={`${style.wrap} ${classStyle}`}
        ></motion.div>
    )   
}

export default Skeleton