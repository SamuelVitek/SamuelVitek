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
                        <Box as='span' color='cyan.500'>
                            Software Developer {'\n'}
                        </Box>
                        because as a kid I thought I should study IT since I played a lot of games. I am a technology enthusiast with experience and with {'\n'}
                        <Box as='span' color='cyan.500'>
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
                {/*<Text fontSize='calc(8px + 2vmin)' fontWeight='300'>*/}
                {/*    Sed tempor consectetur arcu sit amet mattis. Morbi nisl sem, venenatis scelerisque dignissim vel, porta et ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam lorem metus, feugiat a arcu et, interdum placerat velit. Vestibulum fermentum tempus sapien, eget commodo nibh condimentum ut. Aenean tristique, quam quis vestibulum ultricies, ex felis lobortis purus, eu pulvinar ante ex vitae felis. Sed sagittis et odio faucibus porttitor. Fusce commodo est sit amet tellus gravida gravida. Etiam mauris nunc, vehicula eu ante vitae, suscipit tempor neque. Nullam ornare, sapien sit amet euismod maximus, justo mauris pulvinar dolor, ut sollicitudin felis enim ac lorem. Phasellus vitae auctor justo. Pellentesque imperdiet, felis nec hendrerit tristique, metus libero malesuada ipsum, eget feugiat nibh odio vitae elit. Praesent malesuada viverra libero a vestibulum. Etiam tempor mi nec lacus posuere, et aliquet erat laoreet. Cras ornare leo et justo tempus egestas. Nunc lacus risus, viverra nec bibendum at, malesuada sed mauris.*/}
                {/*</Text>*/}
                <Description />
            </Flex>
        </Flex>
    );
};

export default Introduction;