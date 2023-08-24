import { useState } from "react";
import "./Text.css";

const Text = ({ image }) => {
  const [img_index, setImg_index] = useState(0);
  function prev() {
    setImg_index((e) => (e + 1) % image.length);
  }
  function next() {
    setImg_index((e) => (e - 1 + image.length) % image.length);
  }
  return (
    <>
      <div className="slider">
        <img src={image[img_index]} alt={`slide ${img_index}`} />
        <div className="controls">
          <button onClick={prev}> &lt; Prev</button>
          <button onClick={next}>Next &gt;</button>
        </div>
      </div>
    </>
  );
};
export default Text;
