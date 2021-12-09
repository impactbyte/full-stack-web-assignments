## Cara Pengerjaan

Mohon membuat 1 repository Github untuk pengerjaan technical assignment ini. Buatlah masing-masing file didalamnya untuk setiap nomor/project.

Submit Link Repository ke dalam Form Submission.

## Description

> Buatlah sebuah file sesuai dengan nama `10-tailwind-soal-01.html` dan `10-tailwind-soal-02.html`, kemudian *copy and paste code template* yang sudah disediakan kedalam file yang sudah kamu buat lalu jawab seluruh soal yang ada. Kamu dapat menggunakan kode editor kesukaan untuk menjawab soal-soal tersebut. Ada beberapa peraturan yang harus kalian patuhi yaitu:
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar
## Specs

### Soal - 01
Selamat kali ini kamu telah mempelajari tentang bagaimana cara untuk melakukan refactoring UI menggunakan TailwindCSS. Pada kesempatan kali ini kita akan belajar untuk melakukan sedikit refactoring UI terhadap sebuah website sederhana kurang lebih seperti dibawah

![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/tailwind-03.png)


Ada banyak hal yang dapat kita *improve*, namun tidak semua hal yang akan kita perbaiki. Kita hanya akan merombak beberapa bagian saja yaitu:
1. `Navbar`
   - berikan `drop-shadow` sehingga kita dapat menciptakan *depth* antara `navbar` dan `dashboard content`
2. `Sidebar`
   - ubah proporsi `grid` dari `sidebar` menjadi `3/12`
   - untuk memberikan depth antar menu kita dapat melakukan beberapa hal:
     - berikan padding `horizontal=5` dan `vertical=2`
     - berikan border kiri dengan `width=8` dan warna `red-500` serta ubah warna teks menjadi `red-500` hal tersebut agar kita memiliki *visual* *menu* manakah yang sedang aktif
     - berikan `background-color` dengan warna `red-200` dan ubah `cursor` menjadi `pointer` apabila kita melakukan *hover* terhadap sebuah *menu*
     - berikan `letter spacing` pada tiap-tiap *menu* agar kita dapat membaca huruf cetak besar dengan lebih mudah
3. `Content`
   - elemen dengan `id="content"`
    - ubah proporsi `grid` dari elemen tersebut menjadi `9/12`
   - elemen dengan `id="summary-card"`
     - ubah proporsi `grid` dari elemen tersebut menjadi `1/4` untuk masing-masing `card`
     - tambahkan `dropshadow` untuk masing-masing `card` untuk menciptakan kesan *depth*
     - tukar posisi antara label dengan value yang kita tampilkan, hal ini berguna karna kita ingin user fokus pada value bukan label


Berikut merupakan *template code* yang akan kalian gunakan untuk mengerjakan soal diatas
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Skilvul</title>
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div
      class="bg-white max-w-7xl mx-auto flex justify-between items-center px-8 py-4 md:pr-16 md:pl-10 md:py-3"
    >
      <h1 class="text-2xl font-semibold tracking-wide">SKILVUL</h1>
      <div class="relative w-10 h-10 rounded-full block">
        <img
          class="object-cover w-full h-full rounded-full"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt=""
          loading="lazy"
        />
        <div
          class="absolute inset-0 rounded-full shadow-inner"
          aria-hidden="true"
        ></div>
      </div>
    </div>
    <div class="min-h-screen max-w-7xl mx-auto bg-gray-100 grid grid-cols-12">
      <ol class="col-span-4 bg-white block">
        <li
          class="font-medium uppercase"
        >
          home
        </li>
        <li
          class="font-medium uppercase"
        >
          product
        </li>
        <li
          class="font-medium uppercase"
        >
          tag
        </li>
        <li
          class="font-medium uppercase"
        >
          supplier
        </li>
        <li
          class="font-medium uppercase"
        >
          category
        </li>
      </ol>
      <div id="content" class="col-span-8 bg-red-100 p-8 md:px-16 md:py-8">
        <div id="summary-card" class="grid">
          <div
            class="bg-white h-28 w-full p-5 rounded shadow"
          >
            <h1 class="text-4xl">product</h1>
            <p class="text-lg font-light capitalize">2000</p>
          </div>
          <div
            class="bg-white h-28 w-full p-5 rounded shadow"
          >
            <h1 class="text-4xl">tag</h1>
            <p class="text-lg font-light capitalize">47</p>
          </div>
          <div
            class="bg-white h-28 w-full p-5 rounded shadow"
          >
            <h1 class="text-4xl">supplier</h1>
            <p class="text-lg font-light capitalize">260</p>
          </div>
          <div
            class="bg-white h-28 w-full p-5 rounded shadow"
          >
            <h1 class="text-4xl">category</h1>
            <p class="text-lg font-light capitalize">150</p>
          </div>
        </div>
        <div class="my-10">
          <table class="w-full whitespace-no-wrap">
            <thead>
              <tr
                class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b bg-gray-50"
              >
                <th class="px-4 py-3">Client</th>
                <th class="px-4 py-3">Amount</th>
                <th class="px-4 py-3">Status</th>
                <th class="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y">
              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Hans Burger</p>
                      <p class="text-xs text-gray-600">Developer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 12.800.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Jolina Angelie</p>
                      <p class="text-xs text-gray-600">Engineer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 12.300.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-yellow-100 rounded-full"
                  >
                    Pending
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Sarah Curry</p>
                      <p class="text-xs text-gray-600">Designer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 8.600.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full"
                  >
                    Denied
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Rulia Joberts</p>
                      <p class="text-xs text-gray-600">Actress</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 10.200.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Wenzel Dashington</p>
                      <p class="text-xs text-gray-600">Actor</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 13.600.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full"
                  >
                    Expired
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Dave Li</p>
                      <p class="text-xs text-gray-600">Influencer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 8.200.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>

              <tr class="text-gray-700">
                <td class="px-4 py-3">
                  <div class="flex items-center text-sm">
                    <!-- Avatar with inset shadow -->
                    <div
                      class="relative w-8 h-8 mr-3 rounded-full block"
                    >
                      <img
                        class="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        class="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p class="font-semibold">Maria Ramovic</p>
                      <p class="text-xs text-gray-600">Engineer</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-sm">Rp. 7.800.000</td>
                <td class="px-4 py-3 text-xs">
                  <span
                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full"
                  >
                    Approved
                  </span>
                </td>
                <td class="px-4 py-3 text-sm">6/10/2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>
```

### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama, kita akan mengubah website yang sudah kita buat sebelumnya dan memberikan ia kemampuan untuk menjadi `responsive` dengan cara sebagai berikut:
1. `body`
   - berikan batas lebar maksimal dari jendela utama sebesar `7xl`
   - serta atur `margin horizontal` sehingga ia akan tetap berada ditengah-tengah layar
2. `sidebar`
   - sembunyikan atau hilangkan elemen tersebut apabila ukuran layar *user* sudah mencapai `breakpoint=sm`
3. `content`
   - elemen dengan `id="content"`
     - apabila ukuran layar *user* sudah mencapai `breakpoint=sm` atau lebih kecil ubah proporsi `grid` pada elemen tersebut menjadi `12/12` atau ia akan mengambil seluruh tempat yang tersedia
   - elemen dengan `id="summary-card"`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `1/4` apabila ukuran layar *user* sama atau lebih besar dari `breakpoint=md`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `2/4` apabila ukuran layar *user* mencapai `breakpoint=sm`
     - ubah proporsi `grid` pada tiap-tiap elemen `card` menjadi `1/4` apabila ukuran layar *user* lebih kecil dari `breakpoint=sm`
   - `table`
     - hilangkan atau sembunyikan gambar `avatar` apabila ukuran layar *user* sudah mencapai `breakpoint=sm` atau lebih kecil

## Expected Result
### Soal - 01
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/tailwind-01.png)

### Soal - 02
![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/tailwind-02.gif)


## Key Learning Point
- Siswa dapat memahami apa itu `breakpoint` beserta cara penggunaanya pada TailwindCSS
- Siswa dapat menggunakan *basic class* yang dimiliki oleh TailwindCSS
- Siswa dapat memahami dan menggunakan `state` yang dimiliki oleh TailwindCSS
- Siswa dapat memahami dan menerapkan konsep `de-emphasizing` pada proses pembuatan sebuah UI
- Siswa dapat memahami dan menerapkan konsep `focus-point` pada proses pembuatan sebuah UI
- Siswa dapat memahami dan mampu menerapkan penggunaan dari `character spacing`
