import { useState, useEffect } from 'react';
import preloadImages from '../utils/preloadImages';

// Define a custom hook for preloading images and keeping track of their status
function useAllImages() {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const time = 1000;
        const start = Date.now();

        // When loading the images, ensure that all images were loaded and that the loading state is true for at least 1 second
        preloadImages().then(() => {
            const elapsed = Date.now() - start;
            setTimeout(() => setLoading(false), Math.max(0, time - elapsed));
        });

    }, []);

    return loading;
}

export default useAllImages;