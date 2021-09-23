## Description
> Buatlah sebuah file sesuai dengan nama `08-dom.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-02-a.png)
Kamu diminta untuk menyelesaikan sebuah sistem katalog sederhana seperti gambar diatas, ada sebuah fitur yang harus kamu kerjakan yaitu `"detail katalog"` dengan spesifikasi sebagai berikut:
- buat katalog menjadi responsive atau dapat menyesuaikan *content* dengan ukuran *device* dari pengguna
- detail katalog berupa sebuah *modal/pop-up* yang akan muncul apabila kita menekan salah satu katalog
- kamu hanya diperbolehkan untuk membuat 1 buah modal, jadi kita nantinya hanya perlu mengubah-ubah isi *content* dari modal tersebut dengan detail katalog yang telah dipilih
- untuk membuat sistematika modal kamu diharuskan menggunakan Javascript DOM, yang nantinya akan melacak katalog mana yang dipilih kemudian akan menampilkan sebuah modal dengan detail dari katalog tersebut

Agar proses pengerjaan lebih mudah, kami sudah menyiapkan *template code* yang dapat langsung kamu gunakan
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

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container py-5">
      <div class="row">
        <!-- COL -->
        <div class="col-3">
          <!-- CARD -->
          <div id="card-01" class="card">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 class="card-title text-capitalize">
                milk based coffee
              </h5>
              <p class="card-text d-none">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                card-id="01"
                href="#"
                class="stretched-link btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#detail-article"
              ></a>
            </div>
          </div>
        </div>
        <!-- COL -->
        <div class="col-3">
          <!-- CARD -->
          <div id="card-02" class="card">
            <img
              
              src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5  class="card-title text-capitalize">
                v60 coffee
              </h5>
              <p  class="card-text d-none">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                card-id="02"
                href="#"
                class="stretched-link btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#detail-article"
              ></a>
            </div>
          </div>
        </div>
        <!-- COL -->
        <div class="col-3">
          <!-- CARD -->
          <div id="card-03" class="card">
            <img
              
              src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5  class="card-title text-capitalize">
                coffee roastery
              </h5>
              <p  class="card-text d-none">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                card-id="03"
                href="#"
                class="stretched-link btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#detail-article"
              ></a>
            </div>
          </div>
        </div>
        <!-- COL -->
        <div class="col-3">
          <!-- CARD -->
          <div id="card-04" class="card">
            <img
              src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5  class="card-title text-capitalize">
                coffee grinder
              </h5>
              <p  class="card-text d-none">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                card-id="04"
                href="#"
                class="stretched-link btn-modal"
                data-bs-toggle="modal"
                data-bs-target="#detail-article"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->
    <script>
      /// EDIT HERE
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


### Soal - 02

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-01-a.png)

Kamu diminta untuk menyelesaikan sebuah sistem komentar yang sudah tersedia dengan bentuk seperti diatas, ada beberapa tambahan yang harus kamu kerjakan salah satunya adalah:
- membuat *comment form* agar pengguna dapat menyampaikan apa yang ingin mereka ungkapkan
- secara *default comment form* tersembunyi, dan akan aktif apabila kita menekan tombol comment
- apabila kita menekan tombol submit pada *comment form*, maka data komentar kita akan berada ditempat teratas dari daftar komentar yang lain
- apabila kita menekan tombol *cancel*, maka *comment form* akan kembali tersembunyi dan akan me-*reset* isi dari *comment form* tersebut
- untuk membuat sistematika komentar tersebut kamu diharuskan menggunakan Javascript DOM, yang nantinya akan mengambil data dari *comment form* dan kemudian akan membuat sebuah *component* HTML baru didalam `list-group`

Agar proses pengerjaan lebih mudah, kami sudah menyiapkan *template code* yang dapat langsung kamu gunakan
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
      crossorigin="anonymous"
    />

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container py-5">
      <div class="row">
        <div
          class="col-6 d-flex flex-column gap-2 justify-content-center align-items-center"
        >
          <div class="card bg-dark text-white">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80"
              class="card-img"
              alt="skilvull"
            />
            <div class="card-img-overlay">
              <h5 class="card-title text-capitalize">milk based coffee</h5>
            </div>
          </div>
          <button id="btn-comment" class="btn btn-primary w-100 text-capitalize">
            write a comment
          </button>
        </div>
        <div class="col-6">
          <ul
            id="comment-list"
            class="list-group list-group-flush overflow-auto"
            style="height: 220px;"
          >
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">john watson</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">marry anne</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">sherlock holmes</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="list-group-item d-flex justify-content-between align-items-start"
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">james moriarty</div>
                Cras justo odio
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Comment Section -->
      <div id="comment-section" class="row d-none">
        
      </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
      crossorigin="anonymous"
    ></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script>
      /// EDIT HERE
    </script>
  </body>
</html>


```



## Expected Result
Untuk melihat hasil yang sudah jadi kalian dapat melihatnya via link
### Soal - 01
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-02.gif)

### Soal - 02
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-01.gif)

## Key Learning Points
- memahami tatacara mengambil dan memanipulasi DOM
- memahami cara penggunaan *event* pada DOM `onclick`
- mengetahui cara menambah nilai dari sebuah *Array `.push`*
- mengetahui *default* *property* yang dimiliki oleh *Arary* `.length`
- mampu membuat sebuah *fungsi*