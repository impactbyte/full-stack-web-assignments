## Description
> Buatlah sebuah file sesuai dengan nama `07-web-storage-01.txt`, `07-web-storage-02.html`, dan `07-web-storage-dummy-data.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs

### Soal - 01
Kamu diminta untuk melakukan analisa sederhana terhadap beberapa masalah dan tuliskan jawaban kamu di dalam file `07-web-storage-01.txt`.
1. Apa itu `localStorage`?
2. Apa itu `cookies`?
3. Apa perbedaan antara `localStorage` dan `sessionStorage`?

### Soal - 02
Kamu diminta untuk membuat sebuah fitur login sederhana menggunakan HTML dan JavaSript, berikut adalah langkah-langkah yang dapat kamu ambil untuk menyelesaikan masalah tersebut:
1. buat file `07-web-storage-02.html` dan  `07-web-storage-dummy-data.js`
2. **copy** dan **paste** semua data dari `dummy-data.js` ke   `07-web-storage-dummy-data.js`
3. cek apakah di dalam `sessionStorage` sudah terdapat sebuah data dengan kunci `"username"`, apabila iya maka
   - hilangkan class `d-none` pada element dengan id `div-username`, serta sembunyikan `form` dengan cara menambahkan class `"d-none"` serta
   - berikan `innerHTML` *element* yang memiliki id `username` dengan isi `username` yang sudah kita ambil melalui `sessionStorage`
4. Jika belum, maka: 
    - ambil data `username` ketika user menekan tombol `login`
    - simpan `username` kedalam `sessionStorage` dengan nama kunci `"username"`
    - hilangkan class `d-none` pada element dengan id `div-username`, serta sembunyikan `form` dengan cara menambahkan class `"d-none"`
    - berikan `innerHTML` *element* yang memiliki id `username` dengan isi dari `username` yang sudah dimasukan oleh user

### Soal - 03
Kali ini kita akan menambahkan fitur pertemanan pada aplikasi yang sudah kita buat pada pertanyaan sebelumnya dan gunakan sebelumnya yaitu `07-web-storage-02.html` dan `07-web-storage-dummy-data.js`, fitur tersebut memiliki spesifikasi sebagai berikut:
1. seorang user dapat memiliki banyak teman
2. user dapat melakukan *follow* atau *unfollow*
3. *follow* akan menambahkan teman kedalam data following
4. sedangkan *unfollow* akan menghapus teman dari data following 
5. serta kita akan menampilkan berapa banyak teman yang sudah kita miliki menggunakan `badge` yang ada di dalam elemen `button`

Berikut merupakan langkah-langkah yang dapat kalian gunakan untuk menyelesaikannya:
1. cek apakah di dalam `localStorage` terdapat sebuah `key` bernama `username` dari user yang login saat ini
2. apabila data tersebut ditemukan dan user sudah login maka kita perlu:
   - menampilkan jumlah teman yang didapatkan dari  `07-web-storage-dummy-data.js` menggunakan `badge`, `badge` berada di dalam element yang memiliki id `badge-user`
   - mengubah button `follow` menjadi `unfollow` dan berwarna hijau, apabila orang tersebut sudah ada di dalam daftar teman kita
3. menambahkan action di dalam setiap card button
   - apabila user tidak ada di dalam daftar pertemanan maka ketika kita menekan tombol `follow` ia akan:
     - menambahkan data orang tersebut kedalam daftar teman. Kemudian kita perlu menyimpan daftar pertemanan tersebut ke dalam `localStorage` untuk `key` `username` yang sekarang sedang login
     - ubah teks dari tombol `follow` menjadi `unfollow`
     - ubah warna tombol menjadi hijau dengan cara menambahkan `btn-success`, dan jangan lupa untuk menghapus warna tombol sebelumnya
   - apabila user sudah ditemukan maka ketika kita menekan tombol `unfollow` ia akan:
     - menghapus orang tersebut dari daftar pertemanan kemudian kita perlu menyimpan ulang daftar pertemanan tersebut ke dalam `localStorage` untuk `key` `username` yang sama
     - ubah teks dari tombol `unfollow` menjadi `follow`
     - ubah warna tombol menjadi biru dengan cara menambahkan `btn-primary`, dan jangan lupa untuk menghapus warna tombol sebelumnya

Berikut merupakan *template code* untuk file `07-web-storage-02.html` 
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <title>Skilvul</title>
  </head>
  <body>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Skilvul</a>
        <form id="form-username" class="d-flex">
          <input
            class="form-control me-2"
            type="text"
            placeholder="Username"
            aria-label="username"
            name="username"
          />
          <button class="btn btn-outline-primary" type="submit">login</button>
        </form>
        <div id="div-username" class="d-none d-flex">
          <button
            type="button"
            class="my-auto btn btn-primary btn-sm position-relative h-50"
          >
            <span id="username"></span>
            <span
              id="badge-user"
              class="top-0 position-absolute start-100 translate-middle badge rounded-pill bg-danger d-none"
            >
              10
              <span class="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    </nav>

    <div class="container py-5">
      <div id="list-user" class="row"></div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script type="module">
      import githubUsers from "./07-web-storage-dummy-data.js";

      const elFormUsername = document.querySelector("#form-username");
      const elDivUsername = document.querySelector("#div-username");
      const elUsername = document.querySelector("#username");
      const elListUser = document.querySelector("#list-user");
      const elBadgeUser = document.querySelector("#badge-user");

      // WEB STORAGE
      let username = sessionStorage.getItem("username");
      let profile = localStorage.getItem(username ? username : "");

      githubUsers.forEach((user) => {
        const elCol = document.createElement("div");
        elCol.classList.add("col-xs-12", "col-sm-6", "col-md-4", "col-lg-3");

        const elCard = document.createElement("div");
        elCard.classList.add("card");

        const elCardImg = document.createElement("div");
        elCard.classList.add("card-img-top");
        elCard.setAttribute("src", user.avatar_url);

        const elCardBody = document.createElement("div");
        elCardBody.classList.add("card-body");

        const elCardTitle = document.createElement("div");
        elCardTitle.classList.add("card-title");
        elCardTitle.innerHTML = user.login;

        const elCardButton = document.createElement("button");
        elCardButton.classList.add("btn", "btn-primary", "w-100");
        elCardButton.setAttribute("type", "button");
        elCardButton.innerHTML = "Follow";

        elCardBody.appendChild(elCardTitle);
        elCardBody.appendChild(elCardButton);
        elCard.appendChild(elCardBody);
        elCard.appendChild(elCardImg);
        elCol.appendChild(elCard);

        elListUser.appendChild(elCol);
      });

    </script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

  </body>
</html>

```

## Expected Result

2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/web-storage-01.gif)
3. Soal - 03

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/web-storage-02.gif)


## Key Learning Points
- Peserta mengetahui dan dapat mengimplementasikan `DOM`
- Peserta mengetahui dan dapat mengimplementasikan `Array`
- Peserta mengetahui dan dapat mengimplementasikan `Object`
- Peserta mengetahui apa itu `web-storage`
- Peserta mengetahui perbedaan antara `web-storage` satu dengan yang lainnya
- Peserta mampu melakukan implementasi dari `web-storage`