## Description

> Gunakan _template project_ yang berada pada folder `soal-01` untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan di bawah ini secara benar dan ikuti instruksi yang ada. Pada 2 soal di bawah ini kita harus menggunakan *Functional Component* serta gunakan `react-router-dom` untuk melihat detail dokumentasi.

### Soal - 01

Kamu diminta untuk membuat beberapa page menggunakan React.js.
1. Lakukan instalasi React.js dari _template project_ yang sudah disediakan pada folder `soal-01` menggunakan `npm install` atau `yarn`
2. Buka file `src/App.js`
   - perbaiki urutan dari `<Route>`, agar tiap-tiap `route` yang tersedia berjalan dengan baik
   - tambahkan `exact` pada tiap-tiap `<Route>`
3. Buka file `src/pages/Movie.js`, _component_ tersebut merupakan sebuah halaman yang mana akan menampilkan detail dari tiap-tiap `movie`
   - ambil `id` dari `url` saat ini menggunakan fungsi `useParams` yang telah disediakan oleh `react-router-dom`
   - ambil `movie` dimana ia memiliki `mal_id` yang identik dengan `id` yang sebelumnya sudah kita ambil melalui `useParams`
     - **TRUE**: apabila kita menemukan data tersebut maka kita akan menyimpannya di dalam variable `movie`
     - **FALSE**: apabila kita tidak menemukan data tersebut maka lakukan `redirect` ke halaman `/not-found`, untuk melakukan `redirect` kamu dapat menggunakan `<Redirect>`

### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil memperbaiki `<Route>` yang bermasalah serta sudah berhasil membuat sebuah halaman **detail movie** yang mana akan menampilkan **detail movie** serta akan melakukan `redirect` apabila data tersebut tidak ditemukan. Maka kali ini kita akan membuat `filter` untuk halaman **movie list**.

Berikut adalah langkah-langkah pengerjaannya:
1. `copy and paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
2. Lakukan instalasi menggunakan `npm install` atau `yarn`
3. Buka file `src/components/MovieListFilter.js`, *component* ini berfungsi untuk melakukan **filter** terhadap daftar film yang akan kita tampilkan pada `src/pages/MovieList.js`
   - ambil seluruh `query param` menggunakan fungsi `useLocation` yang telah disediakan oleh `react-router-dom`
   - karna `query params` yang telah kita ambil masih dalam bentuk `string` kita perlu merubahnya ke dalam sebuah `object` dengan menggunakan `qs.parse` dimana `qs` itu merupakan sebuah *library* yang dapat membantu kita dalam merubah `query params` menjadi sebuah `object`
   - ubah *default value* pada tiap-tiap `state` yang ada menjadi
     - `show` => `params.show || shows[0]`
     - `category` => `params.category || categories[0]`
     - `sortBy` => `params.sort || fields[0]`
    
      hal ini akan berguna apabila kita baru saja membuka halaman `/movies` dimana ia tidak memiliki satupun `query params`
   - tambahkan fungsi `onClick` pada elemen dengan `id="btn-submit"` yang mana itu akan mengubah `url` menjadi
      ```Javascript
      `/movies/?show=${show}&category=${category}&sort=${sortBy}`
      ```
      kita dapat melakukannya menggunakan fungsi `push` yang dimiliki oleh `useHistory` dimana fungsi tersebut merupakan `builtin function` yang dimiliki oleh `react-router-dom`
4. Buka file `src/pages/MovieList.js`
   - ambil seluruh `query param` menggunakan fungsi `useLocation` yang telah disediakan oleh `react-router-dom`
   - karna `query params` yang telah kita ambil masih dalam bentuk `string` kita perlu merubahnya ke dalam sebuah `object` dengan menggunakan `qs.parse` dimana `qs` itu merupakan sebuah *library* yang dapat membantu kita dalam merubah `query params` menjadi sebuah `object` lalu simpan data tersebut kedalam variable `params`
   - masukan tiap-tiap `query params` yang ada di dalam variable `params` ke dalam variable `filter` hal ini berguna untuk memberikan *default value* apabila kita tidak memiliki satupun `query params`
   - lakukan filtrasi pada variable `movies` menggunakan variable `filter` serta gunakan setiap data yang terdapat didalam variable tersebut
     - `show` => mengambil sejumlah data yang di-inginkan
     - `category` => mengambil `movie` yang mana memiliki `type` yang sama dengan `category` yang diberikan
     - `sort` => melakukan sortasi berdasarkan `title` ataupun `score` dari `movie` tersebut
lalu simpan hasilnya ke dalam variable filteredMovies


## Expected Result
1. Soal - 01

  ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-router-01.gif)

2. Soal - 02

  ![skilvul](./react-router-02.gif)

## Key Learning Points

- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta mampu memahami konsep dari `routing`
- Peserta memahami dan mampu melakukan implementasi `react-router-dom` ke dalam *Functional Component*
- Peserta dapat melakukan *bug fixing* terhadap baris kode yang salah
- Peserta memahami dan mampu menggunakan `builtin function` yang dimiliki oleh `react-router-dom`