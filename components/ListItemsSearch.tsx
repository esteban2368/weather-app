'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { variantList, variantListItem } from "@/constant/variantsMotion"
import style from "@/styles/components/ListItemsSearch.module.scss"

const ListItemsSearch = () =>{
    return (
        <motion.ul 
            initial="closed"
            animate="open"
            variants={variantList}
            className={style.list}>
            <motion.li
                variants={variantListItem}
            >
                <Link href="/" className="color-lila d-flex items-c justify-sb">
                    London
                    <span className="material-symbols-outlined md-1 color-gray">
                        chevron_right
                    </span>
                </Link>
            </motion.li>
            <motion.li
                variants={variantListItem}
            >
                <Link href="/" className="color-lila d-flex items-c justify-sb">
                    Barcelona
                    <span className="material-symbols-outlined md-1 color-gray">
                        chevron_right
                    </span>
                </Link>
            </motion.li>
            <motion.li
                variants={variantListItem}
            >
                <Link href="/" className="color-lila d-flex items-c justify-sb">
                    Bogotá
                    <span className="material-symbols-outlined md-1 color-gray">
                        chevron_right
                    </span>
                </Link>
            </motion.li>
        </motion.ul>
    )
}

export default ListItemsSearch