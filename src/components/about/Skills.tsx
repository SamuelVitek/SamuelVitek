import React from 'react';
import { Text, Flex, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import { langs } from '../../data/Others';
import Language from './Language';
import TechStack from './TechStack';

const Skills: React.FC = () => {
    return (
        <Flex justifyContent='space-between' mb='10vh'>
            <Flex flexDirection='column'>
                <Heading>My Tech-Stack</Heading>
                <Text color='whiteAlpha.600' fontSize='lg' mb='10'>
                    I can use these following technologies
                </Text>
                <TechStack />
            </Flex>
            <SimpleGrid columns={3} spacingX='20' spacingY='10'>
                <GridItem colSpan={3}>
                    <Heading>Languages I speak</Heading>
                    <Text color='whiteAlpha.600' fontSize='lg'>
                        At least try to
                    </Text>
                </GridItem>
                {langs.map(lang => (
                    <Language key={lang.lang} {...lang} />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default Skills;