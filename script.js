/* ==========================================================================
   AgendOS / VocalPlan — Modern Product Presentation Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. Data: 15 Architecture Slides from AgendOS_System_Architecture.pdf
    // ----------------------------------------------------------------------
    const slidesData = [
        {
            num: 1,
            title: "Engineering AgendOS: VocalPlan",
            subtitle: "The Intelligent Calendar Operating System (React 19, TS, Capacitor 8)",
            src: "assets/agendos/slide_01.webp",
            fallback: "assets/agendos/slide_01.png"
        },
        {
            num: 2,
            title: "The Wrapper vs. The AgendOS Solution",
            subtitle: "Pushing intelligence to the edge & eliminating cloud latency bottlenecks",
            src: "assets/agendos/slide_02.webp",
            fallback: "assets/agendos/slide_02.png"
        },
        {
            num: 3,
            title: "The VocalPlan System Topology",
            subtitle: "React 19, Capacitor 8, Native Audio, Express 4.22, RS256, Gemini 2.5 Flash",
            src: "assets/agendos/slide_03.webp",
            fallback: "assets/agendos/slide_03.png"
        },
        {
            num: 4,
            title: "Three Foundational Pillars of Architecture",
            subtitle: "I. Multimodal Intelligence • II. Local-First Reliability • III. Zero-Trust Security",
            src: "assets/agendos/slide_04.webp",
            fallback: "assets/agendos/slide_04.png"
        },
        {
            num: 5,
            title: "Multimodal Ingestion Handles Continuous Inputs",
            subtitle: "Continuous voice streams, PDF.js web workers, and canvas image compression",
            src: "assets/agendos/slide_05.webp",
            fallback: "assets/agendos/slide_05.png"
        },
        {
            num: 6,
            title: "Hybrid Intelligence Routing Matrix",
            subtitle: "Android AICore vs. Chrome window.ai vs. Deterministic NLP vs. Gemini 2.5 Flash",
            src: "assets/agendos/slide_06.webp",
            fallback: "assets/agendos/slide_06.png"
        },
        {
            num: 7,
            title: "Semantic Hash Caching Intercepts Redundant Queries",
            subtitle: "SHA-256 filter intercepts queries, slashing cloud latency to 0ms & saving costs",
            src: "assets/agendos/slide_07.webp",
            fallback: "assets/agendos/slide_07.png"
        },
        {
            num: 8,
            title: "The Accessibility and Verbal Confirmation Loop",
            subtitle: "Deterministic spoken confirmation ('Yes'/'No') before committing database writes",
            src: "assets/agendos/slide_08.webp",
            fallback: "assets/agendos/slide_08.png"
        },
        {
            num: 9,
            title: "Local-First Architecture Guarantees Zero Latency",
            subtitle: "Immediate optimistic UI via IndexedDB and scoped localStorage sync queue buckets",
            src: "assets/agendos/slide_09.webp",
            fallback: "assets/agendos/slide_09.png"
        },
        {
            num: 10,
            title: "Atomic Synchronization and Conflict Reconciliation",
            subtitle: "Automated @capacitor/network trigger and timestamp-based conflict engine",
            src: "assets/agendos/slide_10.webp",
            fallback: "assets/agendos/slide_10.png"
        },
        {
            num: 11,
            title: "Enforcing a Strict Zero-Trust Client Model",
            subtitle: "Cryptographic RS256 Backend JWT verification and UID-scoped database isolation",
            src: "assets/agendos/slide_11.webp",
            fallback: "assets/agendos/slide_11.png"
        },
        {
            num: 12,
            title: "Defense-in-Depth Across the Application Stack",
            subtitle: "Prototype pollution sanitize, dual-tier rate limiting, Helmet CSP, receipt replay hash",
            src: "assets/agendos/slide_12.webp",
            fallback: "assets/agendos/slide_12.png"
        },
        {
            num: 13,
            title: "The Full Capability Grid of AgendOS",
            subtitle: "20 core capabilities across Voice & AI, Calendar, Storage & Sync, and Security",
            src: "assets/agendos/slide_13.webp",
            fallback: "assets/agendos/slide_13.png"
        },
        {
            num: 14,
            title: "Deterministic Execution Under Worst-Case Conditions",
            subtitle: "Offline command processing, optimistic IndexedDB write, and post-connection sync",
            src: "assets/agendos/slide_14.webp",
            fallback: "assets/agendos/slide_14.png"
        },
        {
            num: 15,
            title: "The Architectural Roadmap for VocalPlan",
            subtitle: "SQLite ACID transaction safety, client-side E2EE AES-GCM, and real-time FCM sync",
            src: "assets/agendos/slide_15.webp",
            fallback: "assets/agendos/slide_15.png"
        }
    ];

    // ----------------------------------------------------------------------
    // 2. Navigation & Header Scroll State
    // ----------------------------------------------------------------------
    const header = document.getElementById('main-header');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active link tracking
        let currentSectionId = '';
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileMenuToggle.classList.toggle('open', isOpen);
        });

        // Close mobile drawer when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                mobileMenuToggle.classList.remove('open');
            });
        });
    }

    // ----------------------------------------------------------------------
    // 3. Cursor Spotlight Hover Glow on Cards
    // ----------------------------------------------------------------------
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

    // ----------------------------------------------------------------------
    // 4. Interactive 15-Slide Architecture Deck Explorer
    // ----------------------------------------------------------------------
    let currentSlideIdx = 0;
    const stageImg = document.getElementById('deck-stage-img');
    const currentNumSpan = document.getElementById('deck-current-num');
    const currentTitleSpan = document.getElementById('deck-current-title');
    const prevBtn = document.getElementById('deck-prev-btn');
    const nextBtn = document.getElementById('deck-next-btn');
    const thumbsTrack = document.getElementById('deck-thumbs-track');
    const fullscreenSlideBtn = document.getElementById('btn-fullscreen-slide');

    // Populate thumbnails
    if (thumbsTrack) {
        slidesData.forEach((slide, idx) => {
            const thumbBtn = document.createElement('button');
            thumbBtn.className = `deck-thumb-btn ${idx === 0 ? 'active' : ''}`;
            thumbBtn.setAttribute('data-index', idx);
            thumbBtn.setAttribute('title', `Slide ${slide.num}: ${slide.title}`);
            thumbBtn.innerHTML = `
                <img src="${slide.src}" alt="${slide.title}" loading="lazy">
                <span class="thumb-num">S-${slide.num < 10 ? '0' + slide.num : slide.num}</span>
            `;
            thumbBtn.addEventListener('click', () => updateActiveSlide(idx));
            thumbsTrack.appendChild(thumbBtn);
        });
    }

    function updateActiveSlide(index) {
        if (index < 0) index = slidesData.length - 1;
        if (index >= slidesData.length) index = 0;

        currentSlideIdx = index;
        const slide = slidesData[index];

        if (stageImg) {
            stageImg.style.opacity = '0';
            setTimeout(() => {
                stageImg.src = slide.src;
                stageImg.setAttribute('data-slide-index', index);
                stageImg.setAttribute('data-title', slide.title);
                stageImg.style.opacity = '1';
            }, 120);
        }

        if (currentNumSpan) {
            currentNumSpan.textContent = `Slide ${slide.num < 10 ? '0' + slide.num : slide.num} of 15`;
        }

        if (currentTitleSpan) {
            currentTitleSpan.textContent = slide.title;
        }

        // Update active class on thumbnails
        const thumbBtns = document.querySelectorAll('.deck-thumb-btn');
        thumbBtns.forEach((btn, i) => {
            btn.classList.toggle('active', i === index);
            if (i === index) {
                btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => updateActiveSlide(currentSlideIdx - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => updateActiveSlide(currentSlideIdx + 1));

    if (fullscreenSlideBtn) {
        fullscreenSlideBtn.addEventListener('click', () => {
            openLightbox(slidesData[currentSlideIdx].src, slidesData[currentSlideIdx].title, currentSlideIdx, true);
        });
    }

    // ----------------------------------------------------------------------
    // 5. Lightbox Modal (Zoom Slides & Images)
    // ----------------------------------------------------------------------
    const imageModal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-img-title');
    const modalCounter = document.getElementById('modal-counter');
    const closeLightboxBtn = document.getElementById('btn-close-lightbox');
    const btnLightboxPrev = document.getElementById('btn-lightbox-prev');
    const btnLightboxNext = document.getElementById('btn-lightbox-next');

    let isLightboxSlideMode = false;
    let lightboxCurrentIndex = 0;

    function openLightbox(src, title, index = 0, isSlide = false) {
        if (!imageModal || !modalImg) return;
        modalImg.src = src;
        if (modalTitle) modalTitle.textContent = title || "Specification View";
        isLightboxSlideMode = isSlide;
        lightboxCurrentIndex = index;

        if (modalCounter) {
            if (isSlide) {
                modalCounter.textContent = `${index + 1} / ${slidesData.length}`;
                if (btnLightboxPrev) btnLightboxPrev.style.display = 'inline-flex';
                if (btnLightboxNext) btnLightboxNext.style.display = 'inline-flex';
            } else {
                modalCounter.textContent = "";
                if (btnLightboxPrev) btnLightboxPrev.style.display = 'none';
                if (btnLightboxNext) btnLightboxNext.style.display = 'none';
            }
        }

        imageModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!imageModal) return;
        imageModal.classList.remove('show');
        document.body.style.overflow = '';
    }

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (imageModal) {
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal || e.target.classList.contains('modal-backdrop-blur')) {
                closeLightbox();
            }
        });
    }

    if (btnLightboxPrev) {
        btnLightboxPrev.addEventListener('click', () => {
            if (!isLightboxSlideMode) return;
            lightboxCurrentIndex = (lightboxCurrentIndex - 1 + slidesData.length) % slidesData.length;
            const slide = slidesData[lightboxCurrentIndex];
            modalImg.src = slide.src;
            modalTitle.textContent = slide.title;
            modalCounter.textContent = `${lightboxCurrentIndex + 1} / ${slidesData.length}`;
            updateActiveSlide(lightboxCurrentIndex);
        });
    }

    if (btnLightboxNext) {
        btnLightboxNext.addEventListener('click', () => {
            if (!isLightboxSlideMode) return;
            lightboxCurrentIndex = (lightboxCurrentIndex + 1) % slidesData.length;
            const slide = slidesData[lightboxCurrentIndex];
            modalImg.src = slide.src;
            modalTitle.textContent = slide.title;
            modalCounter.textContent = `${lightboxCurrentIndex + 1} / ${slidesData.length}`;
            updateActiveSlide(lightboxCurrentIndex);
        });
    }

    // Attach click listener to all zoomable images
    const zoomableImages = document.querySelectorAll('.zoomable-img');
    zoomableImages.forEach(img => {
        img.addEventListener('click', function () {
            const slideIndex = this.getAttribute('data-slide-index');
            const title = this.getAttribute('data-title') || this.getAttribute('alt') || "Inspection View";
            if (slideIndex !== null && slideIndex !== undefined) {
                const idx = parseInt(slideIndex, 10);
                openLightbox(slidesData[idx].src, slidesData[idx].title, idx, true);
            } else {
                openLightbox(this.src, title, 0, false);
            }
        });
    });

    // Inspect buttons on full-slide cards
    const inspectBtns = document.querySelectorAll('.btn-caption-inspect');
    inspectBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const idx = parseInt(this.getAttribute('data-slide-index'), 10);
            if (!isNaN(idx) && slidesData[idx]) {
                openLightbox(slidesData[idx].src, slidesData[idx].title, idx, true);
            }
        });
    });

    // Keyboard navigation (Esc, ArrowLeft, ArrowRight)
    window.addEventListener('keydown', (e) => {
        if (!imageModal || !imageModal.classList.contains('show')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft' && isLightboxSlideMode && btnLightboxPrev) {
            btnLightboxPrev.click();
        } else if (e.key === 'ArrowRight' && isLightboxSlideMode && btnLightboxNext) {
            btnLightboxNext.click();
        }
    });

    // ----------------------------------------------------------------------
    // 6. PDF Document Modal Logic
    // ----------------------------------------------------------------------
    const docModal = document.getElementById('doc-modal');
    const docIframe = document.getElementById('doc-iframe');
    const closeDocBtn = document.getElementById('close-doc-modal');
    const docModalTitle = document.getElementById('doc-modal-title');

    function openDocModal(src, title) {
        if (!docModal || !docIframe) return;
        docIframe.src = src;
        if (docModalTitle) docModalTitle.textContent = title;
        docModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeDocModal() {
        if (!docModal || !docIframe) return;
        docModal.classList.remove('show');
        docIframe.src = "";
        document.body.style.overflow = '';
    }

    if (closeDocBtn) closeDocBtn.addEventListener('click', closeDocModal);
    if (docModal) {
        docModal.addEventListener('click', (e) => {
            if (e.target === docModal || e.target.classList.contains('modal-backdrop-blur')) {
                closeDocModal();
            }
        });
    }

    // Trigger buttons for PDF viewing
    const btnOpenExecSummary = document.getElementById('btn-open-exec-summary');
    if (btnOpenExecSummary) {
        btnOpenExecSummary.addEventListener('click', () => {
            openDocModal(
                "assets/Files/Executive%20Summary%20VocalPlan%20Platform%20Overview.pdf",
                "Executive Summary — VocalPlan Platform Overview"
            );
        });
    }

    const btnOpenPdfDoc = document.getElementById('btn-open-pdf-doc');
    if (btnOpenPdfDoc) {
        btnOpenPdfDoc.addEventListener('click', () => {
            openDocModal(
                "assets/Files/AgendOS_System_Architecture.pdf",
                "AgendOS System Architecture — 15-Slide Master Deck"
            );
        });
    }

    const btnOpenDeckModal = document.getElementById('btn-open-deck-modal');
    if (btnOpenDeckModal) {
        btnOpenDeckModal.addEventListener('click', () => {
            const deckExplorerSection = document.getElementById('deck-explorer');
            if (deckExplorerSection) {
                deckExplorerSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const footerBtnOpenDeck = document.getElementById('footer-btn-open-deck');
    if (footerBtnOpenDeck) {
        footerBtnOpenDeck.addEventListener('click', () => {
            openLightbox(slidesData[0].src, slidesData[0].title, 0, true);
        });
    }

    const footerBtnOpenSummary = document.getElementById('footer-btn-open-summary');
    if (footerBtnOpenSummary) {
        footerBtnOpenSummary.addEventListener('click', () => {
            openDocModal(
                "assets/Files/Executive%20Summary%20VocalPlan%20Platform%20Overview.pdf",
                "Executive Summary — VocalPlan Platform Overview"
            );
        });
    }

    // ----------------------------------------------------------------------
    // 7. Interactive Voice Pipeline Simulator (Slide 8 Demo)
    // ----------------------------------------------------------------------
    const simPresetBtns = document.querySelectorAll('.sim-preset-btn');
    const simTerminal = document.getElementById('sim-terminal-screen');
    const btnSimVoice = document.getElementById('btn-simulate-voice');
    const btnSimYes = document.getElementById('btn-sim-yes');
    const btnSimNo = document.getElementById('btn-sim-no');
    const btnSimReset = document.getElementById('btn-sim-reset');
    const simConfirmGroup = document.getElementById('sim-confirm-group');
    const audioVisualizer = document.getElementById('audio-visualizer');

    let currentCommand = "Schedule dental appointment next Tuesday at 3 PM";

    simPresetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            simPresetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCommand = btn.getAttribute('data-command');
            appendTermLine(`Selected test phrase: "${currentCommand}"`, 'system');
        });
    });

    function appendTermLine(text, type = '') {
        if (!simTerminal) return;
        const line = document.createElement('div');
        line.className = `term-line ${type}`;
        line.innerHTML = `<span class="prompt-sym">❯</span> ${text}`;
        simTerminal.appendChild(line);
        simTerminal.scrollTop = simTerminal.scrollHeight;
    }

    if (btnSimVoice) {
        btnSimVoice.addEventListener('click', () => {
            btnSimVoice.disabled = true;
            if (audioVisualizer) audioVisualizer.classList.add('active');

            appendTermLine(`Microphone activated. Ingesting audio stream (.webm / 16kHz)...`, 'system');

            setTimeout(() => {
                appendTermLine(`Transcribed: "${currentCommand}"`, 'user');
                appendTermLine(`Routing decision: Android AICore / Gemini Nano selected (Zero Latency, On-Device)`, 'system');
            }, 700);

            setTimeout(() => {
                appendTermLine(`Semantic Hash Computed: SHA-256 [7f83b165...]`, 'system');
                appendTermLine(`Intent Parsed: Action=CREATE_EVENT, Title="Dental Appointment", Time="Next Tuesday 15:00-16:00"`, 'ai');
                appendTermLine(`[SLIDE 08 Verbal Confirmation Loop Triggered]`, 'warning');
                appendTermLine(`Synthesized Spoken Prompt: "Should I schedule Dental Appointment for next Tuesday at 3 PM?"`, 'ai');

                if (audioVisualizer) audioVisualizer.classList.remove('active');
                if (simConfirmGroup) simConfirmGroup.style.display = 'flex';
            }, 1600);
        });
    }

    if (btnSimYes) {
        btnSimYes.addEventListener('click', () => {
            if (simConfirmGroup) simConfirmGroup.style.display = 'none';
            appendTermLine(`User Spoken Response: "Yes"`, 'user');
            appendTermLine(`Deterministic Confirmation Verified. Executing optimistic database write...`, 'system');

            setTimeout(() => {
                appendTermLine(`[Pillar II Local-First] Written to IndexedDB 'vocalplan_appointments_usr_01' (0 ms)`, 'system');
                appendTermLine(`Added to Sync Queue Bucket: pending_save { id: 'evt_8923a', title: 'Dental Appointment' }`, 'system');
                appendTermLine(`Event successfully added to active calendar. Ready.`, 'ai');
                if (btnSimVoice) btnSimVoice.disabled = false;
            }, 500);
        });
    }

    if (btnSimNo) {
        btnSimNo.addEventListener('click', () => {
            if (simConfirmGroup) simConfirmGroup.style.display = 'none';
            appendTermLine(`User Spoken Response: "No"`, 'user');
            appendTermLine(`Operation Aborted by user. Database write suppressed. Zero accidental data alteration.`, 'warning');
            if (btnSimVoice) btnSimVoice.disabled = false;
        });
    }

    if (btnSimReset) {
        btnSimReset.addEventListener('click', () => {
            if (simTerminal) {
                simTerminal.innerHTML = `<div class="term-line"><span class="prompt-sym">❯</span> System initialized. Microphone stream idle. Ready for voice input.</div>`;
            }
            if (simConfirmGroup) simConfirmGroup.style.display = 'none';
            if (btnSimVoice) btnSimVoice.disabled = false;
            if (audioVisualizer) audioVisualizer.classList.remove('active');
        });
    }

    // Hero demo shortcut button
    const heroBtnInteractiveDemo = document.getElementById('hero-btn-interactive-demo');
    if (heroBtnInteractiveDemo) {
        heroBtnInteractiveDemo.addEventListener('click', () => {
            const simWidget = document.getElementById('voice-sim-widget');
            if (simWidget) {
                simWidget.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    if (btnSimVoice) btnSimVoice.click();
                }, 600);
            }
        });
    }

    // ----------------------------------------------------------------------
    // 8. Interactive Mobile Phone Screen Carousel
    // ----------------------------------------------------------------------
    const screenWelcome = document.getElementById('screen-welcome');
    const screenSetup = document.getElementById('screen-setup');
    const screenLogin = document.getElementById('screen-login');
    const btnGetStarted = document.getElementById('btn-get-started');
    const btnStartUsing = document.getElementById('btn-start-using');
    const btnSignIn = document.getElementById('btn-sign-in');
    const linkBackWelcome = document.getElementById('link-back-welcome');
    const phoneMicBtn = document.getElementById('phone-mic-btn');

    let currentPhoneScreen = 0;
    const phoneScreens = [
        { el: screenWelcome },
        { el: screenSetup },
        { el: screenLogin }
    ];

    function showPhoneScreen(index) {
        if (!screenWelcome || !screenSetup || !screenLogin) return;

        phoneScreens.forEach((s, i) => {
            if (i < index) {
                s.el.classList.add('hidden-left');
                s.el.classList.remove('hidden-right');
            } else if (i > index) {
                s.el.classList.remove('hidden-left');
                s.el.classList.add('hidden-right');
            } else {
                s.el.classList.remove('hidden-left');
                s.el.classList.remove('hidden-right');
            }
        });
        currentPhoneScreen = index;
    }

    if (btnGetStarted) btnGetStarted.addEventListener('click', () => showPhoneScreen(1));
    if (btnStartUsing) btnStartUsing.addEventListener('click', () => showPhoneScreen(2));
    if (btnSignIn) btnSignIn.addEventListener('click', () => showPhoneScreen(0));
    if (linkBackWelcome) {
        linkBackWelcome.addEventListener('click', (e) => {
            e.preventDefault();
            showPhoneScreen(0);
        });
    }

    if (phoneMicBtn) {
        phoneMicBtn.addEventListener('click', () => {
            showPhoneScreen(1);
        });
    }

    // Interactive Language Selection inside phone setup
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            langOptions.forEach(o => {
                o.classList.remove('selected');
                const check = o.querySelector('.check-mark');
                if (check) check.remove();
            });
            opt.classList.add('selected');
            const check = document.createElement('span');
            check.className = 'check-mark';
            check.textContent = '✓';
            opt.appendChild(check);
        });
    });

    // ----------------------------------------------------------------------
    // 9. Capability Grid Filter Tabs (Slide 13)
    // ----------------------------------------------------------------------
    const capTabBtns = document.querySelectorAll('.cap-tab-btn');
    const capCards = document.querySelectorAll('.cap-card');

    capTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            capTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            capCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 10. App UI Screenshot Gallery Filter Tabs
    // ----------------------------------------------------------------------
    const galCatBtns = document.querySelectorAll('.gal-cat-btn');
    const galItemCards = document.querySelectorAll('.gallery-item-card');

    galCatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galCatBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            galItemCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 11. Architecture Video Flow Toggle Control
    // ----------------------------------------------------------------------
    const archVideo = document.getElementById('arch-video');
    const btnToggleVideo = document.getElementById('btn-toggle-video');

    if (archVideo && btnToggleVideo) {
        btnToggleVideo.addEventListener('click', () => {
            if (archVideo.paused) {
                archVideo.play();
                btnToggleVideo.classList.remove('paused');
            } else {
                archVideo.pause();
                btnToggleVideo.classList.add('paused');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 12. Reveal Animations on Scroll (Intersection Observer)
    // ----------------------------------------------------------------------
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    const revealElements = document.querySelectorAll('.section-header-block, .comparison-card, .pillar-card, .topology-diagram-card, .topology-video-card, .multimodal-card, .sec-card, .sync-card, .roadmap-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // Apply reveal class styles dynamically
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleEl);
});
