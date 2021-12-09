## Description
Kita akan melakukan testing pada React App menggunakan Jest.

Gunakan template yang ada pada repository https://github.com/impactbyte/react-testing-with-jest. Clone dan jalankan menggunakan `yarn start` atau `npm start`. Isilah titik-titik kode yang ada pada template.

Terdapat 2 file yang ingin kita lakukan testing yaitu `Math.js` dan `App.js`

File testing terdapat pada folder `__tests__` yaitu Math.test.js dan `App.test.js`.

**`Math.js`**

Terdapat 3 function yang harus dilakukan testing yaitu `Add`, `Substract`, dan `Multiplication`.

Template testing sudah disiapkan di dalam file `Math.test.js`. Yang perlu kamu lakukan adalah:
1. Membuat unit testing untuk method `Add`. Gunakan mathers `toBe()`.
2. Membuat unit testing untuk method `Substract`. Gunakan mathers `toBe()`.
3. Membuat unit testing untuk method `Multiplication`. Gunakan mathers `toBe()`.

Gunakan metode *Arrange, Act, dan Assert* pada setiap unit testing.

**`App.js`**

Jika aplikasi kamu jalankan menggunakan `yarn start` atau `npm start` maka aplikasi ini akan menampilkan todolist sederhana. Kamu dapat melihat default todolist dan menambahkan todolist.

Template testing untuk `App.js` sudah disiapkan pada file `App.test.js`. Yang perlu kamu lakukan adalah:
1. Membuat unit testing pada method `AddTodo` untuk memastikan bahwa setiap user yang **menambahkan** todolist akan membuat list pada todolist bertambah. Gunakan matchers `toBe()`
2. Membuat unit testing pada method `AddTodo` untuk memastikan bahwa todolist yang baru tidak mereplace daftar todolist sebelumnya. Gunakan matchers `not.toBe()`

## Expected Result
`npm run test`

![React Testing](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-testing.png)

`npm start`

![Todolist](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/todolist-react-testing.png)