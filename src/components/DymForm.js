import React, {useEffect, useState} from 'react';
import {FormControl, FormLabel, Radio, RadioGroup} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";

const DymForm = () => {

    const isTrue = (e) => {
        if (e.target.value === 'other') {
            console.log('oui autre, affiche la suite')
            setOtherVal(true)
        } else {
            setOtherVal(false)
            console.log(e.target.value)
        }

    }
    const [ otherVal, setOtherVal ] = useState(false)

    return (
        <div className="container">
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel control={<Radio />} label="Female" value="female" name="female"onChange={isTrue} />
                    <FormControlLabel control={<Radio />} label="Male" value="male" name="male" onChange={isTrue}/>
                    <FormControlLabel control={<Radio />} label="Other" value="other" name="other" onChange={isTrue} />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default DymForm;