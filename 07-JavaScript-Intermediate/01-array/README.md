## Description
> Buatlah sebuah file sesuai dengan nama `01-array.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kamu diminta untuk membuat sebuah fungsi `reverse` yang mana akan membalik sebuah array, fungsi `reverse` memiliki sepsifikasi sebagai berikut:
- memiliki 1 parameter yaitu:
   - arr [array] => array yang akan kita manipulasi nilainya
- *return value* berupa sebuah `array` baru yang sudah terbalik

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini
```Javascript
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse( .... ) { .... }

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);
```

### Soal - 02
Kamu adalah seorang pada kantor dinas pemerintahan, kemudian atasanmu meminta untuk dibuatkan sebuah fungsi dengan spesifikasi sebagai berikut:
- fungsi tersebut berfungsi untuk memasukan sebuah nilai baru kedalam array
- apabila panjang array termasuk kedalam bilangan PRIMA, maka kita masukan nilai tersebut diawal baris array
- apabila panjang array tidak termasuk kedalam bilangan PRIMA dan ia termasuk bilangan GANJIL, maka masukan nilai baru tersebut ke-akhir baris array
- apabila panjang array tidak termasuk kedalam bilangan PRIMA dan ia termasuk bilangan GENAP, maka masukan nilai baru tersebut ditengah-tengah array

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```Javascript
let arr = [0, 1];

function addNewValueToArray(value) {
  // EDIT HERE
}

for (let i = 2; i < 11; i++) {
  addNewValueToArray(i);
}

console.log(arr);
```


### Soal - 03

```Javascript
const arr = [
  [10]
]
```
## Expected Result
1. Soal - 01
    ```Javascript
    [1, 2, 3], [3, 2, 1]
    [8, 1, 5, 7], [7, 5, 1, 8]
    ```
2. Soal - 02
    ```Javascript
    [7, 5, 3, 2, 8, 10, 6, 4, 0, 1, 9]
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`