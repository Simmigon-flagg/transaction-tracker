import Main from "@/components/main/Main";
import { Box, Container, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Container bg={'gray.50'} maxW={'Container.3xl'} height={'100vh'} p={0}>
      <Flex height={'full'}>
        <Box height={'full'} flex={5} w={['20%', '30%', '20%', '50%', '60%']} >
          <Main />
        </Box>
      </Flex>
    </Container>
  );
}
