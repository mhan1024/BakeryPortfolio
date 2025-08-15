// Preload the images ahead of time 
async function preloadImages() {
    // Get the image paths 
    const res = await fetch(`${ process.env.PUBLIC_URL }/images.json`);
    const paths = await res.json();

    // Track whether if each image has been loaded
    return new Promise((r) => {
        let loadedImgs = 0;

        if (!paths || paths.length === 0) {
            r();
            return;
        }

        paths.forEach((path) => {
            const img = new Image();
            img.src = `${ process.env.PUBLIC_URL }${ path }`;
            img.onload = img.onerror = () => {
                loadedImgs++;
                if (loadedImgs === paths.length) {
                    r();
                }
            };
        });

    });
}

export default preloadImages;