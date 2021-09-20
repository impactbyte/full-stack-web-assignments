## Spec

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form

Kamu adalah seorang web developer yang bekerja disalah satu perusahaan mabel di Jepara, kamu diminta untuk membuat sebuah website e-commerce dengan kemampuan untuk menyesuaikan ukuran layar pengguna. Ada 3 jenis layar yang diminta oleh kantor yaitu:

- `993px >= x` itu merupakan layar pengguna laptop atau desktop dan akan menampilkan 4 produk tiap barisnya
- `993px <= x` itu merupakan layar pengguna tablet atau laptop dengan ukuran kecil dan akan menampilkan 2 produk tiap barisnya.
- `601px <= x` itu merupakan layar pengguna smartphone dan akan menampilkan 1 produk tiap barisnya.

> Untuk memudahkan proses pengerjaan kami akan memberikan sebuah template dan kamu hanya perlu melakukan sedikit perubahaan pada baris kode yang ada

```HTML
<html>
<head>
  <meta charset="UTF-8" />
  <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body>
  <div>
    <div>
      <h2>Product Catalog</h2>
    </div>
    <div>
      <div>
        <div>
          <img src="https://i.ibb.co/9tCzqJn/table.jpg" />
        </div>
        <div>
          <div>Desk Premium Minimalist</div>
          <div>
            Rp. 2.000.000
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://i.ibb.co/74JGzv6/132740841-786589258558594-4194410694909276386-n.jpg"
          />
        </div>
        <div>
          <div>
            Sofa Premium Luxury Minimalist
          </div>
          <div>
            Rp. 6.000.000
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://i.ibb.co/jgfLbC0/122932090-854040925414348-5103797897736027606-n.jpg"
          />
        </div>
        <div>
          <div>Chair Japan Style</div>
          <div>
            Rp. 2.000.000
          </div>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://i.ibb.co/yn7BTJ5/153328710-171527754562720-6800206499215241017-n.jpg"
          />
        </div>
        <div>
          <div>Codeline Bed Frame</div>
          <div>
            Rp. 5.000.000
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

## Expected Result
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/responsive-web-design-01.gif)

## Key Learning Points
- Peserta dapat memahami dan mampu mengimplementasikan konsep dari Responsive Web Design
- Peserta dapat memahami kegunaan dari tools RWD seperti `viewport`, `media query`, dan `relative size`
- Peserta mampu menggunakan layout tools seperti `flexbox` dan `grid`