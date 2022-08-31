import { useState, useEffect } from "react";

export function useDebouce(value, delay) {
    const [debValue, setValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debValue;
}