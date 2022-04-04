import React from 'react'
import useFirestore from '../../Hooks/useFirestore'
import { motion } from 'framer-motion'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const ImageGrid = ({ onSelectImg }) => {
    const { docs } = useFirestore('images')

    return (
        <>
        div.
            <ImageList
                sx={{ width: 500, height: 450 }}
                cols={3}
                rowHeight={164}
                gap={8}
                variant='quilted'
            >
                {docs.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            onClick={() => onSelectImg(item.url)}
                            src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.url}
                            sc
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}

export default ImageGrid
