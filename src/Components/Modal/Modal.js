import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ url, onSelectImg }) => {
    return (
        <>
            <div
                className='backdrop'
                onClick={() => onSelectImg(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <motion.img
                    src={url}
                    alt='enlarged image'
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                />
            </div>
        </>
    )
}

export default Modal
