import React from 'react';
import { Flex, Heading, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { story } from '../../data/Others';

const StoryTime: React.FC = () => {
    return (
        <Flex flexDirection='column'>
            <Heading mb='5' fontSize={{ base: 'xl', lg: '3xl' }}>
                A little story time 📖
            </Heading>
            {story.map((p, index) => (
                <Text key={index} fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                    {p}
                </Text>
            ))}
            <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                In the end, I would like to say a couple of things that I see as achievements:
            </Text>
            <UnorderedList ps='5' fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                <ListItem>After all procrastination and missing motivation to finally finding my growth
                    mindset.</ListItem>
                <ListItem>Finding a desire to gain and value new knowledge.</ListItem>
                <ListItem>Committing to go abroad on my behalf without anyone or anyone’s support.</ListItem>
                <ListItem>Quitting daily useless social media usage and other dopamine overdosing.</ListItem>
                <ListItem>Commitment to achieve my ambitions no matter what.</ListItem>
                <ListItem>Becoming a Software Developer for 2,5 years for a company with a great team.</ListItem>
                <ListItem>Being able to secure myself and grow as a Developer and a teacher.</ListItem>
            </UnorderedList>
            <Text fontSize={{ base: 'md', lg: 'lg' }} fontWeight='300' mb='2'>
                I love to talk to intelligent people (especially if they are more intelligent than me) so if you want to
                talk about anything don’t hesitate to message me.
            </Text>
        </Flex>
    );
};

export default StoryTime;