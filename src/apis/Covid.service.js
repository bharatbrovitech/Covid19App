import { getTopItemsInArray } from "../utils";

const getCovidSummaryApiCall = (fromDate, toDate) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return fetch(`https://api.covid19api.com/summary?from=${fromDate}Z&to=${toDate}`, requestOptions)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}

const getTopCountriesAndGlobalCasesApiCall = (fromDate, toDate, count = 5) => {
    return getCovidSummaryApiCall(fromDate, toDate).then(result => {
        return { topCountriesCases: getTopItemsInArray(result.Countries, count, 'TotalConfirmed'), globalCases: result.Global }
    })
}
export { getCovidSummaryApiCall, getTopCountriesAndGlobalCasesApiCall };
