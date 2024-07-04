// components/Contact.tsx
import { VStack, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionVStack = motion(VStack)

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <MotionVStack
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      spacing={8}
      align="stretch"
      w="full"
      maxW="xl"
      mx="auto"
    >
      <Heading as="h2" size="2xl" textAlign="center" mb={8}>Contact Me</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="Your name" bg="whiteAlpha.200" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Your email" bg="whiteAlpha.200" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your message" bg="whiteAlpha.200" />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            size="lg"
            w="full"
            mt={4}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </Button>
        </VStack>
      </form>
    </MotionVStack>
  )
}

export default Contact