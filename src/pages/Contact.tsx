import React from 'react';
import { Flex, Heading, List } from '@chakra-ui/react';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
    return (
        <Flex w='100%' justifyContent='space-between'>
            <List w='42%' spacing='5'>
                <Heading>
                    🤔 Do you have a question?
                </Heading>
                <Heading>
                    💬 Just want to chat?
                </Heading>
                <Heading>
                    📫 In any case, send it!
                </Heading>
            </List>
            <ContactForm />
        </Flex>
    );
};

export default Contact;