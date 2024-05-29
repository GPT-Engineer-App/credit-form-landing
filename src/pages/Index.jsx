import { Container, VStack, Text, Heading, Input, Button, FormControl, FormLabel, Textarea, Box, IconButton, HStack, Image } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} width="100%">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Obțineți Creditul Dvs
          </Heading>
          <Text fontSize="lg">Completați formularul de mai jos pentru a aplica pentru credit.</Text>
        </Box>

        <Box width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
          <form>
            <VStack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Nume</FormLabel>
                <Input placeholder="Introduceți numele dvs" />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Introduceți email-ul dvs" />
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel>Număr de Telefon</FormLabel>
                <Input type="tel" placeholder="Introduceți numărul dvs de telefon" />
              </FormControl>

              <FormControl id="message">
                <FormLabel>Mesaj</FormLabel>
                <Textarea placeholder="Introduceți mesajul dvs" />
              </FormControl>

              <Button colorScheme="teal" type="submit" width="full">
                Trimite
              </Button>
            </VStack>
          </form>
        </Box>

        <Box textAlign="center" width="100%" p={6} boxShadow="md" borderRadius="md" bg="white">
          <HStack spacing={4} justifyContent="center">
            <Image src="https://images.unsplash.com/photo-1461419912973-9964f1f54b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlYm9vayUyMGNvdmVyfGVufDB8fHx8MTcxNjk3NzEyNXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" objectFit="cover" borderRadius="md" />
            <VStack alignItems="flex-start">
              <Text fontSize="lg" fontWeight="bold">
                Descărcați eBook-ul nostru gratuit
              </Text>
              <Text>Aflați secretele îmbunătățirii scorului dvs de credit cu ghidul nostru cuprinzător.</Text>
              <IconButton aria-label="Descărcați eBook-ul" icon={<FaDownload />} colorScheme="teal" />
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
