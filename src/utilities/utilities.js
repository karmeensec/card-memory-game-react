
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


// Shuffle the cards (StackOverFlow)
export const shuffleCards = cards => {
    let m = cards.length;
    let t;
    let i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};