import React from 'react';
import {useForm, Controller} from "react-hook-form";
import {Button, Checkbox, TextField} from "@mui/material";

const Form = () => {
    const { register, handleSubmit, control, watch } = useForm()

    const formSubmitHandler = (data) => {
        alert(JSON.stringify(data))
    }


    return (
        <div>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
                <Controller
                    name="text"
                    control={control}
                    render={({field: {ref, onChange, name}, formState,}) =>
                        <TextField
                            onChange={onChange}
                            inputRef={ref}
                        />}
                />
                <Controller
                    name="checkbox"
                    control={control}
                    render={({field: {ref, onChange, name}, formState,}) =>
                        <Checkbox
                            onChange={onChange}
                            inputRef={ref}
                        />}
                />
                <Button variant="contained" color="primary" type="submit">
                    Sign up
                </Button>
            </form>
        </div>
    );
};

export default Form;