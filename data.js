const nama = prompt("Masukkan Nama Anda");
let usia = 31; //fungsi parse mengubah nilai string menjadi yang di parse
const biodata = document.getElementById('biodata');

// function generateBiodata() {
//     let golongan;

//     if (usia >= 0 && usia <= 5){
//         golongan = "golongan bayi";
//     } else if (usia >= 6 && usia <= 11) {
//         golongan = "golongan bocil";
//     } else if (usia >= 12 && usia <= 29) {
//         golongan = "golongan remaja";
//     } else {
//         golongan = "golongan tuwir";
//         // console.log(`nama saya adalah ${nama} dan usia saya adalah ${usia} tahun`);
//     }
//     return console.log("golongan saya adalah ", golongan);
// }

//bawah ini else if versi ringkas
let golongan = (usia >= 0 && usia <= 5) ? "golongan bayi" : (usia >= 6 && usia <= 11) ? "golongan bocil" : (usia >= 12 && usia <= 29) ? "golongan remaja" : "golongan tuwir";
// biodata.innerHTML = `<p>Anda termasuk ${golongan}</p>`;
biodata.innerHTML = `<marquee><h2>Selamat Datang ${nama}</h2></marquee>`;


console.log(nama);
console.log(usia);

// generateBiodata();
console.log("Anda termasuk", golongan);


