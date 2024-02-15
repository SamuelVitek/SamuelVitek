import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import Timeline from "./timeline/Timeline";

const Experience = () => {
    return (
        <Flex flexDirection='column' w='75%'>
            <Text w='full' textAlign='left' my='50px'>
                My Experience
            </Text>
            <Timeline />
        </Flex>
    );
};

export default Experience;