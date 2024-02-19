import React from 'react';
import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { socials } from "../data/Others";
import Socials from "./Socials";

const Introduction = () => {
    return (
        <Flex flexDirection='column' textAlign='left'>
            <Flex alignItems='center'>
                <Flex flexDirection='column' pe='50px'>
                    <Text fontSize='calc(24px + 2vmin)' fontWeight='600' mb='2'>
                        Hello, Samuel Vítek here 👋👋👋
                    </Text>
                    <Text fontSize='calc(12px + 2vmin)' fontWeight='500'>
                        I am a student who became a {'\n'}
                        <Box as='span' color='cyan.400'>
                            Software Developer {'\n'}
                        </Box>
                        because as a kid I thought I should study IT as I played a lot of games. Now I am a technology enthusiast with experience and with {'\n'}
                        <Box as='span' color='cyan.400'>
                            great desire to learn
                        </Box>
                        . Analytic thinking, being collective friendly, and always curious are attributes that I think describe me the best.
                    </Text>
                </Flex>
                <Image
                    src='img/mugshot.jpg'
                    alt="Sam's mugshot"
                    borderRadius='50%'
                    fit='cover'
                    boxSize='250px'
                />
            </Flex>
            <Flex>
                <Button
                    mt='5'
                    h='2.5em'
                    size='sm'
                    as={Link}
                    href={`${process.env.PUBLIC_URL}/about`}
                    className='btn'
                    borderRadius='0px'
                    borderBottom='1px solid'
                    borderColor='cyan.400'
                    color='cyan.400'
                    bg=''
                    _hover={{
                        textDecoration: 'none',
                        bg: ''
                    }}
                >
                    <Box as='span' color='cyan.400' me='2'>
                        More about me
                    </Box>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </Flex>
            <Flex mt='8' ms='3' w='10%' justifyContent='space-between'>
                {socials.map(social => (
                    <Socials social={social} key={social.name} />
                ))}
            </Flex>
        </Flex>
    );
};

export default Introduction;