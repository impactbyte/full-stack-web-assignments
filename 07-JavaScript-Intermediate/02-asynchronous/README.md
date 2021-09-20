## Specs

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form`

Pada kesempatan kali ini kita akan belajar untuk mengambil data dari [jsonplaceholder](https://jsonplaceholder.typicode.com/), tugasmu adalah untuk mengambil seluruh `post` yang dibuat oleh *user* yang memiliki website bernama `kale.biz`. Langkah pengerjaan:

1. segala perubahan hanya terjadi didalam fungsi `getData`
2. proses pengambilan data diwajibkan untuk menggunakan `async & await`
3. ambil *user* yang memiliki webiste bernama `kale.biz`
4. ambil segala post yang telah dibuat oleh user tersebut
5. fungsi `getData` akan mengembalikan data dengan format<br>`{ user: { ... }, posts: [ ... ] }`

Untuk mempermudah penggunaan kami sudah menyiapkan sebuah template code, dan tugasmu adalah untuk menyelesaikan tiap soal yang ada. 
```JS
async function getData() {
	// Edit down here
}

(async () => {
  const result = await getData();
  console.log(result);
})();
```

## Expected Result
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/JS-ES6+-+Fetch+-+01.png)

## Key Learning Points
- Peserta mampu memahami konsep dari `asynchronous`
- Peserta mampu memahami dan menerapkan `fetch`
- Peserta mampu memahami dan menerapkan `async` dan `await`
- Peserta mampu untuk membaca dan memahami struktur dari *public API*