
// Form a data object per photos

export const getFormedData = function(data) {

    return data.map((photo, index) => ({

        id: index,
        url: photo.src.small,
        isShown: false,
        isFound: false,

    }))

}