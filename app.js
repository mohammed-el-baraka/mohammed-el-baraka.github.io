
let currentLang = 'en';
let showAllProjects = false;

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    const langData = translations[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.dataset.translateKey;
        if (langData[key]) {
            el.innerHTML = langData[key];
        }
    });
    
    document.title = langData.page_title;
    
    renderProjects(lang);
    renderLeadership(lang);
    renderSkills();
    
    initTypewriter(lang);
}

function renderProjects(lang) {
    const projectGrid = document.getElementById('project-grid');
    projectGrid.innerHTML = '';
    const langProjects = translations[lang].projects;
    const langStrings = translations[lang];

    const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 3);

    visibleProjects.forEach((pData, index) => {
        const translatedProject = langProjects.find(t => t.id === pData.id);
        if (!translatedProject) return;

        const card = document.createElement('div');
        card.className = 'item-card reveal-scale-up';
        card.style.transitionDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="card-body">
                <div>
                    <h3 class="card-title text-xl mb-2 font-bold">${translatedProject.title}</h3>
                    <p class="card-text text-gray-400 mb-4 text-sm leading-relaxed">${translatedProject.description}</p>
                    <p class="text-xs text-gray-500 mb-4"><b>Technologies:</b> ${pData.technologies.join(', ')}</p>
                </div>
                <div class="mt-auto pt-4 grid grid-cols-2 gap-2 text-sm">
                    <button onclick="viewPdf('${pData.reportUrl}', 'report', '${pData.id}')" class="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white p-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-1">${langStrings.project_button_report}</button>
                    <button onclick="viewPdf('${pData.presentationUrl}', 'presentation', '${pData.id}')" class="bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white p-2.5 rounded-full transition-all duration-300 flex items-center justify-center gap-1">${langStrings.project_button_presentation}</button>
                </div>
            </div>`;
        projectGrid.appendChild(card);
        revealObserver.observe(card);
    });

    updateToggleButton();
}

function updateToggleButton() {
    const toggleBtn = document.getElementById('toggle-projects-btn');
    if (!toggleBtn) return;
    
    const labels = toggleLabels[currentLang] || toggleLabels['en'];
    const text = showAllProjects ? labels.less : labels.more;
    const icon = showAllProjects 
        ? `<svg class="w-4 h-4 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>` 
        : `<svg class="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>`;
    
    toggleBtn.innerHTML = `<span>${text}</span> ${icon}`;
}

function toggleProjects() {
    showAllProjects = !showAllProjects;
    renderProjects(currentLang);
    
    if (!showAllProjects) {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }
}

function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = '';
    skillsData.forEach((skill, index) => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag reveal-scale-up font-semibold px-4 py-2 rounded-full text-base';
        tag.style.transitionDelay = `${index * 0.015}s`;
        tag.textContent = skill;
        tag.onclick = () => showSkillDetails(skill);
        skillsContainer.appendChild(tag);
        revealObserver.observe(tag);
    });
}

function renderLeadership(lang) {
    const leadershipGrid = document.getElementById('leadership-grid');
    leadershipGrid.innerHTML = '';
    const langLeadership = translations[lang].leadership;

    leadershipData.forEach((lData, index) => {
        const translatedActivity = langLeadership.find(t => t.id === lData.id);
        if (!translatedActivity) return;

        const card = document.createElement('div');
        card.className = 'item-card clickable reveal-scale-up';
        card.style.transitionDelay = `${index * 0.05}s`;
        card.onclick = () => openLeadershipModal(lData.id);
        card.innerHTML = `
            <div class="card-body text-center">
                <h3 class="card-title text-xl font-bold">${translatedActivity.title}</h3>
                <p class="font-semibold" style="color: var(--primary-color);">${translatedActivity.role}</p>
            </div>`;
        leadershipGrid.appendChild(card);
        revealObserver.observe(card);
    });
}

// Hardware-Accelerated Scroll Reveals
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    root: null,
    rootMargin: '50px 0px 50px 0px',
    threshold: 0
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];
    
    let initialLang = 'en';
    if (savedLang && translations[savedLang]) {
        initialLang = savedLang;
    } else if (translations[browserLang]) {
        initialLang = browserLang;
    }

    document.getElementById('lang-selector').value = initialLang;
    switchLanguage(initialLang);

    // Observe reveal elements
    document.querySelectorAll('.reveal-fade-in, .reveal-scale-up, .reveal-slide-left').forEach(el => {
        revealObserver.observe(el);
    });

    // Initialize Intersection Observer for active nav link styling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#header nav a');

    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });
});

const loaderHTML = `<div class="flex justify-center items-center h-32"><div class="loader"></div></div>`;

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.remove('scale-95');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.add('scale-95');
}

function openContactModal() { openModal('contact-modal'); }

function openLeadershipModal(activityId) {
    const activity = leadershipData.find(item => item.id === activityId);
    const translatedActivity = translations[currentLang].leadership.find(item => item.id === activityId);
    if (!activity || !translatedActivity) return;

    document.getElementById('leadership-modal-title').textContent = translatedActivity.title;
    document.getElementById('leadership-modal-img').src = 'assets/images/me.jpg';
    document.getElementById('leadership-modal-img').alt = translatedActivity.title;
    document.getElementById('leadership-modal-desc').textContent = translatedActivity.description;
    
    openModal('leadership-modal');
}

let pdfDoc = null;
let currentScale = 1.0;
let currentPdfUrl = '';
const pdfViewer = document.getElementById('pdf-viewer');

async function viewPdf(url, type, id) {
    // Stop if the URL is not a valid Google Drive link
    if (!url || !url.includes('drive.google.com')) {
        alert('This document is not available for preview.');
        return;
    }

    // --- 1. Set Modal Title ---
    const langStrings = translations[currentLang];
    let title = '';
    if (type === 'resume') {
         title = langStrings.pdf_modal_title_resume;
    } else {
         const project = translations[currentLang].projects.find(p => p.id === id);
         if (project) {
            title = (type === 'report' ? langStrings.pdf_modal_title_report : langStrings.pdf_modal_title_presentation).replace('{title}', project.title);
         }
    }
    document.getElementById('pdf-modal-title').textContent = title;

    // --- 2. Create the Embed Link ---
    const urlParts = url.split('/');
    const fileId = urlParts[urlParts.indexOf('d') + 1];
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

    // --- 3. Update Modal Content and Show ---
    document.getElementById('pdf-iframe').src = embedUrl;
    document.getElementById('pdf-new-tab-link').href = url; // Set link for the "Open in new tab" button

    openModal('pdf-modal');
}

function openInNewTab() { if (currentPdfUrl) { window.open(currentPdfUrl, '_blank'); } }


function showSkillDetails(skillName) {
    const lang = currentLang === 'fr' ? 'fr' : 'en';
    const description = skillDescriptions[lang][skillName] || skillDescriptions['en'][skillName] || '';
    
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');
    
    modalTitle.innerText = `💡 Skill: ${skillName}`;
    
    // Format the text like callGemini (replaces bolding and lists)
    let formattedText = description;
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                 .replace(/^\* (.*?)$/gm, '<li class="ml-4 list-disc">$1</li>')
                                 .replace(/\n/g, '<br>');
    
    modalBody.innerHTML = `<div class="prose prose-invert max-w-none">${formattedText}</div>`;
    
    const langStrings = translations[currentLang];
    // Translate button text if translations are available
    const buttonText = langStrings.modal_skill_projects_title 
        ? langStrings.modal_skill_projects_title.replace('{skill}', skillName) 
        : `Show Projects Using This Skill`;
    
    modalFooter.innerHTML = `<button onclick="showProjectsForSkill('${skillName}')" class="w-full text-center bg-violet-700/80 hover:bg-violet-600/80 text-white font-bold py-2 px-4 rounded-lg">${buttonText}</button>`;
    
    openModal('ai-modal');
}

function showProjectsForSkill(skillName) {
    const langStrings = translations[currentLang];
    document.getElementById('modal-title').innerText = `🚀 Projects with ${skillName}`;
    
    const modalBody = document.getElementById('modal-body');
    document.getElementById('modal-footer').innerHTML = ''; // Clear footer for this view
    
    const relevantProjects = projectsData.filter(p => p.technologies.includes(skillName));
    
    if (relevantProjects.length === 0) {
        modalBody.innerHTML = `<p>No projects currently use this skill.</p>`;
    } else {
        const translatedProjects = translations[currentLang].projects;
        let projectListHTML = `<p class="mb-4">${langStrings.modal_list_intro.replace('{skill}', skillName)}</p><ul class="list-disc ml-5 space-y-2">`;
        
        relevantProjects.forEach(p => {
            const translatedTitle = translatedProjects.find(tp => tp.id === p.id)?.title || p.id;
            projectListHTML += `<li>${translatedTitle}</li>`;
        });
        
        projectListHTML += `</ul>`;
        modalBody.innerHTML = projectListHTML;
    }
    
    openModal('ai-modal');
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal('ai-modal');
        closeModal('pdf-modal');
        closeModal('contact-modal');
        closeModal('leadership-modal');
    }
});

// Typewriter animation state and logic
let typewriterTimeout = null;
let isDeleting = false;
let phraseIndex = 0;
let charIndex = 0;

function initTypewriter(lang) {
    if (typewriterTimeout) {
        clearTimeout(typewriterTimeout);
    }
    
    const typewriterEl = document.getElementById('typewriter-text');
    if (!typewriterEl) return;
    
    const phrases = translations[lang].hero_typing || ["Industrial Management", "Data Science"];
    
    isDeleting = false;
    phraseIndex = 0;
    charIndex = 0;
    typewriterEl.textContent = '';
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        
        typewriterEl.textContent = currentPhrase.substring(0, charIndex);
        
        let typeSpeed = isDeleting ? 40 : 80;
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 1800; // Pause at the end of the phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 400; // Pause before starting next phrase
        }
        
        typewriterTimeout = setTimeout(type, typeSpeed);
    }
    
    type();
}

// 3D Glass Card Tilt & Spotlight
document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.item-card');
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spotlight
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    
    // 3D Tilt calculation (max 5 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    card.style.transition = 'none';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
}, { passive: true });

document.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.item-card');
    if (!card) return;
    // Only transition compositor-friendly transform on mouse leave
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
}, { passive: true });

// Scroll Event: Scroll Progress Bar (Throttled using requestAnimationFrame)
let ticking = false;
const scrollProgressEl = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollProgress();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

function updateScrollProgress() {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) : 0;
    if (scrollProgressEl) {
        scrollProgressEl.style.transform = `scaleX(${scrolled})`;
    }
}

