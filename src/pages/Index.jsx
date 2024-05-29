import { Container, VStack, Text, Heading, Input, Button, FormControl, FormLabel, Textarea, Box, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Get Your Credit
          </Heading>
          <Text fontSize="lg">Complete the form below to apply for credit.</Text>
        </Box>

        <Box width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
          <form>
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

              <Button colorScheme="teal" type="submit" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>

        <Box textAlign="center" width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
          <HStack spacing={4} justifyContent="center">
            <Image src="https://images.unsplash.com/photo-1461419912973-9964f1f54b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGNvdmVyfGVufDB8fHx8MTcxNjk3NzEyNXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" objectFit="cover" borderRadius="md" />
            <VStack alignItems="flex-start">
              <Text fontSize="lg" fontWeight="bold">
                Download Our Free eBook
              </Text>
              <Text>Learn the secrets to improving your credit score with our comprehensive guide.</Text>
              <IconButton aria-label="Download eBook" icon={<FaDownload />} colorScheme="teal" />
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
