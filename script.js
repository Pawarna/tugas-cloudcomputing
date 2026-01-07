// Memilih elemen DOM
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');
const navLinks = document.querySelectorAll('.nav-link');

// Fungsi untuk toggle menu mobile
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('is-active');
});

// Menutup menu saat salah satu link diklik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});

// Efek Shadow pada Navbar saat Scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
});