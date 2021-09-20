## Specs
> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form

Kamu adalah seorang programmer yang bekerja pada sebuah perusahaan keamanan, kamu diminta untuk melakukan validasi terhadap password yang sudah dimasukan oleh *user*. Tugasmu adalah untuk:

1. mengambil *password* yang sudah dimasukan oleh *user*
2. kriteria password yang diharapkan adalah
   - mengandung huruf besar dan kecil
   - mengandung angka
   - mengandung simbol `(!@#$%^&*)`
   - minimal 8 karakter
3. melakukan pengecekan apakah password tersebut sudah sesuai dengan ketentuan atau tidak, yang mana akan memapilkan *alert* dengan pesan jika:
    - **SESUAI** - `selamat password anda telah memenuhi kriteria`
    - **TIDAK SESUAI** - `tolong masukan password sesuai ketentuan`
4. setiap pesan akan disimpan didalam *variable* `message`, kemudian *alert* akan menampilkan isi dari *variable* tersebut
5. setelah *alert* ditampilkan, maka hapus *password* dari *input field*
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
    <label for="password">Password</label>
    <input type="password" id="password" name="password" />
    <button id="btn-submit" style="display: block; margin-top: 10px">
      submit
    </button>
    <script>
			const check = new RegExp();
			const elInputPassword = document.getElementById('password');
			const elBtnSubmmit = document.getElementById('btn-submit');
			let message = "";
    </script>
  </body>
</html>
```

## Expected Result
- apabila kita berikan *input* `"Ad!n5"` maka hasilnya akan<br>`tolong masukan password sesuai ketentuan`
- apabila kita berikan *input* `"Adm!n123"` maka hasilnya akan<br>`selamat password anda telah memenuhi kriteria`

## Key Learning Point
- dapat memahami kegunaan dan mampu untuk mengimplementasikan `regex`
- memahami konsep dari `DOM`