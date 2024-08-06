"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

export default function CartProductcard({
  thumbnail,
  brand,
  title,
  price,
  _id,
}) {
  const toast = useToast();
  const [id, setid] = useSearchParams({});

  const removeProduct = (id) => {
    setid({ id: id });
    // Retrieve the existing cart items from local storage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Add the new item to the cart
    const updatedCart = existingCart.filter((el, ind) => id != el._id);
    // Store the updated cart back in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show a success toast message
    toast({
      title: "removed from cart.",
      description: "We have removed this item successfully from the cart.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={thumbnail}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {brand}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              {price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              $199
            </Text>
            <Button bg={"tomato"}>Buy Now</Button>
            <Button onClick={() => removeProduct(_id)}>Remove</Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
