// Sample movie data
const moviesData = {
    latest: [
        {
            id: 1,
            title: "فيلم الأكشن الجديد",
            year: "2024",
            rating: 8.5,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+1",
            category: "action"
        },
        {
            id: 2,
            title: "كوميديا رومانسية",
            year: "2024",
            rating: 7.8,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+2",
            category: "comedy"
        },
        {
            id: 3,
            title: "دراما عائلية",
            year: "2024",
            rating: 9.1,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+3",
            category: "drama"
        },
        {
            id: 4,
            title: "فيلم رعب مثير",
            year: "2024",
            rating: 7.5,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+4",
            category: "horror"
        },
        {
            id: 5,
            title: "مغامرة خيال علمي",
            year: "2024",
            rating: 8.9,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+5",
            category: "action"
        },
        {
            id: 6,
            title: "فيلم تشويق",
            year: "2024",
            rating: 8.2,
            poster: "https://via.placeholder.com/250x350/333/fff?text=فيلم+6",
            category: "drama"
        }
    ],
    popular: [
        {
            id: 7,
            title: "الفيلم الأكثر مشاهدة",
            year: "2023",
            rating: 9.5,
            poster: "https://via.placeholder.com/250x350/333/fff?text=شائع+1",
            category: "action"
        },
        {
            id: 8,
            title: "كوميديا شعبية",
            year: "2023",
            rating: 8.7,
            poster: "https://via.placeholder.com/250x350/333/fff?text=شائع+2",
            category: "comedy"
        },
        {
            id: 9,
            title: "دراما مؤثرة",
            year: "2023",
            rating: 9.2,
            poster: "https://via.placeholder.com/250x350/333/fff?text=شائع+3",
            category: "drama"
        },
        {
            id: 10,
            title: "رعب كلاسيكي",
            year: "2023",
            rating: 8.0,
            poster: "https://via.placeholder.com/250x350/333/fff?text=شائع+4",
            category: "horror"
        }
    ],
    movies: [
        {
            id: 11,
            title: "أكشن ملحمي",
            year: "2023",
            rating: 8.8,
            poster: "https://via.placeholder.com/250x350/333/fff?text=أكشن+1",
            category: "action"
        },
        {
            id: 12,
            title: "كوميديا عائلية",
            year: "2023",
            rating: 7.9,
            poster: "https://via.placeholder.com/250x350/333/fff?text=كوميديا+1",
            category: "comedy"
        },
        {
            id: 13,
            title: "دراما اجتماعية",
            year: "2023",
            rating: 8.6,
            poster: "https://via.placeholder.com/250x350/333/fff?text=دراما+1",
            category: "drama"
        },
        {
            id: 14,
            title: "رعب نفسي",
            year: "2023",
            rating: 7.7,
            poster: "https://via.placeholder.com/250x350/333/fff?text=رعب+1",
            category: "horror"
        }
    ],
    series: [
        {
            id: 15,
            title: "مسلسل الأكشن",
            year: "2024",
            rating: 9.0,
            poster: "https://via.placeholder.com/250x350/333/fff?text=مسلسل+1",
            category: "action"
        },
        {
            id: 16,
            title: "مسلسل كوميدي",
            year: "2024",
            rating: 8.3,
            poster: "https://via.placeholder.com/250x350/333/fff?text=مسلسل+2",
            category: "comedy"
        },
        {
            id: 17,
            title: "مسلسل درامي",
            year: "2024",
            rating: 9.4,
            poster: "https://via.placeholder.com/250x350/333/fff?text=مسلسل+3",
            category: "drama"
        },
        {
            id: 18,
            title: "مسلسل رعب",
            year: "2024",
            rating: 8.1,
            poster: "https://via.placeholder.com/250x350/333/fff?text=مسلسل+4",
            category: "horror"
        }
    ],
    anime: [
        {
            id: 19,
            title: "أنمي أكشن",
            year: "2024",
            rating: 9.3,
            poster: "https://via.placeholder.com/250x350/333/fff?text=أنمي+1",
            category: "action"
        },
        {
            id: 20,
            title: "أنمي كوميدي",
            year: "2024",
            rating: 8.5,
            poster: "https://via.placeholder.com/250x350/333/fff?text=أنمي+2",
            category: "comedy"
        },
        {
            id: 21,
            title: "أنمي درامي",
            year: "2024",
            rating: 9.1,
            poster: "https://via.placeholder.com/250x350/333/fff?text=أنمي+3",
            category: "drama"
        },
        {
            id: 22,
            title: "أنمي خيال",
            year: "2024",
            rating: 8.7,
            poster: "https://via.placeholder.com/250x350/333/fff?text=أنمي+4",
            category: "action"
        }
    ]
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadMovies();
    setupEventListeners();
    setupSmoothScrolling();
    setupFormHandlers();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all tabs
            document.querySelectorAll('.tab-btn').forEach(tab => {
                tab.classList.remove('active');
            });
            // Add active class to clicked tab
            e.target.classList.add('active');
            
            // Filter movies
            const category = e.target.getAttribute('data-category');
            filterMovies(category);
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchMovies(e.target.value);
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            closeLogin();
        }
        if (e.target === registerModal) {
            closeRegister();
        }
    });
}

// Load movies into grids
function loadMovies() {
    loadMovieGrid('latestMovies', moviesData.latest);
    loadMovieGrid('popularMovies', moviesData.popular);
    loadMovieGrid('moviesGrid', moviesData.movies);
    loadMovieGrid('seriesGrid', moviesData.series);
    loadMovieGrid('animeGrid', moviesData.anime);
}

// Load movie grid
function loadMovieGrid(containerId, movies) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

// Create movie card element
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-category', movie.category);
    
    card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-year">${movie.year}</p>
            <div class="movie-rating">
                ${generateStars(movie.rating)}
                <span>${movie.rating}</span>
            </div>
            <button class="watch-btn" onclick="watchMovie(${movie.id})">
                <i class="fas fa-play"></i>
                شاهد الآن
            </button>
        </div>
    `;
    
    // Add click event to show movie details
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('watch-btn')) {
            showMovieDetails(movie);
        }
    });
    
    return card;
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Filter movies by category
function filterMovies(category) {
    const movieCards = document.querySelectorAll('#moviesGrid .movie-card');
    
    movieCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search movies
function searchMovies(query) {
    if (!query.trim()) {
        // Show all movies if search is empty
        document.querySelectorAll('.movie-card').forEach(card => {
            card.style.display = 'block';
        });
        return;
    }
    
    const allMovies = [...moviesData.latest, ...moviesData.popular, ...moviesData.movies, ...moviesData.series, ...moviesData.anime];
    const filteredMovies = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase())
    );
    
    // Update all grids with search results
    document.querySelectorAll('.movies-grid').forEach(grid => {
        grid.innerHTML = '';
        filteredMovies.forEach(movie => {
            const movieCard = createMovieCard(movie);
            grid.appendChild(movieCard);
        });
    });
}

// Toggle search
function toggleSearch() {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
}

// Show movie details (placeholder function)
function showMovieDetails(movie) {
    alert(`تفاصيل الفيلم: ${movie.title}\nالسنة: ${movie.year}\nالتقييم: ${movie.rating}`);
    // Here you would typically open a modal or navigate to a details page
}

// Watch movie (placeholder function)
function watchMovie(movieId) {
    alert(`بدء مشاهدة الفيلم رقم: ${movieId}`);
    // Here you would typically open the video player
}

// Modal functions
function showLogin() {
    loginModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeLogin() {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showRegister() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
}

function closeRegister() {
    registerModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Setup form handlers
function setupFormHandlers() {
    // Login form
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            
            // Simulate login
            if (email && password) {
                alert('تم تسجيل الدخول بنجاح!');
                closeLogin();
                // Here you would typically send the data to your backend
            }
        });
    }

    // Register form
    const registerForm = document.querySelector('.register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = registerForm.querySelector('input[type="text"]').value;
            const email = registerForm.querySelector('input[type="email"]').value;
            const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
            
            if (password !== confirmPassword) {
                alert('كلمات المرور غير متطابقة!');
                return;
            }
            
            // Simulate registration
            if (name && email && password) {
                alert('تم إنشاء الحساب بنجاح!');
                closeRegister();
                // Here you would typically send the data to your backend
            }
        });
    }

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Simulate sending message
            if (name && email && message) {
                alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
                contactForm.reset();
                // Here you would typically send the data to your backend
            }
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            // Simulate newsletter subscription
            if (email) {
                alert('تم الاشتراك في النشرة الإخبارية بنجاح!');
                newsletterForm.querySelector('input[type="email"]').value = '';
                // Here you would typically send the data to your backend
            }
        });
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.movie-card, .feature, .section-title');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
setupLazyLoading();

// Utility functions
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

// Debounced search
const debouncedSearch = debounce(searchMovies, 300);

// Update search input to use debounced search
if (searchInput) {
    searchInput.removeEventListener('input', searchMovies);
    searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
}

// Error handling for images
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/250x350/333/fff?text=صورة+غير+متوفرة';
    }
}, true);

// Performance optimization
function optimizePerformance() {
    // Preload critical resources
    const criticalImages = [
        'https://via.placeholder.com/400x600/333/fff?text=فيلم+مميز'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
optimizePerformance();

