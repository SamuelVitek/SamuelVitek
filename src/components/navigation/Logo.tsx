import React, {useState} from "react"
import {Box, Link, Text} from "@chakra-ui/react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHouse} from "@fortawesome/free-solid-svg-icons";

export default function Logo(props: any) {
    const [isHovering, setIsHovering] = useState<boolean>(false);

    const handleHover = () => {
        setIsHovering(!isHovering);
    }

    return (
        <Box
            {...props}
            as={Link}
            href='/'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            _hover={{
                textDecoration: 'none'
            }}
            textAlign='center'
        >
            <Text fontSize="lg" fontWeight="bold">
                Samuel Vítek
            </Text>
            <Text fontSize="2xs" color={isHovering ? 'cyan.400' : 'white'}>
                <FontAwesomeIcon icon={faHouse} />
                Home
            </Text>
        </Box>
    )
}