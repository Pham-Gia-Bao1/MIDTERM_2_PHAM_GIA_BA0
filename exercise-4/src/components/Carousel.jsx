import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [index, setIndex] = useState(0);
  const [lengthImage, setLengthImag] = useState(images.length)
  /* You will need to hanle the click on left and right button */

  const handelClickRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % lengthImage);
    // trường hợp ko chia hêt cho độ dài mảng thì lấy số dư làm index
  };

  const handelClickLeft = () => {
    setIndex((prevIndex) => (prevIndex - 1 + lengthImage) % lengthImage);
    // trường hợp index < 0 ( ko tồn tại index ) thì sẽ + với độ dài mảng (9) => -1 + 9 = 8 tiếp túc áp dụng công thức move right
  };
  /* You will need to manage the cases when we are on the last image or first image*/

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handelClickLeft}
      />
      <img src={images[index].src} alt={images[index].alt} className="slide" />
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handelClickRight}
      />
    </div>
  );
};
