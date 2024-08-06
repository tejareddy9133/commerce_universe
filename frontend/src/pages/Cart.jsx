import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CartProductcard from "../components/CartProductcard";
import { useSearchParams } from "react-router-dom";
import Pricing from "../components/TotalAmount";
import { Flex } from "@chakra-ui/react";

const Cart = () => {
  const [cartData, setCartdata] = useState([]);
  const [tprice, setPrice] = useState(0);

  useEffect(() => {
    setCartdata(JSON.parse(localStorage.getItem("cart")));
    setPrice(
      cartData.reduce(
        (accumulator, currentItem) => accumulator + currentItem.price,
        0
      )
    );
  }, [cartData]);
  return (
    <div>
      <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
        {cartData.map((el, ind) => {
          return <CartProductcard {...el} />;
        })}
      </Flex>
      <Pricing price={tprice} />
    </div>
  );
};

export default Cart;
