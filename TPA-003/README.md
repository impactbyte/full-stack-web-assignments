# Web Development Basic Stage

## Technical Project Assignment (TPA) #3 - Movie App with TMDB API

### Specs

1. Buatlah aplikasi website menampilkan list Movie menggunakan data external API [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction)
2. Kamu harus sign up terlebih dahulu untuk mendapatkan API Key pada [TMDB API](https://www.themoviedb.org/documentation/api)
3. Tampilkan list movie (judul, tanggal rilis, dan rating) dengan kategori terpopuler menggunakan endpoint berikut `/discover/movie?api_key=your_api_key&sort_by=popularity.desc`. Kamu dapat melihat lebih lengkap melalui halaman [documentation](https://developers.themoviedb.org/3/discover/movie-discover)
4. Untuk membatasi list movie yang akan ditampilkan kita akan menggunakan query string `page` yang disediakan pada [documentation](https://developers.themoviedb.org/3/discover/movie-discover), sehingga endpoint yang digunakan menjadi `/discover/movie?api_key=your_api_key&sort_by=popularity.desc&page=1`
5. Untuk fitur search gunakan endpoint berikut ini `/search/movie?api_key=your_api_key&query=${search_key}&page=1` atau sesuai yang ada pada [documentation](https://developers.themoviedb.org/3/search/search-movies)
6. Tampilah website harus sudah responsive
7. Peserta diperbolehkan menggunakan Bootstrap

### Expected Result

- Homepage

![Homepage](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/tpa-003-homepage.png)

- Search Page
  ![Search Page](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/tpa-003-search-page.png)

## Penilaian

Penilaian akan dilakukan dari beberapa hal:

1. Kode HTML, CSS, dan JavaScript yang terorganisasi dengan baik
2. Logic yang sesuai dengan kebutuhan pada aplikasi
3. Tampilan dan output sesuai dengan **Expected Result**
4. Kemampuan peserta menggunakan Git & GitHub
5. Website sudah responsive
6. Kemampuan peserta melakukan integrasi API
7. Kemampuan peserta dalam mendeploy aplikasi website
