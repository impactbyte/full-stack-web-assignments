## SPEC

> Untuk pengumpulan tugas anda dapat menggunakan GitHub serta jangan lupa untuk mengupload link repository kedalam `google form`

Kamu adalah seorang trader pemula, dan karna memiliki background IT kamu ingin membuat sebuah fungsi `calculateIncome` untuk mendapatkan nilai dari keuntungan yang dapat kita peroleh dengan rumus (*current price* - *previous price*) untuk setiap koin yang tersedia

> - Gunakan `code template` yand diberikan untuk menyelesaikan masalah
> - Segala perubahan hanya dapat dilakukan didalamm fungsi `calculateIncome`
> - Hasil haruslah sesuai dengan expektasi yang diberikan

Untuk mempermudah proses pengerjaan kamu dapat menggunakan code template dibawah ini

```JS
const items = [
  [ { name: "btc", price: 10 }, { name: "eth", price: 7 }, { name: "doge", price: 5 } ],
  [ { name: "btc", price: 9.2 }, { name: "eth", price: 7.3 }, { name: "doge", price: 5.8 } ],
  [ { name: "btc", price: 8.7 }, { name: "eth", price: 8.1 }, { name: "doge", price: 6.3 } ],
  [ { name: "btc", price: 8.4 }, { name: "eth", price: 8 }, { name: "doge", price: 6.7 } ],
  [ { name: "btc", price: 8.9 }, { name: "eth", price: 6.3 }, { name: "doge", price: 5.9 } ],
  [ { name: "btc", price: 9.3 }, { name: "eth", price: 5.6 }, { name: "doge", price: 5.1 } ],
];

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
}

console.log(calculateIncome(items))
```

## Expected Result
```JSON
{
  btc: -0.6999999999999993,
  doge: 0.09999999999999964,
  eth: -1.4000000000000004
}
```

## Key Learning Points
- Peserta memahami apa itu `array` dan cara penggunaannya
- Peserta mampu melakukan analisa terhadap masalah yang ada
- Peserta mampu untuk membuat solusi untuk perhitungan menggunakan `array`