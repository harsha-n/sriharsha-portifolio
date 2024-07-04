import {
  VStack,
  Heading,
  Text,
  Box,
  Image,
  Flex,
  SimpleGrid,
  GridItem,
  Center,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBook, FaCode } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const About = () => {
  const imageSize = useBreakpointValue({ base: "200px", md: "250px" });
  const flexDirection = useBreakpointValue({ base: "column", md: "row" }) as
    | "column"
    | "row";
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Center w="full" minH="100vh" color="white" p={4} py={8}>
      <VStack spacing={8} align="center" w="full" maxW="4xl" mx="auto">
        <Heading as="h2" size="2xl" textAlign="center" mb={8}>
          About Me
        </Heading>
        <Flex
          direction={flexDirection}
          align="center"
          justify="center"
          w="full"
          wrap="wrap"
        >
          <MotionBox
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 1, rotate: -15 }}
            whileHover={{ rotate: 0 }}
            whileFocus={{ rotate: 0 }}
            transition={{ duration: 0.9 }}
            flex={1}
            mr={[0, 0, 8]}
            mb={[8, 8, 0]}
            p={4}
            borderRadius="md"
            minW={["200px", "250px", "360px"]}
            maxW={["200px", "250px", "360px"]}
          >
            <MotionImage
              src="/images/profile_2.jpg"
              alt="Profile Picture"
              borderRadius="md"
              boxSize={imageSize}
              objectFit="cover"
            />
          </MotionBox>
          <VStack flex={3} align="stretch" m={[4, 6, 10]} spacing={4}>
            <SimpleGrid
              columns={gridColumns}
              spacing={4}
              mb={8}
              textAlign="center"
            >
              {[
                {
                  icon: FaGraduationCap,
                  title: "Degree",
                  content: [
                    "MSc.(Hons) Mathematics",
                    "Birla Institute of Science and Technology, Pilani",
                  ],
                },
                {
                  icon: FaBook,
                  title: "Current Position",
                  content: ["Lead Developer"],
                },
                {
                  icon: FaCode,
                  title: "Domains",
                  content: ["Web Development", "Mobile Applications"],
                },
              ].map((item, index) => (
                <GridItem key={index}>
                  <MotionBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                    p={4}
                    border="1px solid"
                    borderColor="gray.600"
                    borderRadius="md"
                    bg="rgba(255, 255, 255, 0.1)"
                    _hover={{ bg: "transparent", color: "gray.200" }}
                    textAlign="center"
                    height="100%"
                  >
                    <Icon as={item.icon} boxSize={8} mb={2} />
                    <Heading size="md" mb={2}>
                      {item.title}
                    </Heading>
                    {item.content.map((line, i) => (
                      <Text key={i}>{line}</Text>
                    ))}
                  </MotionBox>
                </GridItem>
              ))}
            </SimpleGrid>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text fontSize={["md", "lg"]} lineHeight="tall">
               {` I'm a seasoned Front-end Developer with extensive experience in
                React for web and React Native for mobile development. A notable
                achievement in my career includes increasing market share by 30%
                through a hybrid app, demonstrating my ability to translate
                complex designs into impactful outcomes. Leading a 10-person
                development team and optimizing app performance by 50% further
                highlights my passion for collaboration and innovation. I excel
                in leading, developing, and maintaining front-end applications
                while collaborating effectively with various teams. Agile, a
                problem solver, and thrive in dynamic environments.`}
              </Text>
            </MotionBox>
          </VStack>
        </Flex>
      </VStack>
    </Center>
  );
};

export default About;
