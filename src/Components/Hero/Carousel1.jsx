import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeLayout1 from './HomeLayout1';


// Define the responsive object inside the component
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Carousel1 = () => {
  return (
    <Carousel responsive={responsive}>
      <div><HomeLayout1 /></div>
      <div><HomeLayout1 /></div>
      <div><HomeLayout1 /></div>
      <div><HomeLayout1 /></div>
    </Carousel>
  );
};

export default Carousel1;