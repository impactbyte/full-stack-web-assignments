## Description
> Buatlah sebuah file sesuai dengan nama `01-array.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kamu adalah seorang pada kantor dinas pemerintahan, kemudian atasanmu meminta untuk dibuatkan sebuah fungsi dengan spesifikasi sebagai berikut:
- fungsi tersebut berfungsi untuk memasukan sebuah nilai baru kedalam array
- apabila panjang array termasuk kedalam bilangan PRIMA, maka kita masukan nilai tersebut diawal baris array
- apabila panjang array tidak termasuk kedalam bilangan PRIMA dan ia termasuk bilangan GANJIL, maka masukan nilai baru tersebut ke-akhir baris array
- apabila panjang array tidak termasuk kedalam bilangan PRIMA dan ia termasuk bilangan GENAP, maka masukan nilai baru tersebut ditengah-tengah array

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```Javascript
let arr = [0, 1];

function addNewValueToArray(value) {
  // EDIT HERE
}

for (let i = 2; i < 11; i++) {
  addNewValueToArray(i);
}

console.log(arr);
```

### Soal - 02
Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi `calculateIncome` untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus (*current price* - *previous price*) untuk setiap koin yang tersedia

- Gunakan *code template* yand diberikan untuk menyelesaikan masalah
- Dilarang untuk mengubah nama `variable` atau `function` yang sudah tersedia didalam *code template*
- Segala perubahan hanya dapat dilakukan didalamm fungsi `calculateIncome`
- Hasil haruslah sesuai dengan expektasi yang diberikan

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```JS
const items = [
  [ { name: "btc", price: 10 }, { name: "eth", price: 7 }, { name: "doge", price: 5 } ],
  [ { name: "btc", price: 9.2 }, { name: "eth", price: 7.3 }, { name: "doge", price: 5.8 } ],
  [ { name: "btc", price: 8.7 }, { name: "eth", price: 8.1 }, { name: "doge", price: 6.3 } ],
  [ { name: "btc", price: 8.4 }, { name: "eth", price: 8 }, { name: "doge", price: 6.7 } ],
  [ { name: "btc", price: 8.9 }, { name: "eth", price: 6.3 }, { name: "doge", price: 5.9 } ],
  [ { name: "btc", price: 9.3 }, { name: "eth", price: 5.6 }, { name: "doge", price: 5.1 } ],
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
}

console.log(calculateIncome(items))
```


## Expected Result
1. Soal - 01
    ```JSON
    {
      btc: -0.6999999999999993,
      doge: 0.09999999999999964,
      eth: -1.4000000000000004
    }
    ```
2. Soal - 02
    ```Javascript
    [7, 5, 3, 2, 8, 10, 6, 4, 0, 1, 9]
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`