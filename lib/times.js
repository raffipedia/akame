const axios = require('axios');

// Fungsi untuk mendapatkan jadwal sholat berdasarkan koordinat lintang dan bujur
async function getPrayerTimes(latitude, longitude) {
    try {
        // Panggil API AdzanAPI untuk mendapatkan jadwal sholat
        const response = await axios.get(`https://api.adzan.io/v1/times/today.json?latitude=${latitude}&longitude=${longitude}`);

        // Periksa apakah respons berhasil
        if (response.status === 200) {
            // Ambil data jadwal sholat dari respons
            const prayerTimes = response.data.data.prayer_times;

            // Kembalikan jadwal sholat
            return prayerTimes;
        } else {
            throw new Error('Gagal mendapatkan jadwal sholat');
        }
    } catch (error) {
        throw new Error('Terjadi kesalahan saat memproses permintaan');
    }
}

// Ekspor fungsi getPrayerTimes agar dapat digunakan di berkas lain
module.exports = { getPrayerTimes };
