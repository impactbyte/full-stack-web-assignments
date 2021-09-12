## Specs

Kamu adalah seorang petualang yang tidak bisa diam disuatu tempat, namun pandemi ini sangatlah berat dan mau tidak mau kamu harus dirumah. Semua berubah setelah vaksin masuk negara kita dan kamu langsung bergerak untuk memsan tiket perjalanan. Tugasmu adalah membuat sebuah fungsi `isAllowedToTravel` untuk melakukan pengecekan apakah orang tersebut dapat bepergian atau tidak yang mana ia akan memiliki 1 parameter berupa object:

- `nama` ⇒ nama penumpang yang ingin bepergian
- `jenis tes` ⇒ jenis test yang dia terima ("pcr", "swab", "rapid")
- `sudah vaksin` ⇒ keterangan apakah penumpang sudah vaksin atau belum

Fungsi tersebut memiliki kriteria seperti dibawah:
- hanya menerima jenis tes `"swab"`, selain itu maka penumpang tidak diperbolehkan untuk bepergian
- apabila jenis tes yang diambil sudah sesuai, maka ia perlu dicek apakah sudah vaksin atau belum dan setiap penumpang wajib untuk sudah melakukan vaksinansi

## Expected Result

- apabila data penumpang sebagai berikut, maka hasilnya adalah `true`
  ```jsx
  const passanger = {
    nama: "muklisin",
    "jenis tes": "swab",
    "sudah vaksin": true
  }
  ```

- akan tetapi apabila data penumpang tersebut seprti ini maka hasilnya adalah `false`
  ```jsx
  const passanger = {
    nama: "rahmat",
    "jenis tes": "swab",
    "sudah vaksin": false
  }
  ```

## Key Learning Points
- memahami tatacara penggunaan dari `if else` *conditions*
- mampu membuat *nested condition* menggunakan `if else`
- mampu membuat sebuah *fungsi* yang memiliki sebuah *return value*
- memahami konsep dari *paramter*