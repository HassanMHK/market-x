import { useState, useEffect} from 'react';


const useGetFetch = (url) => {
    
    const [dataG, setData] = useState(null);
    const [isPendingG, setIsPending] = useState(true);
    const [errorG, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // setTimeout(() => {

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
                setData(data.laptops);
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
            
        // }, 1000);
        return () => abortCont.abort();
    }, [url]);
    
    return { dataG, isPendingG, errorG};
}
 
export default useGetFetch;