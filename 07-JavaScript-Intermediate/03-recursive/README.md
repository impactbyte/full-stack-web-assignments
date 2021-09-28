## Description
> Buatlah sebuah file sesuai dengan nama `03-recursive.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kalian diminta untuk membuat sebuah fungsi `sumOfArray` dimana ia akan menghitung total dari sebuah `array of number`, fungsi tersebut memiliki spesifikasi sebagai berikut:
1. fungsi harus ditulis menggunakan `recursive`
2. memiliki 1 parameter:
   - arr [`Array`] => *array of number* yang nanti kita akan cari jumlahnya
3. *return value* [`Number`] => nilai kembalian berupa sebuah `Number`

Untuk mempermudah proses pengerjaan kamu dapat menggunakan *code template* dibawah ini
```Javascript
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray( .... ) { .... }

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));
```

### Soal - 02
Kalian diminta untuk membuat fungsi yang mana akan mencari sebuah nilai didalam `array of number`, fungsi tersebut memiliki spesifikasi sebagai berikut:
1. fungsi harus ditulis menggunakan `recursive`
2. memiliki 2 parameter:
   - arr [`Array`] => array of number yang nanti akan kita cari value-nya
   - numm [`Number`] => angka yang hendak kita cari
3. *return value*:
   - apabila kita tidak menemukan angka tersebut maka kita akan mengembalikan `"angka tidak ditemukan"`
   - apabila kita menemukan angka tersebut maka kita akan mengembalikan `"angka ditemukan pada index: $INDEX"`

```Javascript
const arr = [1, 2, 3, 4, 5];
function searchInArray( .... ) { .... }

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);
```


### Soal - 03
Kalian diminta untuk membuat fungsi yang mana nantinya akan mencetak sebuah piramida, fungsi tersebut memiliki spesifikasi sebagai berikut:
1. fungsi harus ditulis menggunakan `recursive`
2. memiliki 2 parameter yang identik dengan tipe data `Number`, hal ini kita butuhkan untuk membuat sebuah perulangan menggunakan `recursive`
3. bentuk segitiga dapat kalian cetak menggunakan console.log didalam fungsi `trianglePattern`
4. kalian hanya diperbolehkan untuk membuat `"1 BUAH TRADITIONAL LOOP"`, hal ini untuk mempermudah kalian dalam proses penyelesaian tugas.

    akan tetapi kalian juga diperbolehkan untuk menyelesaikan soal ini tanpa menggunakan *traditional loop*

```Javascript
function trianglePattern( .... ) { .... }

trianglePattern(5, 5);
```



## Expected Result
1. Soal - 01
   ```Javascript
   15
   36
   ```
2. Soal - 02
   ```Javascript
   "angka tidak ditemukan"
   "angka ditemukan pada index: 0"
   "angka tidak ditemukan"
   ```
3. Soal - 03
    ```Javascript
    "    A"
    "   BC"
    "  CDE"
    " DEFG"
    "EFGHI"
    ```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta memahami *built-in function* yang dimiliki oleh `String`
- Peserta memahami *built-in function* yang dimiliki oleh `Array`
- Peserta memahami apa itu `recursive` dan cara penggunaannya
- Peserta mampu mengubah traditional loop menjadi recursive