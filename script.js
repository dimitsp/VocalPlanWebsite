document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation start state and observe elements
    const animateElements = document.querySelectorAll('.feature-card, .arch-img, .section-header');
    
    animateElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
    });
    
    // Add dynamic interactive effect to cards based on mouse position
    const hoverCards = document.querySelectorAll('.hover-glow');
    
    hoverCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // App Mockup Interactivity & Carousel
    const screenWelcome = document.getElementById('screen-welcome');
    const screenSetup = document.getElementById('screen-setup');
    const screenLogin = document.getElementById('screen-login');
    const btnGetStarted = document.getElementById('btn-get-started');
    const heroBtnGetAccess = document.getElementById('hero-get-access');
    const btnStartUsing = document.getElementById('btn-start-using');
    const btnSignIn = document.getElementById('btn-sign-in');
    
    let currentScreen = 0;
    const screens = [
        { el: screenWelcome, left: 'hidden-left', right: 'hidden-right' },
        { el: screenSetup, left: 'hidden-left', right: 'hidden-right' },
        { el: screenLogin, left: 'hidden-left', right: 'hidden-right' }
    ];

    const showScreen = (index) => {
        if (!screenWelcome || !screenSetup || !screenLogin) return;
        
        if (currentScreen === 2 && index === 0) {
            // Smooth rewind reset
            screenLogin.classList.add('hidden-right');
            screenWelcome.classList.remove('hidden-left');
            
            // Move middle screen silently without transition
            screenSetup.style.transition = 'none';
            screenSetup.classList.remove('hidden-left');
            screenSetup.classList.add('hidden-right');
            
            // Force reflow to apply the non-transitioned state
            void screenSetup.offsetWidth;
            screenSetup.style.transition = '';
        } else {
            screens.forEach((screen, i) => {
                if (i < index) {
                    screen.el.classList.add(screen.left);
                    screen.el.classList.remove(screen.right);
                } else if (i > index) {
                    screen.el.classList.remove(screen.left);
                    screen.el.classList.add(screen.right);
                } else {
                    screen.el.classList.remove(screen.left);
                    screen.el.classList.remove(screen.right);
                }
            });
        }
        currentScreen = index;
    };

    const nextScreen = () => {
        let nextIndex = currentScreen + 1;
        if (nextIndex >= screens.length) {
            nextIndex = 0;
        }
        showScreen(nextIndex);
    };

    let carouselInterval = setInterval(nextScreen, 4000);

    const handleManualTransition = (index) => {
        clearInterval(carouselInterval);
        showScreen(index);
        carouselInterval = setInterval(nextScreen, 4000);
    };

    if (btnGetStarted) btnGetStarted.addEventListener('click', () => handleManualTransition(1));
    if (heroBtnGetAccess) heroBtnGetAccess.addEventListener('click', () => handleManualTransition(1));
    if (btnStartUsing) btnStartUsing.addEventListener('click', () => handleManualTransition(2));
    if (btnSignIn) btnSignIn.addEventListener('click', () => handleManualTransition(0));

    // Language selection toggle
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            langOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    // Image Modal Logic
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close-modal");
    const archImages = document.querySelectorAll(".arch-img");

    archImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("show");
            modalImg.src = this.src;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            modal.classList.remove("show");
        });
    }

    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    }

    // Document Modal Logic
    const docModal = document.getElementById("doc-modal");
    const docIframe = document.getElementById("doc-iframe");
    const closeDocBtn = document.getElementById("close-doc-modal");
    const btnViewDocs = document.getElementById("hero-view-docs");

    if (btnViewDocs) {
        btnViewDocs.addEventListener("click", function() {
            if (docModal) docModal.classList.add("show");
            if (docIframe) docIframe.src = "assets/Files/Executive%20Summary%20VocalPlan%20Platform%20Overview.pdf";
        });
    }

    if (closeDocBtn) {
        closeDocBtn.addEventListener("click", function() {
            if (docModal) docModal.classList.remove("show");
            if (docIframe) docIframe.src = "";
        });
    }

    if (docModal) {
        docModal.addEventListener("click", function(e) {
            if (e.target === docModal) {
                docModal.classList.remove("show");
                if (docIframe) docIframe.src = "";
            }
        });
    }
});
