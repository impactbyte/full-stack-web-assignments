## Description
> Buatlah sebuah file sesuai dengan nama `01-array.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan sebuah nilai berdasarkan struktur `Object`, fungsi tersebut memiliki spesifikasi sebagai berikut:
- 2 Parameter
   - obj `Object` => object yang akan kita ambil value-nya
   - path `String` => letak dari nilai yang ingin kita ambil
- *return value*
  - apabila kita tidak dapat menemukan `field` yang dituju, maka kita akan mengembalikan `null`
  - apabila kita menemukan menemukan `field` yang dituju maka kita akan mengembalikan `value` dari `field` tersebut

```Javascript
function getObjectValue( .... ) { .... }

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark"
      ratio: 1
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5
    }
  },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origiin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
```

### Soal - 02
Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi `calculateIncome` untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus (*current price* - *previous price*) untuk setiap koin yang tersedia

- Gunakan *code template* yand diberikan untuk menyelesaikan masalah
- Dilarang untuk mengubah nama `variable` atau `function` yang sudah tersedia didalam *code template*
- Segala perubahan hanya dapat dilakukan didalamm fungsi `calculateIncome`
- Hasil haruslah sesuai dengan expektasi yang diberikan

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```Javascript
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
   - `espresso` should be `"lampung"`
   - `coffeeBrand` should be `null`
   - `isMilkVegan` should be `false`
1. Soal - 01
    ```JSON
    {
      btc: -0.6999999999999993,
      doge: 0.09999999999999964,
      eth: -1.4000000000000004
    }
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta memahami apa itu `object` dan cara penggunaannya
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`
- Peserta mampu untuk membuat solusi berdasarkan gabungan sebuah konsep antara `array` dan `object`