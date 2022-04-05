import React, { useState } from "react";
import Title from "../Title/Title";
import InputPhoto from "../Input/Input";
import ImageGrid from "../ImageGrid/ImageGrid";
import Modal from "../Modal/Modal";
const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const selectedImgHandler = (url) => {
    setSelectedImg(url);
  };
  return (
    <>
      <Title />
      <InputPhoto />
      <ImageGrid onSelectImg={selectedImgHandler} />
      {selectedImg && (
        <Modal url={selectedImg} onSelectImg={selectedImgHandler} />
      )}
    </>
  );
};

export default Home;
