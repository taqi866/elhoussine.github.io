const currentYear = new Date().getFullYear();

const translations = {
    'fr': {
        'nav-home': 'Accueil',
        'nav-courses': 'Formations',
        'nav-tajirox': 'Système TAJIROX',
        'nav-contact': 'Contact',
        
        'instructor-name': 'El Houssine TAQI',
        'hero-badge-form': 'Formations 100% Pratiques & Système de Gestion',
        'hero-title-form-1': 'Solution de Gestion TAJIROX',
        'hero-title-form-2': '& Formations en Comptabilité & Gestion',
        'hero-desc-form': 'Accélérez votre carrière avec des formations professionnelles ciblées ou propulsez votre commerce avec notre système de gestion intégré TAJIROX.',
        'hero-btn-tajirox': 'Découvrir TAJIROX',
        'hero-btn-formations': 'Voir nos formations',
        
        'sec-courses-title': 'Nos Formations',
        'sec-courses-subtitle': 'Programmes conçus pour l\'excellence professionnelle. Développez vos compétences avec nos parcours 100% pratiques.',
        
        'course-1-title': 'Comptabilité pratique',
        'course-1-desc': 'Comptabilité complète, déclarations fiscales et sociales sur le dossier d'une entreprise.',
        'course-2-title': 'Informatique bureautique',
        'course-2-desc': 'Maîtrise des outils essentiels : Word, Excel et PowerPoint.',
        'course-3-title': 'Gestion commerciale',
        'course-3-desc': 'Gérez le cycle de vente, les stocks et la facturation client.',
        'course-4-title': 'Excel professionnel',
        'course-4-desc': 'Développez des compétences Excel adaptées aux exigences du monde professionnel.',
        'course-duration': '36 heures',
        'course-duration-excel': '24 heures',
        'course-btn': 'Accéder',
        
        /* Stats */
        'stat-1': 'Stagiaires formés',
        'stat-2': 'De contenu pratique',
        'stat-3': 'Taux de satisfaction',

        /* Traductions Système TAJIROX */
        'taj-main-title': 'Système TAJIROX',
        'taj-main-subtitle': 'La solution ultime dédiée aux commerçants pour la gestion globale de votre activité, de vos stocks à votre trésorerie.',
        'taj-f1-title': 'Tableau de Bord',
        'taj-f1-desc': 'Aperçu général des ventes, bénéfices et dépenses en temps réel.',
        'taj-f2-title': 'Gestion de Stock',
        'taj-f2-desc': 'Suivi précis des produits, des alertes et des quantités disponibles.',
        'taj-f3-title': 'Factures Pro',
        'taj-f3-desc': 'Édition professionnelle de factures de vente et de services.',
        'taj-f4-title': 'Clients & Fournisseurs',
        'taj-f4-desc': 'Suivi détaillé des dettes, des créances et des paiements.',
        'taj-f5-title': 'Rapports Intelligents',
        'taj-f5-desc': 'Analyse approfondie des profits, des pertes et des performances.',
        'taj-f6-title': 'Gestion des Dépenses',
        'taj-f6-desc': 'Suivi rigoureux et contrôle précis de l\'ensemble des dépenses.',
        'taj-f7-title': 'Chèques et Traites',
        'taj-f7-desc': 'Suivi proactif des échéances bancaires et des encaissements.',
        'taj-f8-title': 'Gestion de Trésorerie',
        'taj-f8-desc': 'Suivi des soldes, transferts et état global de liquidité.',
        'taj-btn': 'Accéder au système TAJIROX',
        
        /* Profil Modifié */
        'about-job': 'Fondateur TAJIROX | Formateur en Comptabilité et Gestion',
        'about-edu': 'Master spécialisé en Finance-Contrôle de Gestion <br> <b>ISIAM Business School d\'Agadir</b>',
        'contact-catchphrase': 'Prêt à démarrer ou besoin d\'infos ? Contactez-moi :',
        'contact-phone-label': 'Téléphone',
        'contact-email-label': 'Email',
        
        'reader-back': 'Quitter',
        'reader-loading': 'Chargement de l\'espace', 
        
        'footer-sub': 'Fondateur du système TAJIROX | Formateur',
        'copyright': `© 2026 EL HOUSSINE TAQI. Tous droits réservés.`
    },
    'ar': {
        'nav-home': 'الرئيسية',
        'nav-courses': 'التكوينات',
        'nav-tajirox': 'نظام TAJIROX',
        'nav-contact': 'اتصل بنا',
        
        'instructor-name': 'الحسين تاقي',
        'hero-badge-form': 'تكوينات تطبيقية 100% ونظام التسيير',
        'hero-title-form-1': 'حل التسيير TAJIROX',
        'hero-title-form-2': 'وتكوينات في المحاسبة والتدبير',
        'hero-desc-form': 'سرّع مسارك المهني مع تكوينات دقيقة أو قم بتطوير تجارتك باستخدام نظام التسيير المندمج TAJIROX.',
        'hero-btn-tajirox': 'اكتشف نظام TAJIROX',
        'hero-btn-formations': 'اطلع على دوراتنا',
        
        'sec-courses-title': 'دوراتنا التكوينية',
        'sec-courses-subtitle': 'برامج مصممة للتميز المهني. طور مهاراتك من خلال مساراتنا التطبيقية 100%.',
        
        'course-1-title': 'المحاسبة التطبيقية',
        'course-1-desc': 'المحاسبة الشاملة، والتصريحات الجبائية والاجتماعية انطلاقًا من ملف محاسبي لمقاولة.',
        'course-2-title': 'المعلوميات المكتبية',
        'course-2-desc': 'إتقان الأدوات الأساسية: Word و Excel و PowerPoint.',
        'course-3-title': 'التدبير التجاري',
        'course-3-desc': 'تعلم كيفية إدارة المبيعات، المخزون والفواتير بفعالية.',
        'course-4-title': 'إكسيل الاحترافي',
        'course-4-desc': 'طوّر مهاراتك في Excel بما يتوافق مع متطلبات سوق العمل.',
        'course-duration': '36 ساعة',
        'course-duration-excel': '24 ساعة',
        'course-btn': 'الدخول',

        /* Stats Arabic */
        'stat-1': 'متدرب مكون',
        'stat-2': 'من المحتوى التطبيقي',
        'stat-3': 'نسبة الرضا',
        
        /* Traductions Système TAJIROX Arabe */
        'taj-main-title': 'نظام TAJIROX',
        'taj-main-subtitle': 'الحل الشامل والمصمم خصيصاً للتجار لتدبير متكامل لنشاطك التجاري، من إدارة المخزون إلى الخزينة.',
        'taj-f1-title': 'لوحة القيادة',
        'taj-f1-desc': 'نظرة عامة على المبيعات، الأرباح والمصاريف في الوقت الفعلي.',
        'taj-f2-title': 'تدبير المخزون',
        'taj-f2-desc': 'تتبع دقيق للمنتجات، التنبيهات والكميات المتوفرة.',
        'taj-f3-title': 'فواتير احترافية',
        'taj-f3-desc': 'إصدار احترافي لفواتير البيع والخدمات.',
        'taj-f4-title': 'الزبناء والموردون',
        'taj-f4-desc': 'تتبع مفصل للديون، المستحقات والأداءات.',
        'taj-f5-title': 'تقارير ذكية',
        'taj-f5-desc': 'تحليل معمق للأرباح، الخسائر والأداء التجاري.',
        'taj-f6-title': 'تدبير المصاريف',
        'taj-f6-desc': 'تتبع صارم ومراقبة دقيقة لجميع المصاريف.',
        'taj-f7-title': 'الشيكات والكمبيالات',
        'taj-f7-desc': 'تتبع استباقي للتواريخ البنكية والتحصيلات.',
        'taj-f8-title': 'تدبير الخزينة',
        'taj-f8-desc': 'تتبع الأرصدة، التحويلات والحالة العامة للسيولة.',
        'taj-btn': 'الدخول إلى نظام TAJIROX',
        
        /* Profil Modifié Arabe */
        'about-job': 'مؤسس TAJIROX | مكون في المحاسبة والتدبير',
        'about-edu': 'ماستر متخصص في المالية ومراقبة التسيير <br> <b>ISIAM Business School d\'Agadir</b>',
        'contact-catchphrase': 'هل أنت جاهز للبدء أو تحتاج لمعلومات؟ اتصل بي:',
        'contact-phone-label': 'الهاتف',
        'contact-email-label': 'البريد الإلكتروني',
        
        'reader-back': 'رجوع',
        'reader-loading': 'جاري التحميل ...',
        
        'footer-sub': 'مؤسس نظام TAJIROX | مكون',
        'copyright': `© 2026 EL HOUSSINE TAQI . جميع الحقوق محفوظة.`
    }
};

let currentLang = 'fr';

const coursesData = {
    'compta': {
        title_fr: 'Comptabilité pratique',
        title_ar: 'المحاسبة التطبيقية',
        url: 'https://script.google.com/macros/s/AKfycbx0B52BtYBUlGynjevO__2l4XY0XRTQod4hD6JlBvAucefJwWNgn5zaKDLy0ubFxrIUwQ/exec'
    },
    'informatique': {
        title_fr: 'Informatique bureautique',
        title_ar: 'المعلوميات المكتبية',
        url: 'https://script.google.com/macros/s/AKfycbxHyTZ7kFnJoHd_ALZvPqRJ_TA-NwlO2Z9XNeXw98EjK-TyAm8DUWwm_5Sx_ULk1rwT/exec'
    },
    'gestion': {
        title_fr: 'Gestion commerciale',
        title_ar: 'التدبير التجاري',
        url: '' 
    },
    'excel': {
        title_fr: 'Excel professionnel',
        title_ar: 'إكسيل الاحترافي',
        url: '' 
    }
};

function updateContent() {
    const content = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (content[key]) el.innerHTML = content[key];
    });

    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    
    const langLabel = document.getElementById('lang-label');
    if (langLabel) langLabel.textContent = currentLang === 'fr' ? 'العربية' : 'Français';
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    updateContent();
}

function ensureHomeView() {
    const homeView = document.getElementById('home-view');
    const mainWrapper = document.getElementById('main-wrapper');
    const courseView = document.getElementById('course-view');

    if(courseView && !courseView.classList.contains('hidden')) closeCourse();
    if(homeView) homeView.classList.remove('hidden');
    if(mainWrapper) mainWrapper.classList.remove('hidden');
}

function showHome() {
    ensureHomeView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
}

function showFormations() {
    ensureHomeView();
    setTimeout(() => {
        const section = document.getElementById('formations-section');
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 50);
    closeMobileMenu();
}

function showTajirox() {
    ensureHomeView();
    setTimeout(() => {
        const section = document.getElementById('tajirox-section');
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 50);
    closeMobileMenu();
}

function showContact() {
    ensureHomeView();
    setTimeout(() => {
        const contactSection = document.getElementById('about-section');
        if (contactSection) {
            const y = contactSection.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, 50);
    closeMobileMenu();
}

function openCourse(courseId) {
    const course = coursesData[courseId];
    if (!course || !course.url) return;

    const iframe = document.getElementById('course-iframe');
    const courseTitle = document.getElementById('course-title');

    if (courseTitle) courseTitle.textContent = currentLang === 'fr' ? course.title_fr : course.title_ar;
    if (iframe) iframe.src = course.url;

    document.querySelectorAll('.hidden-on-course').forEach(el => el.classList.add('hidden'));
    const mainWrapper = document.getElementById('main-wrapper');
    const courseView = document.getElementById('course-view');
    
    if(mainWrapper) mainWrapper.classList.add('hidden');
    if(courseView) courseView.classList.remove('hidden');
    
    closeMobileMenu();
}

function closeCourse() {
    const courseView = document.getElementById('course-view');
    const mainWrapper = document.getElementById('main-wrapper');
    const iframe = document.getElementById('course-iframe');

    if(courseView) courseView.classList.add('hidden');
    if(mainWrapper) mainWrapper.classList.remove('hidden');
    
    document.querySelectorAll('.hidden-on-course').forEach(el => el.classList.remove('hidden'));
    if(iframe) iframe.src = '';
}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-menu-icon');
let isMenuOpen = false;

function closeMobileMenu() {
    if (isMenuOpen && mobileMenu) {
        isMenuOpen = false;
        mobileMenu.classList.add('hidden');
        if(mobileMenuIcon) mobileMenuIcon.setAttribute('data-lucide', 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if(mobileMenu) mobileMenu.classList.toggle('hidden');
        if(mobileMenuIcon) mobileMenuIcon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

// Scroll Logic for Header
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
        header.classList.remove('border-transparent');
        header.classList.add('border-gray-200');
    } else {
        header.classList.remove('header-scrolled');
        header.classList.remove('border-gray-200');
        header.classList.add('border-transparent');
    }
});

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                
                // Handle number counter animation
                if(entry.target.classList.contains('reveal-scale')) {
                    const numbers = entry.target.querySelectorAll('.stat-number');
                    numbers.forEach(num => {
                        if(!num.classList.contains('counted')) {
                            animateValue(num, 0, parseInt(num.getAttribute('data-target')), 2000);
                            num.classList.add('counted');
                        }
                    });
                }
                
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}

// Number Counter Animation Function
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // Ease out Expo formula
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        obj.innerHTML = Math.floor(easeOut * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Init on Load
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-wrapper');
    const header = document.getElementById('main-header');
    
    setTimeout(() => {
        if (splash) {
            splash.style.opacity = '0';
            splash.style.visibility = 'hidden';
        }
        if (mainContent) mainContent.classList.remove('opacity-0');
        if (header) header.classList.remove('opacity-0');
        document.body.classList.remove('overflow-hidden');
        
        // Initialize animations after splash screen
        setTimeout(initScrollAnimations, 100);
    }, 1200);
});

updateContent();
