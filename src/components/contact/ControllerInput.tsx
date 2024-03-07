import React from 'react';
import { Input, Textarea } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

const ControllerInput: React.FC<{ attribute: string, placeholder: string }> = ({ attribute, placeholder }) => {
    const { formState: { errors }, control } = useFormContext();

    return (
        <>
            {attribute === 'text' ? (
                <Controller
                    name={attribute}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Textarea
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