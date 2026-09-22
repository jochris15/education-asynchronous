# Asynchronus
Kalian ingkatkan kalau node js itu terkenal dengan proses Asynchronous nya ? Nah apa sih proses Asynchronous itu ?
<br>
<br>
Proses asyncrhonous adalah proses pengeksekusian kode yang tidak harus sesuai dengan urutan yang ada atau bisa disebut menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai.
<br>
<br>
Contoh proses Synchronus
```js
console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan kevin siap')
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')
// kode diatas merupakan kode synchronus, akan terprint di terminal sesuai urutan nomor 1,2,3
```

<br>
<br>
Contoh proses Asynchronus

```js
console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
setTimeout(() => {
    console.log('4. Pesanan kevin siap')
},3000)
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')

// kode diatas mengandung proses asynchronus (setTimout, berguna untuk mendelay suatu proses). **Pesanan kevin siap** akan terprint di terminal dengan urutan terakhir 
```

# Bagaimana cara menghandle operasi asynchronus?
Pada demo ini kita akan menggunakan **file system** untuk membaca sebuah file yang berisi data games.json, dimana kita akan menghandle proses asynchronusnya dengan 3 cara yaitu **Callback, Promise, Async await**. JSON adalah sebuah format data yang sering digunakan untuk menyimpan data dalam javascript.

## Callback 
Callback adalah sebuah metode pemanggilan suatu function pada javascript, dimana suatu function dipanggil / di-eksekusi pada function lain dan menjadi sebuah paramater
<br>
<br>

```js
const { readFile } = require('node:fs')

readFile('./data/games.json', (err, data) => {
    if (err) console.log(err);
    else console.log(JSON.parse(data)); // JSON.parse digunakan untuk mengubah data dari json menjadi object javascript
})
// parameter kedua disini adalah sebuah function yang dipassing sebagai parameter yang disebut callback, functionnya tidak ditrigger disini melainkan didalam function readFile dari file system
```

## Promise
Promise adalah sebuah object javascript yang digunakan untuk menghandle proses asynchronus, cara kerjanya seperti membuat janji kepada seseorang. JS Promise merepresentasikan operasi yang belum selesai, tetapi diekspetasikan akan selesai di masa mendatang.
### Promise state
1. Pending (operasi asynchronus belum selesai)
2. Fullfilled (promise sudah selesai dan memiliki hasil)
3. Rejected (operasi promise gagal)

### Cara membuat promise
```js
const { readFile } = require('node:fs')

function readFile(){
   return new Promise((resolve,reject)=>{
       readFile('./data/games.json',(err,data)=>{
           if(err){
               reject(err)
           }
           else{
               resolve(JSON.parse(data))
           }
       })
   })
}

// resolve untuk handle proses berhasil
// reject untuk handle ketika error
```

### Cara mengeksekusi promise
```js
// menggunakan function readFile diatas yang sudah dibuat menjadi promise
readFile()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
```
<br>
<br>

## Async Await
Async await adalah cara modern untuk menghandle proses asynchronus. Dasarnya tetap menunggunakan promise tetapi async await menyediakan cara yang lebih intuitif dan lebih fleksible.
### Cara menggunakan async await
```js
// menggunakan function readFile diatas yang sudah dibuat menjadi promise
async function getData() {
    try {
        const data = await readFile('./data/games.json')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// arrow function
const getData2 = async () => {
    try {
        const data = await readFile('./data/games.json')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
```

