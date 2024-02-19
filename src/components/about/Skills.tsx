import React from 'react';
import {Flex, SimpleGrid} from "@chakra-ui/react";
import {langs} from "../../data/Others";
import Language from "./Language";

const Skills = () => {
    return (
        <Flex>
            <Flex>

            </Flex>
            <SimpleGrid columns={3} spacingX='20' spacingY='10'>
                {langs.map(lang => (
                    <Language key={lang.lang} {...lang} />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default Skills;