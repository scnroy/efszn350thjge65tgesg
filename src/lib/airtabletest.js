import Airtable from 'airtable'

const API_KEY = import.meta.env.AIRTABLE_API_KEY;
const base = new Airtable({apiKey: API_KEY}).base('app2Hr6qhr1thTJAm');

export function getEvents() {

let data = []; // ADDED BY SAINTMUNTZER

base('Events').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        data.push(record.fields); // ADDED BY SAINTMUNTZER
        // console.log(record.fields);
        // console.log('Name: ', record.get('Name'));
        // console.log('Location: ', record.get('Location'));
        // console.log('Date: ', record.get('Date'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; };
    return data; // ADDED BY SAINTMUNTZER
})

return data;

};