"use client"
import ListItemsSearch from "./ListItemsSearch"
import { useRef, useEffect, ElementRef} from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { variantModal } from "@/constant/variantsMotion"

import style from "@/styles/components/Modal.module.scss"
import StyleSearchPlaces from "@/styles/search-places/page.module.scss"

interface props {
    children?: React.ReactNode,
    visible: boolean,
    offVisible: () => void
}
const Modal = ({
    children,
    visible,
    offVisible
}: props) => {
    const router = useRouter()
    const pathname = usePathname()
    const refModal = useRef<ElementRef<'dialog'>>(null)

    useEffect(() =>{
        if(!refModal.current?.open){
            refModal.current?.showModal()
        }
        return () => refModal.current?.close()
    }, [])

    const handleFinishAnimation = () => {
        if(!visible){
            router.back()
    }
    }
    return(
        <AnimatePresence onExitComplete={handleFinishAnimation}>
            {visible &&
                <motion.dialog 
                    className={`${style.wrap} bg-secundary`} 
                    ref={refModal}
                    key={pathname}
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    variants={variantModal}
                >
                    <div>
                        <div className="d-flex justify-e margin-b-6">
                            <motion.button
                                whileHover={{scale: 1.2}} 
                                role="button"
                                onClick={offVisible} 
                                className="bg-secundary"
                            >
                                <span className="material-symbols-outlined md-2 color-lila">
                                    close
                                </span>
                            </motion.button>
                        </div>
                        <div>
                            <div className="bg-secundary d-flex flex-col gap-6">
                            <form className="row">
                                <div className="column-9">
                                    <div className={`${StyleSearchPlaces.inputSearch} h-full padding-4 d-flex items-c gap-2`}>
                                        <span className="material-symbols-outlined md-2 ">
                                            search
                                        </span>
                                        <input 
                                            type='text' 
                                            className={`w-full h-full bg-secundary`}
                                            placeholder="search location"
                                        />
                                    </div>
                                </div>
                                <div className="column-3 d-flex justify-e">
                                    <button type="submit" className="button button-purple h-full">
                                        Search
                                    </button>
                                </div>
                            </form>
                            <ListItemsSearch offVisible={offVisible}/>
                            </div>
                        </div>
                    </div>
                </motion.dialog>
            }
        </AnimatePresence>
    )
}
export default Modal