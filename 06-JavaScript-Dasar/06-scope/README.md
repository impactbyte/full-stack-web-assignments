## Description
> Buatlah sebuah file sesuai dengan nama `06-scope.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang tertulis pada kolom komentar

```Javascript
/// Soal - 01
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan terjadi apabila kita mencoba menjalankan baris kode dibawah?
/// - apa alasan kenapa hal tersebut bisa terjadi?
///   - dari segi salaryWithVar
///   - dari segi salaryWithConst

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
```

## Key Learning Points
- memahami konsep dari *variable scope*
- memahami perbedaan dari `var`, `let`, dan `const`