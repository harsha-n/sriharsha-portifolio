// pages/index.tsx
import { useState } from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Box, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Profile from '../components/Profile'
import SocialIcons from '../components/SocialIcons'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from '@src/components/About'
import Experiences from '@src/components/Experiences'

const DynamicNavBar = dynamic(() => import('../components/NavBar'), { ssr: false })

const MotionBox = motion(Box)

const Home = ({ name, title }: { name: string; title: string }) => {
  const [activeSection, setActiveSection] = useState('home')
  const handleDownload = () => {
    // Use the public URL path for the PDF file
    const pdfUrl = '/Sri Harsha Nistala_Resume.pdf';
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sri Harsha Nistala.pdf'; // Optional: specify a filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <VStack spacing={8} align="center" textAlign="center" justify="center">
            <Heading as="h1" size="2xl">{"Hello, I'm"}</Heading>
            <Heading as="h2" size="3xl">{name}</Heading>
            <Text fontSize="xl">{title}</Text>
            <Profile />
            <HStack spacing={4}>
              <Button 
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                colorScheme="blue" 
                variant="outline"
                onClick={() => {handleDownload()}}
              >
                Download Resume
              </Button>
              {/* <Button 
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                colorScheme="blue"
                onClick={() => setActiveSection('contact')}
              >
                Contact Me
              </Button> */}
            </HStack>
            <SocialIcons />
          </VStack>
        )
      case 'profile':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      case 'Skills': 
        return <Experiences />
      default:
        return null
    }
  }

  return (
    <MotionBox 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      bg="navy.900" 
      minH="100vh" 
      color="white"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderSection()}
        </MotionBox>
      </AnimatePresence>
      <DynamicNavBar activeSection={activeSection} setActiveSection={setActiveSection} />
    </MotionBox>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      name: "Sri Harsha Nistala",
      title: "Senior Software Developer"
    },
    revalidate: 60
  }
}

export default Home