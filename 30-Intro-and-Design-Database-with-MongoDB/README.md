## Description
Pada module ini kamu diharapkan mampu mendesain skema database NoSQL (Non Relasional) menggunakan MongoDB.

## Specs
1. Buatlah skema untuk kebutuhan data profile pengguna aplikasi *Skiljek* dan relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Email**
- **Phone Number**

2. Buatlah skema untuk kebutuhan data alamat pengguna *SkilShop* dimana alamat yang dapat didaftarkan maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut?
Data yang dibutuhkan adalah:
- **Full Name**
- **Phone Number**
- **Address (Max 2)**

3. Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari aplikasi *SkilShop*. Jelasskan juga relasi apakah yang tepat untuk data tersebut?
Contoh data yang dibutuhkan adalah:

**Product**

Product Name: Kaos Polos

Brand Name: SkilShirt

**Varian Pertama**

Varian Name 1: Kaos Polos Hitam

Color: Hitam

Quantity: 12

Price: Rp 99.000

**Varian Kedua**

Varian Name 1: Kaos Polos Navy

Color: Navy

Quantity: 10

Price: Rp 99.000

4. Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama *SkilFlix*. Data yang ingin ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?

Contoh Data yang dibutuhkan:

**Cinemas**

*First Cinema*
- Cinema Name: CGF
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Pondok Indah Mall

*Second Cinema*

- Cinema Name: Cinema31
- Films:
  - Venom 2
  - Spiderman No Way Home
- Location: Mall Kelapa Gading

## Example of Expected Results
Relasi: One-to-one
Skema Data:
```js
{
    "_id": "ObjectId('AAA')",
    "name": "John Doe",
    "company": "Skilvul",
    "twitter": "@johndoe",
    "tiktok": "johndoe",
    "website": "johndoe.com"
}
```
