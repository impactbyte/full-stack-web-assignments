## Description
Kita akan membuat sebuah aplikasi counter sederhana yang fokus pada penggunaan React Context.

Aplikasi ini terdiri dari 2 halaman:
- Page Counter: Menampilkan counter dan dapat menambahkan/mengurangi counter
- Page View Counter: Menampilkan data counter yang didapatkan dari Page Counter

Gunakan template yang ada pada repository https://github.com/impactbyte/counter-app-react-context. Clone dan jalankan menggunakan `yarn start` atau `npm start`. Isilah titik-titik kode yang ada pada template.

## Specs
**Context**

Kita akan membuat count context pada file `CountContext.js`.
- Buatlah logic di dalam `countReducer` menggunakan `switch case` untuk menghandle case `increment` dan `decrement`. Untuk `case` default sudah disediakan.
- Buatlah logic di dalam `CountProvider` yang memiliki props `children`. `CountProvider` digunakan untuk mengirimkan context ke berbagai component yang membutuhkannya. 
  - Gunakan `useReducer` yang berisi nilai default `countReducer` dan `{count: 0}`
  - Kirim `value` yang berisi object `state` dan `dispatch` ke dalam `CountContext.Provider`
- Buatlah logic di dalam `useCount` yang nantinya akan digunakan setiap component jika ingin mendapatkan data dari `CountContext`.
  - Buatlah variable menggunakan `const` bernama `context` yang berisi nilai dari `useContext(CountContext)`
- `export` `CountProvider` dan `useCount`

**Page Counter**

- Gunakan `state` `count` yang ada pada `CountContext` untuk menampilkan data counter
- Gunakan `dispatch` yang ada pada `CountContext` untuk menghandle `increment` dan `decrement`

**Page View Counter**

- Gunakan `state` `count` yang ada pada `CountContext` untuk menampilkan data counter

## Expected Result
![React Context GIF](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/react-context.gif)
  