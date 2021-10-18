## Description

> Gunakan _template project_ yang berada pada folder `soal-01`, gunakan _template project_ tersebut untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan di bawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01

Kamu diminta untuk menampilkan daftar film yang telah disediakan menggunakan ReactJS, berikut adalah langkah-langkah pengerjaannya:
- Lakukan instalasi React.js dari _template project_ yang sudah disediakan pada folder `soal-01` menggunakan `npm install` atau `yarn`
- Buatlah file `MovieCard.js` pada direktori `src`
- Buatlah sebuah Component menggunakan `class` dengan nama `MovieCard` 
- Gunakan kode yang ada pada `App.js` untuk digunakan pada saat membuat component `MovieCard` pada class `card`
- Kemudian hapus kode yang berada di dalam/di bawah class `daftar-anime` pada file `App.js`.
- Component `MovieCard` akan menerima `1 props` dengan nama `movie`, yang mana `props` tersebut berfungsi untuk menampung informasi `movie` apa yang akan ditampilkan, berikut adalah contoh dari data yang akan kita gunakan:
    ```Javascript
    {
      mal_id: 5114,
      rank: 1,
      title: "Fullmetal Alchemist: Brotherhood",
      url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
      type: "TV",
      episodes: 64,
      start_date: "Apr 2009",
      end_date: "Jul 2010",
      members: 2649743,
      score: 9.16
    },
    ```
- ubah data-data berikut pada file `MovieCard.js`:
    - `img[src]` => url dari gambar yang akan kita tampilkan menggunakan `movie.image_url`
    - `className="card-title"` ubah isi dari elemen tersebut menggunakan `movie.title`
    - `className="card-subtitle"`
      - ubah isi dari elemen tersebut menggunakan `movie.type`
      - serta berikondisi di mana:
        - menggunakan background berwarna merah dengan cara menambahkan class `"bg-danger"` apabila `movie.type` berinlai `"TV"`
        - selain itu berilah ia background berwarna hijau dengan cara menambahkan class `"bg-success"`
    - `className="btn btn-primary w-100"` ubah nilai dari attribut `href` menggunakan `movie.url`
- Tampilkan data movie pada `MovieCard.js` menggunakan data yang ada pada file `dummy-data.js`
  - ambil data dari file `dummy-data.js` dengan cara `import` file tersebut ke dalam `App.js`
  - tampilkan data tersebut di dalam elemen dengan `id="daftar-movie"`, untuk menampilkan data tersebut kalian dapat menggunakan `map`
  - dikarenakan kita melakukan sebuah `loop` di dalam elemen dengan `className="row"`, maka kita membutuhkan elemen dengan `class="col"` sebagai wadah penampung dari `MovieCard` yang sudah kita buat. Ada `4 breakpoint` yang perlu kita berikan kepada elemen pembungkus tersebut yaitu:
    - akan menampilkan 4 `MovieCard` _component_ pada `breakpoint` `lg`
    - akan menampilkan 3 `MovieCard` _component_ `breakpoint` `md`
    - akan menampilkan 2 `MovieCard` _component_ `breakpoint` `sm`
    - hanya menampilkan 1 `MovieCard` _component_ `breakpoint` lebih kecil dari `sm`
  - jangan lupa untuk menambahkan `attribute key` pada elemen tersebut, hal ini bertujuan agar React.js dapat membedakan antara satu elemen dengan elemen yang lain (kalian dapat menggunakan `mal_id` sebagai `key`)
  - panggil `MovieCard` yang tadi sudah kita buat ke dalam file `App.js` pada direktori `src`, dan tambahkan _component_ tersebut ke dalam elemen dengan `class="col"` yang tadi sudah kita buat.
  - Kirim data ke dalam props `movie` dari hasil loop data `dummy-data.js` yang telah di-_import_


### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil menampilkan data film yang berada didalam file `src/dummy-data.js`, kali ini kita akan mengambil data tersebut melalui public API [JIKAN](https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema).

Berikut adalah langkah-langkah pengerjaannya:
- `copy and paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
- Lakukan instalasi menggunakan `npm install` atau `yarn`
- buatlah sebuah `state` di `App.js` dengan spec:
  - `movieList['Array of Object']` => variable ini akan menampung seluruh daftar film yang nantinya akan kita tampilkan
  - `isLoading['Boolean']` => variable ini akan menjadi indikator kita apakah data yang kita ambil melalui public API tersebut sudah berhasil atau tidak
- buatlah sebuah fungsi dengan nama `fetchMovieList`
  - fungsi tersebut akan mengambil daftar film melalui link berikut
    
    `"https://api.jikan.moe/v3/top/anime"`
  - setelah data kita dapatkan, maka kita akan memasukan data tersebut kedalam `state.movieList`
- `lifecycle`
  - `componentDidMount` => panggil fungsi `fetchMovieList`
  - `componentDidUpdate` => cek apakah ada perubahan pada `state.movieList`, apabila kita sudah berhasil mengambil data dari public API dan berhasil memasukan data tersebut kedalam `state.movieList` maka kita perlu untuk merubah nilai `state.isLoading` menjadi `true`
- `render`
  - buatlah sebuah kondisi menggunakan `state.isLoading`
    - apabila ia bernilai `false`, maka kita akan menampilkan daftar movie yang sudah kita buat pada soal sebelumnya
    - apabila ia bernilai `true`, maka kita perlu menampilkan sebuah tag
    
      `<h2>Loading...</h2>`


## Expected Result

1. Soal - 01

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-03.gif)

2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-04.gif)

## Key Learning Points

- Peserta memahami cara menggunakan ReactJS
- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta mampu membuat sebuah ReactJs `class component based`
- Peserta mampu untuk mengambil data dari public API
- Peserta mampu melakukan ekstrasi terhadap sebuah UI menjadi `Component` yang lebih kecil
- Peserta memahami dan mampu melakukan implementasi dari *lifecycle* `componentDidMount`
- Peserta memahami dan mampu melakukan implementasi dari *lifecycle* `componentDidUpdate`
