const { readFile } = require('node:fs')

readFile('./data/events.json', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // jeleknya callback, kalo mau nyelipin proses lain harus di function callbacknya, jadi berantakan codingannya
        console.log("proses lain");
        console.log("proses lain");
        console.log("proses lain");
        console.log("proses lain");
        console.log("proses lain");

        console.log(JSON.parse(data));

        // terus kalo mau lanjutin proses asynchronus selanjutnya, harus dimasukin didalem function callbacknya juga, jadi nanti codingannya makin kekanan dst
        readFile('./data/games.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(JSON.parse(data));
            }
        });

    }
});

