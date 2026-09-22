//! Proses synchronus
// console.log('1. Kevin datang ke restoran')
// console.log('2. Kevin pesan makanan')
// console.log('3. Koki menyiapkan pesanan')
// console.log('4. Pesanan kevin siap')
// console.log("==============================");
// console.log('1. Bambang datang ke restoran')
// console.log('2. Bambang pesan makanan')
// console.log('3. Koki menyiapkan pesanan')
// console.log('4. Pesanan bambang siap')

//! Proses asynchronus
console.log('1. Kevin datang ke restoran')
console.log('2. Kevin pesan makanan')
console.log('3. Koki menyiapkan pesanan')
setTimeout(() => {
    console.log('4. Pesanan kevin siap')
}, 3000)
console.log("==============================");
console.log('1. Bambang datang ke restoran')
console.log('2. Bambang pesan makanan')
console.log('3. Koki menyiapkan pesanan')
console.log('4. Pesanan bambang siap')