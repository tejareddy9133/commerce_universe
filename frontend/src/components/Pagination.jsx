import React from "react";
import { Button, HStack } from "@chakra-ui/react";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <HStack spacing={4} justify="center" mt={4}>
      <Button onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button disabled>{currentPage}</Button>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
