import { useState, useEffect } from 'react';
import preloadImages from '../utils/preloadImages';

function useAllImages() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const time = 1000;
        const start = Date.now();

        preloadImages().then(() => {
            const elapsed = Date.now() - start;
            setTimeout(() => setLoading(false), Math.max(0, time - elapsed));
        });

    }, []);

    return loading;
}

export default useAllImages;