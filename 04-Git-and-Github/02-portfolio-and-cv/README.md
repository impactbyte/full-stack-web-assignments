## Description
> Mohon simulasikan perintah dibawah menggunakan perintah command dari terminal. Semua nomor dibawah ini harus dijalankan menggunakan command pada CLI

> Kamu dapat membuat file portfolio-and-cv.md atau portfolio-and-cv.txt lalu didalamnya tuliskan jawaban sesuai nomor perintah pada soal.

Contoh:
1. Create a folder called `git-basic`. **mkdir git-basic**
2. `cd` into the `git-basic` folder. **cd git-basic**
3. ...

## Specs

Kamu adalah seorang programer yang ingin mendaftar kesalahsatu perusahaan terkenal, oleh karena itu kamu sudah memulai untuk mempersiapkan `CV` dan `Portfolio`. Namun kamu tidak ingin membuat banyak `CV` dan `Portfolio` dengan model seperti ini
- `cv.pdf`
- `cv-final.pdf`
- `cv-final-v2.pdf`

Oleh karnanya kamu berinisiatif untuk menggunakan Git, lalu langkah yang kamu lakukan adalah:
1. membuat sebuah folder kosong dengan namamu sendiri
2. membuat sebuah file dengan nama `README.md`, isi file tersebut dengan kalimat<br>`"Halo perkenalkan aku halaman utama"`
3. insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi Git Repository"`
4. buat `branch` baru dengan nama `cv`, hal ini berguna agar histori kita tidak tercampur
5. pindah `branch` kedalam `cv`, kemudian buat file dengan nama `cv.txt` dan isi file tersebut dengan kalimat:<br>`"Ini adalah file CV"`
6. kemudian dokumentasikan menggunakan `commit` dengan pesan<br>`"Inisialisasi CV"`
7. tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan `commit`
8. kembali ke `branch master`
9. ubah file `README.md` menjadi
    ```
    Halo perkenalkan aku halaman utama

    Ini adalah update pertama pada branch master
    ```
    jangan lupa untuk mendokumentasikannya menggunakan `commit` dengan pesan<br>`"update master pertama"`
10. gabungkan `branch cv` kedalam `branch master` menggunakan perintah `git merge`
11. unggah Git Repository tersebut kedalam GitHub

## Expected Result
Untuk mengetahui apakah pekerjaan yang kalian buat sudah sesuai atau tidak, kalian dapat menggunakan perintah `git log --graph` untuk menampilkan grafik dari repository kita.
> Kalian cukup memperhatikan bentuk dari grafik tersebut, karna setiap repository memiliki `hash` atau `author` yang berbeda-beda


![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/git-n-github-01.png)

## Key Learning Point
- peserta dapat menggunakn perintah-perintah git
- peserta mampu menggunakan `git branch`
- peserta mampu menggunakan dan memahami konsep dari `git merge`
- peserta mampu mengunggah local repository ke GitHub Repository