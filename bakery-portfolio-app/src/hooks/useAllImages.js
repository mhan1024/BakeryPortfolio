import { useState, useEffect } from 'react';
import preloadImages from '../utils/preloadImages';

function useAllImages() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        preloadImages().then(() => setLoading(false));

    }, []);

    return loading;
}

export default useAllImages;