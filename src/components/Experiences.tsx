import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaMobile, FaTools, FaDatabase, FaBug } from 'react-icons/fa';

const MotionBox = motion(Box);

const SkillCategory = ({ title, skills, icon }: { title: string; skills: string[]; icon: React.ReactElement }) => (
  <MotionBox
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    bg={useColorModeValue(' #1f1f38', 'gray.800')}
    p={6}
    borderRadius="lg"
    boxShadow="md"
    textAlign="center"
  >
    <VStack spacing={4}>
      {icon}
      <Heading size="md">{title}</Heading>
      <Text>{skills.join(', ')}</Text>
    </VStack>
  </MotionBox>
);

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
      icon: <FaCode size={30} />,
    },
    {
      title: 'Frameworks and Libraries',
      skills: ['React', 'React Native', 'Redux', 'Node', 'Angular', 'Next', 'Ionic', 'Cordova'],
      icon: <FaReact size={30} />,
    },
    {
      title: 'Front-End Development',
      skills: ['HTML5', 'Chakra UI', 'CSS3', 'SASS', 'Bootstrap'],
      icon: <FaMobile size={30} />,
    },
    {
      title: 'Build Tools & Version Control',
      skills: ['Webpack', 'Babel', 'Gitlab', 'GitHub', 'Azure', 'Bitbucket'],
      icon: <FaTools size={30} />,
    },
    {
      title: 'IDE & Testing',
      skills: ['Android Studio', 'Xcode', 'VS Code', 'Jest', 'Chrome DevTools'],
      icon: <FaBug size={30} />,
    },
    {
      title: 'Database',
      skills: ['Firebase', 'Mongodb'],
      icon: <FaDatabase size={30} />,
    },
  ];

  return (
    <Box py={16} bg={useColorModeValue('#272741', '#1f3f30')}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h1" size="2xl" textAlign="center">
            My Skills
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} width="full">
            {skillsData.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Skills;
