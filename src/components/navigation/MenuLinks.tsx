import React from 'react';
import MenuItem from './MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import { faHouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MenuLinks: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {


    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            flexBasis={{ base: '100%', md: 'auto' }}
            pt={{ base: '5', md: '0' }}
        >
            <Stack
                spacing={8}
                align='center'
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
            >
                <MenuItem to='/' isLast>
                    <FontAwesomeIcon icon={faHouse}/>
                </MenuItem>
                <MenuItem to='/about'>About me</MenuItem>
                <MenuItem to='/work'>Work Experience</MenuItem>
                <MenuItem to='/education'>Education</MenuItem>
                <MenuItem to='/projects'>Projects</MenuItem>
                <MenuItem to='/contact' isLast>
                    <Button
                        size='sm'
                        rounded='md'
                        border='1px solid'
                        borderColor='cyan.400'
                        color='cyan.400'
                        h='2.5em'
                        bg=''
                        _hover={{
                            bg: 'cyan.400',
                            color: 'white'
                        }}
                    >
                        <Text me={1}>Contact me</Text>
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};

export default MenuLinks;