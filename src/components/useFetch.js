import { useState, useEffect } from 'react';

// Make Sure you are running the command to start your json-server backend. 
// Command: npm data

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                    console.log("HERE I AM!")
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error }
}


export default useFetch;