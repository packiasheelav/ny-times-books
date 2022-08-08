import { useState, useEffect } from "react";
import axios from "axios";


export const UseDataFetching = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const fetchData = async (): Promise<void> => {
        try {
            const response = await axios.get<any>(url);
            setData(response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError("Axios Error with Message: " + error.message);
            } else {
                setError(error);
            }
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [url]);

    return [data, error, loading] as const;
};