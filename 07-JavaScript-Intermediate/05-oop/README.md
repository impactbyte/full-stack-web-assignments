## Description
> Buatlah sebuah file sesuai dengan nama `05-oop.js`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan dibawah ini secara benar dan ikuti instruksi yang ada

### Soal - 01
Kalian diminta untuk melakukan sebuah analisis sederhana terhadap sebuah baris kode

```Javascript
// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
  fun1: function() {
    console.log("fun1", this);
  },
  fun2: () => {
    console.log("fun2", this);
  }
};

obj.fun1();
obj.fun2();
```

### Soal - 02
Kalian diminta untuk membuat sebuah analisa terhadap beberapa pertanyaan dibawah:
```Javascript
// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
```

### Soal - 03
Kamu diminta untuk membuat sebuah `class` dengan spesifikasi sebagai berikut:
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/OOP-01.png)
1. `class` tersebut benama `Phone`
2. memiliki 3 `properties` yaitu:
   - brand: String
   - storage: Number
   - ram: Number
3. memiliki 4 method yaitu:
   - `getBrandName` [`String`] => akan mendapatkan isi dari `field` brand
   - `setBrandName` [`void`] => akan mengubah nilai dari `field` brand
   - `printSpecification` [`void`] => mencetak spesifikasi dari ponsel tersebut dengan format `"Ponsel ini memiliki storage: $STORAGE dan ram: $RAM"`
   - `setSpecification`  [`void`] => akan mengubah nilai dari `field` storage dan ram

Untuk mempermudah pengerjaan kami sudah menyediakan *code template*
```Javascript
class Phone { .... }

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();
```


### Soal - 04
Kamu diminta untuk membuat beberapa `class` dengan spesifikasi sebagai berikut:

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/oop-001.png)

1. `Course`
   - `properties`:
     - subject [`String`] => nama pelajaran
     - quota [`Number`] => jumlah peserta atau siswa
     - attendance [`Number`] => jumlah minimum kehadiran sebagai syarat untuk mengikuti ujian
   - `methods`:
     - `getSubject` [`String`] => mengembalikan nama `course` saat ini
     - `getAttendance` [`Number`] => mengembalikan attenance `course` saat ini
     - `decreaseQuota` [`void`] => mengurangi jumlah quota dengan 1
   - `childs`:
     - `CourseOffering`
2. `CourseOffering`
   - `parrent`:
     - `Course` class
   - `properties`:
     - course [`String`] => mata pelajran yang diambil oleh siswa
     - grade [`Number`] => nilai yang diraih oleh siswa
     - attendance [`Number`] => total kehadiran siswa pada suatu kelas, secara *default* dia memiliki nilai 0
3. `Student`
   - `properties`:
     - name [`String`] => nama lengkap siswa
     - gender [`String`] => jenis kelamin
     - courseOfferings [`Array of CourseOffering`] => daftar mata pelajaran yang diambil oleh siswa
   - `methods`:
     - `takeNewCourse` [`void`] => fungsi ini akan menambahkan course yang ingin kita ambil kedalam *property* `courseOfferings`, kita tidak boleh mengambil atau menambahkan mata pelajaran yang sudah kita ambil kedalam *property* `courseOfferings`
     - `courseAttendance` [`void`] => menambahkan kehadiran dengan 1 poin
     - `courseTest` [`void`] => akan memasukan nilai secara acak kedalamm *property* `grade`, namun sebelum kita dapat mengambil ujian kita haruslah lolos absensi terlebih dahulu

```Javascript
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.courseOfferings = [];
  }
  
  takeNewCourse(....) { .... }
  
  takeATest(....) { .... }
  
  courseAttendance(....) { .... }
}

class CourseOffering { .... }

class Course { .... }


const biology = new Course("biology", 10, 3);
const physics = new Course("physics", 10, 2);

const johnWatson = new Student("john watson", "male");

johnWatson.takeNewCourse(biology);
johnWatson.takeNewCourse(physics);

johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(physics);
johnWatson.courseAttendance(biology);
johnWatson.courseAttendance(physics);

console.log(biology.quota);
console.log(physics.quota);

johnWatson.takeATest(biology);
johnWatson.takeATest(physics);

console.log(johnWatson.courseOfferings);
```



## Expected Result
1. Soal - 03
   ```Javascript
   "Skilvul Mobile co"
   "SM.co"
   "Ponsel ini memiliki storage: 64 dan ram: 4"
   "Ponsel ini memiliki storage: 32 dan ram: 2"
   ```
2. Soal - 04
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/OOP-03.png)

## Key Learning Points
- Peserta memahami tentang konsep `Object Oriennted Programming`
- Peserta memahami cara pembuatan sebuah `class`, `property`, dan `method`
- Peserta mampu membaca `class diagram` sederhana, dan melakukan implementasi terhadapnya