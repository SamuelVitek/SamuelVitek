import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';


const NavBarContainer: React.FC<{ children: ReactNode, isOpen: boolean }> = ({ children, isOpen }) => {
    const color = 'linear-gradient(#02294f,#031c36)'

    return (
        <Flex
            as='nav'
            position='absolute'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
            p={8}
            background={{base: isOpen ? color : '', md: ''}}
            color={'white'}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;