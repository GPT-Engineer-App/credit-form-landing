import { Container, VStack, Text, Heading, Input, Button, FormControl, FormLabel, Textarea, Box, IconButton, HStack } from "@chakra-ui/react";
import { useState } from "react";
import SecondStepForm from "../components/SecondStepForm";
import { FaDownload } from "react-icons/fa";
import DownloadBanner from "../components/DownloadBanner";

const Index = () => {
  const [step, setStep] = useState(1);

  const handleFirstStepSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Get Your Credit
          </Heading>
          <Text fontSize="lg">Fill out the form below to apply for credit.</Text>
        </Box>

        <HStack spacing={4} width="100%" alignItems="flex-start">
          <DownloadBanner />
          {step === 1 ? (
            <Box width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
              <form onSubmit={handleFirstStepSubmit}>
                <VStack spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter your name" />
                  </FormControl>

                  <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                  </FormControl>

                  <FormControl id="phone" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="tel" placeholder="Enter your phone number" />
                  </FormControl>

                  <FormControl id="message">
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Enter your message" />
                  </FormControl>

                  <Button colorScheme="teal" type="submit" width="full" mt={4}>
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          ) : (
            <SecondStepForm setStep={setStep} />
          )}
          <DownloadBanner />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
