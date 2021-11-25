## Description
Buatlah sebuah query sql menggunakan MySQL untuk studi kasus Book Store. Buat 1 file bernama `skilvul_book_store.sql` pada repository GitHub.

## Specs
Kita akan memnggunakan 3 table agar dapat melalakukan relasi dan manipulasi data untuk kedua table.

- CREATE database bernama `skilvulbookstore`
- Buatlah table bernama `penerbit` dengan attribute/column yang berisi:
  - id
    - Tipe data: Integer (10)
    - Not Null
    - Auto Increment
    - Primary Key
  - nama
    - Tipe data: String
    - Max of Length: 50
    - NULL
  - kota
    - Tipe data: String
    - Max of Length: 50
    - NULL
- Buatlah table bernama `penulis` dengan attribute/column yang berisi:
  - id
    - Tipe data: Integer (10)
    - Not Null
    - Auto Increment
    - Primary Key
  - nama
    - Tipe data: String
    - Max of Length: 50
    - NULL
  - kota
    - Tipe data: String
    - Max of Length: 50
    - NULL
- Kita akan melakukan relasi pada  table terakhir yang bernama `buku` terhadap kedua table yang ada. 
  - 1 penerbit dapat memiliki banyak buku
  - 1 buku hanya memiliki 1 penulis
  - - Buatlah table bernama `buku` lengkap dengan relasi terhadap `penulis` dan `penerbit` dengan attribute/column yang berisi:
  - id
    - Tipe data: Integer (10)
    - Not Null
    - Auto Increment
    - Primary Key
  - ISBN
    - Tipe data: String
    - Max of length: 50
    - NULL
  - judul
    - Tipe data: String
    - Max of length: 50
    - NULL
  - penulis
    - Tipe data: String
    - Max of length: 50
    - NULL
  - penerbit
    - Tipe data: Integer (10)
    - NULL
  - harga
    - Tipe data: Integer (10)
    - NULL
  - stock
    - Tipe data: Integer (10)
    - NULL
- Lakukan INNER JOIN dari table `buku` terhadap table `penerbit`
- Lakukan LEFT JOIN dari table `buku` terhadap table `penerbit`
- Lakukan RIGHT JOIN dari table `buku` terhadap table `penerbit`
- Cek nilai MAX dari column `harga` pada table `book` yang memiliki jumlah stok buku di bawah 10
- Cek nilai MIN dari column `harga` pada table `book`
- Gunakan COUNT untuk melihat list data dengan kondisi harga buku di bawah `100000`

## Example of Expected Result
`skilvul_book_store.sql`
```sql
-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE student;

-- Insert Data --
INSERT INTO student (id, name, age) VALUES(1, 'Terra', 2);
```
