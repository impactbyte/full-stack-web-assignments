## Description
> Buatlah sebuah file sesuai dengan nama `08-asynchronous`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

### Soal - 01
Kamu diminta untuk melakukan analisa sederhana mengenai
```Javascript
// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
for (var i = 1; i<=5; i++) {
  console.log(i); // 01 - Pertama
  setTimeout(() => console.log(i), 100); // 02 - Kedua
}
```

### Soal - 02
Kamu diminta untuk membuat sebuah fungsi yang akan menghentikan waktu selama `N` *time*, berikut adalah spesifikasi dari fungsi tersebut:
- nama => `stopTheTime`
- description => fungsi akan mengehentikan waktu selama `N` *milisecond*, kamu bisa menggunakan `Promise` untuk membuat fungsi ini
- parameter
  - ms [`Number`] => lama waktu yang ingin kita hentikan dalam satuan *milisecond*
- *return value* => `Promise`

```Javascript
const stopTheTime = ( .... ) => { .... }
const mainFunc = async () => {
  console.log("satu");
  await stopTheTime(3000);
  console.log("dua"); // "dua" akan tercetak setelah selang waktu selama 3000 ms atau 3 detik

  console.log("tiga");
  await stopTheTime(1000);
  console.log("empat"); // "dua" akan tercetak setelah selang waktu selama 1000 ms atau 1 detik
}

mainFunc();
```


### Soal - 03
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
const thridQuestion = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

thridQuestion();
```

### Soal - 04
Pada soal kali ini kamu diminta untuk mendapatkan *followers* dari seorang GitHub user dengan cara membuat sebuah fungsi  `getGitHubUserFollowers`, berikut merupakan spesifikasi dari fungsi tersebut:
- nama => `getGitHubUserFollowers`
- description => mengambil *followers* dari seorang GitHub user
- parameter
  - username [`String`] => username yang sudah terdaftar pada GitHub
- *return value*
  - mengembalikan `null` apabila parameter bernilai kosong
  - mengambalikan `Array of Object` apabila user telah ditemukan dan ia memiliki lebih dari 0 *followers*
  - mengembalikan `Empty Array` apabila user telah ditemukan akan tetapi ia tidak memiliki *followers*
- clue
  - gunakan fungsi `fetch` untuk mendapatkan data dari GitHub API
  - gunakan konsep `asynchronous` untuk menggambil data menggunakan `fetch`
  - gunakan `try catch` untuk *error handling*
  - berikut merupakan *endpoint* yang dapat kalian gunakan untuk mendapatkan data dari [GitHub API](https://docs.github.com/en/rest/reference/users#list-followers-of-a-user)

Berikut merupakan langkah-langkah pengerjaan yang dapat kalian ikuti:
1. buatlah fungsi `getGithuUserFollowers` yang mana ia akan menggunakan konsep `asynchronous`
2. fungsi tersebut haruslah sesuai dengan spesifikasi yang telah diberikan
3. sebelum mengambil *followers* dari seorang GitHub user, kamu haruslah mengambil *profile* mereka terlebih dahulu menggunakan fungsi `getGitHubUser`, apabila:
   - user ditemukan, kita akan melanjutkan proses pengambilan data menggunakan GitHub API
   - user tidak ditemukan, kita tidak perlu melanjutkan proses untuk mengambil user memalui GitHub API

```Javascript
const getGithuUserFollowers = ( .... ) => { .... }

const fourthQuestion = ( .... ) => {
  const mojomboFollowers = await getGithuUserFollowers("mojombo");
  const orangeFollowers = await getGithuUserFollowers("orange");
  const ujangFollowers = await getGithuUserFollowers("ujang");

  console.log(mojomboFollowers);
  console.log(orangeFollowers);
  console.log(ujangFollowers);
}
```


## Expected Result
3. Soal - 03
  - `mojombo` should be an `Object`
  - `orange` should be `null`
  - `rudiTabuti` should be an `"not found"`
4. Soal - 04
  - `mojomboFollowers` should be an `Object`
  - `orangeFollowers` should be `null`
  - `ujangFollowers` should be an `Empty Array`


## Key Learning Points
- Peserta dapat memahami dan mampu menerapkan konsep `asynchronous`
- Peserta dapat memahami dan mampu menerapkan `Promise`
- Peserta dapat memahami dan mampu menerapkan penggunaan dari `Arrow Function`
- Peserta dapat memahami dan mampu menerapkan penggunaan dari `Arrow Function`