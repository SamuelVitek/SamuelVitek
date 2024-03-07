import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import ContactForm from "../components/contact/ContactForm";

const Contact: React.FC = () => {
    return (
        <Flex w='100%' flexDirection='column' textAlign='center'>
            <Heading>
                📫 Don't hesitate, text me on samuel.vitek@email.cz
            </Heading>
            <ContactForm />
        </Flex>
    );
};

export default Contact;