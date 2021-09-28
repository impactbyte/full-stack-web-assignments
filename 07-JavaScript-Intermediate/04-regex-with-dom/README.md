## Description
> Buatlah sebuah file sesuai dengan nama `04-regex-with-dom.html`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kamu adalah seorang programmer yang bekerja pada sebuah perusahaan keamanan, kamu diminta untuk melakukan validasi terhadap sistem registrasi pelanggan, berikut merupakan langakah-langkah yang dapat kamu ambil untuk menyelesaikan tugasmu:

1. menggambil data dari inputan user baik itu `"email"` ataupun `"password"`
3. kriteria password yang diharapkan adalah
   - mengandung huruf besar dan kecil
   - mengandung angka
   - mengandung simbol `(!@#$%^&*)`
   - minimal 8 karakter
4. melakukan pengecekan apakah email tersebut sudah sesuai dengan ketentuan atau tidak, yang mana akan memapilkan *alert* dengan pesan jika:
    - **SESUAI** - melanjutkan ketahap selanjutnya yaitu validasi password
    - **TIDAK SESUAI** - `tolong masukan email yang valid`
5. melakukan pengecekan apakah password tersebut sudah sesuai dengan ketentuan atau tidak, yang mana akan memapilkan *alert* dengan pesan jika:
    - **SESUAI** - `Welcome to The Jungle`
    - **TIDAK SESUAI** - `tolong masukan password sesuai ketentuan`
6. setelah *alert* ditampilkan, maka hapus *password* dari *input field*
<br>

> Untuk memudahkan proses pengerjaan kami akan memberikan sebuah template dan kamu hanya perlu melakukan sedikit perubahaan pada baris kode yang ada

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Skilvul</title>
  </head>
  <body>
    <label for="email">Email</label>
    <input type="email" id="email" name="email" />
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <button id="btn-submit" style="display: block; margin-top: 10px">
      submit
    </button>
    <script>
      /// EDIT DOWN HERE
    </script>
  </body>
</html>
```

> - kamu hanya diperkenankan untuk mengubah baris kode didalam tag `<script>`
> - hasil haruslah sesuai dengan ekspektasi yang telah diberikan

## Expected Result
- apabila kita berikan *email* = `"me@mailco"` dan *password* `"Adm!n123"` maka hasilnya akan<br>`tolong masukan email yang valid`
- apabila kita berikan *email* = `"me@mail.co"` dan *password* `"Ad!n5"` maka hasilnya akan<br>`tolong masukan password sesuai ketentuan`
- apabila kita berikan *email* = `"me@email.com"` dan *password* `"Adm!n123"` maka hasilnya akan<br>`Welcome to The Jungle`

## Key Learning Point
- Peserta memahami *built-in function* yang dimiliki oleh `String`
- Peserta memahami *built-in function* yang dimiliki oleh `Array`
- dapat memahami kegunaan dan mampu untuk mengimplementasikan `regex`
- memahami konsep dari `DOM`