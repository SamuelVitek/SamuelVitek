import React from 'react';
import {Flex, Heading} from "@chakra-ui/react";
import Timeline from "../components/timeline/Timeline";

const Work = () => {
    return (
        <Flex w='100%' mt='25vh' flexDirection='column' textAlign='center'>
            <Heading mb='10'>
                My work experience on a timeline 💼
            </Heading>
            <Timeline isWork />
        </Flex>
    );
};

export default Work;