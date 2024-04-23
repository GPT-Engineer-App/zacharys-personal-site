import { Box, Flex, Heading, Text, Button, Image, Link, VStack, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" p={5}>
      <Box textAlign="center" py={10} px={6}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585075563679-21b93970bb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxaYWNoYXJ5JTIwVGF5bG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzODQwMTIzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Zachary Taylor" mb={4} />
        <Heading as="h2" size="xl" fontWeight="bold" color="primary.800">
          Zachary Taylor
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Software Developer | Tech Enthusiast | Open Source Contributor
        </Text>
      </Box>

      <VStack spacing={4} marginBottom={5}>
        <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="solid">
          <Link href="https://www.linkedin.com/in/zacharytaylor" isExternal>
            LinkedIn
          </Link>
        </Button>
        <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="solid">
          <Link href="https://github.com/zacharytaylor" isExternal>
            GitHub
          </Link>
        </Button>
        <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal" variant="solid">
          <Link href="mailto:zachary.taylor@example.com" isExternal>
            Email Me
          </Link>
        </Button>
      </VStack>

      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl">About Me</Heading>
        <Text mt={4}>I am a passionate software developer with a focus on creating impactful and efficient solutions using modern technology. With a background in computer science and several years of experience in the tech industry, I have developed a strong skill set in software development, including expertise in React, Node.js, and cloud services. I am always eager to learn new technologies and take on challenging projects.</Text>
      </Box>
    </Flex>
  );
};

export default Index;
