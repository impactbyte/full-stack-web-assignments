## Description
> Buatlah sebuah file sesuai dengan nama `01-array.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kamu diminta untuk membuat sebuah fungsi `reverse` yang mana akan membalik sebuah array, fungsi `reverse` memiliki sepsifikasi sebagai berikut:
- memiliki 1 parameter yaitu:
   - arr [Array] => array yang akan kita manipulasi nilainya
- *return value* [`Number`] berupa sebuah `array` baru yang sudah terbalik

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
Kamu diminta untuk membuat sebuah fungsi yang akan mengembalikan total berapa elemen bilangan/number yang melebihi nilai rata-rata dari sebuah array, fungsi tersebut memiliki spesifikasi sebagai berikut:

- memiliki 1 parameter:
  - arr [`Array of Number`] => array 1 dimensi dengan nilai `Number`
- *return value* [`Number`] total angka yang melebihi nilai rata-rata

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini

```Javascript
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage( .... ) { .... }

console.log(getAverage(arr1))
console.log(getAverage(arr2))
```


### Soal - 03
Kamu diminta untuk membuat sebuah fungsi yang mana akan mencari sebuah elemen didalam `array` multi dimensi, fungsi tersebut memiliki spesifikasi sebagai berikut:
- memiliki 2 parameter:
  - arr [`Array`] => array multi dimensi yang akan kita proses
  - num [`Number`] => angka yang ingin kita cari
- *return value* [`Number`]
  - fungsi akan mengembalikan `null` apabila angka yang dicari tidak ditemukan
  - fungsi akan mengembalikan `index` dari angka yang dicari

Langkah-langkah pengerjaan:
- karna fungsi tersebut menerima sebuah array multi dimensi maka kita perlu merubahnya kedalam 1 dimensi terlebih dahulu
- setelah array 1 dimensi terbentuk, maka kita bisa mencari nilai yang ingin dicari oleh user
- apabila kita tidak menemukan nilai tersebut maka kembalikan `null`
- dan apabila kita menemukan nilai tersebut, maka kita akan mengembalikan index dari nilai tersebut (index dalam bentuk 1 dimensi bukan multi dimensi)

```Javascript
const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray( .... ) { .... }

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
```
## Expected Result
1. Soal - 01
    ```Javascript
    [1, 2, 3], [3, 2, 1]
    [8, 1, 5, 7], [7, 5, 1, 8]
    ```
2. Soal - 02
    ```Javascript
    2 // Ada 2 bilangan yang melebihi nilai rata-rata yaitu 4 & 8
    3 // Ada 3 bilangan yang melebihi nilai rata-rata yaitu 6, 7, dan 8
    ```
3. Soal - 03
    ```Javascript
    null
    4
    null
    5
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta memahami cara penggunaan *built-in function* dari `array`
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`