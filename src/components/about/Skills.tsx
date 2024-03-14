import React from 'react';
import { Text, Flex, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import { langs } from '../../data/Others';
import Language from './Language';
import TechStack from './TechStack';

const Skills: React.FC = () => {
    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', lg: 'space-between' }}
            alignItems={{ base: 'center', lg: '' }}
            gap={{ base: '10', lg: '0' }}
            mb='10vh'
        >
            <Flex flexDirection='column'>
                <Heading fontSize={{ base: 'xl', lg: '3xl' }}>My Tech-Stack</Heading>
                <Text color='whiteAlpha.600' fontSize={{ base: 'md', lg: 'lg' }} mb='10'>
                    I can use these following technologies
                </Text>
                <TechStack />
            </Flex>
            <SimpleGrid columns={3} spacingX={{ base: '10', lg: '20' }} spacingY='10'>
                <GridItem colSpan={3}>
                    <Heading fontSize={{ base: 'xl', lg: '3xl' }}>Languages I speak</Heading>
                    <Text color='whiteAlpha.600' fontSize={{ base: 'md', lg: 'lg' }}>
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