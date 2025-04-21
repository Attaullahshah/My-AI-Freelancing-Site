// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.main-nav ul').classList.toggle('show');
});

// Tab System
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hide all panels
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        // Deactivate all buttons
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        // Activate clicked tab
        btn.classList.add('active');
        const panelId = btn.getAttribute('data-tab');
        document.getElementById(panelId).classList.add('active');
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.querySelector('i').classList.toggle('fa-chevron-up');
    });
});

// Resource Form Validation
document.querySelector('.resource-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;
    const name = e.target.querySelector('input[type="text"]').value;
    const service = e.target.querySelector('select').value;

    // Email validation
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    // Name validation
    if (name.length < 2) {
        alert('Please enter your name');
        return;
    }

    // Service selection validation
    if (!service) {
        alert('Please select your primary service');
        return;
    }

    // Success handling
    alert('Thank you! Check your email for the free resources.');
    e.target.reset();
});

// Newsletter Form Validation
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target.querySelector('input[type="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Success handling
    alert('Thank you for subscribing! Check your inbox for confirmation.');
    e.target.reset();
});

// Success Stories Carousel
document.addEventListener('DOMContentLoaded', () => {
    new Glide('.success-stories', {
        type: 'carousel',
        perView: 1,
        autoplay: 3000
    }).mount();
});

// Debounce function to limit the rate of function execution
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Handle search input with debounce
const searchInput = document.getElementById('site-search');
function handleSearchInput(event) {
    const query = event.target.value;
    console.log('Search query:', query); // Replace with actual search logic
}

searchInput.addEventListener('input', debounce(handleSearchInput, 500));

// Search Functionality
document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = this.querySelector('input').value.trim();
    if (searchTerm) {
        history.pushState({}, '', `?search=${encodeURIComponent(searchTerm)}`);
        alert(`Searching for: ${searchTerm}`);
        // Yahan aap actual search functionality implement kar sakte hain
        // window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
    }
})