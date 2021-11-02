import 'isomorphic-fetch';

import { getCovidSummaryApiCall } from "./Covid.service";

test('It should return the summary of covid cases ', () => {
    return getCovidSummaryApiCall().then(response => {
        console.log(response)
    })
})

