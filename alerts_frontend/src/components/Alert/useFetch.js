import { useState, useEffect } from 'react';
import useToken from '../App/useToken';

export default function useFetch(path) {
    const host = 'http://localhost:3000/'
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const { token } = useToken()

    useEffect(() => {
        
        const getAlert = async () => {
            try {
                const headers = new Headers()
                headers.append('Authorization', token.token)
                const response = await fetch(
                    `${host}${path}`,{ headers }
                );
                if (!response.ok) {
                    throw new Error(
                        `Failed to load resource: the server responded with status: ${response.status}`
                    );
                }
                let responseData = await response.json();
                setData(responseData);
            } catch (err) {
                  setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
        getAlert()
    }, [path]);

    return { data, isLoading, error}

}