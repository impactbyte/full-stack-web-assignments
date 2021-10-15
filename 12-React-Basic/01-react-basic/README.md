## Description

> Gunakan _template project_ yang berada pada folder `soal-01` dan `soal-02`, gunakan _template project_ tersebut untuk menjawab pertanyaan-pertanyaan dibawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01

Kamu diminta untuk menampilkan daftar film yang telah disediakan menggunakan ReactJS, berikut adalah langkah-langkah pengerjaannya:
- gunakan _template project_ `soal-01`
- *extract component* `card` yang ada didalam elemen dengan `className="col-6"`
  - kedalam file  `src/MovieCard.js`
  - buatlah sebuah `Component` dengan nama `MovieCard`
  - ia akan menerima `1 props` dengan nama `movie`, yang mana `props` tersebut berfungsi untuk menampung informasi `movie` apa yang akan ditampilkan, berikut adalah contoh dari data yang akan kita gunakan
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
  - ubah data-data berikut:
    - `img[src]` => url dari gambar yang akan kita tampilkan menggunakan `movie.image_url`
    - `className="card-title"` ubah isi dari elemen tersebut menggunakan `movie.title`
    - `className="card-subtitle"`
      - ubah isi dari elemen tersebut menggunakan `movie.type`
      - serta berikondisi dimana:
        - menggunakan background berwarna merah dengan cara menambahkan class `"bg-danger"` apabila `movie.type` berinlai `"TV"`
        - selain itu berilah ia background berwarna hijau dengan cara menambahkan class `"bg-success"`
    - `className="btn btn-primary w-100"` ubah nilai dari attribut `href` menggunakan `movie.url`
- ambil data dari file `src/dummy-data.js` dengan cara `import` file tersebut kedalam `src/App.js`
  - tampilkan data tersebut didalam elemen dengan `id="daftar-movie"`
  - untuk menampilkan data tersebut kalian dapat menggunakan `map`
  - dikarnakan kita melakukan sebuah `loop` didalam elemen dengan `className="row"`, maka kita membutuhkan elemen dengan adanya:
    - `column 3` apabila ukuran layar pengguna sudah mencapai `breakpoint lg`
    - `column 4` apabila ukuran layar pengguna sudah mencapai `breakpoint md`
    - `column 6` apabila ukuran layar pengguna sudah mencapai `breakpoint sm`
    - `column 12` sebagai default apabila user memiliki layar yang lebih kecil daripada `breakpoint sm`
  - jangan lupa untuk menambahkan `attribute key` pada elemen tersebut, hal ini bertujuan agar ReactJS dapat membedakan antara satu elemen dengan elemen yang lain
  - panggil `Component` yang tadi sudah kita buat kedalam file `src/App.js`
  - tambahakan `Component` tersebut kedalam elemen `column` yang tadi sudah kita buat


### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil menampilkan data film yang berada didalam file `src/dummy-data.js`, kali ini kita akan mengambil data tersebut melalui public API [JIKAN](https://jikan.docs.apiary.io/#reference/0/top/top-request-example+schema).

Berikut adalah langkah-langkah pengerjaannya:
- `copy n paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
- buatlah sebuah `state`
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
    - apabila ia bernilai `true`, maka kita akan menampilkan daftar movie yang sudah kita buat pada soal sebelumnya
    - apabila ia bernilai `false`, maka kita perlu menampilkan sebuah tag
    
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