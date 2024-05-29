import { Box, HStack, VStack, Text, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const DownloadBanner = () => {
  return (
    <Box textAlign="center" width="100%" p={6} boxShadow="md" borderRadius="md" bg="white" mb={8}>
      <HStack spacing={4} justifyContent="center">
        <VStack alignItems="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            Descărcați eBook-ul nostru gratuit
          </Text>
          <Text>Aflați secretele îmbunătățirii scorului dvs de credit cu ghidul nostru cuprinzător.</Text>
          <IconButton aria-label="Descărcați eBook-ul" icon={<FaDownload />} colorScheme="teal" />
        </VStack>
      </HStack>
    </Box>
  );
};

export default DownloadBanner;
