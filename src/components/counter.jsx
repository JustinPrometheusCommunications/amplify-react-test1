import { Button, Box } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleDecrement = () => {
    console.log("Decrement");
    setCounter((prev) => {
      return prev - 1;
    });
  };
  const handleIncrement = () => {
    console.log("Increment");
    setCounter((prev) => {
      return prev + 1;
    });
  };
  const handleReset = () => {
    console.log("Reset");
    setCounter(0);
  };
  return (
    <Box>
      <Button varaint="contained" onClick={handleDecrement}>
        -
      </Button>
      <Box mx={2}>{counter}</Box>
      <Button varaint="contained" onClick={handleIncrement}>
        +
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </Box>
  );
};

export default Counter;
