
// Form a data object per photos

export const getFormedData = function(data) {

    return data.map((photo, index) => ({

        id: index,
        url: photo.src.small,
        isShown: false,
        isFound: false,

    }))

}

// Pair every fetched photo

export const getPairedPhotos = function(data) {

    return data.reduce((photo, index) => photo.concat(index, index), []);

}


// Extend previously fetched photos and add unique id

export const addUniqueIdPhotos = function(data) {

    return data.map((entry, index) => ({
        ...entry, 
        uniqueId: index, 
    }))

}


