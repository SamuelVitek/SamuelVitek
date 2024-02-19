import React from 'react';
import { Flex } from "@chakra-ui/react";
import StoryTime from "../components/StoryTime";
import Datacamp from "../components/Datacamp";

const About = () => {
    return (
        <Flex flexDirection='column' mt='25vh' mb='5vh'>
            <Datacamp />
            <StoryTime />
        </Flex>
    );
};

export default About;