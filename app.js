AOS.init({
    duration: 1000,
    once: true
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Language switcher
const languageSelect = document.getElementById('language-select');
const translations = {
    en: {
        home: 'Home',
        about: 'About',
        portfolio: 'Portfolio',
        education: 'Education',
        futurePlans: 'Future Plans',
        contact: 'Contact'
    },
    vi: {
        home: 'Trang chủ',
        about: 'Giới thiệu',
        portfolio: 'Dự án',
        education: 'Học vấn',
        futurePlans: 'Kế hoạch',
        contact: 'Liên hệ'
    },
    lo: {
        home: 'ໜ້າຫຼັກ',
        about: 'ກ່ຽວກັບ',
        portfolio: 'ຜົນງານ',
        education: 'ການສຶກສາ',
        futurePlans: 'ແຜນອະນາຄົດ',
        contact: 'ຕິດຕໍ່'
    }
};

languageSelect.addEventListener('change', function() {
    const lang = this.value;
    document.documentElement.lang = lang;
    document.body.style.fontFamily = lang === 'en' ? "'Fira Sans Condensed', sans-serif" : 
                                     lang === 'vi' ? "'Oswald', sans-serif" : 
                                     "'Noto Sans Lao', sans-serif";
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const key = link.getAttribute('href').substring(1);
        link.textContent = translations[lang][key];
    });
});

// Lightbox for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const lightboxImage = document.createElement('img');
        lightboxImage.src = img.src;
        lightbox.appendChild(lightboxImage);

        lightbox.addEventListener('click', e => {
            if (e.target !== e.currentTarget) return;
            lightbox.remove();
        });
    });
});