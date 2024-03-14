import React from 'react';
import { Flex } from '@chakra-ui/react';
import StoryTime from '../components/about/StoryTime';
import Datacamp from '../components/about/Datacamp';
import Skills from '../components/about/Skills';

const About: React.FC = () => {
    return (
        <Flex flexDirection='column' mb='5vh'>
            <Skills />
            <Datacamp />
            <StoryTime />
        </Flex>
    );
};

export default About;