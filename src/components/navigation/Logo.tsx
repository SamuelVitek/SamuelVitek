import React, { useState } from 'react'
import { Box, Link, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Logo: React.FC = () => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleHover = () => {
        setIsHovering(!isHovering);
    }

    //TODO move house to normal nav and no house in under my name
    return (
        <Box
            as={Link}
            href='/SamuelVitek/'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            _hover={{
                textDecoration: 'none'
            }}
            textAlign='center'
        >
            <Text fontSize='lg' fontWeight='bold'>
                Samuel Vítek
            </Text>
            <Text fontSize='2xs' color={isHovering ? 'cyan.400' : 'white'}>
                <FontAwesomeIcon icon={faHouse}/>
                Home
            </Text>
        </Box>
    )
}

export default Logo;