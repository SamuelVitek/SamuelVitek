import React from 'react';
import { Input } from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";

const ControllerInput: React.FC<{ attribute: string, placeholder: string }> = ({ attribute, placeholder }) => {
    const { formState: { errors }, control } = useFormContext();

    return (
        <>
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
        </>
    );
};

export default ControllerInput;