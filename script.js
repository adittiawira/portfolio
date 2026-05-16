/* ========================================
   Data Definitions
======================================== */

// Skills Data dengan penjelasan detail
const skillsData = [
    {
        category: 'Network',
        icon: 'bx-network-chart',
        level: 'Middle Level',
        skills: [
            { name: 'Network Troubleshooting', percent: 80, detail: 'Mendiagnosa dan menyelesaikan masalah jaringan dengan pendekatan sistematis, mulai dari physical layer hingga application layer.' },
            { name: 'Routing', percent: 75, detail: 'Memahami dasar routing jaringan, konfigurasi static route, dan memahami alur paket data melalui simulasi Cisco Packet Tracer dan Mikrotik.' },
            { name: 'Firewall Configuration', percent: 80, detail: 'Konfigurasi firewall dasar untuk mengamankan jaringan, termasuk filter rules dan NAT configuration.' },
            { name: 'Switching', percent: 75, detail: 'Memahami VLAN, trunking, STP, dan konfigurasi switch managed untuk segmentasi jaringan yang efisien.' },
            { name: 'IP Addressing & Subnetting', percent: 80, detail: 'Perhitungan subnet, CIDR, VLSM untuk pengalokasian IP address yang efisien dan terstruktur.' },
            { name: 'Mikrotik Configuration', percent: 75, detail: 'Konfigurasi dasar hingga menengah Mikrotik RouterOS, termasuk hotspot, bandwidth management, dan firewall.' },
            { name: 'Hotspot Configuration', percent: 80, detail: 'Setup dan management hotspot dengan autentikasi user, bandwidth limit, dan login page customization.' },
            { name: 'DHCP & DNS Basic', percent: 70, detail: 'Konfigurasi DHCP server untuk distribusi IP otomatis dan DNS server untuk name resolution.' },
            { name: 'Bandwidth Management', percent: 70, detail: 'Implementasi queue tree, simple queue, dan traffic shaping untuk manajemen bandwidth yang adil.' },
            { name: 'Wireless Networking', percent: 75, detail: 'Konfigurasi access point, wireless security, dan troubleshooting koneksi wireless.' },
            { name: 'Cisco Packet Tracer', percent: 75, detail: 'Simulasi dan desain topologi jaringan menggunakan Cisco Packet Tracer untuk pembelajaran dan testing.' },
            { name: 'Network Monitoring', percent: 70, detail: 'Monitoring jaringan menggunakan tools seperti PRTG, Zabbix, atau The Dude untuk deteksi masalah proaktif.' }
        ]
    },
    {
        category: 'Hardware',
        icon: 'bx-chip',
        level: 'Middle Level',
        skills: [
            { name: 'PC Assembly', percent: 85, detail: 'Merakit PC dari komponen dasar hingga siap pakai, termasuk pemilihan komponen yang kompatibel dan cable management.' },
            { name: 'Hardware Diagnostics', percent: 80, detail: 'Mengidentifikasi kerusakan hardware menggunakan tools diagnostic dan metode troubleshooting sistematis.' },
            { name: 'Laptop Maintenance', percent: 75, detail: 'Perawatan dan perbaikan laptop termasuk cleaning, thermal paste replacement, dan upgrade komponen.' },
            { name: 'Cable Management', percent: 80, detail: 'Instalasi kabel UTP, crimping connector, dan cable management profesional untuk organisasi yang rapi.' },
            { name: 'Peripheral Installation', percent: 85, detail: 'Instalasi dan konfigurasi berbagai peripheral seperti printer, scanner, proyektor, dan perangkat input lainnya.' },
            { name: 'BIOS Configuration', percent: 70, detail: 'Konfigurasi BIOS/UEFI untuk optimasi sistem, boot order, dan troubleshooting boot issues.' },
            { name: 'Device Troubleshooting', percent: 85, detail: 'Diagnosa dan perbaikan masalah pada berbagai perangkat hardware dengan pendekatan problem-solving.' }
        ]
    },
    {
        category: 'Technical Support',
        icon: 'bx-support',
        level: 'Middle Level',
        skills: [
            { name: 'Windows Installation', percent: 85, detail: 'Instalasi sistem operasi Windows dari awal hingga siap pakai, termasuk partitioning dan driver setup.' },
            { name: 'Software Installation', percent: 85, detail: 'Instalasi berbagai aplikasi produktivitas, software khusus, dan troubleshooting compatibility issues.' },
            { name: 'Driver Configuration', percent: 80, detail: 'Identifikasi dan instalasi driver yang tepat untuk berbagai hardware, termasuk driver yang tidak terdeteksi otomatis.' },
            { name: 'User Support', percent: 75, detail: 'Memberikan dukungan teknis kepada user dengan komunikasi yang efektif dan pendekatan user-friendly.' },
            { name: 'Remote Troubleshooting', percent: 70, detail: 'Menyelesaikan masalah komputer secara remote menggunakan tools seperti TeamViewer, AnyDesk, atau RDP.' },
            { name: 'System Maintenance', percent: 80, detail: 'Maintenance rutin sistem termasuk disk cleanup, defragment, update, dan optimasi performa.' },
            { name: 'Device Activation', percent: 85, detail: 'Aktivasi Windows, Office, dan software lainnya, termasuk troubleshooting activation issues.' }
        ]
    },
    {
        category: 'Database',
        icon: 'bx-data',
        level: 'Entry Level',
        skills: [
            { name: 'Database Monitoring', percent: 65, detail: 'Monitoring database untuk memastikan ketersediaan dan performa yang optimal menggunakan tools monitoring.' },
            { name: 'Basic SQL Query', percent: 55, detail: 'Menulis query SQL dasar untuk SELECT, INSERT, UPDATE, DELETE dan operasi CRUD sederhana.' },
            { name: 'Data Backup Basic', percent: 60, detail: 'Melakukan backup dan restore database untuk keamanan data dan disaster recovery.' },
            { name: 'Database Management Basic', percent: 55, detail: 'Manajemen database dasar termasuk create database, user management, dan permission settings.' }
        ]
    },
    {
        category: 'Microsoft Office',
        icon: 'bx-file',
        level: 'Middle Level',
        skills: [
            { name: 'Microsoft Word', percent: 85, detail: 'Pembuatan dokumen profesional dengan formatting, mail merge, styles, dan collaboration features.' },
            { name: 'Microsoft Excel', percent: 75, detail: 'Pengolahan data dengan formula, pivot table, chart, dan analisis data sederhana.' },
            { name: 'Microsoft PowerPoint', percent: 85, detail: 'Pembuatan presentasi profesional dengan desain menarik, animasi, dan multimedia integration.' },
            { name: 'Document Formatting', percent: 85, detail: 'Formatting dokumen yang konsisten dan profesional sesuai standar bisnis dan akademik.' },
            { name: 'Spreadsheet Management', percent: 70, detail: 'Manajemen spreadsheet untuk tracking data, inventory, dan keperluan administrasi.' },
            { name: 'Presentation Design', percent: 80, detail: 'Desain presentasi yang efektif dengan visual hierarchy dan storytelling yang baik.' }
        ]
    },
    {
        category: 'Web Development',
        icon: 'bx-code-block',
        level: 'Entry Level',
        skills: [
            { name: 'HTML', percent: 60, detail: 'Struktur markup HTML5 yang semantic dan accessible untuk pengembangan web dasar.' },
            { name: 'CSS', percent: 55, detail: 'Styling dengan CSS termasuk layout dengan Flexbox, Grid, dan responsive design basic.' },
            { name: 'JavaScript Basic', percent: 40, detail: 'Pemahaman dasar JavaScript untuk interaktivitas sederhana dan DOM manipulation.' },
            { name: 'Responsive Design Basic', percent: 50, detail: 'Membuat layout yang responsif untuk berbagai ukuran layar dengan media queries.' }
        ]
    }
];

// Certificates Data
const certificatesData = [
    {
        title: 'MTCNA Certificate',
        issuer: 'MikroTik',
        icon: 'bx-network-chart', // Ikon spesifik untuk Network
        pdf: 'assets/certificates/mtcna.pdf'
    },
    {
        title: 'Sertifikat PKL',
        issuer: 'Central Technology Computer',
        icon: 'bx-buildings', // Ikon spesifik untuk Perusahaan/PKL
        pdf: 'assets/certificates/pkl.pdf'
    },
    {
        title: 'Sertifikat kursus',
        issuer: 'Aguna Course',
        icon: 'bx-chalkboard', // Ikon spesifik untuk Workshop/Seminar
        pdf: 'assets/certificates/workshop.pdf'
    }
];

// PKL Gallery Data
const pklGalleryData = [
    {
        image: 'assets/pkl/pkl-1.jpg',
        title: 'Squad Bpa'
    },
    {
        image: 'assets/pkl/pkl-5.jpg',
        title: 'Activasi Laptop'
    },
    {
        image: 'assets/pkl/pkl-3.jpg',
        title: 'Merakit PC'
    }
];

// Typing animation roles
const typingRoles = [
    'Junior Network Engineer',
    'IT Support Specialist',
    'Fresh Graduate',
    'Hardware Technician'
];

/* ========================================
   DOM Elements
======================================== */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.getElementById('typing-text');
const skillsContainer = document.getElementById('skills-container');
const certContainer = document.getElementById('cert-container');
const imageModal = document.getElementById('image-modal');
const modalClose = document.getElementById('modal-close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const pklGallery = document.getElementById('pkl-gallery');

/* ========================================
   Utility Functions
======================================== */

// Calculate skill level based on average percentage
function calculateSkillLevel(skills) {
    const total = skills.reduce((sum, skill) => sum + skill.percent, 0);
    const average = total / skills.length;
    
    if (average >= 80) return 'High Level';
    if (average >= 60) return 'Middle Level';
    return 'Entry Level';
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* ========================================
   Navbar Functions
======================================== */

// Toggle mobile menu
function toggleMenu() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu
function closeMenu() {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
}

// Update navbar on scroll
function updateNavbar() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Update active nav link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 80;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

/* ========================================
   Typing Animation
======================================== */
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRole() {
    const currentRole = typingRoles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % typingRoles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeRole, typingSpeed);
}

/* ========================================
   Render Skills
======================================== */
function renderSkills() {
    skillsContainer.innerHTML = skillsData.map((category, catIndex) => `
        <div class="skill-card" data-category="${catIndex}">
            <div class="skill-header" onclick="toggleSkillCard(${catIndex})">
                <div class="skill-meta">
                    <div class="skill-icon">
                        <i class="bx ${category.icon}"></i>
                    </div>
                    <div class="skill-title-wrap">
                        <h3 class="skill-title">${category.category}</h3>
                        <span class="skill-level">${calculateSkillLevel(category.skills)}</span>
                    </div>
                </div>
                <div class="skill-toggle">
                    <i class="bx bx-chevron-down"></i>
                </div>
            </div>
            <div class="skill-content">
                <div class="skill-list">
                    ${category.skills.map((skill, skillIndex) => `
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">${skill.name}</span>
                                <span class="skill-percent">${skill.percent}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-percent="${skill.percent}"></div>
                            </div>
                            <div class="skill-detail">
                                <p>${skill.detail}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Toggle skill card (accordion)
function toggleSkillCard(index) {
    const cards = document.querySelectorAll('.skill-card');
    const selectedCard = cards[index];
    const isActive = selectedCard.classList.contains('active');
    
    cards.forEach(card => card.classList.remove('active'));
    
    if (!isActive) {
        selectedCard.classList.add('active');
        
        setTimeout(() => {
            const progressBars = selectedCard.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const percent = bar.dataset.percent;
                bar.style.width = `${percent}%`;
            });
        }, 100);
    }
}

/* ========================================
   Render Certificates (UPDATED)
======================================== */
function renderCertificates() {
    certContainer.innerHTML = certificatesData.map((cert, index) => `
        <div class="cert-card">
            <div class="cert-image">
                ${cert.image 
                    ? `<img src="${cert.image}" alt="${cert.title}">` 
                    : `<div class="cert-placeholder">
                        <i class="bx ${cert.icon || 'bx-certification'}"></i>
                        <span>${cert.title}</span>
                       </div>`
                }
            </div>
            <div class="cert-body">
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
                <div class="cert-actions">
                    <button class="cert-btn cert-btn-primary" onclick="openPdfViewer('${cert.pdf}', '${cert.title}')">
                        <i class="bx bx-show"></i>
                        <span>View</span>
                    </button>
                    <a href="${cert.pdf}" class="cert-btn cert-btn-secondary" download>
                        <i class="bx bx-download"></i>
                        <span>Download</span>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

/* ========================================
   PDF Viewer Functions
======================================== */
const pdfModal = document.getElementById('pdf-modal');
const pdfIframe = document.getElementById('pdf-iframe');
const pdfLoading = document.getElementById('pdf-loading');
const pdfError = document.getElementById('pdf-error');
const pdfModalClose = document.getElementById('pdf-modal-close');
const pdfBtnTab = document.getElementById('pdf-btn-tab');
const pdfFallbackLink = document.getElementById('pdf-fallback-link');
const pdfTitle = document.getElementById('pdf-modal-title');

function openPdfViewer(pdfUrl, title) {
    // Reset state
    pdfIframe.style.display = 'none';
    pdfError.style.display = 'none';
    pdfLoading.style.display = 'flex';
    
    // Set title and links
    pdfTitle.textContent = title;
    pdfBtnTab.href = pdfUrl;
    pdfFallbackLink.href = pdfUrl;
    
    // Show modal
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Load PDF
    pdfIframe.src = pdfUrl;
    
    // Handle Iframe Load Events
    pdfIframe.onload = function() {
        pdfLoading.style.display = 'none';
        pdfIframe.style.display = 'block';
    };
    
    pdfIframe.onerror = function() {
        showPdfError();
    };
    
    // Fallback timeout (jika load terlalu lama, kemungkinan error)
    setTimeout(() => {
        if (pdfLoading.style.display === 'flex') {
            // Biarkan loading, browser akan handle jika memang bisa
            // Atau gunakan showPdfError() jika ingin memaksa error setelah timeout
        }
    }, 10000);
}

function showPdfError() {
    pdfLoading.style.display = 'none';
    pdfIframe.style.display = 'none';
    pdfError.style.display = 'flex';
}

function closePdfViewer() {
    pdfModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear iframe src to stop loading
    setTimeout(() => {
        pdfIframe.src = '';
    }, 300);
}

// Event Listeners for PDF Modal
if (pdfModalClose) {
    pdfModalClose.addEventListener('click', closePdfViewer);
}

if (pdfModal) {
    pdfModal.addEventListener('click', (e) => {
        if (e.target === pdfModal) {
            closePdfViewer();
        }
    });
}

/* ========================================
   Render PKL Gallery
======================================== */
function renderPklGallery() {
    if (!pklGallery) return;
    
    pklGallery.innerHTML = pklGalleryData.map((item, index) => `
        <div class="gallery-item" onclick="openImageModal('${item.image}', '${item.title}')">
            <img src="${item.image}" alt="${item.title}" onerror="this.parentElement.innerHTML='<div class=\\'gallery-placeholder\\'><i class=\\'bx bx-image\\'></i><span>${item.title}</span></div>'">
        </div>
    `).join('');
}

// Open image in modal
function openImageModal(imageSrc, title) {
    modalImage.src = imageSrc;
    modalImage.style.display = 'block';
    modalTitle.textContent = title;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        modalImage.src = '';
    }, 300);
}

/* ========================================
   Scroll Reveal Animation
======================================== */
function setupScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    };
    
    revealOnScroll();
    window.addEventListener('scroll', debounce(revealOnScroll, 10));
}

/* ========================================
   Event Listeners
======================================== */
function setupEventListeners() {
    navToggle.addEventListener('click', toggleMenu);
    
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
    
    window.addEventListener('scroll', debounce(() => {
        updateNavbar();
        updateActiveLink();
    }, 10));
    
    modalClose.addEventListener('click', closeModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeMenu();
        }
    });
}

/* ========================================
   Initialize
======================================== */
function init() {
    renderSkills();
    renderCertificates();
    renderPklGallery();
    setupEventListeners();
    setupScrollReveal();
    setTimeout(typeRole, 1000);
    updateNavbar();
}

document.addEventListener('DOMContentLoaded', init);