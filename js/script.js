/**
 * JAVASCRIPT SEDERHANA - KOPI HALU
 * Berisi 2 fungsi utama yang sangat mudah dipahami dan dijelaskan:
 * 1. Hamburger Menu (Buka / tutup menu navigasi di layar HP)
 * 2. Form Pemesanan WhatsApp (Otomatis kirim pesanan ke chat WA)
 */

// 1. Inisialisasi setelah seluruh halaman HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  
  // =========================================================================
  // FUNGSI 1: TOGGLE MENU MOBILE (HAMBURGER)
  // =========================================================================
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  if (hamburgerBtn && navLinks) {
    // Klik tombol hamburger untuk buka / tutup menu
    hamburgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Otomatis tutup menu ketika salah satu link navigasi diklik
    navItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  // =========================================================================
  // FUNGSI 2: FORM PEMESANAN OTOMATIS KE WHATSAPP
  // =========================================================================
  const orderForm = document.getElementById("simple-order-form");

  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      // Mencegah reload halaman
      e.preventDefault();

      // Ambil nilai dari input formulir
      const name = document.getElementById("buyer-name").value.trim();
      const menu = document.getElementById("buyer-menu").value;
      const qty = document.getElementById("buyer-qty").value;
      const notes = document.getElementById("buyer-notes").value.trim() || "-";

      // Nomor WhatsApp Admin Kopi Halu
      const waNumber = "6288976805410";

      // Susun pesan WhatsApp yang rapi
      const message = 
        `Halo Admin Kopi Halu, saya ingin memesan kopi:\n\n` +
        `• Nama: ${name}\n` +
        `• Pesanan: ${menu}\n` +
        `• Jumlah: ${qty} Botol\n` +
        `• Catatan: ${notes}\n\n` +
        `Mohon konfirmasi total harga dan ketersediaan stok ya. Terima kasih!`;

      // Buka tautan WhatsApp di tab baru
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank");
    });
  }

});

