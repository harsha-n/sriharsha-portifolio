import Profile from "../components/Profile";
import SocialIcons from "../components/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";
import { Box, VStack, Heading, Text, Button, HStack } from "@chakra-ui/react";
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
    <>
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
            <main>{children}</main>
          </MotionBox>
        </AnimatePresence>
        <DynamicNavBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </MotionBox>
    </>
  );
}
