import React from 'react';
import Introduction from "../components/Introduction";
import {Flex} from "@chakra-ui/react";
import Description from "../components/Description";

const About = () => {
    return (
        <>
            <Introduction />
            <Flex mt='5' w='75%' flexDirection='column' textAlign='left'>
                <Description />
            </Flex>
        </>
    );
};

export default About;