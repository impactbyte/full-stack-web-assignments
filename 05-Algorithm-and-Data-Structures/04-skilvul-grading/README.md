## Specs
> Soal dapat dikerjakan menggunakan notepad atau aplikasi plaintext editor lainnya, dokumentasikan tiap-tiap langkah yang anda gunakan untuk menyelesaikan soal-soal tersebut. Contoh pengerjaan soal:

```
SET name = "john"
DISPLAY name
```

Skilvul ingin memberikan penilaian terhadap siswa
- Setiap siswa akan menerima penilaian skala 0 - 100
- Nilai di bawah 70 dianggap tidak lulus

Dalam memberikan nilai ada 2 tahapan penting yaitu:
- Untuk proses pembulatan nilai kelipatan `5`, syaratnya adalah nilai tersebut harus kurang/lebih kecil dari `3` jaraknya dengan nilai pembulatan ke atas.
- Jika nilai kurang dari `68`, tidak dapat melakukan pembulatan karena tetap dianggap tidak lulus.

Input berupa `Nilai Awal`

Output berupa `Nilai Akhir` baik yang dapat dilakukan pembulatan ataupun tidak

## Examples
- `grade` = `84`

Nilai diatas dapat dilakukan pembulatan ke `85` karena jarak antara `85 - 84` masih kurang dari `3`
- `grade` = `59`

Nilai diatas tidak dapat dibulatkan ke `60` karena sudah berada di bawah nilai minimal kelulusan yaitu `70`
- `grade` = `77`

Nilai di atas tidak dapat dilakukan pembulatan ke `80` karena melebihi batas maksimal pembulatan yaitu harus lebih kecil dari `3`

## Expected Result
| NO | Original Grade | Final Grade |
| -- | -------------- | ----------- |
| 1  | 73             | 75          |
| 2  | 87             | 87          |
| 3  | 68             | 70          |
| 4  | 67             | 67          | 
| 5  | 43             | 43          |