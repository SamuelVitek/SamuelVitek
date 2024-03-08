import React from 'react';
import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { socials } from '../data/Others';
import Socials from './Socials';

const Introduction: React.FC = () => {
    return (
        <Flex
            flexDirection='column'
            alignItems={{ base: 'center', xl: 'start' }}
            textAlign='left'
        >
            <Flex
                alignItems='center'
                flexDirection={{ base: 'column', xl: 'row' }}
            >
                <Flex
                    flexDirection='column'
                    pe={{ xl: '50px' }}
                    mb={{ base: '50px', xl: '0' }}
                >
                    <Heading
                        fontWeight='600'
                        fontSize={{ base: 'lg', sm: '2xl' }}
                        mb={{ base: '5', sm: '2' }}
                    >
                        Hello, Samuel Vítek here 👋👋👋
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', sm: '2xl' }}
                        fontWeight='500'
                    >
                        I am a student who became a {'\n'}
                        <Box as='span' color='cyan.400'>
                            Software Developer {'\n'}
                        </Box>
                        because as a kid I thought I should study IT as I played a lot of games. Now I am a technology
                        enthusiast with experience and with {'\n'}
                        <Box as='span' color='cyan.400'>
                            great desire to learn
                        </Box>
                        . Analytic thinking, being collective friendly, and always curious are attributes that I think
                        describe me the best.
                    </Text>
                </Flex>
                <Image
                    src='img/mugshot.jpg'
                    alt="Sam's mugshot"
                    borderRadius='full'
                    fit='cover'
                    boxSize={{ base: '5em', sm: '8em', xl: '10em'}}
                />
            </Flex>
            <Flex>
                <Button
                    mt={{ base: '5', sm: '10', xl: '5' }}
                    h='2.5em'
                    size='sm'
                    as={Link}
                    href={`/about`}
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
            <Flex
                mt={{ base: '8', sm: '8' }}
                ms='3'
                w={{ base: '30%', sm: '15%' , xl: '10%' }}
                justifyContent='space-between'
            >
                {socials.map(social => (
                    <Socials social={social} key={social.name} />
                ))}
            </Flex>
        </Flex>
    );
};

export default Introduction;