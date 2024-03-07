import React from 'react';
import { Input, Textarea } from '@chakra-ui/react';
import { Controller, useFormContext } from 'react-hook-form';

const ControllerInput: React.FC<{ attribute: string, placeholder: string }> = ({ attribute, placeholder }) => {
    const { formState: { errors }, control } = useFormContext();

    return (
        <>
            {attribute === 'message' ? (
                <Controller
                    name={attribute}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Textarea
                            mb='5'
                            focusBorderColor={errors[attribute] ? 'red.300' : 'cyan.400'}
                            placeholder={placeholder}
                            {...field}
                        />
                    )}
                />
            ) : (
                <Controller
                    name={attribute}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input
                            mb='3'
                            type={attribute === 'email' ? 'email' : 'text'}
                            focusBorderColor={errors[attribute] ? 'red.300' : 'cyan.400'}
                            placeholder={placeholder}
                            {...field}
                        />
                    )}
                />
            )}


        </>
    );
};

export default ControllerInput;