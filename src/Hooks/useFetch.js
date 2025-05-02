import { useEffect, useState } from 'react';
import { FetchDataFromApi } from '../Utils/api';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await FetchDataFromApi(endpoint);
                setData(res);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
