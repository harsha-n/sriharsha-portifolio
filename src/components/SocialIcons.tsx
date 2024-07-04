import { HStack, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const MotionLink = motion(Link);

const SocialIcons = () => (
  <HStack spacing={4}>
    <MotionLink
      href="https://www.linkedin.com/in/sriharsha-nistala/"
      isExternal
      whileHover={{ y: -2 }}
    >
      <FaLinkedin size={24} />
    </MotionLink>
    <MotionLink
      href="https://github.com/harsha-n"
      isExternal
      whileHover={{ y: -2 }}
    >
      <FaGithub size={24} />
    </MotionLink>
  </HStack>
);

export default SocialIcons;
