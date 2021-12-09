## Description

> Gunakan _template project_ yang berada pada folder `soal-01` untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan di bawah ini secara benar dan ikuti instruksi yang ada. Pada 2 soal di bawah ini kita harus menggunakan *Functional Component*.

### Soal - 01

Kamu diminta untuk memberikan `prop-types` pada setiap *component* yang terdapat pada *template code*, berikut adalah langkah-langkah pengerjaannya:
1. Lakukan instalasi React.js dari _template project_ yang sudah disediakan pada folder `soal-01` menggunakan `npm install` atau `yarn`
2. Buka file `src/components/Navbar.js` dan berikan `prop-types` sesuai dengan deskripsi berikut:
   - `purchasedItem`
     - *description* = total item yang sudah kita beli
     - *data type* = `Number`
     - *default value* = `0`
3. Buka file `src/components/CardProduct.js` dan berikan `prop-types` sesuai dengan deskripsi berikut:
   - `name`
     - *description* = Nama dari produk yang akan kita tampilkan
     - *data type* = `String`
     - *default value* = `""`
   - `price`
     - *description* = Harga dari produk yang akan kita tampilkan
     - *data type* = `Number`
     - *default value* = `""`
   - `image`
     - *description* = Gambar dari produk yang akan kita tampilkan
     - *data type* = `String`
     - *default value* = `""`
   - `addToCart`
     - *description* = Fungsi ini akan menambahkan produk yang kita pilih ke dalam `cart`
     - *data type* = `Function`
     - *default value* = Buatlah sebuah fungsi yang akan mengembalikan null
 4. Buka file `src/components/CardProduct.js` dan berikan `prop-types` sesuai dengan deskripsi berikut:
    - `name`
      - *description* = Nama dari produk yang akan kita beli
      - *data type* = `String`
      - *default value* = `""`
    - `price`
      - *description* = Harga dari produk yang akan kita beli
      - *data type* = `Number`
      - *default value* = `""`
    - `amount`
      - *description* = Jumlah dari produk yang akan kita beli
      - *data type* = `Number`
      - *default value* = `""`
    - `increase`
      - *description* = Fungsi ini akan menambahkan jumlah dari produk yang akan kita beli
      - *data type* = `Function`
      - *default value* = `() => console.log("")`
    - `decrease`
      - *description* = Fungsi ini akan mengurangi jumlah dari produk yang akan kita beli
      - *data type* = `Function`
      - *default value* = `() => console.log("")`

### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil menambahkan `prop-types` pada tiap-tiap *component*, maka kali ini kita akan membuat fungsionalitas dari baris kode tersebut mulai dari menambahkan *item* ke dalam `cart`, merubah `total item` yang akan kita beli, dan lain sebagainya.

Berikut adalah langkah-langkah pengerjaannya:
1. `copy and paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
2. Lakukan instalasi menggunakan `npm install` atau `yarn`
3. Buka file `src/App.js`
4. Buatlah fungsi `addToCart` dengan spesifikasi sebagai berikut:
   - *parameter*
     - `id [Number]` => `id` dari *item* yang akan kita beli
   - *description* => Fungsi ini akan menambahkan *item* ke dalam `cart`.
   - *conditions*
     - Apabila `cart` kosong atau kita tidak menemukan *item* dengan `id` yang identik di dalam `cart`. Detailnya adalah:
        - **TRUE** => kita akan menambahkan *item* ke dalam `cart` dengan struktur data sebagai berikut, *default value* dari `amount` adalah `1`

          ```Javascript
          {
            id: 1,
            name: "espresso",
            price: 2,
            amout: 1
          }
          ```

        - **FALSE** => kita akan menambah jumlah dari `amount` menjadi `+1`
5. Buatlah fungsi `increaseCartAmount` dengan spesifikasi sebagai berikut:
   - *parameter*
     - `id [Number]` => `id` dari *item* yang akan kita beli
   - *description* => Fungsi ini akan menambahkan jumlah *item* yang akan kita beli dengan `+1`, apabila ia memiliki `id` yang identik dengan *parameter* yang telah diberikan
6. Buatlah fungsi `decreaseCartAmount` dengan spesifikasi sebagai berikut:
   - *parameter*
     - `id [Number]` => `id` dari *item* yang akan kita beli
   - *description* => Fungsi ini akan menambahkan *item* ke dalam `cart`.
   - *conditions*
     - Perlu melakukan pengecekan apakah jumlah *item* yang ingin kita beli itu lebih dari 1:
        - **TRUE** => Kita akan mengurangi jumlah *item* tersebut dengan `1`
        - **FALSE** => kita akan menghapus *item* tersebut dari `cart`
7. Buatlah `useEffect` yang mana ia akan memantau perubahan dari variable `cart`, apabila ada perubahanan pada variable tersebut maka:
   - Kita perlu menghitung total harga dari *item* yang kita masukan ke dalam variable `cart` kemudian memasukan hasilnya ke dalam variable `total`
   - Kita perlu menghitung jumlah *item* yang kita telah masukan ke dalam variable `cart` kemudian masukan hasilnya ke dalam variable `purchasedItem`

## Expected Result

2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-lanjutan-01.gif)

## Key Learning Points

- Peserta memahami cara menggunakan ReactJS
- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta memahami dan mampu melakukan implementasi `prop-types` ke dalam *Functional Component*
- Peserta memahami dan mampu melakukan implementasi `useState`
- Peserta memahami dan mampu melakukan implementasi `useEffect`
