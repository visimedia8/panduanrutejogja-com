import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'src', 'content', 'panduan');

const boosters = {
  'jam-buka-fasilitas-penitipan-barang-stasiun-tugu': `

---

## Regulasi Ukuran Bagasi & Barang Terlarang

Sebelum menitipkan barang di loker maupun pos bagasi Stasiun Tugu, pahami aturan standar keselamatan perkeretaapian:
* **Dimensi Maksimum:** Barang bawaan yang dapat dititipkan di loker otomatis memiliki dimensi maksimal 80 cm x 50 cm x 30 cm. Untuk barang berdimensi lebih besar dari ukuran tersebut (seperti papan selancar, sepeda lipat besar, atau koper jumbo 32 inci), gunakan loket penitipan bagasi manual di samping kantor customer service stasiun.
* **Barang Terlarang (Prohibited Items):** Dilarang keras menitipkan barang yang mudah terbakar, bahan peledak, tabung gas, senjata api/tajam tanpa izin, binatang peliharaan hidup, serta makanan basah atau buah berbau menyengat tajam (seperti durian dan nangka) yang dapat mencemari udara loker.
* **Ketentuan Kehilangan Karcis / Lupa PIN:** Bila Anda lupa nomor PIN loker pintar, segera hubungi petugas sekuriti yang berjaga di samping loker. Petugas akan meminta verifikasi bukti identitas fisik KTP/SIM yang sesuai dengan nomor WhatsApp yang didaftarkan pada layar mesin sebelum membuka pintu darurat loker.`,

  'panduan-integrasi-antarmoda-stasiun-tugu-yogyakarta': `

---

## Prosedur Penanganan Barang Bawaan Saat Transit Kereta ke Pesawat

Bagi penumpang yang melakukan perjalanan terusan dari kereta api antarkota (misal dari Gambir, Bandung, atau Pasar Turi) menuju penerbangan di Bandara Internasional Yogyakarta (YIA):
* **Estimasi Waktu Pindah Moda Ideal:** Sediakan jeda waktu (*buffer time*) minimal 3 jam antara jadwal kedatangan kereta api jarak jauh di Stasiun Tugu dengan jadwal keberangkatan pesawat Anda di YIA. Jeda ini mencakup 15 menit pindah peron, 39 menit perjalanan KA Bandara, dan 90 menit proses check-in serta antrean keamanan bandara.
* **Akses Troli Barang:** Di area hall kedatangan dan koridor underpass Stasiun Tugu disediakan fasilitas troli barang gratis yang dapat digunakan penumpang untuk membawa banyak koper menuju peron keberangkatan KA Bandara YIA tanpa perlu memikul beban berat.`,

  'panduan-naik-bus-damri-bandara-yia-jogja-magelang': `

---

## Tips Memilih Titik Turun Sesuai Destinasi Akhir Anda

Agar perjalanan darat Anda bersama DAMRI YIA semakin efisien, perhatikan panduan titik pemberhentian berikut:
* **Jika Hotel Anda di Malioboro, Prawirotaman, atau Kotagede:** Pilihlah bus rute **YIA – Pool DAMRI Malioboro**. Dari titik turun di pelataran Grand Inna Malioboro, Anda hanya perlu memesan ojek daring singkat atau berjalan kaki menuju hotel.
* **Jika Menginap di Sleman, Jakal, atau Menuju Kaliurang:** Pilihlah rute **YIA – Sleman City Hall (SCH)**. Titik ini terhindar dari kemacetan tengah kota dan dekat dengan akses Jalan Magelang arah utara.
* **Jika Destinasi Anda Kampus UGM, UNY, atau Babarsari:** Pilihlah rute **YIA – Terminal Condongcatur**. Dari Condongcatur, jaringan Trans Jogja Koridor 2A dan 3B siap mengantar Anda langsung ke depan gerbang kampus.`,

  'perbedaan-ka-bandara-yia-reguler-vs-yia-xpress': `

---

## Tips Strategis Mendapatkan Tiket KA Bandara Saat Musim Liburan

Pada masa libur panjang nasional (seperti Idul Fitri, Natal, Tahun Baru, dan libur sekolah pertengahan tahun), permintaan tiket KA Bandara YIA melonjak hingga 300%:
* **Pasang Pengingat H-7:** Penjualan tiket KA Bandara YIA di aplikasi Access by KAI dibuka tepat pada H-7 pukul 00.00 WIB. Pasang alarm di smartphone Anda untuk mengamankan tiket KA Reguler bertarif Rp20.000 sebelum kehabisan.
* **Alternatif Go-Show di Stasiun:** Jika Anda gagal mendapatkan tiket online, segera datang ke Stasiun Tugu minimal 1 jam sebelum jadwal kereta. Petugas loket sering kali membuka kuota tambahan darurat untuk KA Xpress (Rp50.000) di mesin tiket otomatis stasiun.`,

  'rute-jadwal-kereta-prameks-jogja-kutoarjo': `

---

## Etika Membawa Sepeda & Binatang Peliharaan di KA Prameks

Mengikuti aturan operasional resmi PT Kereta Commuter Indonesia, terdapat sejumlah regulasi penting bagi penumpang Prameks:
* **Ketentuan Membawa Sepeda:** Hanya sepeda lipat (*folding bike*) dengan dimensi maksimal roda 22 inci yang diperkenankan masuk ke dalam gerbong penumpang. Sepeda lipat wajib dilipat sempurna sebelum melewati gerbang pemeriksaan boarding tiket. Sepeda standar non-lipat dilarang dibawa ke dalam kabin.
* **Larangan Binatang:** Demi kenyamanan bersama dan alasan higienitas kabin berpendingin udara, segala jenis hewan peliharaan (kucing, anjing, burung, reptil) dilarang keras dibawa ke dalam kereta api lokal Prameks.`,

  'rute-tarif-angkutan-perintis-teman-bus-sleman-bantul': `

---

## Manfaat Integrasi Teman Bus dengan Angkutan Wisata Desa

Program Teman Bus di D.I. Yogyakarta tidak hanya melayani mobilitas pekerja harian, melainkan juga menggerakkan denyut pariwisata berbasis komunitas pedesaan (*Community-Based Tourism*):
* **Akses Sentra Gerabah Kasongan (Bantul):** Turun di halte simpang Kasongan di Jalan Bantul. Wisatawan dapat menjelajahi puluhan galeri keramik, gerabah tanah liat, dan kerajinan anyaman bambu berkualitas ekspor.
* **Akses Desa Wisata Pentingsari & Ketingan (Sleman):** Dari rute Pakem, wisatawan dapat menyambung angkutan desa menuju desa wisata edukasi alam lereng Merapi dan suaka burung kuntul di Desa Ketingan.
* **Tarif Khusus Pelajar & Disabilitas:** Melalui pendaftaran kartu khusus di aplikasi MitraDarat Kemenhub, pelajar dan penyandang disabilitas berhak menikmati tarif subsidi khusus Rp2.000 per perjalanan.`,

  'tips-naik-transportasi-umum-malioboro-wisatawan': `

---

## Panduan Menikmati Wisata Kuliner Malam di Seputar Halte Malioboro

Setelah seharian berkeliling menggunakan angkutan umum, Anda dapat memanjakan lidah dengan mencicipi deretan kuliner malam legendaris di sekitar halte bus:
* **Dekat Halte Malioboro 1:** Kunjungi kawasan kuliner Selasar Malioboro dan Loko Cafe untuk menikmati wedang ronde hangat dan kopi joss arang menyala khas Stasiun Tugu.
* **Dekat Halte Malioboro 2:** Telusuri gang Jalan Dagen dan Jalan Sosrowijayan untuk menemukan warung nasi gudeg basah bercita rasa gurih dan manis otentik.
* **Dekat Halte Malioboro 3:** Berjalanlah 100 meter ke kawasan Titik Nol Kilometer untuk menikmati angkringan kopi jahe dan sate kere koyor sapi di pelataran Museum Benteng Vredeburg.`,

  'transportasi-umum-pantai-parangtritis-terminal-giwangan': `

---

## Estimasi Rincian Total Anggaran Wisatawan ke Parangtritis

Untuk membuktikan betapa ekonomisnya berwisata menggunakan transportasi umum di Yogyakarta, perhatikan rincian simulasi pengeluaran per orang:
* Tiket Trans Jogja dari Malioboro ke Giwangan: Rp3.600.
* Tiket Bus Umum AKDP Giwangan ke Parangtritis: Rp20.000.
* Tiket Masuk Tempat Pemungutan Retribusi (TPR) Parangtritis: Rp10.000.
* Tiket Bus Umum Kepulangan Parangtritis ke Giwangan: Rp20.000.
* Tiket Trans Jogja Giwangan kembali ke Malioboro: Rp3.600.
* **Total Biaya Transportasi PP:** Hanya **Rp57.200 per orang**. 
Bandingkan dengan menyewa mobil rental harian di Jogja yang rata-rata bertarif Rp400.000 hingga Rp550.000 per hari di luar biaya bahan bakar minyak (BBM).`
};

for (const [slug, text] of Object.entries(boosters)) {
  const filePath = path.join(dir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.trim() + '\n' + text.trim() + '\n';
    fs.writeFileSync(filePath, content);
    console.log(`Boosted: ${slug}.md`);
  }
}

console.log('All remaining articles boosted.');
