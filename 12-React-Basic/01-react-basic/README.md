## Description

> Gunakan _template project_ yang berada pada folder `soal-01` dan `soal-02`, gunakan _template project_ tersebut untuk menjawab pertanyaan-pertanyaan dibawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01

Kamu diminta untuk membuat sebuah fitur shoping cart sederhana menggunakan ReactJS, berikut adalah langkah-langkah pengerjaanya:

- gunakan _template project_ `soal-01`
- segala perubahaan hanya diperbolehkan didalam file `src/App.js`
- elemen `form`
  - dapatkan value dari input `product`
  - dapatkan value dari input `price`
  - ubah fungsi `handleSubmit` sehingga ia akan
    - menambahkan `product` dan `price` kedalam `cart`
    - _reset_ nilai `product` menjadi `""`
    - _reset_ nilai `price` menjadi `0`
- sembunyikan elemen yang mimiliki `id="total-harga"` ketika kita tidak memiliki data didalam variable `cart`, dan kita akan menampilkannya apabila variable tersebut tidaklah kosong

### Soal - 02

Kamu diminta untuk membuat sebuah fitur Todo List sederhana menggunakan ReactJS, berikut adalah langkah-langkah pengerjaannya:

- gunakan _template project_ `soal-01`
- segala perubahaan hanya diperbolehkan didalam file `src/App.js`
- elemen `form`

  - dapatkan value dari input `name`
  - ubah fungsi `handleSubmit` sehingga ia akan

    - menambahkan data-data berikut kedalam `todos`

      - `id` => ia memiliki nilai berupa panjang dari `todos` saat ini ditambah dengan `1`, hal ini berguna untuk kita membuat fungsi `changeTodo` dimana kita perlu merubah suatu todo menjadi `Finish` ataupun `Unfinish`
      - `name` => didapatkan dari input form
      - `isFinish` => berikan ia nilai default berupa `false`, hal ini berguna sebagai penanda bahwa ketika kita membuat `todo` baru ia akan secara otomatis terdaftarkan didalam **Unfinish**

      ```Javascript
      {
        id: 1,
        name: "beli telur",
        isFinish: false
      }
      ```

    - _reset_ nilai `name` menjadi `""`

- ubah fungsi `changeTodo`
  - ia akan mengubah nilai dari `todo.isFinish` menjadi `false` apabila ia saat ini bernilai `true` dan begitu sebaliknya
  - `todo` yang diambil adalah ia yang memiliki `id` yang identik dengan parameter yang telah diberikan
- menampilkan **Unfinish List**
  - kita harus melakukan sortase pada data `todos` dengan cara mengambil data yang mana ia memiliki nilai `isFinish = false`
  - tampilkan data dari `todos` yang sudah kita `filter` menggunakan elemen `<li>`, kemudian tambahkan hal-hal dibawah ini untuk tiap-tiap elemen
    - `key` dengan nilai `todo.id`, hal ini kita lakukan guna sebagai pemisah antara elemen satu dan yang lainnya.
    - `onClick` dengan fungsi `changeTodo` serta berikan ia parameter berupa `todo.id`
    - berikan isi dari elemen `<li>` dengan `todo.name`
- menampilkan **Finish List**
  - kita harus melakukan sortase pada data `todos` dengan cara mengambil data yang mana ia memiliki nilai `isFinish = true`
  - tampilkan data dari `todos` yang sudah kita `filter` menggunakan elemen `<li>`, kemudian tambahkan hal-hal dibawah ini untuk tiap-tiap elemen
    - `key` dengan nilai `todo.id`, hal ini kita lakukan guna sebagai pemisah antara elemen satu dan yang lainnya.
    - `onClick` dengan fungsi `changeTodo` serta berikan ia parameter berupa `todo.id`
    - berikan isi dari elemen `<li>` dengan `todo.name`

## Expected Result

1. Soal - 01

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-01.gif)

2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-02.gif)

## Key Learning Points

- Peserta memahami cara menggunakan ReactJS
- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta mampu untuk melakukan manipulasi `state` pada `Functional Component`
- Peserta mampu untuk meng-_handle_ sebuah _event_ menggunakan `onChange`
- Peserta mampu untuk meng-_handle_ sebuah _event_ menggunakan `onClick`
- Peserta mampu untuk meng-_handle_ sebuah _event_ menggunakan `onSubmit`
