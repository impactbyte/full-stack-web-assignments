## Description

> Gunakan _template project_ yang berada pada respository https://github.com/impactbyte/shopping-cart untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar

## Specs
Kita akan membuat website grocery shop menggunakan React,js dan React Redux. State management akan digunakan untuk memanage data Cart product yang dipesan, total harga, dan additional shipping.

Aplikasi harus memiliki fitur berikut ini:

**Home Page**
- Add to cart: Ketika user klik product, maka akan menambah 1 unique quantity product pada icon cart (bukan total seluruhya tetapi total unik per product. Misalnya user klik 3x pada card product yang sama, tampilan pada cart tetap 1).

**Checkout Page**
- Menampilkan total quantity yang dimasukkan ke dalam cart
- Dapat menambah dan mengurangi quantity item
- Dapat memilih menggunakan additional shipping atau tidak (OPTIONAL)
- Dapat menghapus masing-masing item
- Menampilkan total pembayaran

### Store
Pada template, `store` sudah disediakan dan sudah dipanggil pada `index.js`.

### Action
Agar susunan kode lebih rapih. Kita membuat `action` kedalam 2 file. 
- File pertama `cartActions.js` berada di dalam folder `action-types` yang berisi list `action` pada aplikasi. Kita menggunakan `const` untuk menghindari duplikasi dan typo saat menggunakan `action`.
- File kedua `cartActions.js` berada di dalam folder `actions` yang berisi logic dari `action` yang ingin kita buat.
- **Buatlah** logic pada setiap `action` yang sudah di sediakan

### Reducer
`reducer` berada di dalam folder `reducers` yaitu `cartReducer.js`.
**Buatlah** beberapa logic untuk `reducer` agar dapat menghandle `action` dengan `type` :
- `ADD_TO_CART` = Menambahkan item ke dalam cart
- `REMOVE_ITEM` = Menghapus quantity item pada halaman checkout
- `ADD_QUANTITY` = Menambah quantity item
- `SUB_QUANTITY` = Mengurangi quantity item
- `ADD_SHIPPING` = Menambah biaya shipping (OPTIONAL)
- `SUB_SHIPPING` = Mengurangi biaya shipping (OPTIONAL)

## Expected Result
https://terra-grocery.netlify.app/
