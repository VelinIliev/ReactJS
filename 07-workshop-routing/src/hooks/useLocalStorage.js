import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);
        if (persistedState) {
            return JSON.parse(persistedState);
        }
        return initialValue;
    });

    // useEffect(() => {
    //     const persistedState = localStorage.getItem(key);

    //     if (persistedState) {
    //         const newState = JSON.parse(persistedState);
    //         setState(newState)
    //     }
    // }, []);

    const setLocalStorage = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value));
    };
    
    return [
        state,
        setLocalStorage
    ];
};
