import InputPhoto from "./Components/Input/Input";
import Title from "./Components/Title/Title";
import ImageGrid from "./Components/ImageGrid/ImageGrid";
import Modal from "./Components/Modal/Modal";
import { useState } from "react";
import "./index.css";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  const selectedImgHandler = (url) => {
    setSelectedImg(url);
  };

  return (
    <div className="App">
      <Title />
      <InputPhoto />
      <ImageGrid onSelectImg={selectedImgHandler} />
      {selectedImg && (
        <Modal url={selectedImg} onSelectImg={selectedImgHandler} />
      )}
    </div>
  );
}

export default App;
