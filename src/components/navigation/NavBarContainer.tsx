import React, { ReactNode } from 'react';
import { Flex } from "@chakra-ui/react";

interface NavBarContainerProps {
    children: ReactNode;
}

const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
    return (
        <Flex
            as="nav"
            position='absolute'
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            backgroundColor=''
            color={'white'}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;