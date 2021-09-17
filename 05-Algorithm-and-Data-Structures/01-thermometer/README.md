## Spec

> Soal dapat dikerjakan menggunakan notepad atau aplikasi plaintext editor lainnya, dokumentasikan tiap-tiap langkah yang anda gunakan untuk menyelesaikan soal-soal tersebut. Contoh pengerjaan soal:

```
SET name = "john"
DISPLAY name
```

Kamu adalah seorang mahasiswa IT yang baru memulai perjalanan, kemudian kamu juga sudah belajar tentang adanya `pseudocode`. Kemudian dosenmu memmberikan sebuah tugas untuk membuat sebuah `pseudocode` tentang cara kerja sebuah *thermometer* yang akan merubah semua jenis suhu menjadi `celcius`.

Ada 3 jenis perubahan yang suhu yaitu:
- `fahrenheit` to `celcius` = `(N - 32) * (5/9)`
- `kelvin` to `celcius` = `(N - 273.15)`
- `celcius` to `celcius` = `N`

## Expected Result
```
INPUT temp
INPUT type

IF type IS "kelvin" THEN
  SET result = (temp-32) * (5/9)
  DISPLAY result
ELSE IF type IS "fahrenheit" THEN
  SET result = (temp-273.15)
  DISPLAY result
ELSE
  DISPLAY temp
ENDIF
```

## Key Learning Points
- peserta dapat menganalisa sebuah permasalahan yang ada dilapangan
- menerapkan pola pikir komputasi
- paham dan dapat membuat sebuah `pseudocode`