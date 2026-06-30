document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Toggle Mode ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        const sunIcon = themeToggleBtn.querySelector('.sun-icon');
        const moonIcon = themeToggleBtn.querySelector('.moon-icon');

        // Retrieve saved preference (default to dark if not set)
        const savedTheme = localStorage.getItem('theme-preference') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateToggleIcons(savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme-preference', newTheme);
            updateToggleIcons(newTheme);
        });

        function updateToggleIcons(theme) {
            if (theme === 'light') {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            } else {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            }
        }
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- Dynamic Typing Effect ---
    const words = ["Shopify Developer", "Liquid Architect", "E-commerce Engineer", "OS 2.0 Expert"];
    let i = 0;
    let timer;
    const typedTextElement = document.getElementById('typed-text');

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                typedTextElement.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                typedTextElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 60);
        };
        loopDeleting();
    }

    // Start the typing effect
    if (typedTextElement) {
        typedTextElement.innerHTML = "";
        typingEffect();
    }

    // --- Intersection Observer for Scroll Reveals ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // --- Intersection Observer for Skill Progress Bars ---
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillBarsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.width = width;
                observer.unobserve(bar);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        skillBarsObserver.observe(bar);
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = "";
        const scrollPosition = window.scrollY + 120; // offset for nav header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // --- Contact Form Handling with Mock Success ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Set sending state
            formStatus.className = 'form-status';
            formStatus.textContent = 'Sending message...';
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.5';

            // Simulate form submission API call
            setTimeout(() => {
                formStatus.className = 'form-status success';
                formStatus.textContent = 'Inquiry sent successfully! Aarti will contact you shortly.';
                
                // Reset button and form
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtn.innerHTML = originalBtnContent;
                contactForm.reset();

                // Clear message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = 'form-status';
                }, 5000);
            }, 1500);
        });
    }
});
