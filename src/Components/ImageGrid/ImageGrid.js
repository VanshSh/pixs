import React from "react";
import useFirestore from "../../Hooks/useFirestore";
import { motion } from "framer-motion";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ImageGrid = ({ onSelectImg }) => {
  const { docs } = useFirestore("images");

  return (
    <>
      <motion.div className="img_grid" layout>
        <ImageList
          sx={{ width: "90%" }}
          cols={3}
          rowHeight={164}
          gap={15}
          variant="quilted"
        >
          {docs.map((item) => (
            <ImageListItem key={item.id}>
              <img
                className="images"
                onClick={() => onSelectImg(item.url)}
                src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.url}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </motion.div>
    </>
  );
};

export default ImageGrid;
