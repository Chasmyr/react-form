import React from 'react';
import {TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";

const FormInputText = () => {

    const { control } = useForm({
        defaultValues: {
            text: "",
        }
    })

    return (
        <div>
            <Controller
                name='text'
                control={control}
                render={({field: {ref, onChange, name}, formState,}) =>
                    <TextField
                        onChange={onChange}
                        inputRef={ref}
                    />}
            />
        </div>
    );
};

export default FormInputText;