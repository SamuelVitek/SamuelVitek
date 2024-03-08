import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
    Box,
    Button, Checkbox,
    CircularProgress,
    Flex, Icon,
    Modal, ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Tooltip,
    useDisclosure,
    useToast
} from '@chakra-ui/react';
import { MdOutlineInfo } from "react-icons/md";
import ControllerInput from './ControllerInput';
import { api } from '../../service/api';

interface IFormInput {
    fullName: string;
    email: string;
    message: string;
    policies: boolean;
}

//TODO error management
//TODO think about partitioning it to smaller components, it's long an ugly
//TODO find a better state management that this
const ContactForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

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

    const privacyPolicy = 'The data you provide (name, email & message) is used to send a message to my email. ' +
        'You give me the consent to reply to you based on the information you provide in the form above. ' +
        'The data will be stored only for the purpose of the communication between us.'

    const form = useForm<IFormInput>({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            message: '',
            policies: false
        }
    });

    const { handleSubmit, reset } = form;

    const onSubmit = async (data: IFormInput) => {
        if (!isChecked) {
            setIsInvalid(true);
        } else {
            onOpen();
            setIsLoading(true);

            const emailToMe = {
                'service_id': process.env.REACT_APP_MAILJS_SERVER,
                'template_id': process.env.REACT_APP_TO_ME_TEMPLATE,
                'user_id': process.env.REACT_APP_MAILJS_API_KEY,
                'template_params': {
                    'full_name': data.fullName,
                    'from_email': data.email,
                    'message': data.message,
                }
            }

            const emailToUser = {
                'service_id': process.env.REACT_APP_MAILJS_SERVER,
                'template_id': process.env.REACT_APP_USER_TEMPLATE,
                'user_id': process.env.REACT_APP_MAILJS_API_KEY,
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

                toast({
                    title: 'Error',
                    description: 'Oh maaan, it didn\'t work this time 😭',
                    status: 'error',
                    duration: 3000
                });
            } finally {
                reset();
                onClose();
                setIsLoading(false);
                setIsChecked(false);
                await sentVerification(emailToUser);
            }
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

    const handleOnClick = () => {
        setIsInvalid(invalid => invalid && !invalid);
        setIsChecked(check => !check);
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
                    <Flex flexDirection='column'>
                        <Flex>
                            <Checkbox
                                me='1'
                                isInvalid={isInvalid}
                                onChange={handleOnClick}
                            >
                                I agree to the Terms of Service and Privacy Policy.
                            </Checkbox>
                            <Tooltip
                                label={privacyPolicy}
                                // placement='right'
                                hasArrow
                                // color='white'
                                // bg='cyan.400'
                                fontWeight='600'
                            >
                                <Box as='span'>
                                    <Icon as={MdOutlineInfo}  fontSize='xl' />
                                </Box>
                            </Tooltip>
                        </Flex>
                        <Button
                            isLoading={isLoading}
                            w='min'
                            mt='4'
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
                    </Flex>
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
                    bg='#031c36'
                >
                    <ModalHeader textAlign='center' color='white'>
                        I am really sorry but this will take a couple of seconds 🥲
                    </ModalHeader>
                    <ModalFooter>
                        <CircularProgress isIndeterminate color='cyan.400' />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Flex>
    );
};

export default ContactForm;