function bukaMateri(event, namaMateri) {
    // 1. Sembunyikan semua kotak materi
    const semuaKonten = document.getElementsByClassName("content");
    for (let i = 0; i < semuaKonten.length; i++) {
        semuaKonten[i].classList.remove("active");
    }

    // 2. Matikan warna aktif di semua tombol
    const semuaTombol = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < semuaTombol.length; i++) {
        semuaTombol[i].classList.remove("active");
    }

    // 3. Tampilkan materi yang dituju
    const target = document.getElementById(namaMateri);
    if (target) {
        target.classList.add("active");
        // 4. Nyalakan warna aktif pada tombol yang diklik
        event.currentTarget.classList.add("active");
    } else {
        console.error("ID '" + namaMateri + "' tidak ditemukan!");
    }
}

