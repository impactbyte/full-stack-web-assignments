## Specs

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form

kamu adalah seorang software developer yang bekerja pada sebuah bank swasta lokal, dan kamu diminta untuk membuat sebuah sistem antrian yang mana user harus meng-inputkan nama lalu menekan tombol `submit` agar mendapatkan nomor antrian dengan nama yang telah mereka cantumkan. Tugasmu adalah membuat sebuah sistem dengan spesifikasi sebagai berikut

- user harus memasukan nama mereka terlebih dahulu
- setelah user menkan tombol *submit* maka ambil isi dari tag `input`
- cek apakah *value* dari tag `input` tersebut kosong atau tidak
    - jika kosong maka tampilkan `alert('Kosong!');`
- apabila nama tidak kosong maka kita dapat memasukan nama tersebut kedalam sebuah *variable* `antrians`
- *variable* `antrians` memiliki tipe data *array of object* `[ { name: "NAMA", nomor: 0 }]`
- `nomor antrian` akan memiliki *value* berupa panjang array sekarang (kamu dapat menggunakan salah satu *default property* yang dimiliki oleh *Array*)
- setelah sukses menambahkan nomor antrian, kamu diharuskan untuk menghapus *value* dari tag `input`, agar pendatang baru dapat secara langsung memasukan nama mereka

```html
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

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container my-5">
      <div class="mb-2">
        <label for="nama" class="form-label">Nama</label>
        <input
          type="email"
          class="form-control"
          id="nama"
          placeholder="John Doe"
        />
      </div>
      <button id="btn-submit" class="btn btn-primary w-100">SUBMIT</button>
      <div class="my-3">
        <div id="antrian" class="list-group"></div>
      </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script>
      let antrian = [],
        nama = "";

      const elInput = document.querySelector("#nama");
      const btnSubmit = document.querySelector("#btn-submit");
      const elAntrian = document.querySelector("#antrian");
    </script>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
-->
  </body>
</html>
```

## Expected Result
Untuk melihat hasil yang sudah jadi kalian dapat melihatnya via link [ini](https://xitf0.csb.app/)

## Key Learning Points
- memahami tatacara mengambil dan memanipulasi DOM
- memahami cara penggunaan *event* pada DOM `onclick`
- mengetahui cara menambah nilai dari sebuah *Array `.push`*
- mengetahui *default* *property* yang dimiliki oleh *Arary* `.length`
- mampu membuat sebuah *fungsi*