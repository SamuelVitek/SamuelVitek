import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@chakra-ui/react';
import ControllerInput from './ControllerInput';

interface IFormInput {
    fullName: string;
    email: string;
    subject: string;
    text: string;
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
            attribute: 'text',
            placeholder: 'And finally for your message/question'
        },
    ]

    const form = useForm<IFormInput>({
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            subject: '',
            text: ''
        }
    });

    const { handleSubmit } = form;

    const onSubmit = (data: IFormInput) => {
        console.log(data)
    };

    return (
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
    );
};

export default ContactForm;