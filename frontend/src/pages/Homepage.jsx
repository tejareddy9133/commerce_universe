import React from "react";
import CarouselHome from "../components/CarouselHome";
import { Heading } from "@chakra-ui/react";
import Responsive from "../components/Smallslider";

const Homepage = () => {
  return (
    <div>
      <CarouselHome />
      <br />
      <Heading>Collections</Heading>
      <br />
      <Responsive />
      <br />
    </div>
  );
};

export default Homepage;
