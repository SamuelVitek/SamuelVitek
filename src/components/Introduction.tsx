import React from 'react';
import {Box, Flex, Image, Text} from "@chakra-ui/react";


const Introduction = () => {
    return (
        <Flex
            w='100%'
            flexWrap='wrap'
            alignContent='center'
            justifyContent='space-evenly'
        >
            <Text>
                Lorem ipsum <Box as='span' color='whiteAlpha.200'>dolor</Box> sit amet
            </Text>

            <Image
                src='img/vanitas.jpg'
                alt='Memento'
                borderRadius='50%'
                fit='cover'
                boxSize='250px'
            />
        </Flex>
    );
};

export default Introduction;