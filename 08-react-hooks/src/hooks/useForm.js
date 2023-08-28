import { useState, useEffect } from "react";

export const useForm = (initilaValues) => {
    const [formValues, setFormValues] = useState(initilaValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: e.target.value }));
    };

    return {
        formValues,
        onChangeHandler
    }
};