import React, { useState } from 'react';
import { Flex, Heading, List } from '@chakra-ui/react';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
    return (
        <Flex
            w='100%'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'center', md: 'space-between' }}
            alignItems={{ base: 'center', md: 'normal' }}
        >
            <List
                w={{ base: '90%', sm: '70%', md: '54%' }}
                mb={{ base: '5', sm: '10', md: '0' }}
                spacing={{ base: '4', md: '8' }}
            >
                <Heading fontSize={{ base: 'lg', md: 'xl', xl: '3xl' }}>
                    🤔 Do you have a question?
                </Heading>
                <Heading fontSize={{ base: 'lg', md: 'xl', xl: '3xl' }}>
                    💬 Just want to chat?
                </Heading>
                <Heading fontSize={{ base: 'lg', md: 'xl', xl: '3xl' }}>
                    📫 In any case, send it!
                </Heading>
            </List>
            <ContactForm />
        </Flex>
    );
};

export default Contact;