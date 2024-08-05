import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_Data } from "../Redux/Productsredux/actions";
import { Box, Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
const Products = () => {
  const dispatch = useDispatch();
  const {
    isSucess,
    products: { products },
  } = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    dispatch(Get_Data());
  }, []);
  console.log(products);
  return (
    <div>
      <Heading>Products page</Heading>
      <Box>
        {products ? (
          products.map((el, ind) => <ProductCard {...el} />)
        ) : (
          <Heading>....Loading</Heading>
        )}
      </Box>
    </div>
  );
};

export default Products;
