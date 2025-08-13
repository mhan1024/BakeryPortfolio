
async function preloadImages() {
    const res = await fetch(`${ process.env.PUBLIC_URL }/images.json`);
    const paths = await res.json();

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