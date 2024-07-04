// components/Projects.tsx
import {
  VStack,
  Heading,
  Text,
  Box,
  Image,
  Grid,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
interface ProjectCard {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  logobg?: string
}
const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  logobg = "transparent",
} : ProjectCard) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    bg="#1f1f38"
    borderRadius="lg"
    overflow="hidden"
    transition="0.2s"
  >
    <Image
      bgColor={logobg}
      src={imageUrl}
      alt={title}
      w="full"
      h="200px"
      objectFit="contain"
    />
    <Box p={6}>
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      {projectUrl && (
        <Link href={projectUrl} isExternal color="blue.400">
          View Project
        </Link>
      )}
    </Box>
  </MotionBox>
);

const Projects = () => {
  const projects = [
    {
      title: "Limoneria",
      description: `Limoneira is an Agriculture based Responsive web/mobile application which is 
            built in React and .net. It involves rolebased access, integrating PowerBi and Microsoft Azure Login.`,
      imageUrl: "/images/Limoneria.png",
      projectUrl: "",
      logobg: "yellow",
    },
    {
      title: "My Contacts Backend",
      description:
        "It's demo project built on Node.js covering concepts involving express, private and public routes, middleware authenticating jwt token, error Handler using Mongodb",
      imageUrl:  "/images/mycontacts.png",
      projectUrl: "https://github.com/harsha-n/mycontacts-backend",
    },
    {
      title: "React Chakra Demo",
      description:
        "A Demo Single Page Application built on React using Chakra UI.",
      imageUrl:  "/images/chakra.png",
      projectUrl: "https://github.com/harsha-n/react-chakra-demo",
    },
    // Add more projects here
  ];

  return (
    <VStack spacing={8} mt={10} align="stretch" w="full" maxW="4xl" mx="auto">
      <Heading as="h2" size="2xl" textAlign="center" mb={8}>
        Projects
      </Heading>
      <Grid templateColumns={["2fr", "1fr 1fr 1fr"]} gap={6}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Grid>
    </VStack>
  );
};

export default Projects;
