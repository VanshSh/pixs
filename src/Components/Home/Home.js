import React, { useState } from "react";
import Title from "../Title/Title";
import InputPhoto from "../Input/Input";
import ImageGrid from "../ImageGrid/ImageGrid";
import Modal from "../Modal/Modal";
import { useUserAuth } from "../../Context/UserAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  
  const logoutHandler = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const selectedImgHandler = (url) => {
    setSelectedImg(url);
  };
  return (
    <>
      <Title />
      <h3 className="logout" onClick={logoutHandler}>
        Logout
      </h3>
      <InputPhoto />
      <ImageGrid onSelectImg={selectedImgHandler} />
      {selectedImg && (
        <Modal url={selectedImg} onSelectImg={selectedImgHandler} />
      )}
    </>
  );
};

export default Home;
