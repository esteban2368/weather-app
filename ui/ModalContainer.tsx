"use client"
import Modal from "@/components/Modal"
import ListItemsSearch from "@/components/ListItemsSearch"
import { useState } from "react"

import style from "@/styles/search-places/page.module.scss"

interface props {
    children?: React.ReactDOM
}
const ModalContainer = ({children}: props)=> {
    const [visible, setVisible] = useState(true)
    return (
        <Modal visible={visible} offVisible={() => setVisible(false)}></Modal>
    )
}

export default ModalContainer