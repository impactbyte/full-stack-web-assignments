## Description
Buatlah proses authentication menggunakan session based (cookie) dan token based (JWT).

## Specs
### Tugas 1 - Session Based Authentication
- Buat project Node.js menggunakan `npm init-y`
- Instal beberapa package yang dibutuhkan
  - Express - a web framework for Node.js used to create HTTP web servers. Express provides an easy-to-use API to interact with the webserver.
  - Express-session - an HTTP server-side framework used to create and manage a session middleware. This tutorial is all about sessions. Thus Express-session library will be the main focus.
  - Cookie-parser - used to parse cookie header to store data on the browser whenever a session is established on the server-side.
  - Gunakan command berikut `npm install express express-session cookie-parser`
- Buatlah file `app.js`
- Import seluruh package yang telah diinstal dan setup web server `express`
- Lakukan setup `express-session` pada file `app.js` untuk beberapa key berikut:
  - `secret`
  - `saveUninitialized`
  - `cookie`
  - `resave`
- Set cookie sebesar 1 menit
- Kita akan menggunakan view secara langsung dari `express`. Buatlah folder `views` pada root aplikasi kita. Pada folder tersebut kita akan membuat file `index.html` dan `app.css`. Gunakan template yang sudah tersedia. Kita akan menampilkan form login untuk menjalankan proses authentication.
- Buatlah proses parser HTML Form pada `express` setiap ada request login pada HTML menggunakan `.json(), .urlencoded, dan .static()`
- Define cookie parser middleware agar server dapat menyimpan, membaca, dan mengakses cookie
- Gunakan dummy data untuk credential dan variabel untuk menyimpan data session yaitu
  ```js
  const myusername = 'user1'
  const mypassword = 'mypassword'

  var session;
  ```
- Terakhir kita akan membuat 3 routes
  - `/`
  This will render and serve the HTML form to the client to fill in the login credentials. If the user is logged in, we’ll display a logout link.
  - `/user`
    - To create a session, the user will submit the credentials. The server will verify these credentials received in the request’s body with the username and the password for the existing user.
    
    - If the credentials are valid:

      The user will be granted the necessary access.
      The server will create a temporary user session with a random string known as a session ID to identify that session.
      The server will send a cookie to the client’s browser. The session ID is going to be placed inside this cookie.

    - If the credentials are invalid, the server will not grant this user access to the resources. No session will be initialized, and no cookie will be saved.
  - `/logout`
  This will define the logout endpoint. When the user decides to log out, the server will destroy (req.session.destroy();) the session and clear out the cookie on the client-side. Cookies are cleared in the browser when the maxAge expires.
- Jalankan aplikasi menggunakan `node app.js`

### Tugas 2 - Token Based Authentication
Pada tugas 2, kita akan membuat aplikasi manajemen buku perspustakaan sederhana dengan konsep micro-service untuk menerapkan authentication and authorization menggunakan JWT. Service pertama yaitu bertanggung jawab untuk menghandle authentication user dan service kedua untuk manajemen buku.

- Buatlah project baru menggunakan `npm init -y`
- Install package `express`

**Authentication Service**
- Buatlah file `auth.js` yang akan digunakan untuk service yang pertama
- Setup web server menggunakan port `3000`
- Idealnya kita menggunakan database untuk menyimpan data user. Namun untuk mempersingkat kita akan menggunakan `array of object` saja.
- Ada 2 role user yaitu `admin` dan `member`. `admin` dapat menambah buku dan melihat buku. Namun `user` hanya dapat melihat buku. Kita akan menggunakan array dibawah ini
  ```js
  const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
  ];
  ```
- Install package di bawah ini
  - `jsonwebtoken` => Untuk generate dan verivy JWT token
  - `body-parser` => middleware untuk parse JSON body dari the HTTP request
- Gunakan package `jsonwebtoken` dan `body-parser`
- Buatlah token secret to sign the JWT Token. Jangan pernah share token secret dengan orang lain.
  ```js
  const accessTokenSecret = 'youraccesstokensecret';
  ```
- Buatlah handler post untuk route `/login` untuk menghandle a user yang matches dengan username dan password pada request body. Kemudian kita akan generate access token with a JSON object with the username dan the role of the user. Jika data tidak match handler harus mengembalikan `Username or password incorrect`.
- Jalankan service dengan menggunakan `node auth.js`

### Expected Result Tugas 1
Gunakan Postman atau Insomnia untuk melakukan post request.

Let's send a `POST` request to the http://localhost:3000/login endpoint with the following JSON:
```js
{
    "username": "terra",
    "password": "password123admin"
}
```
You should get the access token as the response:
```js
{
  "accessToken": "eyJhbGciOiJIUz..."
}
```
![image1](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/authentication-and-authorize-1-1.png)

**Books Service**
- Buat file `books.js`
- Setup web server menggunakan port `4000`
- Idealnya kita menggunakan database untuk menyimpan data buku. Namun untuk mempersingkat kita akan menggunakan `array of object` saja. Kita akan menggunakan data array di bawah ini:
  ```js
  const books = [
  {
    "author": "Robert Martin",
    "country": "USA",
    "language": "English",
    "pages": 209,
    "title": "Clean Code",
    "year": 2008
  },
  {
    "author": "Dave Thomas & Andy Hunt",
    "country": "USA",
    "language": "English",
    "pages": 784,
    "title": "The Pragmatic Programmer",
    "year": 1999
  },
  {
    "author": "Kathy Sierra, Bert Bates",
    "country": "USA",
    "language": "English",
    "pages": 928,
    "title": "Head First Java",
    "year": 2003
  },
  ];
  ```
- Gunakan package `jsonwebtoken` dan `body-parser`
- Buatlah token secret to sign the JWT Token. Jangan pernah share token secret dengan orang lain.
  ```js
  const accessTokenSecret = 'youraccesstokensecret';
  ```
- Buatlah function express middleware dengan nama `authenticateJWT` untuk menghandle proses authorization user yang telah login untuk proses verifikasi token JWT.
- Gunakan function middleware pada 2 routes yang akan kita buat:
  - GET `/books` => Mengembalikan data seluruh buku (`member` and `admin`)
  - POST `/books` => Menambahkan data buku (only `member`)

### Expected Result Tugas 2
Gunakan Postman atau Insomnia untuk melakukan post request.

Let's send a `GET` request to the http://localhost:4000/books endpoint.
![image1](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/authentication-and-authorize-1-3.png)

Let's send a `POST` request to the http://localhost:4000/books endpoint with the following JSON:
```js
{
    "author": "Kyle Simpson",
    "country": "USA",
    "language": "English",
    "pages": 226,
    "title": "You don't know JS",
    "year": 2014
}
```
You should get the response:
```js
"book added successfully"
```
![image1](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/authentication-and-authorize-1-2.png)
