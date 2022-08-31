import { useState } from "react";

export const useDataFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = async (method, url, body = null, headers = {}) => {
        setLoading(true);

        try {
            if (body) { // handle POST request
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url, { method, body, headers });

            if (!response.ok) { // handle respose status
                throw new Error("Error of response");
            }

            const data = await response.json();

            data && setTimeout(() => {
                setLoading(false);
            }, 1600);

            return data;

        } catch (error) {
            setLoading(false);
            setError(error.message || error);
            console.error(`Error: ${error.message}`);
        }
    };

    return { loading, error, request }
}
