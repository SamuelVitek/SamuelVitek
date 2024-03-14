import React from 'react';
import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'

const Datacamp: React.FC = () => {
    return (
        <Flex flexDirection='column' mb='10'>
            <Heading mb='5' fontSize={{ base: 'xl', lg: '3xl' }}>
                Data Science Certificate?
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                Recently I have decided for (hopefully) my final career destination. I feel like it might be the perfect
                balance between all the stuff that I love, challenges, math, data, and a bit of code.
                As the title already said, I decided to enroll for online platform Datacamp and it's learning track for
                Machine Learning Scientist.
                What it consists of you ask? These are the following topics I am (or will be) studying:
            </Text>
            <UnorderedList ps='5' fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                <ListItem>Data cleaning and manipulation (Python)</ListItem>
                <ListItem>Machine Learning (Supervised and Unsupervised)</ListItem>
                <ListItem>Natural Language Processing</ListItem>
                <ListItem>Deep Learning</ListItem>
                <ListItem>Image Processing</ListItem>
            </UnorderedList>
        </Flex>
    );
};

export default Datacamp;