## Description
> Buatlah sebuah file sesuai dengan nama `05-function.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang tertulis pada kolom komentar

```Javascript
/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan
///   pajak senilai 10% dari total penghasilanmu saat ini apabila ia memiliki penghasilan
///   lebih dari Rp 5.000.000, apabila kurang maka ia dibebaskan dari pajak atau bernilai 0

/// EDIT HERE
function taxCalc(....) { ... }


/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang dengan detail sebagai berikut:

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (kg)
/// - (Number) `weight` ⇒ berat badan seseorang (cm) 

/// Return Value
/// - (Number) hasil kalkulasi menggunakan formula BMI
///   height / weight^2 * 10000

/// EDIT HERE
function BMI(....) { .... }


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(....) { .... }


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan huruf pertama yang tidak kembar

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya
/// - kembalikan huruf yang tidak sama apabila kita menemukannya
/// - jika tidak kita bisa mengembalikan string kosong

/// EDIT HERE
function nonRepeatChar(....) { .... }
```

## Expected Result
1. Soal - 01
    ```
    salary = 4500000;
    taxCalc should be 0

    #OR

    salary = 7500000;
    taxCacl should be 750000
    ```
2. Soal - 02
    ```
    weight = 80
    height = 170
    BMI should be 27.68
    ```
3. Soal - 03
    ```
    sentence = "hello bandung";
    convToUpperCase should be "Hello Bandung"

    #OR
    sentence = "helloworldwide";
    convToUpperCase should be "Helloworldwide"
    ```
4. Soal - 04
    ```
    word = "alloha"
    nonRepeatChar should be "o"

    #OR
    word = "wooohoowh"
    nonRepeatChar should be ""
    ```

## Key Learning Points
- mampu membuat sebuah *fungsi* yang memiliki sebuah *return value*
- memahami konsep dari *paramter*
- memahami scope dari sebuah kalkulasi matematis