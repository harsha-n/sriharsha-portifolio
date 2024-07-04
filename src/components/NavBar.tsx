// components/NavBar.tsx
import { HStack, Icon, Box } from '@chakra-ui/react'
import { FaHome, FaUser, FaFolder, FaEnvelope } from 'react-icons/fa'
import { BsStack } from "react-icons/bs";
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionBox = motion(Box)

const NavBar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { icon: FaHome, section: 'home' },
    { icon: FaUser, section: 'profile' },
    { icon: FaFolder, section: 'projects' },
    { icon: BsStack  , section: 'Skills' },
    // { icon: FaEnvelope, section: 'contact' },
  ]

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      position="fixed"
      bottom="20px"
    //   left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
    >
      <HStack spacing={10} bg="blue.800" p={4} borderRadius="full" boxShadow="lg">
        {navItems.map((item, index) => (
          <Box
            key={index}
            as="button"
            onClick={() => setActiveSection(item.section)}
            position="relative"
          >
            <MotionBox
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Icon
                as={item.icon}
                boxSize={6}
                color={activeSection === item.section ? 'white' : 'gray.300'}
              />
            </MotionBox>
            {activeSection === item.section && (
              <motion.div
                layoutId="activeIndicator"
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  transform: 'translateX(-50%)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Box>
        ))}
      </HStack>
    </MotionBox>
  )
}

export default NavBar