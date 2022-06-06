import React from "react";
import { Box } from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";
export default function Slide(){
  return (
    <div>
      <Box
        bg="white"
        border="1px solid black"
        justifyContent="space-around"
        w="80%"
        margin="auto"
        display="flex"
        p={4}
        color="black"
        fontSize="20px"
      >
        <div>
          <h3>Logo</h3>
        </div>
        <div>
          <h3>Inspiration</h3>
        </div>
        <div>
          <h3>Find Work</h3>
        </div>
        <div>
          <h3>Learn Design</h3>
        </div>
        <div>
          <h3>Hire Designers</h3>
        </div>
        <div>
          <h3>Sign In</h3>
        </div>
        <div>
          <Button colorScheme="blue">Sign UP</Button>
        </div>
      </Box>
    </div>
  );
};
