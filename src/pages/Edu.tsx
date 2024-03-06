import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Timeline from '../components/timeline/Timeline';

const Edu: React.FC = () => {
    return (
        <Flex w='100%' flexDirection='column' textAlign='center'>
            <Heading mb='10'>
                My work education on a timeline 🎓
            </Heading>
            <Timeline/>
        </Flex>
    );
};

export default Edu;