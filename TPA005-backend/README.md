# **Back End Web Dev Stage**

## **Technical Project Assignment (TPA) #5 - Web Service & RESTful API for ToDoList Application**

### **Specs**

- Buatlah sebuah Web Service dan RESTful API untuk sebuah ToDoList Application.
- Web service dan RESTful API yang dibuat harus menggunakan `Express.js`.
- Web service dan RESTful API yang dibuat harus bisa digunakan untuk CRUD standar sebuah ToDoList.
- Database bisa menggunakan MySQl atau MongoDB.
- Jika menggunakan database MySQL, maka gunakan `sequelize-cli` untuk membuat `model`, `migration`, dan `seeder`, dan gunakan `sequelize` untuk mengakses database.
- Jika menggunakan database `MongoDB`, maka gunakan `mongoose` untuk mengakses database.
- Minimal ada endpoint untuk:
  - Membuat user baru (Register)
  - Login
  - Membuat todo baru
  - Melihat semua todo
  - Melihat detail todo
  - Mengubah todo
  - Menghapus todo
  - Menghapus semua todo
- Harus menerapkan `authentication` dan `authorization`.
- Harus menerapkan `response code` yang sesuai.
- Buatlah sebuah file `readme.md` yang berisi dokumentasi dari web service dan RESTful API yang dibuat.
- Deploy web service dan RESTful API yang dibuat ke cloud platform (`Heroku`, `AWS`, `Google` `Cloud`, `Azure`, dsb).

> **Catatan:** untuk deployment ke cloud platform, silahkan menggunakan tutorial akan diinformasikan oleh instruktur.

## **Penilaian**

Penilaian akan dilakukan dari beberapa hal:

1. Rancangan database yang dibuat.
2. `Model`, `migration`, dan `seeder` yang dibuat (jika menggunakan `MySQL`) / `model` dan `schema` yang dibuat (jika menggunakan `MongoDB`).
3. Clean code architecture yang digunakan.
4. Kode yang dibuat sudah bisa digunakan untuk CRUD standar sebuah ToDoList.
5. Keunikan dan kreativitas dari web service dan RESTful API yang dibuat.
6. Dokumentasi dari web service dan RESTful API yang dibuat.
