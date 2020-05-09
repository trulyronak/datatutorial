const data = require("./csvjson.json")
//https://csvjson.com/csv2json
let records = {}
let days = new Set();

for (const entry of data) {
    const { record_id, totnum_event, study_d_n} = entry;
    records[record_id] = records[record_id] || {};
    records[record_id][study_d_n] = totnum_event;
    days.add(study_d_n);
}

days = Array.from(days).sort((a,b) => a-b);

// exporting to a CSV File Fomat
// creating header
let csv = "id";
for (const day of days) {
    csv += `,${day}`
}
csv += "\n"

for (const id in records) {
    csv += `${id}`
    for (const day of days) {
        const value = records[id][day] || 0;
        csv += `,${value}`
    }
    csv += "\n"
}
console.log(csv);