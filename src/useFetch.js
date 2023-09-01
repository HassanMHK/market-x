import { useState, useEffect} from 'react';

const useFetch = (url) => {
    
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
            })
                .then((res) => {

                    if(!res.ok){
                        throw Error ('Could not fetch the data');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }else {
                        setIsPending(false);
                        setData(null);
                        setError(err.message);
                    }
                })

            
        }, 1000);
        return () => abortCont.abort();
    }, [url]);
    
    return { data, isPending, error};
}
 
export default useFetch;