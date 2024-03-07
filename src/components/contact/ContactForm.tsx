import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button, Flex } from '@chakra-ui/react';
import ControllerInput from './ControllerInput';
import { api } from '../../service/api';

interface IFormInput {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
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
            attribute: 'subject',
            placeholder: 'Here goes the subject'
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
            subject: '',
            message: ''
        }
    });

    const { handleSubmit } = form;

    const onSubmit = async (data: IFormInput) => {
        const emailToSend = {
            'From': 'info@cloudypages.cz',
            'To': 'contact@samuelvitek.com',
            'TemplateAlias': 'to-me',
            'TemplateModel': {
                'full_name': data.fullName,
                'from_email': data.email,
                'message': data.message,
                'year': new Date().getFullYear(),
                'subject': data.subject
            }
        }

        console.log(emailToSend)
        try {
            await api.post(`https://api.postmarkapp.com/email/withTemplate`, emailToSend)
        } catch (e) {
            console.log('ERROR', e)
            console.error('ERROR', e)
        }
    };

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
                    <Button type='submit'>
                        Send
                    </Button>
                </FormProvider>
            </form>
        </Flex>
    );
};

export default ContactForm;