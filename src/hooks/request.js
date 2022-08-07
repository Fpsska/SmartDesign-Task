import { useCallback, useState } from "react";

export const FetchMongoData = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (method, url, body = null, headers = {}) => {
        setLoading(true);

        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url, { method, body, headers });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error of response");
            }

            setTimeout(() => {
                setLoading(false);
            }, 1300);

            return data;

        } catch (error) {
            setLoading(false);
            setError(error.message || error);
            console.error(`Error from hook: ${error.message || error}`);
        }
    }, []);

    return { loading, error, request }
}
