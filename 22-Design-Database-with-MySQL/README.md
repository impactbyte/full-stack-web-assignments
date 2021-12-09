## Description
Buatlah ERD yang berisi skema database untuk aplikasi Music Streaming. Kamu diminta dapat menentukan entity, menentukan attribute pada entity, membuat relasi antar entity, dan membuat beberapa query dengan menggunakan MySQL

## Story
Skilvul Music Player adalah sebuah layanan online music player.

Layanan ini menawarkan pencarian lagu, penyanyi, dan album yang bisa di dengarkan.

Pengguna layanan ini bisa melakukan pencarian berdasarkan judul lagu, nama penyanyi, ataupun judul album. Pengguna juga bisa membuat berbagai macam personal playlist favorite untuk nantinya di dengarkan kembali.

Agar user bisa menggunakan berbagai macam layanan dari Skilvul Music Player, user diwajibkan mendaftar dan login ke dalam aplikasi.


## Specs
### Tugas 1 - ERD Diagram
- Gunakan beberapa pilihan website di bawah ini untuk membuat ERD yang berisi entity, attribute, dan relasi antar entity
  - [ERD Plus](https://erdplus.com/)
  - [Draw io](https://draw.io)
  - [Diagrams](https://diagrams.net)
  - [Plant UML](https://plantuml.com)
  - [DB Diagram](https://dbdiagram.io/)
  - [SQLDBM](https://sqldbm.com/)
  - [Lucidchart](https://www.lucidchart.com/pages/)
- Buatlah beberapa entity dibawah ini:
  - `User`
  - `Singer`
  - `Track`
  - `Album`
  - `Playlist`
- Relasi antar entity adalah
  - 1 `User` bisa memiliki 0 atau lebih `Playlist`
  - 1 `Singer` bisa memiliki 1 atau lebih `Track`
  - 1 `Album` bisa memiliki 1 atau lebih `Track`
  - 1 `Playlist` bisa memiliki 1 atau lebih `Track` dan 1 `Track` bisa ada di banyak `Playlist`. Untuk relasi many to many, kita butuh entity tambahan sebagai penghubung, (conjunction)

- Entity `User` mempunyai beberapa attribute yaitu:
  - `user_id` (int)
  - `name` (varchar)
  - `email` (varchar)
  - `password` (varchar)
- Entity `Singer` mempunyai beberapa attribute yaitu:
  - `singer_id` (int)
  - `name` (varchar)
- Entity `Track` mempunyai beberapa attribute yaitu:
  - `track_id` (int)
  - `title` (varchar)
  - `singer_id` (int)
  - `album_id` (int)
- Entity `Album` mempunyai beberapa attribute yaitu:
  - `album_id` (int)
  - `name` (varchar)
  - `singer_id` (int)
- Entity `Playlist` memiliki beberapa attribute yaitu:
  - `playlist_id` (int)
  - `user_id` (int)
  - `tracks` (int)

### Tugas 2 - Query
- Buatlah query SQL untuk membuat seluruh entity/table dari ERD yang telah dibuat

## Expected Result
### Tugas 1
Upload ERD yang telah dibuat ke dalam Repository GitHub. Format boleh berupa .png, .jpg, atau .pdf

### Tugas 2
Buatlah file `skilvul_music_streaming.sql` pada Repository GitHub yang berisi seluruh query yang diminta.

```sql
-- Example of Expected Result--

-- CREATE TABLE --
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);
```