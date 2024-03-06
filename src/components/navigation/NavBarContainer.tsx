import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';


const NavBarContainer: React.FC<{ children: ReactNode }> = ({ children, ...props }) => {
    return (
        <Flex
            as='nav'
            position='absolute'
            align='center'
            justify='space-between'
            wrap='wrap'
            w='100%'
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