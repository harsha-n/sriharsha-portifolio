import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Flex,
  Center,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ReactElement, useState } from "react";
import React from "react";

const DynamicNavBar = dynamic(() => import("../components/NavBar"), {
  ssr: false,
});

const MotionBox = motion(Box);

export default function Layout({ children }: { children: ReactElement }) {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Flex direction="column" minH="100vh" bg="navy.900" color="white">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        flex="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={4}
        pb={16}
      >
        <AnimatePresence mode="wait">
          <MotionBox
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <main>{children}</main>
          </MotionBox>
        </AnimatePresence>
      </MotionBox>
      <Center position="fixed" bottom={0} left={0} right={0}>
        <Box maxWidth="container.md" width="100%">
          <DynamicNavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </Box>
      </Center>
    </Flex>
  );
}
