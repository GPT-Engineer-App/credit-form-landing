import { Box, HStack, VStack, Text, IconButton } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const DownloadBanner = () => {
  return (
    <Box textAlign="center" width="100%" p={6} boxShadow="md" borderRadius="md" bg="white" mb={8}>
      <HStack spacing={4} justifyContent="center">
        <VStack alignItems="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            Download our free eBook
          </Text>
          <Text>Learn the secrets to improving your credit score with our comprehensive guide.</Text>
          <IconButton aria-label="Download eBook" icon={<FaDownload />} colorScheme="teal" />
        </VStack>
      </HStack>
    </Box>
  );
};

export default DownloadBanner;
