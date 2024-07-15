// pages/index.tsx
import { GetStaticProps } from 'next'
import { VStack, Heading, Text, Button, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Profile from '../components/Profile'
import SocialIcons from '../components/SocialIcons'



const Home = ({ name, title }: { name: string; title: string }) => {
  const handleDownload = () => {
    // Use the public URL path for the PDF file
    const pdfUrl = '/SriHarsha-Nistala-Resume.pdf';
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sri Harsha Nistala.pdf'; // Optional: specify a filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const renderSection = () => {
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
  }

  return (
    renderSection()
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

export default Home;
