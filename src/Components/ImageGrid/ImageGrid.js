import React from 'react'
import useFirestore from '../../Hooks/useFirestore'
import { motion } from 'framer-motion'

const ImageGrid = ({ onSelectImg }) => {
    const { docs } = useFirestore('images')

    return (
        <>
            <div className='img-grid'>
                {docs &&
                    docs.map((doc) => (
                        <motion.div
                            layout
                            className='img-wrap'
                            whileHover={{ opacity: 1 }}
                        >
                            <img
                                onClick={() => onSelectImg(doc.url)}
                                key={doc.id}
                                src={doc.url}
                                alt='uploaded'
                            />
                        </motion.div>
                    ))}
            </div>
        </>
    )
}

export default ImageGrid
