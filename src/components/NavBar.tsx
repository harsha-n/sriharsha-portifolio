// components/NavBar.tsx
import { HStack, Icon, Box, Flex } from "@chakra-ui/react";
import { FaHome, FaUser, FaFolder } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const MotionBox = motion(Box);

const NavBar = ({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: Function;
}) => {
  const router = useRouter();
  const navItems = [
    { icon: FaHome, section: "/" },
    { icon: FaUser, section: "about" },
    { icon: FaFolder, section: "projects" },
    { icon: BsStack, section: "experiences" },
    // { icon: FaEnvelope, section: 'contact' },
  ];

  return (
    <Flex justifyContent="center">
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
        <HStack
          spacing={10}
          bg="blue.800"
          p={4}
          borderRadius="full"
          boxShadow="lg"
        >
          {navItems.map((item, index) => (
            <Box
              key={index}
              as="button"
              onClick={() => {
                setActiveSection(item.section);
                router.push(item.section);
              }}
              position="relative"
            >
              <MotionBox
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon
                  as={item.icon}
                  boxSize={6}
                  color={activeSection === item.section ? "white" : "gray.300"}
                />
              </MotionBox>
              {activeSection === item.section && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    left: "50%",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#4789e1",
                    // transform: 'translateX(-50%)',
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Box>
          ))}
        </HStack>
      </MotionBox>
    </Flex>
  );
};

export default NavBar;
