
// Form a data object per photos

export const getFormedData = function(data) {

    return data.map((photo, index) => ({

        id: index,
        url: photo.src.small,
        isShown: false,
        isFound: false,

    }))

}

export const getPairedPhotos = function(data) {

    return data.reduce((photo, index) => photo.concat(index, index), []);

}