import React from 'react';
import {Checkbox} from "@mui/material";
import {Controller, useForm} from "react-hook-form";

const FormCheckbox = () => {

    const { control } = useForm({
        defaultValues: {
            checkbox: false,
        }
    })

    return (
        <div>
            <Controller
                name="checkbox"
                control={control}
                render={({field: {ref, onChange, name}, formState,}) =>
                    <Checkbox
                        onChange={onChange}
                        inputRef={ref}
                    />}
            />
        </div>
    );
};

export default FormCheckbox;