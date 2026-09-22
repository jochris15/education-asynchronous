// Jadi sebenernya hampir semua tools javascript menyediakan function promise, jadi kita gaperlu bikin promise sendirim
// contohnya fs, sudah ada versi promisenya
const { readFile } = require('node:fs/promises');

//! Cara handle secara promise biasa
readFile("./data/events.json")
    .then((result) => {
        console.log(JSON.parse(result));

        // return promise lagi supaya bisa di .then lagi, proses ini disebut promise chaining
        return readFile("./data/games.json")
    })
    .then((result) => {
        console.log(JSON.parse(result));
    })
    .catch((err) => {
        console.log(err);
    })

//! Cara handle secara async await
// cara lebih simple untuk fullfill suatu promise
// ibaratnya kita merubah suatu function jadi bisa handle promise
// dengan cara nambahin "async depan function" dan juga handle pake try catch
// cara fullfill promisenya pake syntax "await" pada saat mau manggil function promise

// bentuk function biasa
async function getData() {
    try {
        // bisa handle 2 proses sekaligus tanpa return function readFile kayak promise diatas
        // hal ini udah dianggap promise chaining
        const events = await readFile("./data/events.json")
        const games = await readFile("./data/games.json")

        console.log(JSON.parse(games));
        console.log(JSON.parse(events));
    } catch (error) {
        console.log(error);
    }
}

getData()

// bentuk arrow function
const getData2 = async () => {
    try {
        const events = await readFile("./data/events.json")
        const games = await readFile("./data/games.json")

        console.log(JSON.parse(games));
        console.log(JSON.parse(events));
    } catch (error) {
        console.log(error)
    }
}

getData2()