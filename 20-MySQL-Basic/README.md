## Description
Buatlah sebuah query sql menggunakan MySQL untuk studi kasus Book Store. Buat 1 file bernama `book_store.sql` pada repository GitHub.

## Specs
Buatlah query dari beberapa perintah di bawah ini:
- SHOW database untuk melihat list database yang ada pada mysql
- CREATE database bernama `bookstore`
- USE database `bookstore`
- SHOW seluruh table yang ada pada database `bookstore`
- Buatlah table bernama `books` dengan attribute/column yang berisi
  - id
    - Tipe data: Integer
    - Auto Increment
    - Primary Key
  - author1
    - Tipe data: String
    - Not Null
    - Max length of string: 100
  - author2
    - Tipe data: String
    - Max length of string: 100
  - author3
    - Tipe data: String
    - Max length of string: 100
  - title
    - Tipe data: String
    - Max length of string: 100
  - description
    - Tipe data: String
  - place_sell
    - Tipe data String
    - Fixed length of string: 3
  - stock
    - Tipe data: Integer
    - Default value: 0
  - creation_date
    - Tipe data: Datetime
    - Timestamp
    - Default Value: CURRENT_TIMESTAMP
    - On Update Value: CURRENT_TIMESTAMP
- Pada suatu waktu, kamu harus mengupdate column dari table `books` yang sudah ada. Berikut update yang harus dilakukan:
  - ADD column
    - price
      - Tipe data: Integer
      - Default value: 0
    - status
      - Tipe data: Enum
      - Enum value: 'available', 'out of stock', 'limited'
  - DROP column
    - place_sell
- INSERT 3 data untuk semua column yang ada pada table `books`
- SELECT semua row pada table `books`
- SELECT menggunakan ALIAS. Column `id` digantikan `ID`, `author1` digantikan `A1`, `author2` digantikan `A2`, `author3` digantikan `A3`.
- SELECT data menggunakan WHERE untuk `id` tertentu
- SELECT data menggunakan WHERE untuk dengan operator logical AND
- SELECT data menggunakan WHERE untuk dengan operator logical OR
- SELECT data menggunakan WHERE untuk dengan operator logical NOT
- SELECT seluruh column dari table `bookstore` dan diurutkan secara ASC berdasarkan `id`
- SELECT seluruh column dan berikan LIMIT untuk 2 row saja
- Pilih 1 row untuk dilakukan UPDATE pada column `author1` dan `price`.
- Pilih 1 row untuk dilakukan DELETE

## Example of Expected Result
`book_store.sql`
```sql
-- Show Database --
SHOW DATABASES;

-- Create Database --
CREATE DATABASE student;

-- Insert Data --
INSERT INTO student (id, name, age) VALUES(1, 'Terra', 2);
```
  