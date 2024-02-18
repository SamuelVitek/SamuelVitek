import React from 'react';
import {Flex, ListItem, Text, UnorderedList} from '@chakra-ui/react'

const Description = () => {
    const texts = [
        'Fortunately, during High school where I studied Web Development and Web Design, I found out that it will during my studies become my passion.',
        'After a painful lot of part-time jobs, I had as a highschooler searching for money wherever I could (from KFC to a warehouse) I finally after graduating from High school found my first IT-related job (if you could say that) as a tester of mobile applications in Škoda a.s.',
        'Only a month after working there I made my next (probably biggest) step towards my IT career. I was employed by a company called Aimtec a.s. as a Software Developer. The beginning was painful because my experiences were low, close to zero. But I went straight ahead and started learning, Java, SQL, Data analytics, Power BI, problem-solving, etc. Finally, I was growing as a developer.',
        'After finishing a year of studies at the University of West Bohemia, Faculty of Applied Sciences along with my new job I decided to explore the world and went for an Erasmus to Finland. Moving out of the country changed me the most. I decided to stay in Finland, so I applied to Centria University of Applied Sciences. And to my surprise, I was accepted.',
        'This chapter started a completely new life for me and changed me as a person as well as a student and developer. I started working as a Full-Stack Developer growing and deepening my knowledge every day in a new part-time remote job. Started working for the University and helping people there.'
    ]

    return (
        <Flex flexDirection='column'>
            {texts.map((p, index) => (
                <Text key={index} fontSize='calc(4px + 2vmin)' fontWeight='300' mb='2'>
                    {p}
                </Text>
            ))}
            <Text fontSize='calc(4px + 2vmin)' fontWeight='300' mb='2'>
                In the end, I would like to say a couple of things that I see as achievements:
            </Text>
            <UnorderedList ps='5' fontSize='calc(4px + 2vmin)' fontWeight='300' mb='2'>
                <ListItem>After all procrastination and missing motivation to finally finding my growth mindset.</ListItem>
                <ListItem>Finding a desire to gain and value new knowledge.</ListItem>
                <ListItem>Committing to go abroad on my behalf without anyone or anyone’s support.</ListItem>
                <ListItem>Quitting daily useless social media usage and other dopamine overdosing.</ListItem>
                <ListItem>Commitment to achieve my ambitions no matter what.</ListItem>
                <ListItem>Becoming a Software Developer for 2,5 years for a company with a great team.</ListItem>
                <ListItem>Being able to secure myself and grow as a Developer and a teacher.</ListItem>
            </UnorderedList>
            <Text fontSize='calc(4px + 2vmin)' fontWeight='300' mb='2'>
                I love to talk to intelligent people (especially if they are more intelligent than me) so if you want to talk about anything don’t hesitate to message me.
            </Text>
        </Flex>
    );
};

export default Description;