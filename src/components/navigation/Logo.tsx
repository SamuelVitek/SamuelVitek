import React, { useState } from 'react'
import { Box, Link, Text } from '@chakra-ui/react'

const Logo: React.FC = () => {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleHover = () => {
        setIsHovering(!isHovering);
    }

    //TODO move house to normal nav and no house in under my name
    return (
        <Box
            as={Link}
            href='/'
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
        </Box>
    )
}

export default Logo;