// components/Profile.tsx
// import Image from "next/image";
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Profile = () => (
    <MotionBox
      whileHover={{ scale: 1.05 }}
      borderRadius="full"
      overflow="hidden"
      boxSize="200px"
      bg="blue.500"
    >
      <Image
        src={"/images/profile_1.jpg"}
        alt="Profile"
        width={200}
        height={200}
        loading="lazy"
      />
    </MotionBox>
);

export default Profile;
