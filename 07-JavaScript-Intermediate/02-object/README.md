## Description
> Buatlah sebuah file sesuai dengan nama `02-object.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada


### Soal - 01
Kamu diminta untuk mengikuti instruksi dibawah dengan seksama:
1. ubah field `name` pada variable `person` menjadi namamu sendiri
2. ubah field `favDrinks` yang berisi `"temulawak"` menjadi `"tap water"`
3. ubah field `greeting` menjadi sebuah fungsi, dengan spesifikasi
   - memiliki 1 parameter
     - name [`String`] => nama seseorang yang akan disapa
   - *return value* [`String`] => akan mengembalikan sebuah `String` dengan format `"Hello, $NAME"`

```Javascript
const person = {
  name: "person A",
  age: 100,
  favDrinks: [
    "coffee",
    "jamu temulawak",
    "tea"
  ],
  greeting: function() {
    console.log("hello world")
  }
}

/// EDIT HERE


/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));
```

### Soal - 02
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

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)
```

### Soal - 03
Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi `calculateIncome` untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus `[sum of (sell - buy)]` untuk setiap koin yang tersedia

- Gunakan *code template* yand diberikan untuk menyelesaikan masalah
- Dilarang untuk mengubah nama `variable` atau `function` yang sudah tersedia didalam *code template*
- Segala perubahan hanya dapat dilakukan didalamm fungsi `calculateIncome`
- Hasil haruslah sesuai dengan expektasi yang diberikan

Langkah-langkah pengerjaan:
1. hitung keuntungan yang kita hasilkan dari tiap-tiap koin dengan cara `(sell - buy)`
2. ulangi langkah pertama, hingga kita selesai menghitung seluruh history transaksi yang ada (dalam contoh ini kita ada 3 buah history dari hari 1, 2, dan 3)
3. jumlahkan seluruh keuntungan yang kita buat selama 3 hari berdasarkan koin yang kita gunakan
4. rangkuman dari pendapatan kita HARUS berupa sebuah `object`
5. pengerjaan harus menggunakan *built-in method* `reduce`

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```Javascript
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
}

console.log(calculateIncome(items))
```


## Expected Result
1. Soal - 01
    ```Javascript
    // namamu sendiri
    100
    ["coffee", "tap water", "tea"]
    "Hello, John Watson"
    ```
2. Soal - 02
   - `espresso` should be `"lampung"`
   - `coffeeBrand` should be `null`
   - `isMilkVegan` should be `false`
3. Soal - 03
    ```JSON
    {
      btc: 0,
      doge: -2.5,
      eth: -1.5
    }
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta memahami apa itu `object` dan cara penggunaannya
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`
- Peserta mampu untuk membuat solusi berdasarkan gabungan sebuah konsep antara `array` dan `object`