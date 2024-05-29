import { VStack, FormControl, FormLabel, Input, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, HStack } from "@chakra-ui/react";
import { useState } from "react";

const SecondStepForm = ({ setStep }) => {
  const [amount, setAmount] = useState(0);

  const handleSecondStepSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
      <form onSubmit={handleSecondStepSubmit}>
        <VStack spacing={4}>
          <FormControl id="cnp" isRequired>
            <FormLabel>CNP</FormLabel>
            <Input placeholder="Enter your CNP" />
          </FormControl>

          <FormControl id="amount" isRequired>
            <FormLabel>Amount</FormLabel>
            <Slider defaultValue={0} min={0} max={10000} step={100} onChange={(val) => setAmount(val)}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Box mt={2}>Selected Amount: {amount}</Box>
          </FormControl>

          <FormControl id="reason" isRequired>
            <FormLabel>Reason</FormLabel>
            <Input placeholder="Enter the reason" />
          </FormControl>

          <HStack width="full" mt={4}>
            <Button colorScheme="gray" onClick={() => setStep(1)} width="full">
              Back
            </Button>
            <Button colorScheme="teal" type="submit" width="full">
              Submit
            </Button>
          </HStack>
        </VStack>
      </form>
    </Box>
  );
};

export default SecondStepForm;
