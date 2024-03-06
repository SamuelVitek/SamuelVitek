import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Timeline from '../components/timeline/Timeline';

const Work: React.FC = () => {
    return (
        <Flex w='100%' flexDirection='column' textAlign='center'>
            <Heading mb='10'>
                My work experience on a timeline 💼
            </Heading>
            <Timeline isWork />
        </Flex>
    );
};

export default Work;