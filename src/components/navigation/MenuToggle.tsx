import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { MdClose } from 'react-icons/md';
import { CiMenuFries } from 'react-icons/ci';


interface MenuToggleProps {
    toggle: () => void;
    isOpen: boolean;
}

//TODO refactor hamburger menu when doing responsiveness
const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
            {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </Box>
    );
};

const CloseIcon: React.FC = () => (
    <Icon as={MdClose} fontSize='xl' />
);

const MenuIcon: React.FC = () => (
    <Icon as={CiMenuFries} fontSize='xl' />
);

export default MenuToggle;