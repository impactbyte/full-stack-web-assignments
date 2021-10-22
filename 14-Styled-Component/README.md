## Description

> Gunakan _template project_ yang berada pada folder `soal-01` untuk menjawab pertanyaan-pertanyaan di bawah. Ada beberapa peraturan yang harus kalian patuhi yaitu:
>
> - dilarang untuk mengubah nama dari variable yang ada
> - dilarang untuk menghapus komentar


## Specs

Kalian diminta untuk menyelesaikan pertanyaan-pertanyaan di bawah ini secara benar dan ikuti instruksi yang ada. Pada 2 soal di bawah ini kita harus menggunakan *Functional Component* serta gunakan `styled-components` untuk melihat detail doku.

### Soal - 01

Kamu diminta untuk membuat *component* menggunakan `styled-components` yang terdapat pada *template code*, berikut adalah langkah-langkah pengerjaannya:
1. Lakukan instalasi React.js dari _template project_ yang sudah disediakan pada folder `soal-01` menggunakan `npm install` atau `yarn`
2. Buatlah file dengan nama `Card.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan `<div>`
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
3. Buatlah file dengan nama `CardBody.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<div>`
   - berikan ia `padding` dengan ukuran `1em`
4. Buatlah file dengan nama `CardImage.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<img>`
   - berikan ia `width` dengan ukuran `100%`
   - berikan ia `border-top-left-radius` dengan ukuran `0.5em`
   - berikan ia `border-top-right-radius` dengan ukuran `0.5em`
5. Buatlah file dengan nama `CardTitle.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<h5>`
   - berikan ia `font-family` dengan `sans-serif`
   - berikan ia `font-size` dengan ukuran `1.25em`
   - berikan ia `font-weight` dengan ukuran `600`
   - reset `margin` menjadi `0`, kemudian berikan ia `margin-bottom` sebesar `0.5em`
6. Buatlah file dengan nama `CardText.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<h6>`
   - berikan ia `font-family` dengan `sans-serif`
   - berikan ia `font-size` dengan ukuran `1.25em`
   - berikan ia `font-weight` dengan ukuran `600`
   - reset `margin` menjadi `0`, kemudian berikan ia `margin-bottom` sebesar `0.5em`
   - berikan ia `color` berupa `gray`
7. Buatlah file dengan nama `Button.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<button>`
   - berikan ia `curson` dengan `pointer`
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
8. Buka file `src/App.js` kemudian salin durung baris kode di bawah
    ```Javascript
    import Button from "./components/Button";
    import Card from "./components/Card";
    import CardBody from "./components/CardBody";
    import CardImage from "./components/CardImage";
    import CardTitle from "./components/CardTitle";
    import CardText from "./components/CardText";

    export default function App() {
      return (
        <Card width="500px">
          <CardImage src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
          <CardBody>
            <CardTitle>$25.00</CardTitle>
            <CardText>Iguana</CardText>
            <Button fullWidth style={{ marginTop: "1em" }}>
              purchase
            </Button>
          </CardBody>
        </Card>
      );
    }
    ```

### Soal - 02
Pada kesempatan kali ini kita akan melanjutkan apa sudah kalian kerjakan pada soal pertama. Apabila pada soal sebelumnya kita sudah berhasil membuat `Card`, `CardBody`, `CardImage`, `CardTitle`, `CardText`, dan `Button`. Maka kali ini kita akan membuat `FlexContainer` dan `FlexItem` *component* untuk menerapkan `flex-box`.

Berikut adalah langkah-langkah pengerjaannya:
1. `copy and paste` soal yang sebelumnya sudah kamu kerjakan dan ubah namanya menjadi `soal-02`
2. Lakukan instalasi menggunakan `npm install` atau `yarn`
3. Buatlah file dengan nama `FlexContainer.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<div>`
   - berikan ia `display` dengan nilai `flex`
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
4. Buatlah file dengan nama `FlexItem.js` di dalam folder `src/components`, buka file tersebut kemudian ikuti langkah-langkah dibawah ini:
   - buatlah sebuah `styled-components` menggunakan tag `<div>`
   - berikan elemen tersebut 3 breakpoint:
     - **sm**: `768px`
     - **md**: `992px`
     - **lg**: `1200px`
   - berikan ia `flex` dengan *default value* dengan nilai `1`, serta berikan ia `props`
     - **sm** yang mana akan mengubah nilai `flex` pada `breakpoint sm`
     - **md** yang mana akan mengubah nilai `flex` pada `breakpoint md`
     - **lg** yang mana akan mengubah nilai `flex` pada `breakpoint lg`
5. Buka file `src/App.js` kemudian salin durung baris kode di bawah
    ```Javascript
    import Button from "./components/Button";
    import Card from "./components/Card";
    import CardBody from "./components/CardBody";
    import CardImage from "./components/CardImage";
    import CardTitle from "./components/CardTitle";
    import CardText from "./components/CardText";
    import FlexContainer from "./components/FlexContainer";
    import FlexItem from "./components/FlexItem";

    export default function App() {
    return (
    <FlexContainer>
      <FlexItem sm="2">
        <Card>
          <CardImage src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
          <CardBody>
            <CardTitle>$25.00</CardTitle>
            <CardText>Iguana</CardText>
            <Button fullWidth style={{ marginTop: "1em" }}>
              click me
            </Button>
          </CardBody>
        </Card>
      </FlexItem>
      <FlexItem md="2">
        <Card>
          <CardImage src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
          <CardBody>
            <CardTitle>$25.00</CardTitle>
            <CardText>Iguana</CardText>
            <Button fullWidth style={{ marginTop: "1em" }}>
              click me
            </Button>
          </CardBody>
        </Card>
      </FlexItem>
      <FlexItem lg="2">
        <Card>
          <CardImage src="https://mui.com/static/images/cards/contemplative-reptile.jpg" />
          <CardBody>
            <CardTitle>$25.00</CardTitle>
            <CardText>Iguana</CardText>
            <Button fullWidth style={{ marginTop: "1em" }}>
              click me
            </Button>
          </CardBody>
        </Card>
      </FlexItem>
    </FlexContainer>
    );
    }
    ```


## Expected Result
1. Soal - 01

  ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/styled-components-01.png)
2. Soal - 02

   ![skilvul](https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/lesson/full-stack-assignment/styled-components-02.gif)

## Key Learning Points

- Peserta memahami cara instalasi project ReactJS yang sudah ada
- Peserta memahami dan mampu melakukan implementasi `styled-components` ke dalam *Functional Component*
- Peserta memahami dan mampu melakukan implementasi CSS dasar menggunakan `styled-components`
- Peserta memahami dan mampu melakukan implementasi `flex-box` menggunakan `styled-components`
- Peserta memahami dan mampu melakukan implementasi `breakpoints` menggunakan `styled-components`