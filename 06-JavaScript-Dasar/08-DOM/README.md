## Description
> Buatlah sebuah file sesuai dengan nama `08-dom-soal-1.html` dan `08-dom-soal-2.html`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-02-a.png)
Kamu diminta untuk menyelesaikan sebuah sistem katalog sederhana seperti gambar diatas, ada sebuah fitur yang harus kamu kerjakan yaitu `"detail katalog"` dengan spesifikasi sebagai berikut:
- detail katalog berupa sebuah *modal/pop-up* yang akan muncul apabila kita menekan salah satu katalog
- kamu hanya diperbolehkan untuk menggunakan 1 buah modal, jadi kita nantinya hanya perlu mengubah-ubah isi *content* dari modal tersebut dengan detail katalog yang telah dipilih
- untuk membuat sistematika modal kamu diharuskan menggunakan Javascript DOM, yang nantinya akan melacak katalog mana yang dipilih kemudian akan menampilkan sebuah modal dengan detail dari katalog tersebut

Berikut adalah langkah-langkah pengerjaan yang dapat kalian lakukan:
1. ambil seluruh elemen dari modal menggunakan (`getElementBy` atau `querySelector`)
2. ambil seluruh katalog yang ada menggunakan (`getElementBy` atau `querySelector`)
3. berikan masing-masing katalog sebuah `eventListener`, jadi nantinya kita akan dapat mengetahui katalog manakah yang dipilih oleh user
4. didalam `eventListener` kita akan mengambil seluruh *content* dari katalog yang sedang aktif antara lain `thumbnail`, `title`, dan `text`
5. apabila ada sebuah katalog yang dipilih oleh user, maka kita akan mengganti seluruh *content* yang ada didalam modal dengan isi dari katalog tersebut

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
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
          <!-- CARD -->
          <div id="card-01" class="card">
            <img
              id="card-01-image"
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 id="card-01-title" class="card-title text-capitalize">
                milk based coffee
              </h5>
              <p id="card-01-text" class="card-text d-none">
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
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
          <!-- CARD -->
          <div id="card-02" class="card">
            <img
              id="card-02-image"
              src="https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 id="card-02-title" class="card-title text-capitalize">
                v60 coffee
              </h5>
              <p id="card-02-text" class="card-text d-none">
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
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
          <!-- CARD -->
          <div id="card-03" class="card">
            <img
              id="card-03-image"
              src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 id="card-03-title" class="card-title text-capitalize">
                coffee roastery
              </h5>
              <p id="card-03-text" class="card-text d-none">
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
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 pt-3">
          <!-- CARD -->
          <div id="card-04" class="card">
            <img
              id="card-04-image"
              src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=30"
              class="card-img-top"
              alt="skilvul"
            />
            <div class="card-body">
              <h5 id="card-04-title" class="card-title text-capitalize">
                coffee grinder
              </h5>
              <p id="card-04-text" class="card-text d-none">
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
      <!-- Modal -->
      <div
        class="modal fade"
        id="detail-article"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-capitalize" id="modal-title">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div id="" class="modal-body">
              <div class="row">
                <div class="col">
                  <img id="modal-image" src="" class="w-100" alt="skilvul" />
                </div>
                <div class="col">
                  <p id="modal-text">Modal Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- JavaScript -->
    <script>
      /// EDIT HERE
    </script>

    <!-- Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```


### Soal - 02

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/js-basic-dom-01-a.png)

Kamu diminta untuk menyelesaikan sebuah sistem komentar yang sudah tersedia dengan bentuk seperti diatas, ada beberapa tambahan yang harus kamu kerjakan salah satunya adalah:
- secara *default comment form* tersembunyi, dan akan aktif apabila kita menekan tombol comment
- apabila kita menekan tombol submit pada *comment form*, maka data komentar kita akan berada ditempat teratas dari daftar komentar yang lain
- apabila kita menekan tombol *cancel*, maka *comment form* akan kembali tersembunyi dan akan me-*reset* isi dari *comment form* tersebut
- untuk membuat sistematika komentar tersebut kamu diharuskan menggunakan Javascript DOM, yang nantinya akan mengambil data dari *comment form* dan kemudian akan membuat sebuah *component* HTML baru didalam `list-group`

Berikut adalah langkah-langkah pengerjaan yang dapat kalian lakukan:
1. berikan `eventListener` pada *comment button*, ketika *button* tersebut ditekan maka kita akan menampilkan `comment-form` dengan cara menghapus class `d-none` dari `comment-form-section`
2. ketika user ingin mengirimkan komentar yang sudah ia tulis didalam `comment-form`, akan tetapi ingat bahwa `form` memiliki sebuah `"kebiasaan"` dimana ia akan melakukan `page refresh` ketika ia di*submit*. *(untuk mengetahui lebih lanjut tentang `"kebiasaan"` yang dimiliki oleh form kamu dapat membaca sebuah aritkel singkat [ini](https://alligator.io/js/preventdefault/))
3. ambil seluruh data yang telah di-masukan oleh user
4. buat sebuah *component* menggunakan `createElement`, buat component tersebut seperti *child element* dari `comment-list` baik dari stuktur DOM ataupun `class` yang digunakan
5. isi *commponent* yang tadi sudah kamu buat dengan data yang telah kammu ambil dari *comment form*
6. tempatkan *component* tersebut sebagai anak pertama dari `comment-list`
7. sembunyikan *comment form* dengan menambahkan `class` dari Bootstrap yaitu `d-none`

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
          class="
            col-6
            d-flex
            flex-column
            gap-2
            justify-content-center
            align-items-center
          "
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
          <button
            id="btn-comment"
            class="btn btn-primary w-100 text-capitalize"
          >
            write a comment
          </button>
        </div>
        <div class="col-6">
          <ul
            id="comment-list"
            class="list-group list-group-flush overflow-auto"
            style="height: 220px"
          >
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">john watson</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">marry anne</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">sherlock holmes</div>
                Cras justo odio
              </div>
            </li>
            <li
              class="
                list-group-item
                d-flex
                justify-content-between
                align-items-start
              "
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold text-capitalize">james moriarty</div>
                Cras justo odio
              </div>
            </li>
          </ul>
        </div>
        <div id="comment-form-section" class="col-12 d-none">
          <form id="comment-form">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Username</label
              >
              <input
                type="text"
                class="form-control"
                id="input-username"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="comment" class="form-label">Comments</label>
              <textarea
                name="comment"
                id="input-comment"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <div>
              <button id="btn-submit" type="submit" class="btn btn-primary">
                submit
              </button>
              <button
                id="btn-cancel"
                type="button"
                class="btn btn-link text-decoration-none"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
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
      const elBtnComment = document.querySelector('#btn-comment');
      const elCommentList = document.querySelector('#comment-list');

      const elCommentSection = document.querySelector('#comment-form-section');
      const elCommentForm = document.querySelector('#comment-form');
      const elInputUsername = document.querySelector('#input-username');
      const elInputComment = document.querySelector('#input-comment');
      const elBtnSubmit = document.querySelector('#btn-submit');
      const elBtnCancel = document.querySelector('#btn-cancel');
      
      // EDIT HERE

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
- mampu membuat sebuah *fungsi*
- memahami tatacara mengambil dan memanipulasi DOM
- memahami tatacara membuat sebuah element menggunakan DOM
- memahami cara penggunaan *event* pada DOM `onclick`
- memahami cara penggunaan *event* pada DOM `onsubmit`