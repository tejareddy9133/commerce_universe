import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Get_Data } from "../Redux/Productsredux/actions";
import { Box, Flex, Heading, Select } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
const Products = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  // const [filter, setFilter] = useState("");
  const filter = searchParams.get("category");
  const sort = searchParams.get("sort");
  const {
    isSucess,
    products: { products, totalProducts, totalPages },
  } = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    dispatch(Get_Data(currentPage, filter, sort));
  }, [currentPage, filter, sort]);
  console.log(filter);

  return (
    <div>
      <Select
        onChange={(e) => setSearchParams({ category: e.target.value })}
        placeholder="Filter By Category"
      >
        <option value="">Reset</option>
        <option value="laptops">laptops</option>
        <option value="smartphones">smartphones</option>
        <option value="womens-dresses">women-Dresses</option>
        <option value="mens-shirts">mens-dresses</option>
        <option value="skin-care">skincare</option>
        <option value="mens-shoes">mens-shoes</option>
        <option value="groceries">Groceries</option>
      </Select>
      <Select
        onChange={(e) => setSearchParams({ sort: e.target.value })}
        placeholder="sort by price"
      >
        <option value="">Reset</option>
        <option value="desc">High to low</option>
        <option value="asc">low to high</option>
      </Select>
      <Heading>Products page</Heading>
      <Box>
        <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
          {products ? (
            products.map((el, ind) => <ProductCard {...el} />)
          ) : (
            <Heading>....Loading</Heading>
          )}
        </Flex>
      </Box>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Products;
