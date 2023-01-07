import React from 'react'
import ImageGallery from "react-image-gallery";
import Image1 from "../assets/img/photos/image6.jpg"
import Image5 from "../assets/img/photos/image2.jpg"
export default function MyGallery( props) {

const images = [
    {
      original: props.img, 
      thumbnail: props.img, 
    },
    {
      original: Image1,
      thumbnail: Image1,
    },
    {
      original: Image5,
      thumbnail: Image5,
    },
  ];
  return (
     <ImageGallery items={images} />
  )
}



