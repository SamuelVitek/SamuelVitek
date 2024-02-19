import React from 'react';
import { Flex, Heading } from "@chakra-ui/react";
import Timeline from "../components/timeline/Timeline";

const Edu = () => {
    return (
        <Flex w='100%' mt='25vh' flexDirection='column' textAlign='center'>
            <Heading mb='10'>
                My work education on a timeline 🎓
            </Heading>
            <Timeline />
        </Flex>
    );
};

export default Edu;