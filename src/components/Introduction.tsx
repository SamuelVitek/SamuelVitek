import React from 'react';
import {Box, Flex, Image, Text} from "@chakra-ui/react";
import Description from "./Description";


const Introduction = () => {
    return (
        <Flex w='75%' flexDirection='column' mt='20vh' textAlign='left'>
            <Flex
                alignItems='center'
                justifyContent='space-evenly'
            >
                <Flex flexDirection='column' pe='50px'>
                    <Text fontSize='calc(24px + 2vmin)' fontWeight='600' mb='2'>
                        Hello, Samuel Vítek here 👋👋👋
                    </Text>
                    <Text fontSize='calc(12px + 2vmin)' fontWeight='500'>
                        I am a student who became a {'\n'}
                        <Box as='span' color='cyan.400'>
                            Software Developer {'\n'}
                        </Box>
                        because as a kid I thought I should study IT since I played a lot of games. I am a technology enthusiast with experience and with {'\n'}
                        <Box as='span' color='cyan.400'>
                            great desire to learn
                        </Box>
                        . Analytic thinking, being collective friendly, and always curious are attributes that I think describe me the best.
                    </Text>
                </Flex>
                <Image
                    src='img/mugshot.jpg'
                    alt='Memento'
                    borderRadius='50%'
                    fit='cover'
                    boxSize='250px'
                />
            </Flex>
            <Flex mt='5'>
                <Description />
            </Flex>
        </Flex>
    );
};

export default Introduction;