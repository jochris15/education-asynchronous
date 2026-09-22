const { readFile } = require('node:fs')

//! Cara bikin promise sendiri
// ibarat codingan kita disiapin dulu, nanti kita bisa atur kapanpun kita mau kapan codingan tsb mau diselesaikan , tidak seperti callback

// ini codingannya kita delay dulu, belom dieksekusi
function readPromise() {
    return new Promise((resolve, reject) => {
        readFile('./data/events.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data));
            }
        });
    })
}


console.log("proses lain");
console.log("proses lain");
console.log("proses lain");
console.log("proses lain");

// cara untuk mengeksekusi codingan yang nanti udah kita delay / janjiin
readPromise()
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })