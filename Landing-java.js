const imageURLs = [    'IMG_5078.jpg',    'IMG_5265.jpg',    'IMG_5270.jpg',    'IMG_5360.jpg',    'IMG_5504.jpg',    'IMG_5738.jpg',    'IMG_5748.jpg',    'IMG_6327.jpg',    'IMG_6345.jpg',    'IMG_6515.jpg',    'IMG_6584.jpg'];

function preloadimages(arr) {
    const newimages = [];
    let loadedimages = 0;
    let postaction = function () {};

    for (let i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            loadedimages++;
            if (loadedimages === arr.length) {
                postaction(newimages);
            }
        };
        newimages[i].onerror = function () {
            loadedimages++;
            if (loadedimages === arr.length) {
                postaction(newimages);
            }
        };
    }

    return {
        done: function (f) {
            postaction = f || postaction;
        }
    };
}

preloadimages(imageURLs).done(function () {
    console.log('All images have been loaded');
});
