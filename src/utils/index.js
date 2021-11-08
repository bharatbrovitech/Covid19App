const getTopItemsInArray = (array, count, property) => {
    const sortedArray = array.sort((a, b) => b[property] - a[property]);
    return sortedArray.slice(0, count);
};
const sortArray = (array, property) => {
    const sortedArray = array.sort((a, b) => b[property] - a[property]);
    return sortedArray;
};
export {
    getTopItemsInArray,
    sortArray
}