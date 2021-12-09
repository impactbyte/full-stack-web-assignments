## Description

> Gunakan _template project_ yang berada pada folder `soal-01` untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan di bawah ini secara benar dan ikuti instruksi yang ada. Pada 2 soal di bawah ini kita harus menggunakan *Functional Component* serta gunakan `styled-components` untuk melihat detail dokumentasi.

### Soal - 01

Kamu diminta untuk membuat *component* menggunakan `styled-components` yang terdapat pada *template code*, berikut adalah langkah-langkah pengerjaannya:
1. Lakukan instalasi React.js dari _template project_ yang sudah disediakan pada folder `soal-01` menggunakan `npm install` atau `yarn`
2. Buatlah functional component dengan nama `Card.js` di dalam folder `src/components`.
3. Buatlah folder `styles` di dalam `src/components`
4. Kita akan melakukan styling `Card` component menggunakan `styled-component`. Buatlah file `Card.js` di dalam folder `src/components/styles`.
5. `import` library `styled-component` pada file `Card.js` yang ada pada `src/components/styles`. Lakukan beberapa styling berikut: 

- Styling untuk **container** dari component `Card`. 
   - buatlah sebuah `styled-components` menggunakan `<div>` dengan nama `CardContainer`
   - export `CardContainer` agar dapat digunakan pada component `Card`
   - berikan ia `border` dengan deskripsi sebagai berikut:
     - warna: `rgba(192, 192, 192, 0.5)`
     - tebal: `1px`
     - jenis garis: `solid`
   - berikan ia `border-radius` dengan ukuran `0.5em`
   - berikan ia `width` dengan ukuran default `100%` dan apabila ia meneripa sebuah `props.width` maka ukuran dari `width` tersebut akan mengikuti `props` yang  sudah kita berikan
   - serta tambahkan baris kode berikut untuk memberikan efek `shadow`
      ```CSS
      -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
      ```
- Styling untuk **image** dari component `Card`
  - buatlah sebuah `styled-components` menggunakan tag `img` dengan nama `CardImage`
  - export `CardImage` agar dapat digunakan pada component `Card`
  - berikan ia `width` dengan ukuran `100%`
  - berikan ia `border-top-left-radius` dengan ukuran `0.5em`
  - berikan ia `border-top-right-radius` dengan ukuran `0.5em`

- Styling untuk **body** dari component `Card`
  - buatlah sebuah `styled-components` menggunakan tag `div` dengan nama `CardBody`
  - export `CardBody` agar dapat digunakan pada component `Card`
  - berikan ia `padding` dengan ukuran `1em`

- Styling untuk **price** dari component `Card`
  - buatlah sebuah `styled-components` menggunakan tag `h5` dengan nama `CardPrice`
  - export `CardPrice` agar dapat digunakan pada component `Card`
  - berikan ia `font-family` dengan `sans-serif`
  - berikan ia `font-size` dengan ukuran `1.25em`
  - berikan ia `font-weight` dengan ukuran `600`
  - reset `margin` menjadi `0`, kemudian berikan ia `margin-bottom` sebesar `0.5em`

- Styling untuk **product name** dari component `Card`
  - buatlah sebuah `styled-components` menggunakan tag `h6` dengan nama `CardProductName`
  - export `CardProductName` agar dapat digunakan pada component `Card`
  - berikan ia `font-family` dengan `sans-serif`
  - berikan ia `font-size` dengan ukuran `1.25em`
  - berikan ia `font-weight` dengan ukuran `600`
  - reset `margin` menjadi `0`, kemudian berikan ia `margin-bottom` sebesar `0.5em`
  - berikan ia `color` berupa `gray`
--------------------------------------------------------
6. Buatlah functional component dengan nama `Button.js` di dalam folder `src/components`.
7. Kita akan melakukan styling `Button` component menggunakan `styled-component`. Buatlah file `Button.js` di dalam folder `src/components/styles`.
8. `import` library `styled-component` pada file `Button.js` yang ada pada `src/components/styles`. Lakukan beberapa styling berikut:

- Styling untuk component `Button`. 
   - buatlah sebuah `styled-components` menggunakan `<button` dengan nama `StyledButton`
   - export `StyledButton` agar dapat digunakan pada component `Card`
   - berikan ia `cursor` dengan `pointer`
   - berikan ia `padding` dengan ukuran `horizontal` sebesar `1.5em` 
   - berikan ia `padding` dengan ukuran `vertical` sebesar `0.5em` 
   - berikan ia `font-family` dengan `sans-serif`
   - berikan ia `font-size` dengan ukuran `1.25em`
   - berikan ia `border` dengan deskripsi sebagai berikut:
     - warna: `"white"` apabila ia tidak memiliki `props.outline` atau ia memiliki `props.outline` dengan nilai **FALSE**, dan `"lightblue"` apabila ia memiliki `props.outline` dengan nilai **TRUE**
     - tebal: `1px`
     - jenis garis: `solid`
   - berikan ia `background-color` dengan warna `"lightblue"` apabila ia tidak memiliki `props.outline` atau ia memiliki `props.outline` dengan nilai **FALSE**, dan `"white"` apabila ia memiliki `props.outline` dengan nilai **TRUE**
   - berikan ia `color` dengan warna `"white"` apabila ia tidak memiliki `props.outline` atau ia memiliki `props.outline` dengan nilai **FALSE**, dan `"lightblue"` apabila ia memiliki `props.outline` dengan nilai **TRUE**
   - berikan ia `width` dengan ukuran default `auto` dan apabila ia meneripa sebuah `props.fullWidth` maka ukuran dari `width` tersebut akan berubah menjadi `100%`
   - `hover`
     - berikan ia `border` dengan deskripsi sebagai berikut:
       - warna: `"cornflowerblue"` apabila ia tidak memiliki `props.outline` atau ia memiliki `props.outline` dengan nilai **FALSE**, dan `"lightblue"` apabila ia memiliki `props.outline` dengan nilai **TRUE**
       - tebal: `1px`
       - jenis garis: `solid`
     - berikan ia `background-color` dengan warna `"cornflowerblue"` apabila ia tidak memiliki `props.outline` atau ia memiliki `props.outline` dengan nilai **FALSE**, dan `"lightblue"` apabila ia memiliki `props.outline` dengan nilai **TRUE**
     - berikan ia `color` dengan nilai berupa `"white"`
  10. Gunakan `StyledButton` pada component `Button` dan berikan sebuah text `Buy` pada `Button`
----------------------------------
9. Kembali ke component `Card` pada folder `components/Card.js`, kemudian salin baris kode di bawah ini:
```Javascript
import { CardContainer, CardImage, CardBody, CardTitle, CardText } from './styles/Card';

import Button from './Button';


const Card = () => {
  return (
    <CardContainer width="500px">
      <CardImage src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
      <CardBody>
        <CardPrice>Rp 99000</CardPrice>
        <CardProductName>Topi Baseball</CardProductName>
        <Button />
      </CardBody>
    </CardContainer>
  );
}
export default Card;
```

### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil membuat `Card` dan `Button`. Maka kali ini kita akan membuat `FlexContainer` menerapkan `flex-box`.

Berikut adalah langkah-langkah pengerjaannya:
1. `copy and paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
2. Lakukan instalasi menggunakan `npm install` atau `yarn`
3. Buatlah file dengan nama `FlexContainer.js` di dalam folder `src/components/styles`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan `div` dengan nama `FlexContainer`
   - export default `FlexContainer` agar dapat digunakan pada halaman `App.js`
   - berikan ia `display` dengan nilai `flex`
   - set `height` dengan nilai `100vh`
   - berikan ia `flex-wrap` dengan nilai `wrap`
   - berikan ia `flex-direction`
     - *default value* dengan `row`
     - apabila ia memiliki `props.direction` maka nilai dari `flex-direction` akan mengikuti isi dari `props` tersebut
   - berikan ia `justify-content`
     - *default value* dengan nilai `center`
     - apabila ia memiliki `props.justify` maka nilai dari `flex-justify` akan mengikuti isi dari `props` tersebut
   - berikan ia `align-items`
     - *default value* dengan nilai `center`
     - apabila ia memiliki `props.align` maka nilai dari `flex-align` akan mengikuti isi dari `props` tersebut
4. Kita ingin menggunakan component `Card` pada beberapa product. Oleh karena itu, kita harus menjadikan beberapa data sebagai `props` pada component `Card`.
  - Buatlah props `src` sebagai props untuk link url product images
  - Buatlah props `price` sebagai props untuk harga dari product
  - Buatlah props `productname` sebagai props untuk nama dari product
5. Gunakan data berikut pada halaman `App.js` untuk dikirim ke dalam props component `Card`
```js
  const products = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
    price: 'Rp 200000',
    productName: 'Hat'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80',
    price: 'Rp 300000',
    productName: 'Shirt'
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1546215364-12f3fff5d578?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    price: 'Rp 300000',
    productName: 'Jeans'
  }
]
```
6. Lakukan looping pada component `Card` di halaman `App.js` agar data `products` dapat ditampilkan seluruhnya 
7. `import` style `FlexContainer` ke dalam `App.js` dan jadikan sebagai container dari item pada component `Card`


## Expected Result
1. Soal - 01

  ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/soal-01-styled-components.gif)
2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/Screen+Shot+2021-10-23+at+10.37.10.png)

## Key Learning Points

- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta memahami dan mampu melakukan implementasi `styled-components` ke dalam *Functional Component*
- Peserta memahami dan mampu melakukan implementasi CSS dasar menggunakan `styled-components`
- Peserta memahami dan mampu melakukan implementasi `flex-box` menggunakan `styled-components`