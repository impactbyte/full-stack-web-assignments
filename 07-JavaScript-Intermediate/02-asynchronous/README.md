## Specs

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form`

Pada kesempatan kali ini kita akan belajar untuk mengambil data dari [jsonplaceholder](https://jsonplaceholder.typicode.com/), tugasmu adalah untuk mengambil seluruh `post` yang dibuat oleh *user* yang memiliki website bernama `kale.biz`. Langkah pengerjaan:

1. segala perubahan hanya terjadi didalam fungsi `getUser` & `getUserPosts`
2. proses pengambilan data diwajibkan untuk menggunakan `async & await`
5. fungsi `getUser` akan mengambil user dengan nama website `kale.biz`
6. fungsi `getUserPosts` akan mengambil seluruh postingan user dengan id sesuai dengan parameter yang diberikan

Untuk mempermudah penggunaan kami sudah menyiapkan sebuah template code, dan tugasmu adalah untuk menyelesaikan tiap soal yang ada. 
```JS
const getUser = async () => {
	/// EDIT DOWN HERE
}

const getUserPosts = async (userId) => {
  /// EDIT DOWN HERE
}

(async () => {
  const user = await getUser();
  const posts = await getUserPosts(user.id);
  const result = { user, posts }
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