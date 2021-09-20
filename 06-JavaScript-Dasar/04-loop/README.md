## Specs

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form

Kamu adalah seorang yang ingin memulai perjalanannya didunia finansial, kemudian anda memutuskan untuk mengawalinya dengan mencatat seluruh pengeluaran yang telah kamu lakukan. Tugasmu adalah membuat fungsi `totalExpense` dengan kriteria seperti berikut:

- menghitung pengeluaran berdasarkan kategorinya
- tidak akan menghitung pengeluaran yang bersifat produktif
- nilai kembali berupa sebuah `object` dengan nama kategori dan nominal pengeluaran pada kategori tersebut

| keterangan | harga  | produktif |
|------------|--------|-----------|
| makan      | 10000  | false     |
| makan      | 900000 | true      |
| gadget     | 350000 | false     |
| household  | 125000 | true      |
| household  | 50000  | true      |
| gadget     | 400000 | false     |
| gadget     | 780000 | true      |

## Expected Result
Berdasarkan data diatas maka kita akan mendapatkan hasil sebagai berikut
```jsx
{ gadget: 750000, makan: 10000 }
```

## Key Learning Points
- memahami tatacara penggunaan dari `for of loop`
- mengetahui cara mengambil nilai dari sebuah *Array*
- mampu membuat sebuah *fungsi*
- memahami konsep dari *paramter*