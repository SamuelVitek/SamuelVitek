import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    Button,
    CircularProgress,
    Flex,
    Modal, ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import ControllerInput from './ControllerInput';
import { api } from '../../service/api';

interface IFormInput {
    fullName: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();

    const formValues = [
        {
            attribute: 'fullName',
            placeholder: 'Your name right here...'
        },
        {
            attribute: 'email',
            placeholder: 'Email as well please'
        },
        {
            attribute: 'message',
            placeholder: 'And finally for your message/question'
        },
    ]

    const form = useForm<IFormInput>({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            message: ''
        }
    });

    const { handleSubmit, reset } = form;

    const onSubmit = async (data: IFormInput) => {
        onOpen();
        setIsLoading(true);

        const emailToMe = {
            'service_id': 'sam_portfolio_web',
            'template_id': 'to_sam_template',
            'user_id': 'I4YKvA2AG2tpV3pmg',
            'template_params': {
                'full_name': data.fullName,
                'from_email': data.email,
                'message': data.message,
            }
        }

        const emailToUser = {
            'service_id': 'sam_portfolio_web',
            'template_id': 'verification_template',
            'user_id': 'I4YKvA2AG2tpV3pmg',
            'template_params': {
                'full_name': data.fullName,
                'from_email': data.email,
                'message': data.message,
            }
        }

        try {
            await api.post(`https://api.emailjs.com/api/v1.0/email/send`, emailToMe);

            toast({
                title: 'Success!',
                description: 'Email has been sent 🎉🎉🎉',
                status: 'success',
                duration: 3000
            });
        } catch (e) {
            console.log('ERROR', e)
            console.error('ERROR', e)
        } finally {
            onClose();
            setIsLoading(false);
            await sentVerification(emailToUser);
            reset();
        }
    };

    const sentVerification = async (emailToUser: any) => {
        try {
            await api.post(`https://api.emailjs.com/api/v1.0/email/send`, emailToUser);
        } catch (e) {
            console.log('ERROR', e)
            console.error('ERROR', e)
        }
    }

    return (
        <Flex w='54%'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...form}>
                    {formValues.map(({ attribute, placeholder }) => (
                        <ControllerInput
                            key={attribute}
                            attribute={attribute}
                            placeholder={placeholder}
                        />
                    ))}
                    <Button
                        isLoading={isLoading}
                        type='submit'
                        size='md'
                        rounded='md'
                        border='1px solid'
                        borderColor='cyan.400'
                        color='cyan.400'
                        h='2.5em'
                        bg=''
                        _hover={{
                            bg: 'whiteAlpha.200'
                        }}
                    >
                        Send the Email 📤
                    </Button>
                </FormProvider>
            </form>
            <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
            >
                <ModalOverlay />
                <ModalContent
                    justifyContent='center'
                    alignItems='center'
                    borderRadius='20px'
                    bg='linear-gradient(rgb(2, 41, 79), rgb(9, 14, 16))'
                >
                    <ModalHeader>I am really sorry but this will take a couple of seconds 🥲🥲🥲</ModalHeader>
                    <ModalFooter>
                        <CircularProgress isIndeterminate color='cyan.400' />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ContactForm;