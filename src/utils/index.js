const getTopItemsInArray = (array, count, property) => {
    const sortedArray = array.sort((a, b) => b[property] - a[property]);
    return sortedArray.slice(0, count);
};

export {
    getTopItemsInArray
}