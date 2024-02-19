import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faKaggle, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link, Text} from "@chakra-ui/react";
import {SocialsType} from "../data/Types";

interface SocialsProps {
    social: SocialsType;
}

const Socials = ({social}: SocialsProps) => {

    const Icon = () => {
        switch (social.name) {
            case 'linkedin':
                return <FontAwesomeIcon icon={faLinkedin}/>
            case 'kaggle':
                return <FontAwesomeIcon icon={faKaggle}/>
            case 'github':
                return <FontAwesomeIcon icon={faGithub}/>
            default:
                return <FontAwesomeIcon icon={faLinkedin}/>
        }
    }

    return (
        <Text
            as={Link}
            isExternal
            href={social.link}
            opacity='0.3'
            _hover={{
                textDecoration: 'none',
                opacity: '1',
                color: 'cyan.400'
            }}
        >
            {<Icon/>}
        </Text>
    );
};

export default Socials;