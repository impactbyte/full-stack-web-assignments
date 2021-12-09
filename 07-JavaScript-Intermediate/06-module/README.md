## Description
> Buatlah sebuah file sesuai dengan nama `06-module.html` dan `06-module-helpers.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kamu diminta untuk memperbaiki baris kode dibawah agar ia dapat menggunakan fungsi yang berada pada file `06-module-helpers.js`, ada beberapa hal yang perlu kalian perbaiki diantaranya adalah:
1. menambahkan `attribute` yang diperlukan untuk memanggil sebuah `module` JavaScript di dalam `06-module.html`
2. perbaiki proses `import` fungsi `sayHello` yang berada di dalam file `06-module.html`
3. `export` fungsi `sayHello` secara `"default"` agar ia bisa kita panggil secara langsung
4. perbaiki proses eksekusi dari fungsi `sayHello` 


### Soal - 02
Kamu diminta untuk melakukan implementasi terhadap suatu fungsi `greeting` yang mana akan menampilkan sebuah `alert` dengan pesan `"Hello, $NAME"`, berikut merupakan langkah-langkah pengerjaannya:
1. kita perlu meng-*export* fungsi `greeting`, agar ia dapat diakses oleh `<script>` tag didalam file `06-module.html`
2. memanggil fungsi `greeting` didalam file `06-module.html`
3. ambil data `"name"` pada saat user menekan tombol submit<br>(kamu dapat mengggunakan `onclick` atau `onsubmit`)
5. implementasikan fungsi `greeting` serta berikan data `"name"` sebagai parameter dan letakan hasilnya didalam sebuah variable `"message"`
6. buat sebuah alert yang akan menampilkan isi dari variable `"message"`


### Soal - 03
Soal ini berhubungan dengan soal `Javascript Intermediate -> 04-regex-with-dom -> soal-04`, kamu diminta untuk melakukan hal yang sama yaitu melakukan validasi terhadap inputan user yang berupa `email` dan `password`. Pada kesempatan kali ini kita akan melakukan implementasi tersebut menggunakan `module`, berikut adalah lanngkah-langkah pengerjaanya:

1. buat sebuah file dengan nama `06-modules-authentication.js`
2. ambil fungsionalitas untuk melakukan pengecekan terhadap `email` dan `password` dan taruh didalam fungsi dengan spesifikasi berikut:
   - nama => `validateLoginData`
   - 2 parameter
     - email [`String`]
     - password [`String`]
   - *return value* [`String`]
     - mengembalikan `"tolong masukan email yang valid"` apabila email tidak valid
     - mengembalikan `"tolong masukan password sesuai ketentuan"` apabila password tidak valid
     - mengembalikan `"Welcome to The Jungle"` apabila `email` dan `password` valid
3. masukan fungsi `validateLoginData` kedalam file `06-module-authentication.js`
4. `export` fungsi `validateLoginData` sebagai `export default`
5. panggil fungsi tersebut didalam file `06-module.html`
6. ambil data `"email"` dan `"password"` pada saat user menekan tombol login<br>(kamu dapat mengggunakan `onclick` atau `onsubmit`)
7. implementasikan fungsi `validateLoginData` serta berikan data `"email"` dan `"password"` sebagai parameter dan letakan hasilnya didalam sebuah variable bernama `"message"`
8. buat sebuah alert yang akan menampilkan isi dari variable `"message"`

<br>

> Untuk memudahkan proses pengerjaan kami akan memberikan sebuah template dan kamu hanya perlu melakukan sedikit perubahaan pada baris kode yang ada

`06-module.html`
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Skilvul</title>
  </head>
  <body>
    <h3>Greeting Form</h3>
    <form id="form-greeting">
      <label for="name">name</label>
      <input
        autocomplete="off"
        id="input-name"
        type="text"
        name="name"
        id="name"
      />
      <br />
      <button type="submit">submit</button>
    </form>
    <br />
    <h3>Login Form</h3>
    <form id="form-login">
      <label for="email">email</label>
      <input
        autocomplete="off"
        id="input-email"
        type="email"
        name="email"
        id="email"
      />
      <br />
      <label for="password">password</label>
      <input type="text" id="input-password" name="password" id="password" />
      <br />
      <button type="submit">submit</button>
    </form>

    <script>
      // IMPORT HERE
      from sayHello import "06-module.html";

      const elFormGreeting = document.querySelector("#form-greeting");
      const elFormLogin = document.querySelector("#form-login");

      const elInputName = document.querySelector("#input-name");
      const elInputEmail = document.querySelector("#input-email");
      const elInputPassword = document.querySelector("#input-password");

      // EDIT HERE
      sayHello;

    </script>
  </body>
</html>
```

`06-module-helpers.js`
```Javascript
function sayHello() {
  console.log("Hello");
}
```



## Expected Result
1. `"Hello"`
2. Soal - 02
    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/module-01.gif)
3. Soal - 03
    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/module-02.gif)

## Key Learning Points
- Peserta memahami tentang konsep `DOM`
- Peserta memahami tentang konsep `regex`
- Peserta memahami tentang konsep `module`
- Peserta dapat mengimplementasikan `import` dan `export`
- Peserta dapat melakukan *code refactoring* sederhana dengan cara memindahkan suato proses kedalam *function*