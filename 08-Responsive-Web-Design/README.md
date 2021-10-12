## Cara Pengerjaan

Mohon membuat 1 repository Github untuk pengerjaan technical assignment ini. Buatlah masing-masing file didalamnya untuk setiap nomor/project.

Submit Link Repository ke dalam Form Submission.

## Description

> Buatlah sebuah file sesuai dengan nama `08-rwd-soal-01.txt`, `08-rwd-soal-02.html`, dan `08-rwd-soal-03.html`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Spec

### Soal - 01
Kamu diminta untuk melakukan analisa sederhana terhadap beberapa masalah dan tuliskan jawaban kamu di dalam file `08-rwd-soal-01.txt`.
1. Apa itu `responsive web design`?
2. Sebutkan apa saja `relative units` yang dimiliki oleh `CSS`?
3. Apa itu `breakpoint`? Bagaimana cara kita membuat hal tersebut?
4. Apa yang dapat kita gunakan untuk memanipulasi tata letak suatu `element` dalam bidang 1 dimensi?
5. Apa yang dapat kita gunakan untuk memanipulasi tata letak suatu `element` dalam bidang 2 dimensi?

### Soal - 02
Kamu diminta untuk memperbaiki baris kode dibawah dengan detail deskripsi sebagai berikut:
- *copy n paste* baris kode dibawah kedalam file `08-rwd-soal-02.html`
- kalian hanya diperbolehkan untuk menggubah `css` didalam tag `<style>` saja dan tidak dengan `element` HTML
- tag `<body>`
  - berikan `background-color` dengan warna `"lightgray"`
  - ubah `font-family` dengan `"Arial, Helvetica, sans-serif"`
- elemen yang memiliki `id="title"`
  - buat elemen tersebut menjadi rata tengah
- elemen yang memiliki `id="container"`
  - berikan lebar maksimal sebesar `1200px`
  - atur elemen tersebut sehingga ia rata tengah
  - atur `padding` atas dan bawah sebanyak `5em`
  - atur `margin` dan berikan ia nilai `"auto"`
- elemen yang memiliki `class="item"`
  - berikan `background-color` dengan warna `"white"`
  - atur lebar yang dimiliki elemen tersebut menjadi `22%`
  - serta atur lebar minimal dari elemen tersebut sebesar `200px`
  - atur `margin` dan berikan ia nilai `"0.5em"` 
  - atur `display` dan berikan ia nilai `"inline-block"`
- atur lebar tag `<img>` didalam elemen yang memiliki `class="item"` menjadi `100%`
- atur `padding` pada elemen yang memiliki `class="item-body"` menjadi `1em`
- elemen yang memiliki `class="item-title"`
  - buat elemen tersebut menjadi rata tengah
  - *reset* margin menjadi `"0"`, kemudian atur `margin-bottom` menjadi `1em`
- atur tiap tag `<button>` didalam elemen yang memiliki `class="item-body"`
  - berikan `background-color` dengan warna `"lightgreen"`
  - atur lebar elemen menjadi `100%`
  - atur `padding` sebesar `0.5em`
  - hilangkan seluruh `border`
  - atur `cursor` menjadi sebuah `pointer`
  - atur teks menjadi cetak tebal
  - ketika elemen tersebut di*hover* maka
    - ubah `background-color` dengan warna `"green"`
    - ubah warna teks menjadi putih


```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>SKILVUL</title>
    <style>
    </style>
  </head>
  <body>
    <h1 id="titile">Relative Unit</h1>
    <div id="container">
      <div class="item">
        <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTI1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul">
        <div class="item-body">
          <h5 class="item-title">coffee beans</h5>
          <button>BUY</button>
        </div>

      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1593543294918-ca3634e04cdb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTAzNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul">
        <div class="item-body">
          <h5 class="item-title">cafe latte</h5>
          <button>BUY</button>
        </div>
      </div>
      <div class="item">
        <img src="https://images.unsplash.com/photo-1504627298434-2119d6928e93?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTEwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul">
        <div class="item-body">
          <h5 class="item-title">pour over coffee</h5>
          <button>BUY</button>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1567357502214-dd13f3512e71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZmb2dhdG98fHx8fHwxNjMzOTM5NTQ0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul">
        <div class="item-body">
          <h5 class="item-title">affogato</h5>
          <button>BUY</button>
        </div>
      </div>
    </div>
  </body>
</html>
```

### Soal - 03
Kamu diminta untuk memperbaiki baris kode dibawah dengan detail deskripsi sebagai berikut:
- *copy n paste* baris kode dibawah kedalam file `08-rwd-soal-03.html`
- kalian hanya diperbolehkan untuk menggubah `css` didalam tag `<style>` saja dan tidak dengan `element` HTML
- berikan `flexbox` terhadap elemen dengan `class="flex"`
  - orientasi *default* berupa `row`
    - akan tetapi ketika ukuran mengecil maka ia akan menjadi `column`
  - elemen dengan `class="content"` akan memiliki ukuran `5 flex`
    - pada saat ukuran layar kecil maka ia memiliki ukuran `flex auto`
    - elemen ini akan berbalik memiliki `order 2`
  - sedangkan elemen dengan `class="categories` akan memiliki ukuran `2 flex`
    - pada saat ukuran layar kecil maka ia memiliki ukuran `flex auto`
    - elemen ini akan berbalik memiliki `order 1`
- elemen dengan `class="list-item"`
  - memiliki `flex` dengan orientasi `column`
  - memiliki `align-items` dengan nilai `center`
- elemen dengan `class="item"`
  - memiliki `flex` dengan orientasi `row`
    - anak pertama memiliki ukuran `1 flex`
    - anak kedua memiliki ukuran `2 flex`
    - akan tetapi ketika ukuran layar menjadi kecil maka
      - mengubah orientasi dari `row` menjadi `column`
      - mengubah ukuran `flex` dari kedua anak menjadi `auto`
      - menghilangkan elemen dengan `class="item-text"`

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Skilvul</title>
    <style>
      body {
        background-color: lightgray;
      }
      .container {
        max-width: 1200px;
        margin: 2em auto;
      }

      .content {
        height: 100%;
        background-color: white;
        padding: 0.5em;
      }

      .categories {
        height: 100%;
        background-color: white;
        padding: 0.5em;
      }

      .categories-item {
        display: block;
        padding: 0.5em;
        text-decoration: none;
        color: black;
      }
      .categories-item:hover {
        background-color: gray;
        color: white;
      }

      .item-body > h5 {
        margin: 0;
        margin-bottom: 1em;
        text-align: center;
        text-transform: capitalize;
      }
      .item-body > button {
        width: 100%;
        background: lightgreen;
        padding: 0.5em;
        font-weight: bold;
        border: none;
        cursor: pointer;
      }
      .item-body > button:hover {
        background: green;
        color: white;
      }


      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .container {
          margin: 1em;
        }
      }

    </style>
  </head>
  <body>
    <div class="container">
      <div class="flex">
        <div class="content">
          <h3>content</h3>
          <div class="list-item">
            <div class="item">
              <div class="item-thumbnail">
                <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTI1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul" class="item-image">
              </div>

              <div class="item-body">
                <h5 class="item-title">coffee beans</h5>
                <p class="item-text">A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.</p>
                <button>BUY</button>
              </div>
            </div>
            <div class="item">
              <div class="item-thumbnail">
                <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTI1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul" class="item-image">
              </div>

              <div class="item-body">
                <h5 class="item-title">coffee beans</h5>
                <p class="item-text">A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.</p>
                <button>BUY</button>
              </div>
            </div>
            <div class="item">
              <div class="item-thumbnail">
                <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTI1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul" class="item-image">
              </div>

              <div class="item-body">
                <h5 class="item-title">coffee beans</h5>
                <p class="item-text">A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.</p>
                <button>BUY</button>
              </div>
            </div>
            <div class="item">
              <div class="item-thumbnail">
                <img src="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=450&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29mZmVlfHx8fHx8MTYzMzkzOTI1NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=450" alt="skilvul" class="item-image">
              </div>

              <div class="item-body">
                <h5 class="item-title">coffee beans</h5>
                <p class="item-text">A coffee bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry.</p>
                <button>BUY</button>
              </div>
            </div>
          </div>
        </div>
        <div class="categories">
          <a class="categories-item" href="#">HTML</a>
          <a class="categories-item" href="#">CSS</a>
          <a class="categories-item" href="#">Javascript</a>
          <a class="categories-item" href="#">Frontend</a>
          <a class="categories-item" href="#">Backtend</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## Expected Result
2. Soal - 02

    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/rwd-01.gif)
3. Soal - 03

    ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/rwd-02.gif)

## Key Learning Points
- Peserta dapat memahami dan mampu mengimplementasikan konsep dari Responsive Web Design
- Peserta dapat memahami kegunaan dari tools RWD seperti `viewport`, `media query`, dan `relative size`
- Peserta mampu menggunakan layout tools seperti `flexbox` dan `grid`
