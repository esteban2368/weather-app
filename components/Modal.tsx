"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

import style from "@/styles/components/Modal.module.scss"

interface props {
    children: React.ReactNode
}
const Modal = ({children}: props) => {
    const router = useRouter()

    const closeModal = ()=> {
        router.push("/", {
            scroll: false
        })
    }
    return(
        <dialog className={`${style.wrap} bg-secundary`} open>
            <div>
                <div className="d-flex justify-e margin-b-6">
                    <motion.button
                        whileHover={{scale: 1.2}} 
                        role="button"
                        onClick={closeModal} 
                        className="bg-secundary"
                    >
                        <span className="material-symbols-outlined md-2 color-lila">
                            close
                        </span>
                    </motion.button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </dialog>
    )
}
export default Modal