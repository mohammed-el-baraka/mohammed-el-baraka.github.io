
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

function formatProjectDate(dateStr, lang) {
    if (!dateStr) return '';
    try {
        const [year, month] = dateStr.split('-');
        const dateObj = new Date(parseInt(year, 10), parseInt(month || 1, 10) - 1, 1);
        const formatter = new Intl.DateTimeFormat(lang || 'en', { month: 'short', year: 'numeric' });
        return formatter.format(dateObj);
    } catch (e) {
        return dateStr;
    }
}

function renderProjects(lang) {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;
    projectGrid.innerHTML = '';
    const langProjects = translations[lang].projects;
    const langStrings = translations[lang];

    // Sort projects chronologically (descending, newest first)
    const sortedProjects = [...projectsData].sort((a, b) => {
        const dateA = a.date || '1970-01';
        const dateB = b.date || '1970-01';
        return dateB.localeCompare(dateA);
    });

    const visibleProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, 3);

    // Group visible projects by Year (Google Photos style)
    const yearGroups = {};
    visibleProjects.forEach(pData => {
        const year = pData.date ? pData.date.split('-')[0] : 'Other';
        if (!yearGroups[year]) yearGroups[year] = [];
        yearGroups[year].push(pData);
    });

    const sortedYears = Object.keys(yearGroups).sort((a, b) => b.localeCompare(a));

    sortedYears.forEach((year, yIdx) => {
        const yearGroupEl = document.createElement('div');
        yearGroupEl.className = 'year-group reveal-fade-in';
        yearGroupEl.style.transitionDelay = `${yIdx * 0.08}s`;

        yearGroupEl.innerHTML = `
            <div class="year-header">
                <div class="year-chip">
                    <svg class="w-4 h-4 text-primary-color inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    <span>${year}</span>
                </div>
                <div class="year-line"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        `;

        const cardsContainer = yearGroupEl.querySelector('.grid');

        yearGroups[year].forEach((pData, cIdx) => {
            const translatedProject = langProjects.find(t => t.id === pData.id);
            if (!translatedProject) return;

            const formattedDate = formatProjectDate(pData.date, lang);
            const dateTagHTML = formattedDate 
                ? `<span class="project-time-tag"><svg class="w-3 h-3 inline-block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><span>${formattedDate}</span></span>` 
                : '';

            // Dynamically construct all available action buttons for this project
            const docButtons = [];

            if (pData.reportUrl || pData.id === 'geology-internship' || pData.id === 'pg-brand-management-shadowing' || pData.id === 'petropolis-landslide-modeling') {
                const reportLabel = pData.id === 'geology-internship' ? (currentLang === 'fr' ? 'Rapport Géologie' : 'Geology Report') : (langStrings.project_button_report || 'Report');
                docButtons.push(`
                    <button onclick="viewPdf('${pData.reportUrl}', 'report', '${pData.id}')" class="btn-doc-action">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                        <span>${reportLabel}</span>
                    </button>
                `);
            }

            if (pData.presentationUrl || pData.id === 'geology-internship' || pData.id === 'biomass-co2-nareva' || pData.id === 'vsm-ciam-steel' || pData.id === 'pg-brand-management-shadowing' || pData.id === 'petropolis-landslide-modeling') {
                const presLabel = pData.id === 'geology-internship' ? (currentLang === 'fr' ? 'Rapport Géophysique' : 'Geophysics Report') : (pData.id === 'petropolis-landslide-modeling' ? (currentLang === 'fr' ? 'Présentation Technique' : (currentLang === 'pt' ? 'Apresentação Técnica' : 'Technical Presentation')) : (langStrings.project_button_presentation || 'Presentation'));
                docButtons.push(`
                    <button onclick="viewPdf('${pData.presentationUrl}', 'presentation', '${pData.id}')" class="btn-doc-action">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h12a2.25 2.25 0 002.25-2.25V3m-16.5 0h16.5M3 3h18M8.25 12V9m3.75 3V6.75m3.75 5.25V10.5m-9 9.75h10.5" /></svg>
                        <span>${presLabel}</span>
                    </button>
                `);
            }

            if (pData.culturalPresentationUrl || pData.id === 'petropolis-landslide-modeling') {
                const cultLabel = currentLang === 'fr' ? 'Expérience Culturelle' : (currentLang === 'pt' ? 'Experiência Cultural' : 'Cultural Experience');
                docButtons.push(`
                    <button onclick="viewPdf('${pData.culturalPresentationUrl}', 'cultural-presentation', '${pData.id}')" class="btn-doc-action">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                        <span>${cultLabel}</span>
                    </button>
                `);
            }

            if (pData.demoUrl) {
                docButtons.push(`
                    <a href="${pData.demoUrl}" target="_blank" class="btn-doc-action" style="text-decoration:none;">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                        <span>${langStrings.project_button_demo || 'Website'}</span>
                    </a>
                `);
            }

            if (pData.spreadsheetUrl) {
                const sheetLabel = currentLang === 'fr' ? 'Modèle Excel' : (currentLang === 'pt' ? 'Modelo Excel' : (currentLang === 'es' ? 'Modelo Excel' : (currentLang === 'de' ? 'Excel-Modell' : (currentLang === 'ar' ? 'نموذج إكسيل' : (currentLang === 'zh' ? 'Excel财务模型' : 'Excel Model')))));
                docButtons.push(`
                    <a href="${pData.spreadsheetUrl}" target="_blank" class="btn-doc-action" style="text-decoration:none;">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5m7.5 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h17.25" /></svg>
                        <span>${sheetLabel}</span>
                    </a>
                `);
            }

            if (pData.posterUrl || pData.id === 'sociotechnical-controversy-africa') {
                docButtons.push(`
                    <button onclick="viewPdf('${pData.posterUrl}', 'poster', '${pData.id}')" class="btn-doc-action">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        <span>${langStrings.project_button_poster || 'Poster'}</span>
                    </button>
                `);
            }

            if (pData.businessModelUrl) {
                docButtons.push(`
                    <button onclick="viewPdf('${pData.businessModelUrl}', 'business-model', '${pData.id}')" class="btn-doc-action">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                        <span>${langStrings.project_button_business_model || 'Business Model'}</span>
                    </button>
                `);
            }

            if (pData.githubUrl) {
                docButtons.push(`
                    <a href="${pData.githubUrl}" target="_blank" class="btn-doc-action" style="text-decoration:none;">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        <span>GitHub</span>
                    </a>
                `);
            }

            // If odd number of action buttons, make the last button span both columns for a balanced design
            if (docButtons.length % 2 === 1) {
                const lastIdx = docButtons.length - 1;
                docButtons[lastIdx] = docButtons[lastIdx].replace('class="btn-doc-action', 'class="btn-doc-action col-span-2');
            }

            const buttonsContainerHTML = docButtons.length > 0
                ? `<div class="grid grid-cols-2 gap-2 text-sm">${docButtons.join('')}</div>`
                : '';

            const card = document.createElement('div');
            card.className = 'item-card reveal-scale-up';
            card.style.transitionDelay = `${(yIdx * 3 + cIdx) * 0.05}s`;
            card.innerHTML = `
                <div class="card-body">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-3">
                            ${dateTagHTML}
                        </div>
                        <h3 class="card-title text-xl mb-2 font-bold cursor-pointer hover:text-primary-color transition-colors" onclick="openProjectAiModal('${pData.id}')">${translatedProject.title}</h3>
                        <p class="card-text text-gray-400 mb-4 text-sm leading-relaxed">${translatedProject.description}</p>
                        <p class="text-xs text-gray-500 mb-4"><b>Technologies:</b> ${pData.technologies.join(', ')}</p>
                    </div>
                    <div class="mt-auto pt-4 flex flex-col gap-2">
                        ${buttonsContainerHTML}
                        <button onclick="openProjectAiModal('${pData.id}')" class="btn-ai-action w-full">
                            <svg class="w-4 h-4 text-violet-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                            <span>${langStrings.project_button_explore_ai || 'Explore with AI'}</span>
                        </button>
                    </div>
                </div>`;
            cardsContainer.appendChild(card);
            revealObserver.observe(card);
        });

        projectGrid.appendChild(yearGroupEl);
        revealObserver.observe(yearGroupEl);
    });

    updateToggleButton();
}

async function fetchProjectMarkdown(projectId) {
    if (typeof projectReports !== 'undefined' && projectReports[projectId]) {
        return projectReports[projectId];
    }
    try {
        const response = await fetch(`projects/${projectId}.md`);
        if (response.ok) {
            return await response.text();
        }
    } catch (e) {
        console.warn('Could not fetch markdown file directly', e);
    }
    
    // Fallback if local file protocol blocks direct fetch
    const project = translations[currentLang]?.projects?.find(p => p.id === projectId);
    const meta = projectsData.find(p => p.id === projectId);
    return `# ${project?.title || projectId}\n\n**Technologies:** ${meta?.technologies?.join(', ')}\n\n## Overview\n${project?.description || ''}`;
}

function formatMarkdownToHTML(md) {
    if (!md) return '';

    // 1. Protect KaTeX Math expressions ($$...$$, $...$, \[...\], \(...\)) from markdown syntax mangling
    const mathTokens = [];
    let processed = md;

    // Block math: $$ ... $$ and \[ ... \]
    processed = processed.replace(/(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\])/g, (match) => {
        const placeholder = `@@MATH_BLOCK_${mathTokens.length}@@`;
        mathTokens.push({ placeholder, math: match });
        return placeholder;
    });

    // Inline math: $ ... $ and \( ... \)
    processed = processed.replace(/(\$[^$\n\r]+\$|\\\(.*?\\\))/g, (match) => {
        const placeholder = `@@MATH_INLINE_${mathTokens.length}@@`;
        mathTokens.push({ placeholder, math: match });
        return placeholder;
    });

    let html = '';

    // 2. Parse using marked.js if available
    if (window.marked && typeof window.marked.parse === 'function') {
        try {
            window.marked.setOptions({
                gfm: true,
                breaks: true
            });
            html = window.marked.parse(processed);
        } catch (e) {
            console.warn('marked.parse error, using fallback parser', e);
        }
    }

    // 3. Robust regex fallback parser if marked is unavailable or failed
    if (!html) {
        html = processed
            // Headings
            .replace(/^######\s*(.*?)$/gm, '<h6 class="text-xs font-semibold text-gray-300 mt-2 mb-1">$1</h6>')
            .replace(/^#####\s*(.*?)$/gm, '<h5 class="text-sm font-semibold text-gray-300 mt-2 mb-1">$1</h5>')
            .replace(/^####\s*(.*?)$/gm, '<h4 class="text-sm font-semibold text-gray-200 mt-3 mb-1">$1</h4>')
            .replace(/^###\s*(.*?)$/gm, '<h4 class="text-base font-medium text-gray-200 mt-3 mb-1">$1</h4>')
            .replace(/^##\s*(.*?)$/gm, '<h3 class="text-lg font-semibold text-primary-color mt-4 mb-2">$1</h3>')
            .replace(/^#\s*(.*?)$/gm, '<h2 class="text-xl font-bold text-white mb-2 pb-1 border-b border-white/10">$1</h2>')
            // Horizontal rule
            .replace(/^\s*(?:---|___|\*\*\*)\s*$/gm, '<hr class="my-4 border-white/10">')
            // Bold and Italic
            .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="text-white font-semibold"><em>$1</em></strong>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
            .replace(/\*(.*?)\*/g, '<em class="text-gray-300">$1</em>')
            // Inline code
            .replace(/`([^`]+)`/g, '<code class="bg-black/50 text-violet-300 px-1.5 py-0.5 rounded text-xs border border-violet-500/20">$1</code>')
            // Lists
            .replace(/^\s*-\s+(.*$)/gm, '<li class="ml-4 list-disc text-gray-300 mb-1">$1</li>')
            .replace(/^\s*\d+\.\s+(.*$)/gm, '<li class="ml-4 list-decimal text-gray-300 mb-1">$1</li>')
            // Paragraphs and breaks
            .replace(/\n\n/g, '<p class="mb-3 text-gray-300 leading-relaxed"></p>')
            .replace(/\n/g, '<br>');
    }

    // 4. Restore math tokens verbatim for KaTeX auto-rendering
    mathTokens.forEach(({ placeholder, math }) => {
        html = html.replace(placeholder, math);
    });

    return html;
}

function renderMathInBox(container) {
    if (!container) return;
    if (window.renderMathInElement) {
        try {
            window.renderMathInElement(container, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\[', right: '\\]', display: true},
                    {left: '\\(', right: '\\)', display: false}
                ],
                throwOnError: false
            });
        } catch (e) {
            console.warn('KaTeX render error', e);
        }
    }
}

async function openProjectAiModal(projectId, initialAction = null, customQuery = null) {
    const t = translations[currentLang] || translations['en'];
    const project = t.projects?.find(p => p.id === projectId);
    const projectTitle = project ? project.title : projectId;

    const modal = document.getElementById('ai-modal');
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.classList.add('ai-modal-content');
        }
    }

    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalFooter = document.getElementById('modal-footer');

    const titleTemplate = t.ai_assistant_title || 'AI Assistant: {title}';
    modalTitle.innerHTML = `<span class="shimmer-text">${titleTemplate.replace('{title}', projectTitle)}</span>`;
    
    const chipMethodology = t.ai_chip_methodology || '✨ How was this built?';
    const chipSummary = t.ai_chip_summary || '⚡ 3-Bullet Summary';
    const chipMath = t.ai_chip_math || '📐 Math & Algorithms';
    const chipResults = t.ai_chip_results || '📈 Results & Impact';
    const mathQuery = (t.ai_prompt_math_query || 'What mathematical models, formulas, and optimization algorithms were used in this project?').replace(/'/g, "\\'");
    const resultsQuery = (t.ai_prompt_results_query || 'What were the key measurable outcomes, accuracy metrics, and real-world results?').replace(/'/g, "\\'");
    const initTitle = t.ai_initial_title || 'What would you like to explore about this project?';
    const initDesc = t.ai_initial_desc || 'Ask any question below or choose a suggestion chip above to see the methodology, mathematical model, or results.';
    const inputPlaceholder = t.ai_input_placeholder || 'Ask anything about this project... (e.g. How does the model work?)';
    const sendButton = t.ai_send_button || 'Ask';

    // Render the interactive search/query UI adapted to active language
    modalBody.innerHTML = `
        <div class="space-y-4">
            <div class="flex gap-2 flex-wrap items-center">
                <button type="button" onclick="runModalAiQuery('${projectId}', 'explain')" class="ai-chip-pill">${chipMethodology}</button>
                <button type="button" onclick="runModalAiQuery('${projectId}', 'summarize')" class="ai-chip-pill">${chipSummary}</button>
                <button type="button" onclick="runModalAiQuery('${projectId}', null, '${mathQuery}')" class="ai-chip-pill">${chipMath}</button>
                <button type="button" onclick="runModalAiQuery('${projectId}', null, '${resultsQuery}')" class="ai-chip-pill">${chipResults}</button>
            </div>
            
            <div id="modal-ai-response" class="ai-response-card">
                <div class="text-center py-6 px-4">
                    <p class="text-sm text-gray-200 mb-1.5 font-semibold">${initTitle}</p>
                    <p class="text-xs text-gray-400">${initDesc}</p>
                </div>
            </div>

            <form onsubmit="event.preventDefault(); submitModalAiQuestion('${projectId}');" class="ai-input-wrapper">
                <input type="text" id="modal-ai-input" class="ai-input-field" placeholder="${inputPlaceholder}">
                <button type="submit" class="ai-send-btn">
                    <span>${sendButton}</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
                </button>
            </form>
        </div>
    `;
    modalFooter.innerHTML = '';
    openModal('ai-modal');

    // Only run query if explicitly requested with a specific action or query
    if (initialAction || customQuery) {
        runModalAiQuery(projectId, initialAction, customQuery);
    }
}

function submitModalAiQuestion(projectId) {
    const input = document.getElementById('modal-ai-input');
    const question = input ? input.value.trim() : '';
    if (!question) return;
    runModalAiQuery(projectId, null, question);
}

async function runModalAiQuery(projectId, action = null, customPrompt = null) {
    const responseBox = document.getElementById('modal-ai-response');
    if (!responseBox) return;

    const t = translations[currentLang] || translations['en'];
    const analyzingText = t.ai_analyzing || 'Analyzing project engineering context...';

    responseBox.innerHTML = `
        <div class="flex items-center gap-3 text-violet-300 text-sm py-4">
            <div class="animate-spin w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full"></div>
            <span>${analyzingText}</span>
        </div>
    `;

    const markdownText = await fetchProjectMarkdown(projectId);

    // 1. Try Netlify Serverless Function
    try {
        const netlifyRes = await fetch('/.netlify/functions/ai', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action,
                customPrompt,
                projectId,
                reportMarkdown: markdownText,
                language: currentLang
            })
        });

        if (netlifyRes.ok) {
            const netlifyData = await netlifyRes.json();
            if (netlifyData.text) {
                responseBox.innerHTML = `<div class="prose prose-invert max-w-none space-y-2 text-sm leading-relaxed">${formatMarkdownToHTML(netlifyData.text)}</div>`;
                renderMathInBox(responseBox);
                return;
            }
        }
    } catch (e) {
        console.log('Netlify function connection error');
    }

    // 2. Client-side fallback if a local key is saved in browser
    const apiKey = localStorage.getItem('gemini_api_key') || localStorage.getItem('ai_api_key');
    if (apiKey) {
        try {
            const langMap = {
                'en': 'English',
                'fr': 'French',
                'ar': 'Arabic',
                'es': 'Spanish',
                'de': 'German',
                'zh': 'Simplified Chinese',
                'pt': 'Portuguese'
            };
            const targetLang = langMap[currentLang] || 'English';

            let prompt = '';
            if (action === 'explain') {
                prompt = `Explain this engineering project clearly in 3 concise paragraphs in ${targetLang}. If the query is in another language, answer in that language:\n\n${markdownText}`;
            } else if (action === 'summarize') {
                prompt = `Provide a 3-bullet executive summary of what this engineering project achieved in ${targetLang}. If the query is in another language, answer in that language:\n\n${markdownText}`;
            } else {
                prompt = `Answer the following question about this engineering project based on the report in ${targetLang}. If the question is in another language, answer in that question's language:\n\nQuestion: ${customPrompt}\n\nReport:\n${markdownText}`;
            }

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });

            if (response.ok) {
                const data = await response.json();
                const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if (aiText) {
                    responseBox.innerHTML = `<div class="prose prose-invert max-w-none space-y-2 text-sm leading-relaxed">${formatMarkdownToHTML(aiText)}</div>`;
                    renderMathInBox(responseBox);
                    return;
                }
            }
        } catch (err) {
            console.error('Gemini API call failed', err);
        }
    }

    // 3. Fallback when AI is not responding
    const fallbackTitle = t.ai_fallback_title || 'The AI is not working for the moment.';
    const fallbackDesc = t.ai_fallback_desc || 'Please feel free to explore the project deliverables or contact Mohammed directly.';
    responseBox.innerHTML = `
        <div class="p-4 text-center text-sm text-gray-300">
            <p class="text-violet-200 font-semibold mb-1">${fallbackTitle}</p>
            <p class="text-xs text-gray-400">${fallbackDesc}</p>
        </div>
    `;
}

function explainProject(projectId) {
    openProjectAiModal(projectId, 'explain');
}

function summarizeProject(projectId) {
    openProjectAiModal(projectId, 'summarize');
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
            if (id === 'geology-internship') {
                title = type === 'report' 
                    ? (currentLang === 'fr' ? 'Rapport de Stage de Géologie' : 'Geology Field Internship Report')
                    : (currentLang === 'fr' ? 'Rapport de Géophysique & Hydrogéologie' : 'Geophysics & Hydrogeology Report');
            } else if (type === 'report') {
                title = (langStrings.pdf_modal_title_report || '{title} Report').replace('{title}', project.title);
            } else if (type === 'presentation') {
                title = (langStrings.pdf_modal_title_presentation || '{title} Presentation').replace('{title}', project.title);
            } else if (type === 'cultural-presentation') {
                title = `${project.title} - ${currentLang === 'fr' ? 'Expérience Culturelle au Brésil' : (currentLang === 'pt' ? 'Experiência Cultural no Brasil' : 'Cultural Experience in Brazil')}`;
            } else if (type === 'poster') {
                title = `${project.title} - ${langStrings.project_button_poster || 'Poster'}`;
            } else if (type === 'business-model') {
                title = `${project.title} - ${langStrings.project_button_business_model || 'Business Model'}`;
            } else {
                title = project.title;
            }
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

