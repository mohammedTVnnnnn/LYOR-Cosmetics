// Configuration
const CONFIG = {
    defaultLanguage: 'ar',
    animationDelay: 200,
    scrollThreshold: 50
};

// Product data
const products = [
    {
        id: 1,
        name: "مستحضرات تجميل نسائية",
        name_en: "Women's Cosmetics",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80",
        page: "Products/beauty.html"
    },
];

// Translations
const translations = {
    ar: {
        home: "الرئيسية",
        products: "المنتجات",
        about: "من نحن",
        contact: "اتصل بنا",
        heroTitle: "روتين عناية مخصص لكل فرد",
        heroSubtitle: "مكونات طبيعية نقية وتكنولوجيا فرنسية متقدمة لنتائج ملموسة",
        discoverProducts: "تصفح المنتجات",
        contactUs: "تواصل معنا",
        productsTitle: "منتجاتنا",
        orderNow: "اكتشف منتجاتنا",
        aboutTitle: "هوية الشركة – LYORÉ Cosmetics",
        aboutHeading: "من نحن؟",
        aboutParagraph1: "LYORÉ Cosmetics هي شركة فرنسية حديثة، وُلدت في قلب باريس منذ ثلاث سنوات، بشغف واضح لتقديم منتجات عناية متوازنة ومميزة للرجال والنساء على حدٍ سواء.",
        aboutParagraph2: "رؤيتنا واضحة:\nالجمال لا يُصنع للفئة... بل يُصنع للإنسان.",
        contactTitle: "اتصل بنا",
        contactHeading: "نحن دائماً في خدمتكم",
        contactIntro: "يمكنكم التواصل معنا من خلال القنوات التالية:",
        address: "العنوان:",
        addressValue: "المدينة، الشارع الرئيسي، بناية رقم 42",
        phone: "الهاتف:",
        phoneValue: "+123 456 7890",
        email: "البريد الإلكتروني:",
        emailValue: "info@hotline.com",
        hours: "ساعات العمل:",
        hoursValue: "يومياً من 8:00 صباحاً حتى 10:00 مساءً",
        footerAbout: "من نحن",
        footerAboutText: "نحن شركة متخصصة في تجارة وتوزيع المنتجات العربية داخل جورجيا، وتحديدًا في قلب العاصمة تبليسي. انطلقنا برؤية واضحة تهدف إلى تلبية احتياجات الجالية العربية، وتوفير المنتجات الأصيلة التي تعكس نكهة وثقافة الوطن.",
        footerLinks: "روابط سريعة",
        footerHome: "الرئيسية",
        footerProducts: "المنتجات",
        footerAboutUs: "من نحن",
        footerContact: "اتصل بنا",
        footerHours: "ساعات العمل",
        footerHoursText: "يومياً من 9:00 صباحاً حتى 9:00 مساءً",
        copyright: "© 2025 الخط الساخن. جميع الحقوق محفوظة.",
        createdBy: "تم التطوير بواسطة"
    },
    en: {
        home: "Home",
        products: "Products",
        about: "About Us",
        contact: "Contact",
        heroTitle: "Personalized Care Routine for Every Individual",
        heroSubtitle: "Pure natural ingredients and advanced French technology for tangible results",
        discoverProducts: "Browse Products",
        contactUs: "Contact Us",
        productsTitle: "Our Products",
        orderNow: "Discover Our Products",
        aboutTitle: "Company Identity – LYORÉ Cosmetics",
        aboutHeading: "Who Are We?",
        aboutParagraph1: "LYORÉ Cosmetics is a modern French company, born in the heart of Paris three years ago, with a clear passion for providing balanced and distinctive care products for both men and women.",
        aboutParagraph2: "Our vision is clear:\nBeauty is not made for a category... it is made for humanity.",
        contactTitle: "Contact Us",
        contactHeading: "We're Always at Your Service",
        contactIntro: "You can reach us through the following channels:",
        address: "Address:",
        addressValue: "City, Main Street, Building No. 42",
        phone: "Phone:",
        phoneValue: "+123 456 7890",
        email: "Email:",
        emailValue: "info@hotline.com",
        hours: "Working Hours:",
        hoursValue: "Daily from 8:00 AM to 10:00 PM",
        footerAbout: "About Us",
        footerAboutText: "We are a leading company in the beauty and cosmetics industry, offering a wide range of authentic global products. We constantly strive to provide the best products that meet our customers' needs and add a touch of beauty and elegance to their daily lives.",
        footerLinks: "Quick Links",
        footerHome: "Home",
        footerProducts: "Products",
        footerAboutUs: "About Us",
        footerContact: "Contact",
        footerHours: "Working Hours",
        footerHoursText: "Daily from 9:00 AM to 9:00 PM",
        copyright: "© 2025 Hot Line. All rights reserved.",
        createdBy: "Developed by"
    }
};

// DOM Elements
const elements = {
    productsContainer: document.getElementById('productsContainer'),
    loginModal: document.getElementById('loginModal'),
    closeModal: document.getElementById('closeModal'),
    adminLoginForm: document.getElementById('adminLoginForm'),
    langDropdown: document.getElementById('langDropdown')
};

// Current language
let currentLang = localStorage.getItem('language') || CONFIG.defaultLanguage;

// Load products based on language
function loadProducts() {
    elements.productsContainer.innerHTML = '';
    
    products.forEach((product, index) => {
        const productName = currentLang === 'en' ? product.name_en : product.name;
        const productCard = createProductCard(product, productName, index);
        elements.productsContainer.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product, productName, index) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.opacity = '0';
    productCard.style.transform = 'translateY(20px)';
    
    productCard.innerHTML = `
        <div class="product-img-container">
            <img src="${product.image}" alt="${productName}" class="product-img">
        </div>
        <div class="product-details">
            <h3 class="product-title">${productName}</h3>
            <p class="product-description">${currentLang === 'ar' ? 'منتجات عالية الجودة من ماركات عالمية' : 'High quality products from global brands'}</p>
            <button class="product-buy" onclick="orderNow(${product.id})">${translations[currentLang].orderNow}</button>
        </div>
    `;
    
    setTimeout(() => {
        productCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        productCard.style.opacity = '1';
        productCard.style.transform = 'translateY(0)';
    }, index * CONFIG.animationDelay);
    
    return productCard;
}

// Update UI text based on current language
function updateUIText() {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            if (!element.hasAttribute('data-original-text')) {
                element.setAttribute('data-original-text', element.textContent);
            }
            
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                element.textContent = translations[currentLang][key];
                element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, CONFIG.animationDelay);
        }
    });
}

// Order now function
function orderNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const button = event.target;
        button.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            window.location.href = product.page;
        }, CONFIG.animationDelay);
    }
}

// Update language display
function updateLanguageDisplay() {
    const currentLangElement = document.querySelector('.current-lang');
    const langOptions = document.querySelectorAll('.lang-option');
    
    currentLangElement.innerHTML = currentLang === 'ar' ? 'العربية <span>▾</span>' : 'English <span>▾</span>';
    
    langOptions.forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === currentLang);
    });
}

// Change language function
function changeLang(lang) {
    if (lang === currentLang) {
        elements.langDropdown.classList.remove('show');
        return;
    }
    
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    currentLang = lang;
    
    elements.langDropdown.classList.remove('show');
    updateLanguageDisplay();
    updateUIText();
    loadProducts();
}

// Toggle language dropdown
function toggleLangDropdown() {
    const langDropdown = elements.langDropdown;
    langDropdown.classList.toggle('show');
    
    if (langDropdown.classList.contains('show')) {
        langDropdown.style.opacity = '0';
        langDropdown.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            langDropdown.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            langDropdown.style.opacity = '1';
            langDropdown.style.transform = 'translateY(0)';
        }, 50);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    updateLanguageDisplay();
    updateUIText();
    loadProducts();

    // Add active class to current nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > CONFIG.scrollThreshold);
});

window.addEventListener('click', (e) => {
    if (e.target === elements.loginModal) {
        elements.loginModal.classList.remove('show');
    }
    
    const currentLang = document.querySelector('.current-lang');
    if (e.target !== currentLang && !currentLang.contains(e.target) && 
        e.target !== elements.langDropdown && !elements.langDropdown.contains(e.target)) {
        elements.langDropdown.classList.remove('show');
    }
});