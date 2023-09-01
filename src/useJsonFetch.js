import { useState, useEffect} from 'react';


const useGetFetch = (url) => {
    
    const [dataJ, setData] = useState(null);
    const [isPendingJ, setIsPending] = useState(true);
    const [errorJ, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async () => {

            const response = await fetch(url);

            if(response.status !== 200){
                throw new Error('can not fetch the data');
            }else{
                const data = await response.json();
                // console.log(data);
                return data;
            }
        };
        
        getData()
        .then(data => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {console.log(err.message);
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            }else {
                setIsPending(false);
                setData(null);
                setError(err.message);
            }
        });
            
        return () => abortCont.abort();
    }, [url]);
    
    return { dataJ, isPendingJ, errorJ};
}
 
export default useGetFetch;