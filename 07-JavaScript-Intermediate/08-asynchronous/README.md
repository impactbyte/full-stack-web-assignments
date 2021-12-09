## Specs

### Soal - 01
Buatlah file `01-asynchronous.js` dan copy template soal di bawah. Lalu berikan jawaban sesuai nomor soal yang disediakan. 

Kamu diminta untuk melakukan analisa sederhana mengenai
```Javascript
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i<=5; i++) {
  console.log("first log: ", i); // 01 - Pertama
  setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
```

### Soal - 02
Buatlah file `02-asynchronous.js` dan copy template soal di bawah. Lalu berikan jawaban tersebut pada `02-asynchronous.js`. 

Kamu diminta untuk membuat sebuah fungsi yang akan melakukan pengecekan apakah seseorang sudah memasuki usia dewasa atau tidak, berikut adalah deskripsi fungsi tersebut:
- name => `isR18Plus`
- parameter
  - age [`Number`] => usia user dalam satuan tahun
- *return value* => `Promise`
  - mengembalikan `"anda sudah dewasa"` menggunakan `resolve` apabila `age` user sudah melebihi 18 tahun
  - mengembalikan `"anda masih dibawah umur"` menggunakan `reject` apabila `age` user sudah kurang dari 18 tahun
- clue
  - gunakan `Promise`
  - `resolve` dapat kita gunakan untuk mengembalikan hasil yang benar
  - `reject` dapat kita gunakan untuk mengembalikan hasil yang salah
  - `Error` dapat kita gunakan untuk mengembalikan nilai berupa `reject`


```Javascript
const isR18Plus = ( .... ) => { .... }
const printR18Plus = async () => {
  const underAge = await isR18Plus(10);
  const properAge = await isR18Plus(19);

  console.log(underage);
  console.log(properAge);
}

printR18Plus();
```


### Soal - 03
Buatlah file `02-asynchronous.js` dan copy template soal di bawah. Lalu berikan jawaban tersebut pada `03-asynchronous.js`. 

Kamu diminta untuk membuat sebuah fungsi `getGitHubUser` yang akan mengambil profile dari seorang user pada platform GitHub, fungsi tersebut memiliki deskripsi sebagai berikut:
- nama => `getGitHubUser`
- description => mengambil profile seorang user yang telah terdaftar pada platform GitHub
- parameter
  - username [`String`] => username yang sudah terdaftar pada GitHub
- *return value*
  - mengembalikan `null` apabila parameter bernilai kosong
  - mengambalikan `Object` apabila user telah ditemukan
  - mengembalikan `"not found"` apabila tidak menemukan user dengan `username` yang telah dimasukan oleh user
- clue
  - gunakan fungsi `fetch` untuk mendapatkan data dari GitHub API
  - gunakan konsep `asynchronous` untuk menggambil data menggunakan `fetch`
  - gunakan `try catch` untuk *error handling*
  - berikut merupakan *endpoint* yang dapat kalian gunakan untuk mendapatkan data dari [GitHub API](https://docs.github.com/en/rest/reference/users#get-a-user)

```Javascript
const getGitHubUser = ( .... ) => { .... }
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();
```

### Soal - 04
Kamu diminta untuk membuat sebuah website yang mana akan menampilkan GitHub user, berikut adalah deskripsi dari program yang akan kalian buat:
- buatlah file dengan nama `04-asynchronous.html` dan `04-asynchronous-dom.js`
- *copy and paste* baris kode dibawah sesuai dengan file yang telah ditentukan
- *user* akan memasukan `username` GitHub yang ingin dicari melalui [GitHub API](https://docs.github.com/en/rest/reference/users#get-a-user)
  - apabila kita menemukan *user* tersebut maka ia akan menampilkan hasil seperti dibawah ini
    
    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/08-asychronous-03.png)
  - apabila kita tidak menemukan *user* tersebut maka kita akan menampilkan hasil seperti dibawah

    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/08-asychronous-02.png)

Berikut merupakan langkah-langkah pengerjaan yang dapat kalian ikuti:
1. *copy and paste* fungsi yang sudah kalian buat pada `soal-03` kedalam file `04-asynchronous-dom.js`
2. ambil data dari `form` `"username"` serta jangan lupa untuk menggunakan `preventDefault` untuk mencegah agar jendela *browser* tidak terjadi *refresh*
3. setelah kita mengambil data `"username"`, kita akan mengambil GitHub *user* menggunakan GitHub API

Berikut merupakan *code template* untuk file `04-asychronous.html`
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
            type="username"
            name="username"
            placeholder="Username"
            aria-label="Username"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="card w-100 d-none">
            <img src="" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 id="card-title" class="card-title">Card title</h5>
              <a id="card-btn" href="#" class="btn btn-primary w-100"
                >Read More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script src="./08-asynchronous-dom.js"></script>
  </body>
</html>
```

Berikut merupakan *code template* untuk file `04-asychronous-dom.js`
```Javascript
const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = ( .... ) => { .... };

elFormUsername.onsubmit = (e) => {
  e.preventDefault();
};
```


## Expected Result
1. Soal - 01
   ```
   first log: 1
   first log: 2
   first log: 3
   first log: 4
   first log: 5
   second log: 1
   second log: 2
   second log: 3
   second log: 4
   second log: 5
   ```
2. Soal - 02
    - `underAge` should be `"anda masih dibawah umur"`
    - `properAge` should be `"anda sudah dewasa"`
3. Soal - 03
    - `mojombo` should be an `Object`
    - `orange` should be `null`
    - `rudiTabuti` should be an `"not found"`
4. Soal - 04

    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/08-asynchronous.gif)


## Key Learning Points
- Peserta dapat memahami dan mampu menerapkan konsep `asynchronous`
- Peserta dapat memahami dan mampu menerapkan `Promise`
- Peserta dapat memahami dan mampu menerapkan `fetch`
- Peserta dapat memahami dan mampu menerapkan `DOM`
- Peserta dapat memahami dan mampu menerapkan penggunaan dari `Arrow Function`