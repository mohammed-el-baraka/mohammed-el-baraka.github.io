const translations = {
    // English (Base)
    en: {
        page_title: "Mohammed EL BARAKA - Industrial Management & Data Science",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_leadership: "Leadership",
        nav_contact: "Contact",
        hero_title: "Industrial Management,<br>& Data Science",
        hero_typing: ["Industrial Management", "Data Science"],
        hero_subtitle: "An Engineering graduate from EMINES-UM6P specializing in Industrial Management with a passion for Optimization, Data Science, and leveraging technology to solve real-world challenges.",
        hero_cta_button: "View My Work",
        about_title: "About Me",
        about_p1: "Hello! I'm Mohammed EL BARAKA, an Industrial Management engineering graduate from the prestigious Mohammed VI Polytechnic University (UM6P). My academic journey, beginning with an intensive program in Mathematics and Physics, has instilled in me a strong analytical and problem-solving mindset.",
        about_p2: "I am driven by the challenge of untangling complex problems, particularly through the application of Data Science, Machine Learning, and Optimization algorithms. My work philosophy is centered on bridging the gap between theoretical knowledge and practical application to create tangible results.",
        about_p3: "I am a proactive leader, fluent in Arabic, French, and English, and always eager to learn, collaborate, and apply my skills to impactful scenarios.",
        view_resume_button: "View My Resume",
        projects_title: "My Projects",
        skills_title: "Technical Skills",
        leadership_title: "Leadership & Activities",
        contact_title: "Get In Touch",
        contact_subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities. Let's connect.",
        contact_button: "Contact Me",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. All Rights Reserved.`,
        contact_modal_title: "Contact Me",
        contact_modal_email: "Send an Email",
        contact_modal_whatsapp: "Message on WhatsApp",
        contact_modal_call: "Make a Call",
        project_button_report: "Report",
        project_button_presentation: "Presentation",
        project_button_demo: "Website",
        project_button_poster: "Poster",
        project_button_business_model: "Business Model",
        project_button_explore_ai: "Explore with AI",
        ai_assistant_title: "AI Assistant: {title}",
        ai_chip_methodology: "✨ How was this built?",
        ai_chip_summary: "⚡ 3-Bullet Summary",
        ai_chip_math: "📐 Math & Algorithms",
        ai_chip_results: "📈 Results & Impact",
        ai_prompt_math_query: "What mathematical models, formulas, and optimization algorithms were used in this project?",
        ai_prompt_results_query: "What were the key measurable outcomes, accuracy metrics, and real-world results?",
        ai_initial_title: "What would you like to explore about this project?",
        ai_initial_desc: "Ask any question below or choose a suggestion chip above to see the methodology, mathematical model, or results.",
        ai_input_placeholder: "Ask anything about this project... (e.g. How does the model work?)",
        ai_send_button: "Ask",
        ai_analyzing: "Analyzing project engineering context...",
        ai_fallback_title: "The AI is not working for the moment.",
        ai_fallback_desc: "Please feel free to explore the project deliverables or contact Mohammed directly.",
        modal_explaining_title: `AI Assistant: {title}`,
        modal_skill_projects_title: `Projects with {skill}`,
        modal_list_intro: `Here are the projects where I used <strong>{skill}</strong>:`,
        pdf_modal_title_report: `{title} Report`,
        pdf_modal_title_presentation: `{title} Presentation`,
        pdf_modal_title_resume: `My Resume`,
        projects: [
             { id: 'mental-health-analytics', title: 'Predictive Analytics for Student Mental Health', description: 'Developed predictive models using questionnaire and text data to assess student mental health, achieving high accuracy in predicting anxiety, depression, and stress levels.' },
             { id: 'red-fruit-optimization', title: 'Optimization of Red Fruit Production', description: 'Designed and implemented a Linear Programming model to maximize profit for red fruit production in greenhouses, considering various constraints and scenarios.' },
             { id: 'powerbi-dashboard', title: 'Bank Statement Integration with Power BI', description: 'Developed an interactive Power BI dashboard to integrate and visualize key financial metrics from bank statements and delivery notes for a connected data view.' },
             { id: 'rsa-cryptography', title: 'Attacks Against Shared Module RSA', description: 'Studied and simulated attacks against the RSA cryptosystem, focusing on vulnerabilities from shared modules to demonstrate cryptographic weaknesses.' },
             { id: 'acoustic-noise-reduction', title: 'Road Traffic Noise Pollution Reduction', description: 'Investigated and modeled acoustic wave propagation and noise barrier optimization using porous materials. Conducted experimental Kundt tube impedance testing comparing compact vs. open-cell cellular foams.' },
             { id: 'geology-internship', title: 'Geology & Geophysics Internship', description: 'Conducted field studies in Oulmès covering geology, geophysics, and hydrogeology. Applied electrical resistivity tomography and groundwater analysis techniques.' },
             { id: 'wood-behavior-mmc', title: 'Wood Behavior Law (MMC Project)', description: 'Studied the mechanical properties of wood, modeled its orthotropic elastic behavior, and conducted compression and bending tests to measure Young\'s modulus and breaking strength.' },
             { id: 'biomedical-diffusion', title: 'Oxygen Diffusion in Pulmonary Acinus', description: 'Conducted a biomedical engineering project to model oxygen diffusion in the pulmonary acinus, resolving the 2D diffusion equation using numerical methods.' },
             { id: 'robotics-vision', title: 'Robotic Arm Design, Fabrication & Computer Vision', description: 'Designed, manufactured, and assembled an autonomous articulated robotic arm from the ground up—spanning 3D CAD modeling in SolidWorks, physical prototyping and mechatronics, through to inverse kinematics and real-time OpenCV computer vision for object detection and sorting.' },
             { id: 'tourist-planner', title: 'Tourist Visit Planner', description: 'Built a full-stack web application for planning and optimizing tourist itineraries using the Traveling Salesman Problem (TSP) algorithm, React, Django, and Google Maps API.' },
             { id: 'teachy-platform', title: 'Teachy: Online Language Learning Platform', description: 'Designed an innovative online language learning platform connecting learners with native speakers for live interactive immersion, personalized courses, and pedagogical resources.' },
             { id: 'biomass-co2-nareva', title: 'Biogenic CO2 Capture & E-Fuel Valorization (NAREVA)', description: 'Conducted a comprehensive techno-economic pre-feasibility study for capturing 150 kt/year of biogenic CO2 from biomass in Morocco to produce and export green e-methanol to Europe.' },
             { id: 'sociotechnical-controversy-africa', title: 'Sociotechnical Controversy: Technocracy in Africa', description: 'Conducted an in-depth sociotechnical controversy analysis exploring whether technocracy offers a viable pathway for African development, mapping systemic challenges and multi-stakeholder dynamics across 5 key sectors.' },
             { id: 'vsm-ciam-steel', title: 'Lean Production & VSM: CIAM Steel Plant', description: 'Conducted an industrial Lean diagnostic and Value Stream Mapping (VSM/VSD) for CIAM steel manufacturing plant, formulating actionable 5S/SMED/TPM strategies to scale capacity to 1M tonnes/year and reduce lead times by 75%.' },
             { id: 'pg-brand-management-shadowing', title: 'Brand Management & Operations (Procter & Gamble)', description: 'Immersive executive shadowing within P&G\'s Hair Care Division and Multi-Functional Teams (MFT), analyzing brand strategy, retail execution (DPSM), Supply Network Operations (SNO), margin architecture, and data-driven marketing across 54,000+ retail stores.' },
             { id: 'redstart-reusable-booster', title: 'Redstart: Reusable Rocket Booster Descent & Landing', description: 'Modeled and simulated the nonlinear 2D flight dynamics, gimbaled thrust vector control, and soft landing trajectory of a reusable rocket booster (Falcon 9-inspired) using SciPy, SymPy, and Marimo.' },
             { id: 'academic-career-success', title: 'Academic & Career Success: Statistical Modeling', description: 'Conducted an econometric and statistical study on 5,000 university graduates using multiple linear regression (R² = 0.825), Chi-squared & Cramér\'s V tests, and k-Means clustering to model key drivers of starting salaries and career satisfaction.' },
             { id: 'lithium-brine-extraction', title: 'Lithium Brine Production & Solar Evaporation Modeling', description: 'Conducted a comprehensive techno-economic, geochemical, and process modeling benchmark of 6 South American lithium salars, analyzing solar evaporation kinetics, Mg/Li impurity selectivity, and capital intensity ($3,200/t OPEX).' },
             { id: 'petropolis-landslide-modeling', title: 'Physically-Based Landslide Modeling (Petrópolis, Brazil)', description: 'Geospatial data engineering and physical modeling of rainfall-triggered shallow landslides in Petrópolis, Brazil, utilizing the USGS TRIGRS v2.1.0 transient infiltration engine, QGIS, GRASS, and Mohr-Coulomb slope stability mechanics across 795 km².' },
             { id: 'cotton-hedging-inditex', title: 'Quantitative Cotton Price Hedging & Risk Management (Inditex Case Study)', description: 'Modeled stochastic cotton price dynamics under Geometric Brownian Motion and Black-Scholes cost-of-carry frameworks, executing 2,000-path Monte Carlo simulations and historical INSEE backtesting to evaluate Forward Swap and Option Call hedging strategies for Inditex.' },
             { id: 'renault5-electric-marketing', title: 'Renault 5 E-Tech 100% Electric: Marketing Strategy & Market Penetration', description: 'Conducted comprehensive marketing strategy, competitive benchmarking against Dacia/Peugeot/Fiat/BYD, customer persona segmentation, and macroeconomic EV sales forecasting (2026–2030 scaling to 8.75B MAD) for the Moroccan launch of the Renault 5 E-Tech.' },
             { id: 'mitsubishi-strategic-analysis', title: 'Strategic Management & SDV Pivot: Mitsubishi Motors Corporation', description: 'Conducted an in-depth corporate strategy audit of Mitsubishi Motors Corporation within the Renault-Nissan-Mitsubishi Alliance, analyzing its business model, ASEAN market leadership, PESTEL/Porter/SWOT dynamics, and formulating its Software-Defined Vehicle (SDV) & BEV transition roadmap.' },
             { id: 'wireless-pentest-ceh', title: 'Wireless Network Security & Penetration Testing (CEH Lab)', description: 'Conducted offensive Wi-Fi auditing and cryptographic analysis in a CEH lab covering WEP RC4 IV cracking, WPA2 4-Way Handshake capture via deauthentication, Evil Twin rogue APs with captive portals (Fluxion), Wireshark 802.11 forensics, and WPA3-SAE / 802.1X enterprise hardening.' },
             { id: 'managerial-accounting-formaction', title: 'Management Accounting & Cost Control: ABC Modeling (FORMACTION)', description: 'Conducted full-scale Activity-Based Costing (ABC) and Direct Costing Évolué modeling for training institute FORMACTION (€678.7k revenue across 187 trainees), optimizing contribution margins and proving strategic retention of public-funded programs.' },
             { id: 'sap-s4hana-production-planning', title: 'SAP S/4HANA Production Planning & Industrial ERP (Global Bike Inc.)', description: 'Mastered full-lifecycle production planning and execution in SAP S/4HANA for Global Bike Inc., configuring multi-level BOMs, work centers, routings, standard costing (CK11N), SOP/MRP pyramids, MTS (Strategy 40) vs. ATO (Strategy 82), and shop floor execution.' },
             { id: 'data-science-track', title: 'Data Science Specialization Track: 8-Week Advanced Curriculum', description: 'Completed an intensive 8-week specialization directed by Prof. Éric Moulines (French Academy of Sciences / École Polytechnique), mastering multivariate optimization, PAC theory, CNNs & CAVI, ill-posed inverse problems, generative AI (GANs/VAEs/Diffusion), NLP Transformers, and Reinforcement Learning.' },
             { id: 'dirty-model-multitask-learning', title: 'A Dirty Model for Multitask Learning: High-Dimensional Superposition & Phase Transitions', description: 'Empirically validated and replicated the NIPS research "A Dirty Model for Multitask Learning" (Jalali et al.), decomposing parameter matrices into shared block-sparse (ℓ₁/ℓ∞) and task-specific element-wise sparse (ℓ₁) components via convex optimization (CVXPY), proving optimal sample complexity scaling (2-α)s log(p) and reproducing sharp empirical phase transitions.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: 'Sponsorship Manager', description: 'As Sponsorship Manager, my core responsibility is securing vital partnerships and sponsorships to power EJE\'s impactful portfolio of student hackathons. I actively seek sponsors for major events including the OP&X Hackathon, Strategic Consulting Hackathon (SCH), DataQuest Hackathon, and the Finance Hackathon. By connecting companies with these platforms, I help them engage Morocco\'s brightest students and fuel future talent development.' },
            { id: 'rubiks-club', title: "UM6P Rubik's Cube Club", role: "President", description: "As President, I led the club's activities, organized workshops, and fostered a community of problem-solvers." },
            { id: 'eplus-club', title: "E++ Club, EMINES", role: "Sponsoring Manager", description: "Secured sponsors for the National Data Science Competition (NDSC) and the Intelligent Robot Competition (IRC) by contacting potential partners, presenting proposals, and ensuring their support for both events." },
            { id: 'eastro-club', title: "E-Astronomy Club, EMINES", role: "Logistics Manager", description: "I orchestrated the logistics for observation nights and educational seminars, ensuring seamless availability of all equipment and resources, and served as an astronomy expert at the Moroccan Day of Mathematics." },
            { id: 'rotaract-club', title: "ROTARACT EMINES Club", role: "Communication & Content Manager", description: "I managed the club’s communication and content creation, developing engaging materials to promote the activities, events, and initiatives of Rotaract EMINES." },
            { id: 'pingpong-club', title: "UM6P Ping Pong Club", role: "Logistics Manager", description: "I organized tournaments and practice sessions, handling all logistical aspects from scheduling to equipment management." },
            { id: 'university-sports', title: "University Sports", role: "Player for Handball, Volleyball, and Football teams", description: "As an active member of multiple university sports teams, I developed strong teamwork, discipline, and leadership skills." }
        ],

        help_button: "How Can I Help You?",
        help_modal_title: "Describe Your Needs",
        help_modal_placeholder: "Tell me about the project, challenge, or role you have in mind. For example: 'I need someone to build a predictive model for customer data' or 'I am looking for a project manager with a technical background.'",
        help_modal_submit: "Analyze My Need",
        help_modal_response_title: "Here's How I Can Help",
        contact_button_after_ai: "Contact Mohammed",
    },
    // French
    fr: {
        page_title: "Mohammed EL BARAKA - Management Industrielle & Science des Données",
        nav_about: "À propos",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_leadership: "Leadership",
        nav_contact: "Contact",
        hero_title: "Management Industrielle,<br>& Science des Données",
        hero_typing: ["Management Industriel", "Science des Données"],
        hero_subtitle: "Ingénieur diplômé de l'EMINES-UM6P spécialisé en Management Industriel, passionné par l'Optimisation, la Science des Données et l'utilisation de la technologie pour résoudre des défis concrets.",
        hero_cta_button: "Voir mes travaux",
        about_title: "À propos de moi",
        about_p1: "Bonjour ! Je suis Mohammed EL BARAKA, ingénieur diplômé en Management Industriel de la prestigieuse Université Mohammed VI Polytechnique (UM6P). Mon parcours académique, débutant par un programme intensif en Mathématiques et Physique, m'a doté d'un solide esprit d'analyse et de résolution de problèmes.",
        about_p2: "Je suis motivé par le défi de démêler des problèmes complexes, notamment par l'application de la Science des Données, de l'Apprentissage Automatique et des algorithmes d'Optimisation. Ma philosophie de travail est de combler le fossé entre les connaissances théoriques et l'application pratique pour créer des résultats tangibles.",
        about_p3: "Je suis un leader proactif, parlant couramment l'arabe, le français et l'anglais, et toujours désireux d'apprendre, de collaborer et d'appliquer mes compétences à des scénarios percutants.",
        view_resume_button: "Voir mon CV",
        projects_title: "Mes Projets",
        skills_title: "Compétences Techniques",
        leadership_title: "Leadership & Activités",
        contact_title: "Contactez-moi",
        contact_subtitle: "Je suis toujours ouvert à la discussion de nouveaux projets, d'idées créatives ou d'opportunités. Connectons-nous.",
        contact_button: "Me Contacter",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. Tous droits réservés.`,
        contact_modal_title: "Me Contacter",
        contact_modal_email: "Envoyer un E-mail",
        contact_modal_whatsapp: "Message sur WhatsApp",
        contact_modal_call: "Passer un appel",
        project_button_report: "Rapport",
        project_button_presentation: "Présentation",
        project_button_demo: "Site Web",
        project_button_poster: "Poster",
        project_button_business_model: "Business Model",
        project_button_explore_ai: "Explorer avec l'IA",
        ai_assistant_title: "Assistant IA : {title}",
        ai_chip_methodology: "✨ Comment cela a été conçu ?",
        ai_chip_summary: "⚡ Résumé en 3 points",
        ai_chip_math: "📐 Mathématiques & Algorithmes",
        ai_chip_results: "📈 Résultats & Impact",
        ai_prompt_math_query: "Quels modèles mathématiques, formules et algorithmes d'optimisation ont été utilisés dans ce projet ?",
        ai_prompt_results_query: "Quels ont été les principaux résultats mesurables, métriques de précision et impacts réels ?",
        ai_initial_title: "Que souhaitez-vous explorer sur ce projet ?",
        ai_initial_desc: "Posez une question ci-dessous ou cliquez sur une suggestion pour explorer la méthodologie, les équations ou les résultats.",
        ai_input_placeholder: "Posez une question sur ce projet... (ex: Comment fonctionne le modèle ?)",
        ai_send_button: "Demander",
        ai_analyzing: "Analyse du contexte technique du projet...",
        ai_fallback_title: "L'IA ne fonctionne pas pour le moment.",
        ai_fallback_desc: "N'hésitez pas à explorer les livrables du projet ou à contacter Mohammed directement.",
        modal_explaining_title: `Assistant IA : {title}`,
        modal_skill_projects_title: `Projets avec {skill}`,
        modal_list_intro: `Voici les projets où j'ai utilisé <strong>{skill}</strong> :`,
        pdf_modal_title_report: `Rapport - {title}`,
        pdf_modal_title_presentation: `Présentation - {title}`,
        pdf_modal_title_resume: `Mon CV`,
        projects: [
            { id: 'mental-health-analytics', title: 'Analyse Prédictive de la Santé Mentale des Étudiants', description: 'Développement de modèles prédictifs utilisant des données de questionnaires et textuelles pour évaluer la santé mentale des étudiants, atteignant une grande précision dans la prédiction de l\'anxiété, la dépression et le stress.' },
            { id: 'red-fruit-optimization', title: 'Optimisation de la Production de Fruits Rouges', description: 'Conception et mise en œuvre d\'un modèle de programmation linéaire pour maximiser le profit de la production de fruits rouges en serre, en tenant compte de diverses contraintes et scénarios.' },
            { id: 'powerbi-dashboard', title: 'Intégration de Relevés Bancaires avec Power BI', description: 'Développement d\'un tableau de bord Power BI interactif pour intégrer et visualiser les indicateurs financiers clés des relevés bancaires et des bons de livraison pour une vue de données connectée.' },
            { id: 'rsa-cryptography', title: 'Attaque contre le RSA à Module Partagé', description: 'Étude et simulation d\'attaques contre le cryptosystème RSA, en se concentrant sur les vulnérabilités des modules partagés pour démontrer les faiblesses cryptographiques.' },
            { id: 'acoustic-noise-reduction', title: 'Réduction de la Pollution Sonore du Trafic Routier (TIPE)', description: 'Étude théorique et modélisation de la propagation des ondes acoustiques et optimisation de murs antibruit utilisant des matériaux poreux. Validation expérimentale au tube de Kundt comparant mousses compactes et alvéolées.' },
            { id: 'geology-internship', title: 'Stage de Géologie et Géophysique', description: 'Études de terrain à Oulmès couvrant la géologie, la géophysique et l\'hydrogéologie. Application de la tomographie de résistivité électrique et analyse des eaux souterraines.' },
            { id: 'wood-behavior-mmc', title: 'Loi de Comportement du Bois (Projet MMC)', description: 'Étude des propriétés mécaniques du bois, modélisation de son comportement élastique orthotrope, et réalisation d\'essais de compression et de flexion pour mesurer le module de Young et la résistance à la rupture.' },
            { id: 'biomedical-diffusion', title: 'Diffusion d\'Oxygène dans l\'Acinus Pulmonaire', description: 'Réalisation d\'un projet d\'ingénierie biomédicale pour modéliser la diffusion d\'oxygène dans l\'acinus pulmonaire, en résolvant l\'équation de diffusion 2D par des méthodes numériques.' },
            { id: 'robotics-vision', title: 'Conception, Fabrication Robotique & Vision par Ordinateur', description: 'Conception, fabrication mécanique et assemblage complet d\'un bras robotisé articulé—de la modélisation CAO 3D sur SolidWorks, du prototypage physique et de la mécatronique, jusqu\'aux calculs cinématiques et au modèle de vision par ordinateur OpenCV pour la détection et le tri en temps réel.' },
            { id: 'tourist-planner', title: 'Planificateur de Visites Touristiques', description: 'Développement d\'une application web full-stack pour la planification et l\'optimisation d\'itinéraires touristiques utilisant l\'algorithme du voyageur de commerce (TSP), React, Django et l\'API Google Maps.' },
            { id: 'teachy-platform', title: 'Teachy : Plateforme d\'Apprentissage des Langues', description: 'Conception d\'une plateforme innovante d\'apprentissage des langues connectant apprenants et locuteurs natifs pour une immersion interactive en direct, cours personnalisés et ressources pédagogiques.' },
            { id: 'biomass-co2-nareva', title: 'Captage de CO2 Biogénique & E-Fuels (Projet NAREVA)', description: 'Étude de préfaisabilité technico-économique pour le captage de 150 kt/an de CO2 biogénique issu de la biomasse au Maroc pour la production et l\'exportation d\'e-méthanol vert vers l\'Europe.' },
            { id: 'sociotechnical-controversy-africa', title: 'Controverse Sociotechnique : La Technocratie en Afrique', description: 'Analyse approfondie d\'une controverse sociotechnique sur le rôle de la technocratie dans le développement africain, cartographiant les défis structurels et le jeu d\'acteurs à travers 5 axes majeurs.' },
            { id: 'vsm-ciam-steel', title: 'Système de Production & VSM : Usine CIAM', description: 'Diagnostic industriel Lean et Value Stream Mapping (VSM/VSD) de l\'usine sidérurgique CIAM, élaborant des plans d\'action 5S/SMED/TPM pour porter la capacité à 1M tonnes/an et réduire les délais de 75%.' },
            { id: 'pg-brand-management-shadowing', title: 'Stage Shadowing : Brand Management & Opérations (P&G)', description: 'Immersion managériale au sein de la division Hair Care et des équipes multifonctionnelles (MFT) de Procter & Gamble, analysant la stratégie de marque, l\'exécution commerciale (DPSM), la chaîne d\'approvisionnement (SNO) et le pricing stratégique sur 54 000+ points de vente.' },
            { id: 'redstart-reusable-booster', title: 'Redstart : Atterrissage Contrôlé de Lanceur Réutilisable', description: 'Modélisation et simulation des équations différentielles non linéaires, du contrôle vectoriel de poussée par tuyère orientable et de la trajectoire d\'atterrissage doux d\'un propulseur réutilisable sous SciPy, SymPy et Marimo.' },
            { id: 'academic-career-success', title: 'Analyse de la Réussite Académique et Professionnelle', description: 'Étude statistique et économétrique sur 5 000 diplômés modélisant les déterminants de l\'insertion professionnelle par régression linéaire multiple (R² = 0.825), tests du Chi-2, V de Cramér et clustering k-Means.' },
            { id: 'lithium-brine-extraction', title: 'Production de Lithium à partir de Saumures par Évaporation Solaire', description: 'Étude technico-économique et modélisation géochimique de l\'extraction de lithium sur 6 salars sud-américains, analysant la cinétique d\'évaporation, la sélectivité des impuretés Mg/Li et l\'intensité capitalistique (OPEX 3 200 $/t).' },
            { id: 'petropolis-landslide-modeling', title: 'Modélisation Physique du Risque de Glissements de Terrain (Petrópolis, Brésil)', description: 'Préparation de données géospatiales et modélisation physique des glissements de terrain induits par les pluies torrentielles à Petrópolis (Brésil), couplant le modèle d\'infiltration transitoire USGS TRIGRS v2.1.0, QGIS, GRASS et la stabilité des pentes sur 795 km².' },
            { id: 'cotton-hedging-inditex', title: 'Finance de Marché & Couverture du Risque de Prix du Coton (Cas Inditex)', description: 'Modélisation stochastique par Mouvement Brownien Géométrique et valorisation Black-Scholes avec coût de portage, simulation Monte Carlo (2 000 trajectoires) et backtesting historique INSEE pour évaluer les stratégies de Swap Forward et Strip de Calls pour le groupe Inditex.' },
            { id: 'renault5-electric-marketing', title: 'Renault 5 E-Tech 100% Électrique : Stratégie Marketing & Pénétration de Marché', description: 'Élaboration de la stratégie marketing, positionnement concurrentiel (Dacia Spring, Peugeot e-208, Fiat 600e, BYD Atto 3), segmentation personas et projections de marché 2026–2030 (marché à 8,75 Mds MAD) pour le lancement de la Renault 5 E-Tech au Maroc.' },
            { id: 'mitsubishi-strategic-analysis', title: 'Analyse Stratégique : Mitsubishi Motors Corporation & Virage SDV', description: 'Audit stratégique approfondi de Mitsubishi Motors Corporation au sein de l\'Alliance Renault-Nissan-Mitsubishi, analysant le modèle économique, le leadership ASEAN, le diagnostic PESTEL/Porter/SWOT et la feuille de route vers le Software-Defined Vehicle (SDV) et le 100% électrique.' },
            { id: 'wireless-pentest-ceh', title: 'Sécurité des Réseaux Sans Fil & Tests d\'Intrusion (Laboratoire CEH)', description: 'Audit de sécurité offensif et analyse cryptographique des réseaux sans fil (Laboratoire CEH) : craquage WEP RC4, capture du 4-Way Handshake WPA2 par déauthentification, attaques Evil Twin à portail captif (Fluxion), forensics Wireshark 802.11 et durcissement WPA3-SAE / 802.1X EAP-TLS.' },
            { id: 'managerial-accounting-formaction', title: 'Comptabilité Analytique & Contrôle de Gestion : Modélisation ABC (FORMACTION)', description: 'Modélisation des coûts par la méthode ABC (Activity-Based Costing) et Direct Costing Évolué pour l\'organisme FORMACTION (678,7 k€ de CA sur 187 stagiaires), analysant les marges de contribution et démontrant l\'intérêt stratégique du maintien des filières.' },
            { id: 'sap-s4hana-production-planning', title: 'Planification et Gestion de Production sous SAP S/4HANA (Global Bike Inc.)', description: 'Mise en œuvre intégrale de la planification et de la gestion de production sous SAP S/4HANA pour Global Bike Inc. : paramétrage Master Data (nomenclatures multi-niveaux, gammes, postes de travail), calcul du coût de revient (CK11N), pyramide PIC/PDP/MRP, stratégies MTS (40) vs ATO (82) et boucle d\'exécution atelier.' },
            { id: 'data-science-track', title: 'Option Data Science : Parcours d\'Excellence Approfondi (8 Semaines)', description: 'Spécialisation intensive de 8 semaines sous la direction de Prof. Éric Moulines (Académie des Sciences / École Polytechnique) : optimisation multivariée, théorie PAC, CNN & CAVI, problèmes inverses, IA générative (GANs/VAEs/Diffusion), NLP Transformers et apprentissage par renforcement.' },
            { id: 'dirty-model-multitask-learning', title: 'Modèle « Dirty » pour l\'Apprentissage Multi-Tâches : Superposition en Grande Dimension', description: 'Validation empirique et réplication du papier NIPS « A Dirty Model for Multitask Learning » (Jalali et al.) : décomposition de matrices en superposition de composantes bloc-parcimonieuses partagées (ℓ₁/ℓ∞) et parcimonieuses spécifiques (ℓ₁) par optimisation convexe sous CVXPY, prouvant la complexité d\'échantillonnage optimale (2-α)s log(p) et reproduisant les transitions de phase.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: 'Responsable Sponsoring', description: 'En tant que Responsable Sponsoring, ma responsabilité principale est de sécuriser des partenariats et des sponsorings essentiels pour alimenter le portefeuille percutant de hackathons étudiants d\'EJE. Je recherche activement des sponsors pour des événements majeurs tels que le Hackathon OP&X, le Hackathon de Conseil Stratégique (SCH), le Hackathon DataQuest et le Hackathon Finance. En connectant les entreprises à ces plateformes, je les aide à interagir avec les étudiants les plus brillants du Maroc et à stimuler le développement des futurs talents.' },
            { id: 'rubiks-club', title: "Club de Rubik's Cube UM6P", role: "Président", description: "En tant que Président, j'ai dirigé les activités du club, organisé des ateliers et encouragé une communauté de solutionneurs de problèmes." },
            { id: 'eplus-club', title: "Club E++, EMINES", role: "Responsable Sponsoring", description: "Obtenu des sponsors pour le National Data Science Competition (NDSC) et l’Intelligent Robot Competition (IRC) en contactant des partenaires potentiels, en présentant des propositions et en assurant leur soutien aux deux événements." },
            { id: 'eastro-club', title: "Club E-Astronomie, EMINES", role: "Responsable Logistique", description: "J’ai orchestré la logistique des soirées d’observation et des séminaires éducatifs, en veillant à la disponibilité sans faille de tout l’équipement et des ressources, et j’ai participé en tant qu’expert en astronomie à la Journée marocaine des mathématiques." },
            { id: 'rotaract-club', title: "Club ROTARACT EMINES", role: "Responsable Communication & Contenu", description: "J’ai géré la communication du club et la création de contenu, en concevant des supports captivants pour promouvoir les activités, événements et initiatives du Rotaract EMINES." },
            { id: 'pingpong-club', title: "Club de Ping Pong UM6P", role: "Responsable Logistique", description: "J'ai organisé des tournois et des séances d'entraînement, gérant tous les aspects logistiques, de la planification à la gestion du matériel." },
            { id: 'university-sports', title: "Sports Universitaires", role: "Joueur des équipes de Handball, Volleyball et Football", description: "En tant que membre actif de plusieurs équipes sportives universitaires, j'ai développé de solides compétences en travail d'équipe, discipline et leadership." }
        ],

        help_button: "Comment puis-je vous aider ?",
        help_modal_title: "Décrivez vos besoins",
        help_modal_placeholder: "Parlez-moi du projet, du défi ou du rôle que vous avez en tête. Exemple : 'J'ai besoin de quelqu'un pour créer un modèle prédictif pour les données clients' ou 'Je recherche un chef de projet avec un bagage technique.'",
        help_modal_submit: "Analyser mon besoin",
        help_modal_response_title: "Voici comment je peux aider",
        contact_button_after_ai: "Contacter Mohammed"
    },
    // Arabic
    ar: {
        page_title: "محمد البركا - التدبير الصناعي وعلوم البيانات",
        nav_about: "عني",
        nav_projects: "مشاريعي",
        nav_skills: "مهاراتي",
        nav_leadership: "القيادة",
        nav_contact: "تواصل",
        hero_title: "الإدارة الصناعية،<br>وعلوم البيانات",
        hero_typing: ["الإدارة الصناعية", "علوم البيانات"],
        hero_subtitle: "مهندس خريج EMINES متخصص في التدبير الصناعي وشغوف بعلوم البيانات وتسخير التكنولوجيا لمواجهة تحديات العالم الحقيقي.",
        hero_cta_button: "اكتشف أعمالي",
        about_title: "عني",
        about_p1: "مرحباً! أنا محمد البركا، مهندس خريج في التدبير الصناعي من جامعة محمد السادس للفنون التطبيقية (UM6P) المرموقة. رحلتي الأكاديمية، التي بدأت ببرنامج مكثف في الرياضيات والفيزياء، غرست فيّ عقلية تحليلية قوية وقدرة على حل المشكلات.",
        about_p2: "يدفعني تحدي حل المشكلات المعقدة، خاصة من خلال تطبيق علوم البيانات والتعلم الآلي وخوارزميات التحسين. تتمحور فلسفة عملي حول سد الفجوة بين المعرفة النظرية والتطبيق العملي لتحقيق نتائج ملموسة.",
        about_p3: "أنا قائد استباقي، وأتقن اللغات العربية والفرنسية والإنجليزية، وأنا حريص دائمًا على التعلم والتعاون وتطبيق مهاراتي في سيناريوهات مؤثرة.",
        view_resume_button: "عرض سيرتي الذاتية",
        projects_title: "مشاريعي",
        skills_title: "المهارات التقنية",
        leadership_title: "القيادة والأنشطة",
        contact_title: "تواصل معي",
        contact_subtitle: "أنا منفتح دائمًا لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص. لنتواصل.",
        contact_button: "تواصل معي",
        footer_text: `© ${new Date().getFullYear()} محمد البركا. كل الحقوق محفوظة.`,
        contact_modal_title: "تواصل معي",
        contact_modal_email: "أرسل بريدًا إلكترونيًا",
        contact_modal_whatsapp: "راسلني على واتساب",
        contact_modal_call: "أجرِ مكالمة",
        project_button_report: "التقرير",
        project_button_presentation: "التقديم",
        project_button_demo: "الموقع",
        project_button_poster: "ملصق",
        project_button_business_model: "نموذج العمل",
        project_button_explore_ai: "استكشف بالذكاء الاصطناعي",
        ai_assistant_title: "المساعد الذكي: {title}",
        ai_chip_methodology: "✨ كيف تم بناء هذا؟",
        ai_chip_summary: "⚡ ملخص في 3 نقاط",
        ai_chip_math: "📐 الرياضيات والخوارزميات",
        ai_chip_results: "📈 النتائج والأثر",
        ai_prompt_math_query: "ما هي النماذج الرياضية والمعادلات وخوارزميات التحسين المستخدمة في هذا المشروع؟",
        ai_prompt_results_query: "ما هي النتائج الرئيسية القابلة للقياس ومقاييس الدقة والأثر الفعلي؟",
        ai_initial_title: "ما الذي ترغب في استكشافه حول هذا المشروع؟",
        ai_initial_desc: "اطرح أي سؤال أدناه أو اختر أحد الاقتراحات أعلاه لاستكشاف المنهجية، النماذج الرياضية، أو النتائج.",
        ai_input_placeholder: "اسأل أي شيء عن هذا المشروع... (مثال: كيف يعمل النموذج؟)",
        ai_send_button: "اسأل",
        ai_analyzing: "جارٍ تحليل السياق الهندسي للمشروع...",
        ai_fallback_title: "الذكاء الاصطناعي لا يعمل في الوقت الحالي.",
        ai_fallback_desc: "لا تتردد في استكشاف مخرجات المشروع أو التواصل مع محمد مباشرة.",
        modal_explaining_title: `المساعد الذكي: {title}`,
        modal_skill_projects_title: `مشاريع تستخدم {skill}`,
        modal_list_intro: `هذه هي المشاريع التي استخدمت فيها <strong>{skill}</strong>:`,
        pdf_modal_title_report: `تقرير - {title}`,
        pdf_modal_title_presentation: `عرض تقديمي - {title}`,
        pdf_modal_title_resume: `سيرتي الذاتية`,
        projects: [
             { id: 'mental-health-analytics', title: 'تحليلات تنبؤية للصحة النفسية للطلاب', description: 'تطوير نماذج تنبؤية باستخدام بيانات الاستبيانات والنصوص لتقييم الصحة النفسية للطلاب، وتحقيق دقة عالية في التنبؤ بمستويات القلق والاكتئاب والتوتر.' },
             { id: 'red-fruit-optimization', title: 'تحسين إنتاج الفواكه الحمراء', description: 'تصميم وتنفيذ نموذج برمجة خطية لتعظيم الربح من إنتاج الفاكهة الحمراء في البيوت المحمية، مع مراعاة مختلف القيود والسيناريوهات.' },
             { id: 'powerbi-dashboard', title: 'دمج كشوف الحسابات البنكية مع Power BI', description: 'تطوير لوحة تحكم Power BI تفاعلية لدمج وتصور المقاييس المالية الرئيسية من كشوف الحسابات البنكية ومذكرات التسليم للحصول على عرض بيانات متصل.' },
             { id: 'rsa-cryptography', title: 'هجمات ضد RSA ذات المعامل المشترك', description: 'دراسة ومحاكاة الهجمات ضد نظام التشفير RSA، مع التركيز على نقاط الضعف الناتجة عن الوحدات المشتركة لإظهار نقاط الضعف في التشفير.' },
             { id: 'acoustic-noise-reduction', title: 'الحد من التلوث السمعي الناتج عن حركة المرور', description: 'دراسة ونمذجة انتشار الموجات الصوتية وتحسين الجدران العازلة للصوت باستخدام المواد المسامية. إجراء تجارب بأنبوب كوندت لمقارنة امتصاص الرغوة المدمجة والرغوة الخلوية.' },
             { id: 'geology-internship', title: 'تدريب في الجيولوجيا والجيوفيزياء', description: 'إجراء دراسات ميدانية في أولماس تغطي الجيولوجيا والجيوفيزياء والهيدروجيولوجيا. تطبيق تقنيات التصوير المقطعي بالمقاومة الكهربائية وتحليل المياه الجوفية.' },
             { id: 'wood-behavior-mmc', title: 'قانون سلوك الخشب (مشروع MMC)', description: 'دراسة الخواص الميكانيكية للخشب ونمذجة سلوكه المرن، مع إجراء اختبارات الضغط والانحناء لقياس معامل يونغ ومقاومة الكسر.' },
             { id: 'biomedical-diffusion', title: 'انتشار الأكسجين في الحويصلات الرئوية', description: 'إجراء مشروع هندسة طبية حيوية لنمذجة انتشار الأكسجين في الحويصلات الرئوية، وحل معادلة الانتشار ثنائية الأبعاد باستخدام الطرق العددية.' },
             { id: 'robotics-vision', title: 'تصميم وتصنيع ذراع روبوتية مع الرؤية الحاسوبية', description: 'تصميم وتصنيع وتجميع ذراع روبوتية مفصلية متكاملة من البداية—بدءًا من النمذجة ثلاثية الأبعاد (CAD) على SolidWorks، والتصنيع الميكانيكي والميكاترونيكس، وصولاً إلى الحسابات الحركية ونماذج الرؤية الحاسوبية OpenCV لكشف وفرز الأجسام في الوقت الفعلي.' },
             { id: 'tourist-planner', title: 'مخطط الزيارات السياحية', description: 'تطوير تطبيق ويب متكامل لتخطيط وتحسين مسارات الرحلات السياحية باستخدام خوارزمية مسألة البائع المتجول (TSP) وReact وDjango وGoogle Maps API.' },
             { id: 'teachy-platform', title: 'Teachy: منصة تعليم اللغات عبر الإنترنت', description: 'تصميم منصة مبتكرة لتعلم اللغات عبر الإنترنت تربط المتعلمين بالمتحدثين الأصليين لتوفير انغماس تفاعلي مباشر، ودورات مخصصة، وموارد تعليمية متنوعة.' },
             { id: 'biomass-co2-nareva', title: 'احتجاز الكربون الحيوي وإنتاج الوقود الإلكتروني (مشروع NAREVA)', description: 'دراسة جدوى تقنية واقتصادية لاحتجاز 150 ألف طن سنويًا من ثاني أكسيد الكربون الحيوي من الكتلة الحيوية في المغرب لإنتاج وتصدير الميثانول الأخضر إلى أوروبا.' },
             { id: 'sociotechnical-controversy-africa', title: 'الجدل الاجتماعي والتقني: التكنوقراطية في التنمية الأفريقية', description: 'تحليل معمق لجدل اجتماعي تقني يستكشف ما إذا كانت التكنوقراطية تمثل مسارًا للتنمية في أفريقيا، مع رسم خرائط للتحديات الهيكلية وتفاعل الفاعلين عبر 5 قطاعات رئيسية.' },
             { id: 'vsm-ciam-steel', title: 'نظم الإنتاج واللوجستيات: تخطيط تدفق القيمة (مصنع CIAM)', description: 'تشخيص صناعي لمنهجية Lean وتخطيط تدفق القيمة (VSM/VSD) لمصنع الصلب CIAM، ووضع خطط عمل 5S/SMED/TPM لرفع الطاقة الإنتاجية إلى مليون طن سنوياً وتقليص المهل الزمنية بنسبة 75%.' },
             { id: 'pg-brand-management-shadowing', title: 'إدارة العلامات التجارية والعمليات (Procter & Gamble)', description: 'تدريب معايشة مهني رفيع المستوى داخل قسم العناية بالشعر والفرق متعددة الوظائف (MFT) في شركة P&G، مع دراسة استراتيجيات العلامات التجارية، والتنفيذ التجاري (DPSM)، وسلسلة الإمداد (SNO)، وهيكلة التسعير عبر أكثر من 54000 نقطة بيع.' },
             { id: 'redstart-reusable-booster', title: 'Redstart: محاكاة هبوط الصواريخ الفضائية القابلة لإعادة الاستخدام', description: 'نمذجة ومحاكاة الديناميكا غير الخطية للتحكم في الدفع الموجه ومسار الهبوط العمودي السلس لصاروخ فضائي قابل لإعادة الاستخدام باستخدام SciPy وSymPy وMarimo.' },
             { id: 'academic-career-success', title: 'التحليل الإحصائي للنجاح الأكاديمي والمهني', description: 'دراسة إحصائية واقتصادية قياسية شملت 5000 خريج لنمذجة محددات الرواتب والاندماج المهني باستخدام الانحدار الخطي المتعدد (R² = 0.825)، واختبارات كاي تربيع، وتجميع k-Means.' },
             { id: 'lithium-brine-extraction', title: 'إنتاج الليثيوم من المحاليل الملحية بالتبخير الشمسي', description: 'دراسة تقنية واقتصادية ونمذجة جيوكيميائية لاستخراج الليثيوم عبر 6 سبخات ملحية في أمريكا الجنوبية، مع تحليل حركية التبخير وفصل الشوائب (Mg/Li) والتكلفة التشغيلية (3200 دولار/طن).' },
             { id: 'petropolis-landslide-modeling', title: 'النمذجة الفيزيائية لمخاطر الانهيارات الأرضية (بيتروبوليس، البرازيل)', description: 'إعداد البيانات الجغرافية المكانية والنمذجة الفيزيائية للانهيارات الأرضية الناجمة عن الأمطار في بيتروبوليس بالبرازيل، باستخدام نموذج الارتشاح المؤقت USGS TRIGRS v2.1.0 وميكانيكا استقرار المنحدرات ونظم المعلومات الجغرافية QGIS عبر 795 كم².' },
             { id: 'cotton-hedging-inditex', title: 'تمويل الأسواق وإدارة المخاطر: التقييم الكمي لاستراتيجيات التحوط لأسعار القطن (مجموعة إنديتكس)', description: 'نمذجة العشوائية لديناميكا أسعار القطن عبر الحركة البراونية الهندسية ونموذج بلاك-شولز، مع تنفيذ محاكاة مونت كارلو (2000 مسار) واختبارات رجعية لبيانات INSEE لتقييم استراتيجيات المبادلة الآجلة وعقود الخيارات لمجموعة إنديتكس.' },
             { id: 'renault5-electric-marketing', title: 'رينو 5 إي-تيك الكهربائية 100%: استراتيجية التسويق واختراق السوق', description: 'إعداد استراتيجية تسويقية متكاملة، ودراسة مقارنة تنافسية (Dacia Spring, Peugeot e-208, Fiat 600e, BYD Atto 3)، وتحديد شرائح العملاء وتوقعات نمو سوق السيارات الكهربائية في المغرب للفترة 2026-2030 لتصل إلى 8.75 مليار درهم.' },
             { id: 'mitsubishi-strategic-analysis', title: 'التحليل الاستراتيجي: شركة ميتسوبيشي موتورز والتحول نحو المركبات المعرفة برمجياً', description: 'تدقيق استراتيجي شامل لشركة ميتسوبيشي موتورز ضمن تحالف رينو-نيسان-ميتسوبيشي، مع تحليل نموذج الأعمال وريادة سوق آسيان ومصفوفات PESTEL وبورتر وSWOT، وصياغة خارطة طريق التحول نحو المركبات المحددة بالبرمجيات (SDV) والمركبات الكهربائية.' },
             { id: 'wireless-pentest-ceh', title: 'أمن الشبكات اللاسلكية واختبار الاختراق (مختبر الهاكر الأخلاقي المعتمد CEH)', description: 'تدقيق أمني هجومي وتحليل تشفيري لشبكات الواي فاي (مختبر CEH) شمل كسر تشفير WEP RC4، واعتراض مصافحة WPA2 الرباعية عبر هجمات إلغاء المصادقة، وهجمات Evil Twin عبر بوابات Fluxion، وتحليل الحزم عبر Wireshark، وتطبيق حماية WPA3-SAE و802.1X.' },
             { id: 'managerial-accounting-formaction', title: 'المحاسبة التحليلية ومراقبة التسيير: نمذجة التكاليف على أساس الأنشطة ABC (مؤسسة FORMACTION)', description: 'نمذجة متقدمة لمحاسبة التكاليف عبر منهجية التكلفة على أساس الأنشطة (ABC) ونظام التكلفة المباشرة المتطورة لمؤسسة FORMACTION (رقم معاملات 678.7 ألف يورو عبر 187 متدرباً) لتحليل هوامش المساهمة وتوجيه القرارات الإدارية.' },
             { id: 'sap-s4hana-production-planning', title: 'تخطيط وإدارة الإنتاج عبر نظام SAP S/4HANA (شركة Global Bike Inc.)', description: 'تنفيذ وتكوين دورة تخطيط وإدارة الإنتاج الصناعي المتكاملة عبر نظام SAP S/4HANA لشركة Global Bike Inc.، مع ضبط البيانات الأساسية (هياكل المنتجات، مسارات التصنيع، مراكز العمل)، وحساب تكاليف الإنتاج المعيارية (CK11N)، وتطبيق استراتيجيات الصنع للمخزون (MTS) والتجميع حسب الطلب (ATO).' },
             { id: 'data-science-track', title: 'مسار التخصص المتقدم في علوم البيانات والذكاء الاصطناعي (برنامج 8 أسابيع)', description: 'إتمام مسار تخصصي مكثف في علوم البيانات مدته 8 أسابيع بإشراف البروفيسور إريك مولين (الأكاديمية الفرنسية للعلوم / بوليتكنيك): التحسين الرياضي، نظرية PAC، التعلم العميق، المسائل العكسية، النماذج التوليدية، معالجة اللغات الطبيعية، والتعلم المعزز.' },
             { id: 'dirty-model-multitask-learning', title: 'نموذج التراكب "Dirty Model" للتعلم متعدد المهام في الفضاءات عالية الأبعاد', description: 'التحقق التجريبي وإعادة تطبيق الورقة البحثية الرائدة في NIPS للتعلم متعدد المهام (Jalali et al.): تفكيك مصفوفات المعلمات إلى تراكب بين مصفوفة متفرقة قطاعياً (ℓ₁/ℓ∞) ومصفوفة متفرقة عنصرياً (ℓ₁) عبر التحسين المحدب (CVXPY)، مع إثبات حد التعقيد العيني الأمثل (2-α)s log(p) وإعادة إنتاج انتقالات الطور التجريبية.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'EJE', role: 'مدير الرعاية', description: 'بصفتي مدير الرعاية، تتمثل مسؤوليتي الأساسية في تأمين الشراكات والرعاية الحيوية لدعم محفظة EJE المؤثرة من مسابقات البرمجة الطلابية. أبحث عن رعاة للأحداث الكبرى بما في ذلك مسابقة البرمجة OP&X Hackathon ومسابقة البرمجة الاستشارية الاستراتيجية (SCH) ومسابقة البرمجة DataQuest Hackathon ومسابقة البرمجة المالية Finance Hackathon. من خلال ربط الشركات بهذه المنصات، أساعدها على جذب ألمع الطلاب المغاربة ودعم تنمية المواهب المستقبلية.' },
            { id: 'rubiks-club', title: "نادي مكعب روبيك UM6P", role: "رئيس", description: "بصفتي رئيسًا، قمت بقيادة أنشطة النادي، وتنظيم ورش عمل، وتعزيز مجتمع من حلالي المشكلات." },
            { id: 'eplus-club', title: "نادي E++، EMINES", role: "مدير الرعاية", description: "حصلت على رعاة للمسابقة الوطنية لعلوم البيانات (NDSC) ومسابقة الروبوت الذكي (IRC) من خلال التواصل مع شركاء محتملين، وعرض المقترحات، وضمان دعمهم لكلا الحدثين." },
            { id: 'eastro-club', title: "نادي، EMINES ASTRO ", role: "مدير الخدمات اللوجستية", description: "نظمت الخدمات اللوجستية لليالي المراقبة والندوات التعليمية، مؤكدًا توفر جميع المعدات والموارد بسلاسة، وشاركت كخبير في علم الفلك في اليوم المغربي للرياضيات." },
            { id: 'rotaract-club', title: "نادي ROTARACT EMINES", role: "مدير الاتصالات والمحتوى", description: "لقد أدرت تواجد النادي على وسائل التواصل الاجتماعي وأنشأت محتوى جذابًا للترويج لمشاريع خدمة المجتمع لدينا." },
            { id: 'pingpong-club', title: "نادي تنس الطاولة UM6P", role: "مدير الخدمات اللوجستية", description: "نظمت بطولات وجلسات تدريبية، وتوليت جميع الجوانب اللوجستية من الجدولة إلى إدارة المعدات." },
            { id: 'university-sports', title: "الرياضة الجامعية", role: "لاعب في فرق كرة اليد والكرة الطائرة وكرة القدم", description: "كعضو نشط في العديد من الفرق الرياضية الجامعية، طورت مهارات قوية في العمل الجماعي والانضباط والقيادة. " }
        ],

        help_button: "كيف يمكنني المساعدة؟",
        help_modal_title: "صف احتياجاتك",
        help_modal_placeholder: "أخبرني عن المشروع أو التحدي أو الدور الذي تفكر فيه. على سبيل المثال: 'أحتاج إلى شخص لبناء نموذج تنبؤي لبيانات العملاء' أو 'أبحث عن مدير مشروع بخلفية تقنية.'",
        help_modal_submit: "حلل احتياجي",
        help_modal_response_title: "إليك كيف يمكنني المساعدة",
        contact_button_after_ai: "تواصل مع محمد"
    },
    // Spanish
    es: {
        page_title: "Mohammed EL BARAKA - Gestión Industrial y Ciencia de Datos",
        nav_about: "Sobre mí",
        nav_projects: "Proyectos",
        nav_skills: "Habilidades",
        nav_leadership: "Liderazgo",
        nav_contact: "Contacto",
        hero_title: "Gestión Industrial,<br>y Ciencia de Datos",
        hero_typing: ["Gestión Industrial", "Ciencia de Datos"],
        hero_subtitle: "Graduado en Ingeniería de EMINES-UM6P especializado en Gestión Industrial con pasión por la Optimización, la Ciencia de Datos y el aprovechamiento de la tecnología para resolver desafíos del mundo real.",
        hero_cta_button: "Ver mi trabajo",
        about_title: "Sobre Mí",
        about_p1: "¡Hola! Soy Mohammed EL BARAKA, un graduado en ingeniería de Gestión Industrial de la prestigiosa Universidad Politécnica Mohammed VI (UM6P). Mi trayectoria académica, que comenzó con un programa intensivo en Matemáticas y Física, me ha inculcado una fuerte mentalidad analítica y de resolución de problemas.",
        about_p2: "Me impulsa el desafío de desentrañar problemas complejos, particularmente a través de la aplicación de la Ciencia de Datos, el Aprendizaje Automático y los algoritmos de Optimización. Mi filosofía de trabajo se centra en cerrar la brecha entre el conocimiento teórico y la aplicación práctica para crear resultados tangibles.",
        about_p3: "Soy un líder proactivo, con fluidez en árabe, francés e inglés, y siempre estoy ansioso por aprender, colaborar y aplicar mis habilidades en escenarios de impacto.",
        view_resume_button: "Ver mi CV",
        projects_title: "Mis Proyectos",
        skills_title: "Habilidades Técnicas",
        leadership_title: "Liderazgo y Actividades",
        contact_title: "Ponte en Contacto",
        contact_subtitle: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades. Conectemos.",
        contact_button: "Contáctame",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. Todos los derechos reservados.`,
        contact_modal_title: "Contáctame",
        contact_modal_email: "Enviar un Correo",
        contact_modal_whatsapp: "Mensaje en WhatsApp",
        contact_modal_call: "Hacer una Llamada",
        project_button_report: "Informe",
        project_button_presentation: "Presentación",
        project_button_demo: "Sitio Web",
        project_button_poster: "Póster",
        project_button_business_model: "Modelo de Negocio",
        project_button_explore_ai: "Explorar con IA",
        ai_assistant_title: "Asistente IA: {title}",
        ai_chip_methodology: "✨ ¿Cómo fue construido?",
        ai_chip_summary: "⚡ Resumen en 3 puntos",
        ai_chip_math: "📐 Matemáticas y Algoritmos",
        ai_chip_results: "📈 Resultados e Impacto",
        ai_prompt_math_query: "¿Qué modelos matemáticos, fórmulas y algoritmos de optimización se utilizaron en este proyecto?",
        ai_prompt_results_query: "¿Cuáles fueron los principales resultados medibles, métricas de precisión e impacto real?",
        ai_initial_title: "¿Qué te gustaría explorar sobre este proyecto?",
        ai_initial_desc: "Haz una pregunta abajo o elige una sugerencia arriba para ver la metodología, modelos matemáticos o resultados.",
        ai_input_placeholder: "Pregunta lo que sea sobre este proyecto... (ej. ¿Cómo funciona el modelo?)",
        ai_send_button: "Preguntar",
        ai_analyzing: "Analizando el contexto de ingeniería del proyecto...",
        ai_fallback_title: "La IA no está funcionando por el momento.",
        ai_fallback_desc: "No dudes en explorar los entregables del proyecto o contactar a Mohammed directamente.",
        modal_explaining_title: `Asistente IA: {title}`,
        modal_skill_projects_title: `Proyectos con {skill}`,
        modal_list_intro: `Aquí están los proyectos donde usé <strong>{skill}</strong>:`,
        pdf_modal_title_report: `Informe - {title}`,
        pdf_modal_title_presentation: `Presentación - {title}`,
        pdf_modal_title_resume: `Mi Currículum`,
        projects: [
            { id: 'mental-health-analytics', title: 'Análisis Predictivo de la Salud Mental Estudiantil', description: 'Desarrollé modelos predictivos utilizando datos de cuestionarios y texto para evaluar la salud mental de los estudiantes, logrando una alta precisión en la predicción de los niveles de ansiedad, depresión y estrés.' },
            { id: 'red-fruit-optimization', title: 'Optimización de la Producción de Frutos Rojos', description: 'Diseñé e implementé un modelo de Programación Lineal para maximizar el beneficio de la producción de frutos rojos en invernaderos, considerando diversas restricciones y escenarios.' },
            { id: 'powerbi-dashboard', title: 'Integración de Extractos Bancarios con Power BI', description: 'Desarrollé un panel de Power BI interactivo para integrar y visualizar métricas financieras clave de extractos bancarios y albaranes de entrega para una vista de datos conectada.' },
            { id: 'rsa-cryptography', title: 'Ataques Contra RSA de Módulo Compartido', description: 'Estudié y simulé ataques contra el criptosistema RSA, centrándome en las vulnerabilidades de los módulos compartidos para demostrar las debilidades criptográficas.' },
            { id: 'acoustic-noise-reduction', title: 'Redución de la Contaminación Acústica del Tráfico Vial', description: 'Investigación y modelado de la propagación de ondas acústicas y optimización de barreras acústicas mediante materiales porosos. Ensayos experimentales con tubo de Kundt comparando espumas compactas y alveolares.' },
            { id: 'geology-internship', title: 'Prácticas de Geología y Geofísica', description: 'Estudios de campo en Oulmès que cubren geología, geofísica e hidrogeología. Aplicación de tomografía de resistividad eléctrica y análisis de aguas subterráneas.' },
            { id: 'wood-behavior-mmc', title: 'Ley de Comportamiento de la Madera (Proyecto MMC)', description: 'Estudió las propiedades mecánicas de la madera, modeló su comportamiento elástico ortotrópico y realizó pruebas de compresión y flexión para medir el módulo de Young y la resistencia a la rotura.' },
            { id: 'biomedical-diffusion', title: 'Difusión de Oxígeno en el Acino Pulmonar', description: 'Realicé un proyecto de ingeniería biomédica para modelar la difusión de oxígeno en el acino pulmonar, resolviendo la ecuación de difusión 2D utilizando métodos numéricos.' },
            { id: 'robotics-vision', title: 'Diseño, Fabricación Robótica y Visión por Computadora', description: 'Diseñé, fabriqué y ensamblé un brazo robótico articulado autónomo desde cero: desde el modelado CAD 3D en SolidWorks, prototipado físico y mecatrónica, hasta cinemática inversa y visión por computadora con OpenCV para detección y clasificación en tiempo real.' },
            { id: 'tourist-planner', title: 'Planificador de Visitas Turísticas', description: 'Desarrollo de una aplicación web full-stack para planificar y optimizar itinerarios turísticos utilizando el algoritmo del viajante de comercio (TSP), React, Django y la API de Google Maps.' },
            { id: 'teachy-platform', title: 'Teachy: Plataforma de Aprendizaje de Idiomas', description: 'Diseño de una plataforma innovadora de aprendizaje de idiomas en línea que conecta a los estudiantes con hablantes nativos para una inmersión interactiva en vivo, cursos personalizados y recursos pedagógicos.' },
            { id: 'biomass-co2-nareva', title: 'Captura de CO2 Biogénico y E-Fuels (Proyecto NAREVA)', description: 'Estudio de prefactibilidad técnico-económica para la captura de 150 kt/año de CO2 biogénico a partir de biomasa en Marruecos para la producción y exportación de e-metanol verde a Europa.' },
            { id: 'sociotechnical-controversy-africa', title: 'Controversia Sociotécnica: Tecnocracia en África', description: 'Análisis exhaustivo de una controversia sociotécnica sobre el papel de la tecnocracia en el desarrollo africano, mapeando desafíos estructurales y dinámicas de actores en 5 sectores clave.' },
            { id: 'vsm-ciam-steel', title: 'Sistemas de Producción y VSM: Planta de Acero CIAM', description: 'Diagnóstico industrial Lean y Value Stream Mapping (VSM/VSD) para la planta siderúrgica CIAM, formulando planes de acción 5S/SMED/TPM para elevar la capacidad a 1M de toneladas/año y reducir los plazos en un 75%.' },
            { id: 'pg-brand-management-shadowing', title: 'Gestión de Marca y Operaciones (Procter & Gamble)', description: 'Pasantía de inmersión ejecutiva en la división Hair Care y equipos multifuncionales (MFT) de P&G, analizando estrategia de marca, ejecución minorista (DPSM), operaciones de cadena de suministro (SNO) y arquitectura de precios en más de 54,000 puntos de venta.' },
            { id: 'redstart-reusable-booster', title: 'Redstart: Descenso y Aterrizaje de Cohete Reutilizable', description: 'Modelado y simulación de la dinámica de vuelo 2D no lineal, control vectorial de empuje y trayectoria de aterrizaje suave de un cohete propulsor reutilizable con SciPy, SymPy y Marimo.' },
            { id: 'academic-career-success', title: 'Análisis Estadístico del Éxito Académico y Profesional', description: 'Estudio estadístico y econométrico sobre 5,000 graduados modelando los determinantes del salario inicial mediante regresión lineal múltiple (R² = 0.825), pruebas de Chi-cuadrado, V de Cramér y clustering k-Means.' },
            { id: 'lithium-brine-extraction', title: 'Producción de Litio a partir de Salmueras por Evaporación Solar', description: 'Estudio técnico-económico y modelado geoquímico de la extracción de litio en 6 salares sudamericanos, analizando la cinética de evaporación, selectividad de impurezas Mg/Li y costos operativos (OPEX 3.200 USD/t).' },
            { id: 'petropolis-landslide-modeling', title: 'Modelado Físico de Susceptibilidad a Deslizamientos (Petrópolis, Brasil)', description: 'Preparación de datos geoespaciales y modelado físico de deslizamientos de tierra inducidos por lluvias torrenciales en Petrópolis (Brasil), acoplando el modelo de infiltración transitoria USGS TRIGRS v2.1.0, QGIS, GRASS y estabilidad de taludes sobre 795 km².' },
            { id: 'cotton-hedging-inditex', title: 'Finanzas Cuantitativas y Cobertura del Riesgo de Precio del Algodón (Caso Inditex)', description: 'Modelado estocástico mediante Movimiento Browniano Geométrico y valoración Black-Scholes con coste de transporte, simulación de Monte Carlo (2.000 trayectorias) y backtesting histórico de datos INSEE para evaluar Swaps a plazo y Strips de Opciones Call para el Grupo Inditex.' },
            { id: 'renault5-electric-marketing', title: 'Renault 5 E-Tech 100% Eléctrico: Estrategia de Marketing y Penetración de Mercado', description: 'Elaboración de la estrategia de marketing, posicionamiento competitivo frente a Dacia/Peugeot/Fiat/BYD, segmentación de personas y proyecciones de ventas de vehículos eléctricos 2026–2030 (mercado de 8.750 millones MAD) para el lanzamiento del Renault 5 E-Tech en Marruecos.' },
            { id: 'mitsubishi-strategic-analysis', title: 'Análisis Estratégico: Mitsubishi Motors Corporation y Viraje SDV', description: 'Auditoría estratégica corporativa de Mitsubishi Motors dentro de la Alianza Renault-Nissan-Mitsubishi, evaluando su modelo de negocio, liderazgo en ASEAN, diagnóstico PESTEL/Porter/SWOT y su hoja de ruta hacia Vehículos Definidos por Software (SDV) y electrificación BEV.' },
            { id: 'wireless-pentest-ceh', title: 'Seguridad de Redes Inalámbricas y Pruebas de Penetración (Laboratorio CEH)', description: 'Auditoría ofensiva y análisis criptográfico de redes Wi-Fi (Laboratorio CEH): descifrado de WEP RC4, captura del 4-Way Handshake de WPA2 mediante desautenticación, ataques Evil Twin con portales cautivos (Fluxion), análisis forense 802.11 con Wireshark y blindaje empresarial WPA3-SAE / 802.1X.' },
            { id: 'managerial-accounting-formaction', title: 'Contabilidad Analítica y Control de Gestión: Modelado ABC (FORMACTION)', description: 'Modelado integral de costes mediante Activity-Based Costing (ABC) y Direct Costing Evolucionado para el centro FORMACTION (678,7 k€ de ingresos sobre 187 alumnos), optimizando márgenes de contribución y auditando la rentabilidad de programas formativos.' },
            { id: 'sap-s4hana-production-planning', title: 'Planificación y Gestión de Producción en SAP S/4HANA (Global Bike Inc.)', description: 'Implementación y configuración integral del ciclo de planificación y ejecución de producción en SAP S/4HANA para Global Bike Inc., parametrizando listas de materiales (BOM), puestos de trabajo, rutas, cálculo de costes estándar (CK11N), pirámide SOP/MRP y estrategias MTS frente a ATO.' },
            { id: 'data-science-track', title: 'Especialización en Ciencia de Datos: Programa Avanzado de 8 Semanas', description: 'Especialización intensiva de 8 semanas dirigida por el Prof. Éric Moulines (Academia de Ciencias de Francia / École Polytechnique): optimización convexa, teoría PAC, CNN y CAVI, problemas inversos, IA generativa (GANs/VAEs/Difusión), Transformers y Aprendizaje por Refuerzo.' },
            { id: 'dirty-model-multitask-learning', title: 'Modelo «Dirty» para Aprendizaje Multitarea: Superposición en Alta Dimensión', description: 'Validación empírica y replicación del artículo de NIPS «A Dirty Model for Multitask Learning» (Jalali et al.), descomponiendo matrices de parámetros en superposiciones de dispersión por bloques (ℓ₁/ℓ∞) y dispersión elemental (ℓ₁) mediante optimización convexa en CVXPY, demostrando la complejidad muestral (2-α)s log(p) y reproduciendo transiciones de fase.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: 'Gerente de Patrocinios', description: 'Como Gerente de Patrocinios, mi responsabilidad principal es asegurar alianzas y patrocinios vitales para impulsar el impactante portafolio de hackathons estudiantiles de EJE. Busco activamente patrocinadores para eventos importantes como el Hackathon OP&X, el Hackathon de Consultoría Estratégica (SCH), el Hackathon DataQuest y el Hackathon de Finanzas. Al conectar empresas con estas plataformas, les ayudo a interactuar con los estudiantes más brillantes de Marruecos y a fomentar el desarrollo de futuros talentos.' },
            { id: 'rubiks-club', title: "Club de Cubo de Rubik UM6P", role: "Presidente", description: "Como Presidente, lideré las actividades del club, organicé talleres y fomenté una comunidad de solucionadores de problemas." },
            { id: 'eplus-club', title: "Club E++, EMINES", role: "Gerente de Patrocinios", description: "Obtuve patrocinadores para la Competencia Nacional de Ciencia de Datos (NDSC) y la Competencia de Robots Inteligentes (IRC) contactando a socios potenciales, presentando propuestas y asegurando su apoyo para ambos eventos." },
            { id: 'eastro-club', title: "Club de E-Astronomía, EMINES", role: "Gerente de Logística", description: "Coordiné la logística de noches de observación y seminarios educativos, garantizando la disponibilidad impecable de todo el equipo y recursos, y participé como experto en astronomía en el Día Marroquí de las Matemáticas." },
            { id: 'rotaract-club', title: "Club ROTARACT EMINES", role: "Gerente de Comunicación y Contenido", description: "Gestioné la comunicación del club y la creación de contenido, desarrollando materiales atractivos para promover las actividades, eventos e iniciativas de Rotaract EMINES." },
            { id: 'pingpong-club', title: "Club de Ping Pong UM6P", role: "Gerente de Logística", description: "Organicé torneos y sesiones de práctica, manejando todos los aspectos logísticos desde la programación hasta la gestión de equipos." },
            { id: 'university-sports', title: "Deportes Universitarios", role: "Jugador de los equipos de Balonmano, Voleibol y Fútbol", description: "Como miembro activo de múltiples equipos deportivos universitarios, desarrollé sólidas habilidades de trabajo en equipo, disciplina y liderazgo." }
        ],

        help_button: "¿Cómo puedo ayudarte?",
        help_modal_title: "Describe tus necesidades",
        help_modal_placeholder: "Háblame sobre el proyecto, desafío o rol que tienes en mente. Por ejemplo: 'Necesito a alguien que construya un modelo predictivo para datos de clientes' o 'Estoy buscando un gerente de proyectos con experiencia técnica.'",
        help_modal_submit: "Analizar mi necesidad",
        help_modal_response_title: "Así es como puedo ayudar",
        contact_button_after_ai: "Contactar a Mohammed"
    },
    // Mandarin Chinese
    zh: {
        page_title: "Mohammed EL BARAKA - 工业管理与数据科学",
        nav_about: "关于",
        nav_projects: "项目",
        nav_skills: "技能",
        nav_leadership: "领导力",
        nav_contact: "联系",
        hero_title: "工业管理<br>与数据科学",
        hero_typing: ["工业管理", "数据科学"],
        hero_subtitle: "一名EMINES-UM6P的工程专业毕业生，主修工业管理，热衷于优化、数据科学，并利用技术解决现实世界中的挑战。",
        hero_cta_button: "查看我的作品",
        about_title: "关于我",
        about_p1: "你好！我是Mohammed EL BARAKA，是著名的穆罕默德六世理工大学（UM6P）工业管理工程专业的 graduate。我的学术旅程始于数学和物理的强化课程，这培养了我强大的分析和解决问题的思维能力。",
        about_p2: "我被解决复杂问题的挑战所驱动，特别是通过应用数据科学、机器学习和优化算法。我的工作理念是弥合理论知识与实际应用之间的差距，以创造切实的成果。",
        about_p3: "我是一个积极主动的领导者，精通阿拉伯语、法语和英语，并总是渴望学习、合作，并将我的技能应用于有影响力的场景中。",
        view_resume_button: "查看我的简历",
        projects_title: "我的项目",
        skills_title: "技术技能",
        leadership_title: "领导力与活动",
        contact_title: "联系我",
        contact_subtitle: "我随时乐意讨论新项目、创意或机会。让我们建立联系吧。",
        contact_button: "联系我",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. 版权所有。`,
        contact_modal_title: "联系我",
        contact_modal_email: "发送电子邮件",
        contact_modal_whatsapp: "在WhatsApp上留言",
        contact_modal_call: "拨打电话",
        project_button_report: "报告",
        project_button_presentation: "演示",
        project_button_demo: "网站",
        project_button_poster: "海报",
        project_button_business_model: "商业模式",
        project_button_explore_ai: "使用 AI 探索",
        ai_assistant_title: "AI 助手: {title}",
        ai_chip_methodology: "✨ 如何构建的？",
        ai_chip_summary: "⚡ 3点摘要",
        ai_chip_math: "📐 数学与算法",
        ai_chip_results: "📈 结果与影响",
        ai_prompt_math_query: "该项目使用了哪些数学模型、公式和优化算法？",
        ai_prompt_results_query: "主要的量化成果、准确率指标和实际效益是什么？",
        ai_initial_title: "你想了解该项目的哪些方面？",
        ai_initial_desc: "在下方输入任何问题，或点击上方建议标签，了解工程方法、数学建模或项目成果。",
        ai_input_placeholder: "询问关于该项目的任何问题...（例如：模型是如何工作的？）",
        ai_send_button: "提问",
        ai_analyzing: "正在分析项目工程背景...",
        ai_fallback_title: "AI 助手目前暂停服务。",
        ai_fallback_desc: "欢迎查阅项目成果或直接联系 Mohammed。",
        modal_explaining_title: `AI 助手：{title}`,
        modal_skill_projects_title: `使用 {skill} 的项目`,
        modal_list_intro: `这是我使用 <strong>{skill}</strong> 的项目：`,
        pdf_modal_title_report: `报告 - {title}`,
        pdf_modal_title_presentation: `演示 - {title}`,
        pdf_modal_title_resume: `我的简历`,
        projects: [
            { id: 'mental-health-analytics', title: '学生心理健康预测分析', description: '使用问卷和文本数据开发预测模型来评估学生的心理健康状况，在预测焦虑、抑郁和压力水平方面实现了高准确性。' },
            { id: 'red-fruit-optimization', title: '红果生产优化', description: '设计并实施了一个线性规划模型，以最大化温室中红果生产的利润，同时考虑了各种约束和情景。' },
            { id: 'powerbi-dashboard', title: '银行对账单与Power BI集成', description: '开发了一个交互式Power BI仪表板，用于整合和可视化银行对账单和交货单中的关键财务指标，以实现连接的数据视图。' },
            { id: 'rsa-cryptography', title: '针对共享模数RSA的攻击', description: '研究并模拟了针对RSA密码系统的攻击，重点关注共享模数带来的漏洞，以展示密码学弱点。' },
            { id: 'acoustic-noise-reduction', title: '道路交通噪声污染消除与声屏障优化', description: '研究并模拟了声波在多孔介质中的传播与声屏障吸声优化。使用昆特管（Kundt Tube）实验测试并对比了致密泡沫与蜂窝多孔泡沫的吸声系数。' },
            { id: 'geology-internship', title: '地质学与地球物理学实习', description: '在 Oulmès 进行涵盖地质学、地球物理学和水文地质学的野外研究。应用电阻率层析成像和地下水分析技术。' },
            { id: 'wood-behavior-mmc', title: '木材行为定律（MMC项目）', description: '研究了木材的机械性能，对其正交各向异性弹性行为进行了建模，并进行了压缩和弯曲测试以测量杨氏模量和断裂强度。' },
            { id: 'biomedical-diffusion', title: '肺腺泡中的氧气扩散', description: '进行了一个生物医学工程项目，对肺腺泡中的氧气扩散进行建模，使用数值方法求解二维扩散方程。' },
            { id: 'robotics-vision', title: '机械臂结构设计、加工制造与计算机视觉检测', description: '从零开始完成了自主多关节机械臂的完整设计、制造与装配——涵盖SolidWorks三维CAD建模、机械加工与机电一体化系统集成，直至运动学逆解求解与基于OpenCV的高性能实时视觉识别与分拣。' },
            { id: 'tourist-planner', title: '旅游行程规划器', description: '开发了一个全栈Web应用程序，使用旅行商问题（TSP）算法、React、Django和Google Maps API来规划和优化旅游行程。' },
            { id: 'teachy-platform', title: 'Teachy：在线语言学习平台', description: '设计了一个创新的在线语言学习平台，将语言学习者与母语者联系起来，提供实时互动沉浸式体验、个性化课程和教学资源。' },
            { id: 'biomass-co2-nareva', title: '生物碳捕集与电子燃料合成研究（NAREVA项目）', description: '开展了从摩洛哥生物质中每年捕集15万吨生物碳用于生产绿色电子甲醇并出口欧洲的技术经济可行性前瞻研究。' },
            { id: 'sociotechnical-controversy-africa', title: '社会技术争议研究：技术官僚与非洲发展', description: '深入开展了关于技术官僚体制是否能够赋能非洲发展的社会技术争议分析，绘制了5大关键领域的核心挑战与多方利益相关者图谱。' },
            { id: 'vsm-ciam-steel', title: '生产系统与价值流图（VSM）：CIAM钢铁厂精益诊断', description: '对CIAM钢铁制造厂进行了工业精益诊断与价值流图（VSM/VSD）分析，制定了5S/SMED/TPM行动计划，将年产能提升至100万吨并将交付周期缩短75%。' },
            { id: 'pg-brand-management-shadowing', title: '品牌管理与商业运营实战（宝洁公司 P&G）', description: '深度跟岗参与宝洁（P&G）洗护发品类部及跨职能团队（MFT）运营，全面解析品牌全链路战略、零售卓越执行（DPSM金字塔）、供应链网络运营（SNO）与战略定价体系，覆盖逾54,000家零售终端。' },
            { id: 'redstart-reusable-booster', title: 'Redstart：可回收火箭助推器动力学与自主软着陆控制', description: '基于SciPy、SymPy与Marimo构建了类猎鹰9号可回收火箭助推器的二维非线性动力学方程、摆动发动机矢量推力控制以及精确垂直软着陆轨迹优化仿真系统。' },
            { id: 'academic-career-success', title: '学业表现与职业成功的多元统计建模与分析', description: '基于5000名大学毕业生数据集开展多元统计与计量经济学研究，运用多元线性回归（R² = 0.825）、卡方检验、Cramér\'s V系数与k-Means聚类深入剖析起薪决定因素与人才画像。' },
            { id: 'lithium-brine-extraction', title: '盐湖卤水太阳能蒸发提锂技术与技术经济综合建模', description: '对南美6大标志性盐湖锂矿开展了技术经济与地球化学全流程基准对标，深入分析了太阳能梯度蒸发动力学、镁锂比（Mg/Li）除杂分离工艺及3200美元/吨高竞争力运营成本。' },
            { id: 'petropolis-landslide-modeling', title: '基于物理机制的滑坡易发性数值模拟研究（巴西彼得罗波利斯）', description: '针对巴西里约热内卢州彼得罗波利斯795平方公里高危山区，开展地理空间数据工程处理与降雨诱发浅层滑坡物理机制数值模拟，深度整合USGS TRIGRS v2.1.0非定常入渗模型、QGIS、GRASS与无限边坡稳定性力学分析。' },
            { id: 'cotton-hedging-inditex', title: '量化金融与大宗商品风险管理：棉花价格对冲策略评估（Inditex案例）', description: '基于几何布朗运动（GBM）与Black-Scholes持有成本模型对棉花价格进行随机建模，运用2000条路径的蒙特卡洛仿真与法国INSEE历史真实数据回测，系统评估了远期互换（Swap）与看涨期权组合（Strip of Calls）对西班牙Inditex集团采购成本的对冲效果。' },
            { id: 'renault5-electric-marketing', title: '雷诺5 E-Tech纯电动汽车：摩洛哥市场营销战略与渗透预测（2026–2030）', description: '针对雷诺5 E-Tech纯电动汽车在摩洛哥的上市开展全方位市场营销战略设计、与达契亚/标致/菲亚特/比亚迪的深度竞品对标、用户画像与细分市场定位，以及2026–2030年规模达87.5亿迪拉姆的宏观电动车销量预测。' },
            { id: 'mitsubishi-strategic-analysis', title: '企业战略管理与软件定义汽车（SDV）转型：三菱汽车公司深度分析', description: '对雷诺-日产-三菱联盟框架下的三菱汽车公司开展深度企业战略审计，系统解析商业模式画布、东盟（ASEAN）市场主导地位、PESTEL/波特五力/SWOT全景诊断，并制定软件定义汽车（SDV）与纯电BEV转型路线图。' },
            { id: 'wireless-pentest-ceh', title: '无线网络安全与渗透测试攻防实践（CEH道德黑客实战实验室）', description: '在CEH道德黑客实验室内开展无线网络攻防与密码学深度剖析：涵盖WEP RC4弱IV破解、WPA2四次握手包重放捕获、Fluxion流氓AP钓鱼门户（Evil Twin）、Wireshark 802.11无线报文取证，以及WPA3-SAE / 802.1X RADIUS纵深防御架构。' },
            { id: 'managerial-accounting-formaction', title: '管理会计与成本控制：作业成本法（ABC）与边际贡献建模（FORMACTION案例）', description: '针对法国职业培训机构FORMACTION（年营收67.87万欧元，覆盖187名学员）开展全流程作业成本法（ABC）与演进直接成本法建模，深度解析成本动因、分部边际贡献率，并提供关键业务保留决策支持。' },
            { id: 'sap-s4hana-production-planning', title: 'SAP S/4HANA工业生产计划与ERP端到端智造实践（Global Bike案例）', description: '在SAP S/4HANA工业制造系统中完成全流程生产计划与车间执行落地：端到端配置多级BOM、工作中心、工艺路线、标准成本核算（CK11N）、SOP/MRP计划金字塔，深入对比按库存生产（MTS-40）与按订单装配（ATO-82）策略。' },
            { id: 'data-science-track', title: '数据科学与人工智能前沿专业方向（8周强化体系）', description: '在法国科学院院士、巴黎综合理工学院教授 Éric Moulines 亲自主导下完成8周高强度精英培养体系：全方位覆盖多元数值优化、PAC可学习理论、统计深度学习、反问题图像重建、生成式AI（GAN/VAE/扩散模型）、大模型NLP及强化学习。' },
            { id: 'dirty-model-multitask-learning', title: '高维多任务学习Dirty Model：结构叠加分解与相变现象实证研究', description: '深入复现并实证检验NIPS经典论文《A Dirty Model for Multitask Learning》（Jalali et al.）：采用凸优化（CVXPY）将高维参数矩阵分解为共享块稀疏（ℓ₁/ℓ∞）与任务特异元素稀疏（ℓ₁）的叠加态，证明其最优样本复杂度 (2-α)s log(p) 并高保真复现经验相变阈值。' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: '赞助经理', description: '作为赞助经理，我的核心职责是确保重要的合作伙伴关系和赞助，为EJE富有影响力的学生黑客马拉松系列活动提供支持。我积极为主要活动寻找赞助商，包括OP&X黑客马拉松、战略咨询黑客马拉松（SCH）、DataQuest黑客马拉松以及金融黑客马拉松。通过将公司与这些平台联系起来，我帮助他们接触到摩洛哥最优秀的学生，并为未来的人才发展提供动力。' },
            { id: 'rubiks-club', title: "UM6P 魔方俱乐部", role: "主席", description: "作为主席，我领导了俱乐部的活动，组织了研讨会，并培养了一个解决问题的社区。" },
            { id: 'eplus-club', title: "E++ 俱乐部, EMINES", role: "赞助经理", description: "通过联系潜在合作伙伴、提交提案并确保他们对两项赛事（国家数据科学竞赛（NDSC）和智能机器人竞赛（IRC））的支持，成功获得了赞助。" },
            { id: 'eastro-club', title: "E-天文学俱乐部, EMINES", role: "后勤经理", description: "我协调了观测之夜和教育研讨会的后勤工作，确保所有设备和资源的无缝可用，并作为天文学专家参加了摩洛哥数学日。" },
            { id: 'rotaract-club', title: "ROTARACT EMINES 俱乐部", role: "沟通与内容经理", description: "我管理了俱乐部的沟通和内容创作，开发引人入胜的材料，以推广Rotaract EMINES的活动、赛事和倡议。" },
            { id: 'pingpong-club', title: "UM6P 乒乓球俱乐部", role: "后勤经理", description: "我组织了比赛和练习赛，处理从日程安排到设备管理的所有后勤方面。 " },
            { id: 'university-sports', title: "大学体育", role: "手球、排球和足球队队员", description: "作为多个大学运动队的活跃成员，我培养了强大的团队合作、纪律和领导能力。 " }
        ],

        help_button: "我能为您做些什么？",
        help_modal_title: "描述您的需求",
        help_modal_placeholder: "请告诉我您心目中的项目、挑战或职位。例如：'我需要有人为客户数据建立一个预测模型'或'我正在寻找一位有技术背景的项目经理。'",
        help_modal_submit: "分析我的需求",
        help_modal_response_title: "我可以这样帮助您",
        contact_button_after_ai: "联系 Mohammed"
    },
    // Portuguese
    pt: {
        page_title: "Mohammed EL BARAKA - Gestão Industrial & Ciência de Dados",
        nav_about: "Sobre",
        nav_projects: "Projetos",
        nav_skills: "Habilidades",
        nav_leadership: "Liderança",
        nav_contact: "Contato",
        hero_title: "Gestão Industrial,<br>& Ciência de Dados",
        hero_typing: ["Gestão Industrial", "Ciência de Dados"],
        hero_subtitle: "Graduado em Engenharia pela EMINES-UM6P, especializado em Gestão Industrial, com paixão por Otimização, Ciência de Dados e por alavancar a tecnologia para resolver desafios do mundo real.",
        hero_cta_button: "Ver Meus Trabalhos",
        about_title: "Sobre Mim",
        about_p1: "Olá! Sou Mohammed EL BARAKA, um graduado em engenharia de Gestão Industrial pela prestigiosa Universidade Politécnica Mohammed VI (UM6P). Minha jornada acadêmica, começando com um programa intensivo em Matemática e Física, incutiu em mim uma forte mentalidade analítica e de resolução de problemas.",
        about_p2: "Sou motivado pelo desafio de desvendar problemas complexos, particularmente através da aplicação de Ciência de Dados, Aprendizado de Máquina e algoritmos de Otimização. Minha filosofia de trabalho está centrada em preencher a lacuna entre o conhecimento teórico e a aplicação prática para criar resultados tangíveis.",
        about_p3: "Sou um líder proativo, fluente em árabe, francês e inglês, e sempre ansioso para aprender, colaborar e aplicar minhas habilidades em cenários de impacto.",
        view_resume_button: "Ver Meu Currículo",
        projects_title: "Meus Projetos",
        skills_title: "Habilidades Técnicas",
        leadership_title: "Liderança & Atividades",
        contact_title: "Entre em Contato",
        contact_subtitle: "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades. Vamos nos conectar.",
        contact_button: "Contate-me",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. Todos os direitos reservados.`,
        contact_modal_title: "Contate-me",
        contact_modal_email: "Enviar um E-mail",
        contact_modal_whatsapp: "Mensagem no WhatsApp",
        contact_modal_call: "Fazer uma Chamada",
        project_button_report: "Relatório",
        project_button_presentation: "Apresentação",
        project_button_demo: "Website",
        project_button_poster: "Pôster",
        project_button_business_model: "Modelo de Negócios",
        project_button_explore_ai: "Explorar com IA",
        ai_assistant_title: "Assistente de IA: {title}",
        ai_chip_methodology: "✨ Como foi construído?",
        ai_chip_summary: "⚡ Resumo em 3 pontos",
        ai_chip_math: "📐 Matemática e Algoritmos",
        ai_chip_results: "📈 Resultados e Impacto",
        ai_prompt_math_query: "Quais modelos matemáticos, fórmulas e algoritmos de otimização foram usados neste projeto?",
        ai_prompt_results_query: "Quais foram os principais resultados mensuráveis, métricas de precisão e impacto real?",
        ai_initial_title: "O que você gostaria de explorar sobre este projeto?",
        ai_initial_desc: "Faça uma pergunta abaixo ou clique em uma sugestão acima para ver a metodologia, modelagem matemática ou resultados.",
        ai_input_placeholder: "Pergunte algo sobre este projeto... (ex: Como o modelo funciona?)",
        ai_send_button: "Perguntar",
        ai_analyzing: "Analisando o contexto de engenharia do projeto...",
        ai_fallback_title: "A IA não está funcionando no momento.",
        ai_fallback_desc: "Fique à vontade para explorar as entregas do projeto ou entrar em contato com Mohammed diretamente.",
        modal_explaining_title: `Assistente IA: {title}`,
        modal_skill_projects_title: `Projetos com {skill}`,
        modal_list_intro: `Aqui estão os projetos onde usei <strong>{skill}</strong>:`,
        pdf_modal_title_report: `Relatório - {title}`,
        pdf_modal_title_presentation: `Apresentação - {title}`,
        pdf_modal_title_resume: `Meu Currículo`,
        projects: [
            { id: 'mental-health-analytics', title: 'Análise Preditiva da Saúde Mental de Estudantes', description: 'Desenvolvi modelos preditivos usando dados de questionários e textos para avaliar a saúde mental dos estudantes, alcançando alta precisão na previsão de níveis de ansiedade, depressão e estresse.' },
            { id: 'red-fruit-optimization', title: 'Otimização da Produção de Frutas Vermelhas', description: 'Projetei e implementei um modelo de Programação Linear para maximizar o lucro da produção de frutas vermelhas em estufas, considerando várias restrições e cenários.' },
            { id: 'powerbi-dashboard', title: 'Integração de Extratos Bancários com Power BI', description: 'Desenvolvi um painel interativo do Power BI para integrar e visualizar métricas financeiras chave de extratos bancários e notas de entrega para uma visão de dados conectada.' },
            { id: 'rsa-cryptography', title: 'Ataques Contra RSA de Módulo Compartilhado', description: 'Estudei e simulei ataques contra o criptossistema RSA, focando nas vulnerabilidades de módulos compartilhados para demonstrar fraquezas criptográficas.' },
            { id: 'acoustic-noise-reduction', title: 'Redução da Poluição Sonora Causada pelo Tráfego Rodoviário', description: 'Estudo e modelagem da propagação de ondas acústicas e otimização de barreiras acústicas com materiais porosos. Ensaios experimentais com tubo de Kundt comparando espumas compactas e alveolares.' },
            { id: 'geology-internship', title: 'Estágio de Geologia e Geofísica', description: 'Estudos de campo em Oulmès abrangendo geologia, geofísica e hidrogeologia. Aplicação de tomografia de resistividade elétrica e análise de águas subterrâneas.' },
            { id: 'wood-behavior-mmc', title: 'Lei de Comportamento da Madeira (Projeto MMC)', description: 'Estudou as propriedades mecânicas da madeira, modelou seu comportamento elástico ortotrópico e realizou testes de compressão e flexão para medir o módulo de Young e a resistência à ruptura.' },
            { id: 'biomedical-diffusion', title: 'Difusão de Oxigênio no Ácino Pulmonar', description: 'Conduzi um projeto de engenharia biomédica para modelar a difusão de oxigênio no ácino pulmonar, resolvendo a equação de difusão 2D usando métodos numéricos.' },
            { id: 'robotics-vision', title: 'Design, Fabricação Robótica e Visão Computacional', description: 'Projetou, fabricou e montou um braço robótico articulado autônomo do zero—desde modelagem 3D em SolidWorks, prototipagem física e mecatrônica, até cinemática inversa e visão computacional com OpenCV para detecção e classificação em tempo real.' },
            { id: 'tourist-planner', title: 'Planificador de Visitas Turísticas', description: 'Desenvolvimento de uma aplicação web full-stack para planear e otimizar itinerários turísticos utilizando o algoritmo do caixeiro viajante (TSP), React, Django e a API do Google Maps.' },
            { id: 'teachy-platform', title: 'Teachy: Plataforma de Aprendizagem de Idiomas', description: 'Desenvolveu uma plataforma inovadora de aprendizagem de idiomas online que conecta alunos a falantes nativos para imersão interativa ao vivo, cursos personalizados e recursos pedagógicos.' },
            { id: 'biomass-co2-nareva', title: 'Captura de CO2 Biogênico & E-Fuels (Projeto NAREVA)', description: 'Estudo de pré-viabilidade técnico-econômica para captura de 150 kt/ano de CO2 biogênico a partir de biomassa em Marrocos para produção e exportação de e-metanol verde para a Europa.' },
            { id: 'sociotechnical-controversy-africa', title: 'Controvérsia Sociotécnica: Tecnocracia na África', description: 'Análise aprofundada de uma controvérsia sociotécnica sobre o papel da tecnocracia no desenvolvimento africano, mapeando desafios estruturais e dinâmicas de múltiplos atores em 5 setores-chave.' },
            { id: 'academic-career-success', title: 'Análise Estatística do Sucesso Acadêmico e Profissional', description: 'Estudo estatístico e econométrico sobre 5.000 graduados modelando os determinantes do salário inicial mediante regressão linear múltipla (R² = 0.825), testes de Chi-cuadrado, V de Cramér e clustering k-Means.' },
            { id: 'lithium-brine-extraction', title: 'Produção de Lítio a partir de Salmouras por Evaporação Solar', description: 'Estudo técnico-econômico e modelagem geoquímica da extração de lítio em 6 salares sul-americanos, analisando a cinética de evaporação, seletividade de impurezas Mg/Li e custos operacionais (OPEX 3.200 USD/t).' },
            { id: 'petropolis-landslide-modeling', title: 'Modelagem Física da Suscetibilidade a Deslizamentos (Petrópolis, RJ)', description: 'Preparação de dados geoespaciais e modelagem física de escorregamentos translacionais induzidos por chuvas intensas em Petrópolis (Brasil), acoplando o modelo de infiltração transiente USGS TRIGRS v2.1.0, QGIS, GRASS e mecânica de taludes sobre 795 km².' },
            { id: 'cotton-hedging-inditex', title: 'Finanças Quantitativas e Gestão de Risco: Cobertura do Preço do Algodão (Caso Inditex)', description: 'Modelagem estocástica por Movimento Browniano Geométrico e precificação Black-Scholes com custo de carregamento, simulação de Monte Carlo (2.000 trajetórias) e backtesting histórico INSEE para avaliar estratégias de Swap a termo e Strip de Opções Call para o Grupo Inditex.' },
            { id: 'renault5-electric-marketing', title: 'Renault 5 E-Tech 100% Elétrico: Estratégia de Marketing e Penetração de Mercado', description: 'Elaboração da estratégia de marketing, posicionamento competitivo contra Dacia/Peugeot/Fiat/BYD, segmentação de personas e projeções de vendas de veículos elétricos 2026–2030 (mercado de 8,75 bilhões MAD) para o lançamento do Renault 5 E-Tech em Marrocos.' },
            { id: 'mitsubishi-strategic-analysis', title: 'Análise Estratégica: Mitsubishi Motors Corporation e Transição SDV', description: 'Auditoria estratégica corporativa da Mitsubishi Motors Corporation na Aliança Renault-Nissan-Mitsubishi, analisando o modelo de negócios, liderança na ASEAN, diagnóstico PESTEL/Porter/SWOT e o roteiro para Veículos Definidos por Software (SDV) e BEV.' },
            { id: 'wireless-pentest-ceh', title: 'Segurança de Redes Sem Fio e Testes de Intrusão (Laboratório CEH)', description: 'Auditoria ofensiva e análise criptográfica de redes sem fio (Laboratório CEH): quebra de WEP RC4, captura de 4-Way Handshake WPA2 por desautenticação, ataques Evil Twin com portais cativos (Fluxion), perícia forense 802.11 com Wireshark e defesa WPA3-SAE / 802.1X.' },
            { id: 'managerial-accounting-formaction', title: 'Contabilidade Analítica e Controlo de Gestão: Modelagem ABC (FORMACTION)', description: 'Modelagem de custos pelo método ABC (Activity-Based Costing) e Direct Costing Evoluído para a instituição FORMACTION (678,7 mil € de receita sobre 187 formandos), analisando margens de contribuição e auditando a rentabilidade estratégica.' },
            { id: 'sap-s4hana-production-planning', title: 'Planeamento e Gestão de Produção em SAP S/4HANA (Global Bike Inc.)', description: 'Implementação e configuração integral do ciclo de planeamento e execução de produção no SAP S/4HANA para a Global Bike Inc., parametrizando listas de materiais (BOM), centros de trabalho, roteiros, cálculo de custo padrão (CK11N), pirâmide SOP/MRP e estratégias MTS vs ATO.' },
            { id: 'data-science-track', title: 'Especialização em Ciência de Dados: Programa Avanzado de 8 Semanas', description: 'Especialização intensiva de 8 semanas dirigida pelo Prof. Éric Moulines (Academia Francesa de Ciências / École Polytechnique): otimização convexa, teoria PAC, CNN e CAVI, problemas inversos, IA generativa (GANs/VAEs/Difusão), Transformers e Aprendizado por Reforço.' },
            { id: 'dirty-model-multitask-learning', title: 'Modelo «Dirty» para Aprendizado Multitarefa: Sobreposição em Alta Dimensão', description: 'Validação empírica e replicação do artigo da NIPS «A Dirty Model for Multitask Learning» (Jalali et al.), decompondo matrizes de parâmetros em sobreposições de dispersão em bloco (ℓ₁/ℓ∞) e dispersão pontual (ℓ₁) via otimização convexa em CVXPY, comprovando a complexidade amostral (2-α)s log(p) e reproduzindo transições de fase.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: 'Gerente de Patrocínios', description: 'Como Gerente de Patrocínios, minha principal responsabilidade é garantir parcerias e patrocínios vitais para impulsionar o portfólio impactante de hackathons estudantis da EJE. Busco ativamente patrocinadores para grandes eventos, incluindo o Hackathon OP&X, o Hackathon de Consultoria Estratégica (SCH), o Hackathon DataQuest e o Hackathon de Finanças. Ao conectar empresas a essas plataformas, ajudo-as a interagir com os estudantes mais brilhantes de Marrocos e a impulsionar o desenvolvimento de futuros talentos.' },
            { id: 'rubiks-club', title: "Clube do Cubo de Rubik da UM6P", role: "Presidente", description: "Como Presidente, liderei as atividades do clube, organizei workshops e promovi uma comunidade de solucionadores de problemas." },
            { id: 'eplus-club', title: "Clube E++, EMINES", role: "Gerente de Patrocínios", description: "Consegui patrocinadores para a Competição Nacional de Ciência de Dados (NDSC) e a Competição de Robô Inteligente (IRC) entrando em contato com parceiros potenciais, apresentando propostas e garantindo seu apoio para os dois eventos." },
            { id: 'eastro-club', title: "Clube de E-Astronomia, EMINES", role: "Gerente de Logística", description: "Organizei a logística para noites de observação e seminários educacionais, garantindo a disponibilidade impecável de todos os equipamentos e recursos, e atuei como especialista em astronomia no Dia Marroquino de Matemática." },
            { id: 'rotaract-club', title: "Clube ROTARACT EMINES", role: "Gerente de Comunicação e Conteúdo", description: "Gerenciei a comunicação do clube e a criação de conteúdo, desenvolvendo materiais envolventes para promover as atividades, eventos e iniciativas do Rotaract EMINES." },
            { id: 'pingpong-club', title: "Clube de Tênis de Mesa da UM6P", role: "Gerente de Logística", description: "Organizei torneios e sessões de treinamento, cuidando de todos os aspectos logísticos, desde o agendamento até a gestão de equipamentos. " },
            { id: 'university-sports', title: "Esportes Universitários", role: "Jogador das equipes de Handebol, Voleibol e Futebol", description: "Como membro ativo de várias equipes esportivas universitárias, desenvolvi fortes habilidades de trabalho em equipe, disciplina e liderança." }
        ],
    },
    de: {
        page_title: "Mohammed EL BARAKA - Industrielles Management & Datenwissenschaft",
        nav_about: "Über mich",
        nav_projects: "Projekte",
        nav_skills: "Fähigkeiten",
        nav_leadership: "Aktivitäten",
        nav_contact: "Kontakt",
        hero_title: "Industrielles Management,<br>& Datenwissenschaft",
        hero_typing: ["Industrielles Management", "Datenwissenschaft"],
        hero_subtitle: "Ein Wirtschaftsingenieur-Absolvent der EMINES-UM6P, spezialisiert auf Industrielles Management, mit einer Leidenschaft für Optimierung, Datenwissenschaft und den Einsatz von Technologie zur Lösung realer Herausforderungen.",
        hero_cta_button: "Meine Arbeit ansehen",
        about_title: "Über mich",
        about_p1: "Hallo! Ich bin Mohammed EL BARAKA, ein Wirtschaftsingenieur-Absolvent der renommierten Mohammed VI Polytechnic University (UM6P). Mein akademischer Weg, der mit einem intensiven Vorbereitungsprogramm in Mathematik und Physik begann, hat mir ein starkes analytisches Denken und Problemlösungskompetenz verliehen.",
        about_p2: "Mich reizt die Herausforderung, komplexe Probleme zu lösen, insbesondere durch den Einsatz von Datenwissenschaft, maschinellem Lernen und Optimierungsalgorithmen. Meine Arbeitsphilosophie besteht darin, die Lücke zwischen theoretischem Wissen und praktischer Anwendung zu schließen, um greifbare Ergebnisse zu erzielen.",
        about_p3: "Ich bin eine proaktive Führungspersönlichkeit, spreche fließend Arabisch, Französisch und Englisch und bin stets bestrebt zu lernen, zusammenzuarbeiten und meine Fähigkeiten in wirkungsvollen Projekten einzusetzen.",
        view_resume_button: "Lebenslauf ansehen",
        projects_title: "Meine Projekte",
        skills_title: "Technische Fähigkeiten",
        leadership_title: "Aktivitäten & Führung",
        contact_title: "Kontakt aufnehmen",
        contact_subtitle: "Ich bin immer offen für neue Projekte, kreative Ideen oder Möglichkeiten. Lassen Sie uns in Kontakt treten.",
        contact_button: "Kontaktieren Sie mich",
        footer_text: `© ${new Date().getFullYear()} Mohammed EL BARAKA. Alle Rechte vorbehalten.`,
        contact_modal_title: "Kontakt aufnehmen",
        contact_modal_email: "E-Mail senden",
        contact_modal_whatsapp: "Auf WhatsApp schreiben",
        contact_modal_call: "Anrufen",
        project_button_report: "Bericht",
        project_button_presentation: "Präsentation",
        project_button_demo: "Webseite",
        project_button_poster: "Poster",
        project_button_business_model: "Geschäftsmodell",
        project_button_explore_ai: "Mit KI erkunden",
        ai_assistant_title: "KI-Assistent: {title}",
        ai_chip_methodology: "✨ Wie wurde das gebaut?",
        ai_chip_summary: "⚡ 3-Punkte-Zusammenfassung",
        ai_chip_math: "📐 Mathematik & Algorithmen",
        ai_chip_results: "📈 Ergebnisse & Wirkung",
        ai_prompt_math_query: "Welche mathematischen Modelle, Formeln und Optimierungsalgorithmen wurden in diesem Projekt verwendet?",
        ai_prompt_results_query: "Was waren die wichtigsten messbaren Ergebnisse, Genauigkeitsmetriken und praktischen Auswirkungen?",
        ai_initial_title: "Was möchtest du an diesem Projekt erkunden?",
        ai_initial_desc: "Stelle unten eine Frage oder wähle oben einen Themenvorschlag, um Methodik, mathematische Modelle oder Ergebnisse zu sehen.",
        ai_input_placeholder: "Frage etwas zu diesem Projekt... (z.B. Wie funktioniert das Modell?)",
        ai_send_button: "Fragen",
        ai_analyzing: "Analysiere den technischen Projektkontext...",
        ai_fallback_title: "Die KI funktioniert derzeit nicht.",
        ai_fallback_desc: "Schau dir gerne die Projektergebnisse an oder kontaktiere Mohammed direkt.",
        modal_explaining_title: `KI-Assistent: {title}`,
        modal_skill_projects_title: `Projekte mit {skill}`,
        modal_list_intro: `Hier sind die Projekte, bei denen ich <strong>{skill}</strong> verwendet habe:`,
        pdf_modal_title_report: `Bericht - {title}`,
        pdf_modal_title_presentation: `Präsentation - {title}`,
        pdf_modal_title_resume: `Mein Lebenslauf`,
        projects: [
            { id: 'mental-health-analytics', title: 'Prädiktive Analytik für studentische mentale Gesundheit', description: 'Entwicklung prädiktiver Modelle unter Verwendung von Fragebogen- und Textdaten zur Bewertung der mentalen Gesundheit von Studenten, mit hoher Genauigkeit bei der Vorhersage von Angst-, Depressions- und Stressniveaus.' },
            { id: 'red-fruit-optimization', title: 'Optimierung der Beerenobstproduktion', description: 'Entwurf und Implementierung eines linearen Programmierungsmodells zur Gewinnmaximierung für die Beerenobstproduktion in Gewächshäusern unter Berücksichtigung verschiedener Einschränkungen und Szenarien.' },
            { id: 'powerbi-dashboard', title: 'Integration von Kontoauszügen mit Power BI', description: 'Entwicklung eines interaktiven Power BI-Dashboards zur Integration und Visualisierung wichtiger Finanzkennzahlen aus Kontoauszügen und Lieferscheinen für eine vernetzte Datenansicht.' },
            { id: 'rsa-cryptography', title: 'Angriffe gegen Shared-Module RSA', description: 'Untersuchung und Simulation von Angriffen auf das RSA-Kryptosystem mit Fokus auf Schwachstellen durch gemeinsam genutzte Module zur Demonstration kryptografischer Schwachstellen.' },
            { id: 'acoustic-noise-reduction', title: 'Minderung der Lärmbelastung durch Straßenverkehr', description: 'Theoretische Untersuchung und Modellierung der Schallwellenausbreitung und Lärmschutzwand-Optimierung mittels poröser Materialien. Experimentelle Kundt-Rohr-Prüfung zum Vergleich kompakter und wabenförmiger Schaumstoffe.' },
            { id: 'geology-internship', title: 'Geologie- und Geophysik-Praktikum', description: 'Feldstudien in Oulmès mit den Schwerpunkten Geologie, Geophysik und Hydrogeologie. Anwendung von elektrischer Widerstandstomographie und Grundwasseranalyse.' },
            { id: 'wood-behavior-mmc', title: 'Verhaltensgesetz des Holzes (MMC-Projekt)', description: 'Untersuchung der mechanischen Eigenschaften von Holz, Modellierung seines orthotropen elastischen Verhaltens und Durchführung von Druck- und Biegeversuchen zur Messung des Elastizitätsmoduls und der Bruchfestigkeit.' },
            { id: 'biomedical-diffusion', title: 'Sauerstoffdiffusion im Lungenazinus', description: 'Durchführung eines biomedizinischen Projekts zur Modellierung der Sauerstoffdiffusion im Lungenazinus durch numerische Lösung der 2D-Diffusionsgleichung.' },
            { id: 'robotics-vision', title: 'Roboterarm-Design, Fertigung & Computer Vision', description: 'Entwurf, mechanische Fertigung und Montage eines autonomen Knickarmroboters von Grund auf—von der 3D-CAD-Modellierung in SolidWorks über Prototypenbau und Mechatronik bis hin zur inversen Kinematik und Echtzeit-Bildverarbeitung mit OpenCV.' },
            { id: 'tourist-planner', title: 'Touristischer Besuchsplaner', description: 'Entwicklung einer Full-Stack-Webanwendung zur Planung und Optimierung touristischer Reiserouten mit dem Algorithmus des Handlungsreisenden (TSP), React, Django und der Google Maps API.' },
            { id: 'teachy-platform', title: 'Teachy: Online-Sprachlernplattform', description: 'Entwicklung einer innovativen Online-Sprachlernplattform, die Lernende mit Muttersprachlern für interaktive Live-Immersion, personalisierte Kurse und pädagogische Ressourcen verbindet.' },
            { id: 'biomass-co2-nareva', title: 'Biogene CO2-Abscheidung & E-Fuels (NAREVA-Projekt)', description: 'Technisch-ökonomische Machbarkeitsstudie zur Abscheidung von 150 kt/Jahr biogenem CO2 aus Biomasse in Marokko zur Produktion und zum Export von grünem E-Methanol nach Europa.' },
            { id: 'sociotechnical-controversy-africa', title: 'Soziotechnische Kontroverse: Technokratie in Afrika', description: 'Tiefgehende Analyse einer soziotechnischen Kontroverse zur Frage, ob Technokratie einen Entwicklungsimpuls für Afrika darstellt, mit systematischer Kartierung von Herausforderungen und Akteuren in 5 Kernsektoren.' },
            { id: 'academic-career-success', title: 'Statistische Analyse des Akademischen & Beruflichen Erfolgs', description: 'Ökonometrische und statistische Analyse von 5.000 Hochschulabsolventen zur Modellierung der Einstiegsgehälter mittels multipler linearer Regression (R² = 0.825), Chi-Quadrat-Tests, Cramérs V und k-Means-Clustering.' },
            { id: 'lithium-brine-extraction', title: 'Lithiumgewinnung aus Sole durch Solare Verdunstung', description: 'Technisch-ökonomische und geochemische Modellierung der Lithiumgewinnung aus 6 südamerikanischen Salzseen mit Analyse der Verdunstungskinetik, Mg/Li-Selektivität und OPEX-Optimierung (3.200 USD/t).' },
            { id: 'petropolis-landslide-modeling', title: 'Physikalische Hangstabilitäts- & Erdrutschmodellierung (Petrópolis, Brasilien)', description: 'Geodatenaufbereitung und physikalisch-basierte Modellierung niederschlagsinduzierter Hangrutschungen in Petrópolis (Brasilien) mittels des USGS TRIGRS v2.1.0 Infiltrationsmodells, QGIS, GRASS und Mohr-Coulomb-Stabilitätsanalyse über 795 km².' },
            { id: 'cotton-hedging-inditex', title: 'Quantitative Finanzwirtschaft & Risikomanagement: Baumwollpreis-Hedging (Fallstudie Inditex)', description: 'Stochastische Modellierung der Baumwollpreise mittels Geometrischer Brownscher Bewegung und Black-Scholes-Carry-Modell, Durchführung von 2.000 Monte-Carlo-Pfaden und historischem INSEE-Backtesting zur Bewertung von Forward-Swaps und Call-Option-Strips für Inditex.' },
            { id: 'renault5-electric-marketing', title: 'Renault 5 E-Tech 100% Elektrisch: Marketingstrategie & Marktdurchdringung', description: 'Entwicklung der Marketingstrategie, Wettbewerbsanalyse (Dacia Spring, Peugeot e-208, Fiat 600e, BYD Atto 3), Persona-Segmentierung und EV-Marktprognosen für 2026–2030 (Marktvolumen 8,75 Mrd. MAD) für den Launch des Renault 5 E-Tech in Marokko.' },
            { id: 'mitsubishi-strategic-analysis', title: 'Strategische Analyse & SDV-Transformation: Mitsubishi Motors Corporation', description: 'Umfassendes strategisches Unternehmens-Audit der Mitsubishi Motors Corporation innerhalb der Renault-Nissan-Mitsubishi-Allianz mit Analyse des Geschäftsmodells, der ASEAN-Marktführerschaft, PESTEL/Porter/SWOT und der Roadmap für Software-Defined Vehicles (SDV) & BEV.' },
            { id: 'wireless-pentest-ceh', title: 'WLAN-Sicherheit & Penetration Testing (CEH-Labor)', description: 'Offensive Sicherheitsüberprüfung und kryptographische Analyse im CEH-Labor: WEP RC4-Knacken, WPA2 4-Way Handshake-Erfassung via Deauthentifizierung, Evil-Twin Rogue-APs mit Captive-Portals (Fluxion), Wireshark 802.11-Forensik und WPA3-SAE / 802.1X-Härtung.' },
            { id: 'managerial-accounting-formaction', title: 'Kosten- und Leistungsrechnung & Controlling: Prozesskostenrechnung (FORMACTION)', description: 'Entwicklung einer Prozesskostenrechnung (Activity-Based Costing) und mehrstufigen Deckungsbeitragsrechnung für das Bildungsinstitut FORMACTION (678,7 T€ Umsatz über 187 Teilnehmer) zur Rentabilitätssteuerung und Entscheidungsfindung.' },
            { id: 'sap-s4hana-production-planning', title: 'SAP S/4HANA Produktionsplanung & Fertigungssteuerung (Global Bike Inc.)', description: 'Umfassende Implementierung der Produktionsplanung und -steuerung in SAP S/4HANA für Global Bike Inc.: Konfiguration von mehrstufigen Stücklisten (BOM), Arbeitsplätzen, Arbeitsplänen, Standardkalkulation (CK11N), SOP/MRP-Pyramide und Vergleich von MTS- (40) vs. ATO-Strategien (82).' },
            { id: 'data-science-track', title: 'Spezialisierung Data Science & KI: 8-Wöchiges Exzellenzcurriculum', description: 'Intensives 8-Wochen-Spezialisierungsprogramm unter Leitung von Prof. Éric Moulines (Französische Akademie der Wissenschaften / École Polytechnique): Optimierung, PAC-Theorie, CNNs & CAVI, inverse Probleme, generative KI (GANs/VAEs/Diffusion), NLP und Reinforcement Learning.' },
            { id: 'dirty-model-multitask-learning', title: 'Dirty Model für Multitask-Learning: Hochdimensionale Superposition & Phasenübergänge', description: 'Empirische Validierung und Replikation der NIPS-Arbeit „A Dirty Model for Multitask Learning“ (Jalali et al.): Zerlegung von Parametermatrizen in eine Superposition aus blockweiser (ℓ₁/ℓ∞) und elementspezifischer (ℓ₁) Sparsity mittels CVXPY-Optimierung, Nachweis der optimalen Stichprobenkomplexität (2-α)s log(p) und Replikation scharfer Phasenübergänge.' }
        ],
        leadership: [
            { id: 'emines-junior-entreprise', title: 'Emines Junior Entreprise (EJE)', role: 'Sponsoring-Manager', description: 'Als Sponsoring-Manager liegt meine Hauptverantwortung in der Sicherung wichtiger Partnerschaften und Sponsorings zur Finanzierung der studentischen Hackathons von EJE. Ich suche aktiv Sponsoren für Großveranstaltungen wie den OP&X Hackathon, den Strategic Consulting Hackathon (SCH), den DataQuest Hackathon und den Finance Hackathon. Durch die Verbindung von Unternehmen mit diesen Plattformen helfe ich ihnen, mit Marokkos klügsten Köpfen in Kontakt zu treten.' },
            { id: 'rubiks-club', title: "UM6P Rubik's Cube Club", role: "Präsident", description: "Als Präsident leitete ich die Aktivitäten des Clubs, organisierte Workshops und geförderte eine Gemeinschaft von Problemlösern." },
            { id: 'eplus-club', title: "E++ Club, EMINES", role: "Sponsoring-Manager", description: "Gewinnung von Sponsoren für die National Data Science Competition (NDSC) und die Intelligent Robot Competition (IRC) durch Kontaktaufnahme mit potenziellen Partnern, Präsentation von Vorschlägen und Sicherstellung ihrer Unterstützung für beide Veranstaltungen." },
            { id: 'eastro-club', title: "E-Astronomy Club, EMINES", role: "Logistik-Manager", description: "Ich koordinierte die Logistik für Beobachtungsnächte und Bildungsseminare, stellte die nahtlose Verfügbarkeit aller Geräte und Ressourcen sicher und war als Astronomieexperte am marokkanischen Tag der Mathematik tätig." },
            { id: 'rotaract-club', title: "ROTARACT EMINES Club", role: "Kommunikations- & Content-Manager", description: "Ich leitete die Kommunikation und Inhaltserstellung des Clubs und entwickelte ansprechende Materialien zur Förderung der Aktivitäten, Veranstaltungen und Initiativen von Rotaract EMINES." },
            { id: 'pingpong-club', title: "UM6P Ping Pong Club", role: "Logistik-Manager", description: "Ich organisierte Turniere und Trainingseinheiten und kümmerte sich um alle logistischen Aspekte von der Terminplanung bis zur Geräteverwaltung." },
            { id: 'university-sports', title: "Universitätssport", role: "Spieler der Handball-, Volleyball- und Fußballmannschaften", description: "Als aktives Mitglied mehrerer Universitätssportteams habe ich starke Fähigkeiten in Teamarbeit, Disziplin und Führung entwickelt." }
        ],
        help_button: "Wie kann ich helfen?",
        help_modal_title: "Beschreiben Sie Ihren Bedarf",
        help_modal_placeholder: "Erzählen Sie mir von dem Projekt, der Herausforderung oder der Rolle, die Sie im Sinn haben. Zum Beispiel: 'Ich brauche jemanden, der ein prädiktives Modell für Kundendaten erstellt' oder 'Ich suche einen Projektmanager mit technischem Hintergrund.'",
        help_modal_submit: "Bedarf analysieren",
        help_modal_response_title: "So kann ich helfen",
        contact_button_after_ai: "Mohammed kontaktieren"
    }
};

const projectsData = [
    { 
        id: 'mental-health-analytics', 
        date: '2025-01', 
        technologies: ['Machine Learning', 'NLP', 'Python', 'Scikit-learn', 'NLTK', 'Classification Models'], 
        githubUrl: 'https://github.com/mohammed-el-baraka/mental-health-analytics',
        demoUrl: 'https://mohammed-el-baraka.github.io/mental-health-analytics/',
        metric: '92.4% Classification Accuracy',
        reportUrl: 'https://drive.google.com/file/d/1HOFF_SywL49TlsOnuertwlaaWZrOq8Vn/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1N2X0nVZxP2OwwLzlIdJ-LYeLmeGt4_uu/view?usp=drive_link' 
    },
    { 
        id: 'red-fruit-optimization', 
        date: '2024-06', 
        technologies: ['Linear Programming', 'Python', 'Pulp', 'Optimization Modeling', 'Algorithm Design'], 
        githubUrl: '',
        demoUrl: '',
        metric: '+18.5% Greenhouse Margin Gain',
        reportUrl: 'https://drive.google.com/file/d/1pU34qkKTJsIPJPAfX8AUcACUQAjINbOG/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/11yrl2LQlbk03yFPFXyaRRbM6juZFemUd/view?usp=sharing' 
    },
    { 
        id: 'powerbi-dashboard', 
        date: '2024-07', 
        technologies: ['Power BI', 'Excel', 'Data Analysis', 'Dashboard Design', 'VBA'], 
        githubUrl: '',
        demoUrl: '',
        metric: '100% Automated Reconciliation',
        reportUrl: 'https://drive.google.com/file/d/1hprde0Kd4Tsi4D9BBQsdlpKLj5D3WIFj/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1JH7sEdd0Ulb_Hs9c1dNfDMbdE7s8jpXa/view?usp=sharing' 
    },
    { 
        id: 'rsa-cryptography', 
        date: '2024-11', 
        technologies: ['Cryptography', 'RSA Algorithm', 'Cryptanalysis', 'Number Theory', 'SageMath', 'Python'], 
        githubUrl: 'https://github.com/mohammed-el-baraka/rsa-shared-modulus-attacks',
        demoUrl: '',
        metric: 'O(log e) Attack Runtime',
        reportUrl: 'https://drive.google.com/file/d/1e3hIOIsfj5ZOvqIK-ey-Bew5HXZwI69l/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/14zBJ0cRRHfBgGoerNRfXe2z7y9sv5oZ-/view?usp=sharing' 
    },
    { 
        id: 'acoustic-noise-reduction', 
        date: '2023-05', 
        technologies: ['Wave Physics', 'Acoustic Modeling', 'Applied Mathematics', 'Kundt Tube', 'Porous Materials', 'Python'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Kundt Tube Absorption Tested',
        reportUrl: 'https://drive.google.com/file/d/14U3nLz8w2iV2TIusfK5Fy8QKrb7gC-6A/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1LiZUNbtWEKffJB-2NEuO6LGwAiveMU5u/view?usp=sharing' 
    },
    { 
        id: 'geology-internship', 
        date: '2023-11', 
        technologies: ['Geophysics', 'Hydrogeology', 'Electrical Tomography', 'Structural Geology', 'GIS'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Field Study & Tomography Performed',
        reportUrl: 'https://drive.google.com/file/d/1Zu0eHqIdwwmkVfz34e6DXQbqvaXkMjLL/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1p-sjQqen9vHyODqoeCh-E-w7YDYkwLuU/view?usp=sharing' 
    },
    { 
        id: 'wood-behavior-mmc', 
        date: '2023-12', 
        technologies: ['Mechanics of Continuous Media (MMC)', 'Wood Properties', 'Material Science', 'Compression Testing', 'Hooke\'s Law'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Young\'s Modulus Measured (6.88 GPa)',
        reportUrl: 'https://drive.google.com/file/d/1uJx700n5rsV01_TxFt1SjGru976V2hpM/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1Ed_wbZb5coNSasPSqVPowhtC5vPzfDS6/view?usp=sharing' 
    },
    { 
        id: 'biomedical-diffusion', 
        date: '2023-12', 
        technologies: ['Mathematical Modeling', 'Numerical Methods', 'Python', 'NumPy', 'SciPy', 'Matplotlib'], 
        githubUrl: '',
        demoUrl: '',
        metric: '2D Finite-Difference PDE Solver',
        reportUrl: 'https://drive.google.com/file/d/1X9aQBQ8qnkGaZF9ZD9vQb4T_A_D5GYnT/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1VcPr3PjcBtcuJX7YnA0qzGj766P2whSb/view?usp=sharing' 
    },
    { 
        id: 'robotics-vision', 
        date: '2025-05', 
        technologies: ['CAD / SolidWorks', 'Mechanical Fabrication', 'Mechatronics & Kinematics', 'Computer Vision (OpenCV)', 'Python', 'Real-time Detection'], 
        githubUrl: '',
        demoUrl: '',
        metric: '4-DOF Fabricated Arm & 60 FPS Vision',
        reportUrl: 'https://drive.google.com/file/d/148jUa5mRyydjS2Ht8fpk8rGQDJ9yQJok/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1VI5hfPQouqk4th9hAxw9NYShz_brn1Pi/view?usp=sharing' 
    },
    { 
        id: 'tourist-planner', 
        date: '2023-12', 
        technologies: ['React', 'Django', 'Python', 'MySQL', 'Google Maps API', 'JWT', 'Axios', 'TSP Algorithm'], 
        githubUrl: 'https://github.com/mohammed-el-baraka/tourist-planner',
        demoUrl: 'https://mohammed-el-baraka.github.io/tourist-planner/index.html',
        metric: 'TSP Optimization Algorithm',
        reportUrl: 'https://drive.google.com/file/d/1CQtng0LZEmcfqrkqhZqTyjJ3O2jAnUhL/view?usp=sharing', 
        presentationUrl: '' 
    },
    { 
        id: 'teachy-platform', 
        date: '2024-05', 
        technologies: ['Entrepreneurship', 'EdTech', 'Business Modeling', 'Market Analysis', 'Web Platform', 'UI/UX Design', 'Competitive Strategy'], 
        githubUrl: '',
        demoUrl: 'https://mohammed-el-baraka.github.io/teachy-platform/',
        metric: 'Interactive Language Immersion Platform',
        reportUrl: 'https://drive.google.com/file/d/1_fh4pPhp7uDnNMgEXTlHG-hJj3XXmxe6/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1QX5jGZyH57h57IqW0aTBBePlABmecPos/view?usp=sharing',
        posterUrl: 'https://drive.google.com/file/d/1D6K5MScxztkrJ3LcQI_f73jyMxNPoXCm/view?usp=sharing',
        businessModelUrl: 'https://drive.google.com/file/d/1jmvULgqECrNlul_kFnTDpzqLjyyNX3he/view?usp=sharing'
    },
    { 
        id: 'biomass-co2-nareva', 
        date: '2024-03', 
        technologies: ['Techno-Economic Analysis', 'Power-to-X', 'Carbon Capture (CCU)', 'Biomass Valuation', 'E-Methanol & E-Fuels', 'CAPEX / OPEX Modeling', 'Industrial Management'], 
        githubUrl: '',
        demoUrl: '',
        metric: '150 kt/yr CO2 & 103.8 kt/yr E-Methanol Model',
        reportUrl: '', 
        presentationUrl: 'https://drive.google.com/file/d/1vWQIe7tKa1JjmLsIIkTGLtcJV9Uu2SEC/view?usp=sharing' 
    },
    { 
        id: 'sociotechnical-controversy-africa', 
        date: '2024-05', 
        technologies: ['Sociotechnical Analysis', 'Actor Mapping', 'African Development', 'Public Policy', 'Mind Mapping', 'Controversy Analysis'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Actor & Structural Mapping (5 Key Domains)',
        posterUrl: 'https://drive.google.com/file/d/1WbWFi6vvneAoW5yRZXOOzzP0P5-jGIDm/view?usp=sharing' 
    },
    { 
        id: 'vsm-ciam-steel', 
        date: '2024-11', 
        technologies: ['Lean Manufacturing', 'Value Stream Mapping (VSM)', 'Value Stream Design (VSD)', 'Production Systems', 'Ishikawa (5M)', 'Industrial Logistics', 'Takt Time & OEE', 'Supply Chain Optimization'], 
        githubUrl: '',
        demoUrl: '',
        metric: '+19% Capacity (1M t/yr) & -75% Lead Time',
        reportUrl: '', 
        presentationUrl: 'https://drive.google.com/file/d/1Fg_3u52aXbdAiX1ZmJc387LCBDp8WYl4/view?usp=sharing' 
    },
    { 
        id: 'pg-brand-management-shadowing', 
        date: '2025-05', 
        technologies: ['Brand Management', 'FMCG Operations', 'Market Strategy & Planning (MS&P)', 'Supply Network Operations (SNO)', 'Pricing Dynamics & P&L', 'Power BI & Advanced Excel', 'Retail Execution (DPSM)'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'P&G Hair Care & Cross-Functional Operations',
        reportUrl: 'https://drive.google.com/file/d/1R2XBIpMTFLKdOC5vt7a59A_EWP9uVuOS/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1eeveC5dSpna4M_2eXn0FHfqbT-M8kTcw/view?usp=sharing' 
    },
    { 
        id: 'redstart-reusable-booster', 
        date: '2025-02', 
        technologies: ['Python', 'SciPy & NumPy', 'Autograd & SymPy', 'ODE Numerical Integration', 'Gimbaled Thrust Control', 'Marimo & Pixi', 'Matplotlib Animation'], 
        githubUrl: 'https://github.com/mohammed-el-baraka/redstart-reusable-booster',
        demoUrl: '',
        metric: '6-State Nonlinear ODE & Soft Landing Trajectory',
        reportUrl: '', 
        presentationUrl: '' 
    },
    { 
        id: 'academic-career-success', 
        date: '2025-05', 
        technologies: ['Applied Statistics', 'Multiple Linear Regression', 'k-Means Clustering', 'Hypothesis Testing (Chi-2)', 'Econometrics', 'Python (Scikit-Learn, SciPy)', 'Data Visualization (Seaborn)'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'R² = 0.825 & k-Means Clustering (5k Cohort)',
        reportUrl: 'https://drive.google.com/file/d/1Oz1zTtNyZ9HTMv9So30yxIeAYXHfpBpW/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1lqLUJISnFfJFqTREFfoRatx1mNmeo4X5/view?usp=sharing' 
    },
    { 
        id: 'lithium-brine-extraction', 
        date: '2025-05', 
        technologies: ['Mining Engineering', 'Mineral Processing', 'Techno-Economic Modeling', 'Geochemistry & Hydrogeology', 'Process Optimization', 'Lithium Extraction (DLE & Evaporation)', 'Energy Transition & ESG'], 
        githubUrl: '',
        demoUrl: '',
        metric: '72% Recovery, $3,200/t OPEX & 6 Salars Benchmarked',
        reportUrl: 'https://drive.google.com/file/d/19agqfj7ih2LU1CaHCN9t3agcUAiUTfGj/view?usp=sharing', 
        presentationUrl: '' 
    },
    { 
        id: 'petropolis-landslide-modeling', 
        date: '2025-09', 
        technologies: ['Geosciences & Geohazards', 'USGS TRIGRS (Fortran)', 'QGIS & GRASS GIS', 'Digital Elevation Models (DEM/LiDAR)', 'Soil Mechanics & Slope Stability', 'Hydrological Modeling', 'GDAL / Python'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'TRIGRS Infiltration & Slope Stability Modeling (795 km²)',
        reportUrl: 'https://drive.google.com/file/d/1oiInoAHtG344m9ZCdsKebILFN0JANaKk/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1DVbIjmzNxF5iWUYgVY6F3reZwA1TWzB5/view?usp=sharing',
        culturalPresentationUrl: 'https://drive.google.com/file/d/1HyptDfACjDz1DCeKaNOUQA_Lq9eSe7PL/view?usp=sharing'
    },
    { 
        id: 'cotton-hedging-inditex', 
        date: '2026-01', 
        technologies: ['Quantitative Finance', 'Market Risk Management', 'Stochastic Calculus & GBM', 'Monte Carlo Simulation', 'Black-Scholes & Greeks', 'Commodity Derivatives (Swaps & Calls)', 'Python (NumPy, SciPy, Matplotlib)'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Monte Carlo (2,000 Paths), Black-Scholes & INSEE Backtesting',
        reportUrl: 'https://drive.google.com/file/d/11QStX0-MVQjZ-tKjsBhTHCoozMtVATaw/view?usp=sharing', 
        presentationUrl: 'https://drive.google.com/file/d/1awDOZXGVVKrasqMy_IJmtJv0EaN7H30l/view?usp=sharing'
    },
    { 
        id: 'renault5-electric-marketing', 
        date: '2026-01', 
        technologies: ['Strategic Marketing', 'Electric Vehicle (EV) Market Analysis', 'Competitive Benchmarking', 'Market Penetration Strategy', 'Pricing Architecture & TCO', 'Customer Segmentation & Personas', 'Sales Forecasting (2026–2030)'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Market Penetration Strategy & 2026–2030 EV Projections (8.75B MAD)',
        reportUrl: '', 
        presentationUrl: 'https://drive.google.com/file/d/1S3DTr9z0pvsvpPMMv44PRM7ZcX7tu5C9/view?usp=sharing'
    },
    { 
        id: 'mitsubishi-strategic-analysis', 
        date: '2026-03', 
        technologies: ['Strategic Management', 'Corporate Strategy', 'Competitive Analysis (Porter & PESTEL)', 'Business Model Canvas', 'Automotive Ecosystems & Alliances', 'Software-Defined Vehicles (SDV)', 'EV & PHEV Transition'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'PESTEL, Porter\'s 5 Forces, SWOT & Software-Defined Vehicle (SDV) Pivot',
        reportUrl: '', 
        presentationUrl: 'https://drive.google.com/file/d/1g9JGOlP4Tlijar2wqVLzq4wYp_5OQQ2L/view?usp=sharing'
    },
    { 
        id: 'wireless-pentest-ceh', 
        date: '2025-05', 
        technologies: ['Cybersecurity & Pentesting', 'Certified Ethical Hacker (CEH)', 'IEEE 802.11 & Wireshark Forensics', 'Aircrack-ng Suite & Hashcat', 'Rogue AP & Evil Twin (Fluxion)', 'WPA3 / 802.1X / RADIUS (EAP-TLS)', 'Linux / Kali Linux'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'WEP/WPA2 Cracking, Evil Twin (Fluxion), 802.11 Forensics & WPA3 Defense',
        reportUrl: '', 
        presentationUrl: 'https://drive.google.com/file/d/1cX8q2fkhNz-ZNrlZ5ONsZPKWrQSQ0mDy/view?usp=sharing'
    },
    { 
        id: 'managerial-accounting-formaction', 
        date: '2026-03', 
        technologies: ['Management Accounting', 'Cost Accounting & ABC Method', 'Direct Costing Évolué', 'Financial Modeling (Excel)', 'Contribution Margin Analysis', 'Cost Driver Allocation', 'LaTeX / Tectonic'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Activity-Based Costing (ABC), Direct Costing Évolué & Profitability Audit',
        reportUrl: 'https://drive.google.com/file/d/1o_2IINiqPpkoJNkfxwUdoYx_Xi5AoZ_g/view?usp=sharing', 
        presentationUrl: '',
        spreadsheetUrl: 'https://docs.google.com/spreadsheets/d/1-1Mkjm3tDsgAZrnpuZyo3bywb6gYe8j3/edit?usp=sharing&ouid=107640705930252991470&rtpof=true&sd=true'
    },
    { 
        id: 'sap-s4hana-production-planning', 
        date: '2026-02', 
        technologies: ['SAP S/4HANA Enterprise Management', 'Production Planning (PP Module)', 'Materials Management (MM)', 'Sales & Distribution (SD)', 'Controlling & Costing (CO/CCR)', 'MRP II & SOP/PIC Pyramids', 'LaTeX / TikZ (49-Page Spec)'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Master Data (BOM/Routing), MRP/SOP, MTS/ATO Strategies & 49-Page Manual',
        reportUrl: 'https://drive.google.com/file/d/1IiDFYl9Lh0uIg0ISTaKc2K4TvAsQmKsu/view?usp=sharing', 
        presentationUrl: ''
    },
    { 
        id: 'data-science-track', 
        date: '2026-02', 
        technologies: ['Data Science & AI Specialization', 'Convex Optimization', 'PAC Theory & CNNs', 'Variational Inference (ELBO/CAVI)', 'Inverse Problems & High-Res Imaging', 'Generative AI (GANs/VAEs/Diffusion)', 'NLP & Transformers (BERT/GPT)', 'Reinforcement Learning (Bandits/MDPs)'], 
        githubUrl: '',
        demoUrl: '',
        hubUrl: 'data-science.html',
        metric: '8 Modules, 8 Faculty Experts & Complete ML/AI Lifecycle Mastery',
        reportUrl: '', 
        presentationUrl: ''
    },
    { 
        id: 'dirty-model-multitask-learning', 
        date: '2025-11', 
        technologies: ['High-Dimensional Statistics', 'Multitask Learning (MTL)', 'Convex Optimization (CVXPY)', 'Sparse Superposition (ℓ₁ / ℓ₁/ℓ∞)', 'Phase Transition Analysis', 'Support Recovery & Incoherence', 'Python & NumPy / SciPy'], 
        githubUrl: '',
        demoUrl: '',
        metric: 'Superposition Decomposition (B+S), Phase Transitions & (2-α)s log(p) Sample Complexity',
        reportUrl: 'https://drive.google.com/file/d/1v9wUXX6ioTi-N6IWI9JseFPJ-X_QTcTu/view?usp=sharing', 
        presentationUrl: ''
    }
];

const skillsData = [ 'Python', 'Java', 'C', 'JavaScript', 'Bash', 'SQL', 'HTML', 'CSS', 'Machine Learning', 'Data Analysis', 'NLP', 'Optimization Algorithms', 'Linear Programming', 'Power BI', 'VBA', 'Excel', 'Robotics', 'SolidWorks', 'QGIS', 'Image Detection', 'Cryptography', 'Cybersecurity', 'Pentesting Tools', 'Django', 'SageMath', 'Manim', 'Overleaf', 'Git', 'AI Prompt Engineering' ];

const skillDescriptions = {
    en: {
        'Python': 'Python is my primary programming language, used across all my key projects for machine learning models, mathematical modeling, automation scripts, and image processing.',
        'Java': 'Java was used during my engineering coursework to build structured, object-oriented applications, reinforcing my software design and algorithmic foundation.',
        'C': 'C is the foundation of my programming knowledge, used for low-level systems programming, embedded firmware in robotics, and optimizing memory-critical algorithms.',
        'JavaScript': 'JavaScript powers the interactive features and dynamic animations of this portfolio website, as well as web applications utilizing frontend functionality.',
        'Bash': 'Bash scripting allows me to automate environment setup, task execution, and file management in Unix/Linux systems for data workflows.',
        'SQL': 'SQL is essential for querying, structuring, and managing relational databases to extract meaningful insights for data analysis pipelines.',
        'HTML': 'HTML is used to build the structural semantic foundation of my web interfaces, ensuring accessibility and compliance with SEO standards.',
        'CSS': 'CSS styling enables the visual layout, responsive design, custom animations, and glassmorphism elements across my web projects.',
        'Machine Learning': 'Applied in my Student Mental Health Analytics project to train classification models (using Scikit-learn) predicting anxiety, depression, and stress levels from text and survey data.',
        'Data Analysis': 'Used in financial dashboard integrations and predictive modeling projects to clean, transform, and uncover key patterns within complex datasets.',
        'NLP': 'Implemented in my Student Mental Health Analytics project using NLTK and text processing algorithms to extract features and analyze sentiments from student feedback.',
        'Optimization Algorithms': 'Key tool in industrial management for maximizing resource efficiency, routing, and operations layout, applied using both standard algorithms and custom heuristics.',
        'Linear Programming': 'Used in the Red Fruit Production Optimization project to build LP models that maximize greenhouse profits under strict resource constraints using PuLP.',
        'Power BI': 'Employed to design and develop interactive financial dashboards, integrating banking statements, delivery notes, and transaction metrics for centralized business intelligence.',
        'VBA': 'Used to automate Excel report generation, data parsing, and administrative macro workflows, streamlining repetitive operations in data management.',
        'Excel': 'My foundational tool for organizing financial spreadsheets, analyzing data, and preparing datasets prior to Power BI dashboards integration or ML pipelines.',
        'Robotics': 'Demonstrated in my Robotics & Image Detection project, involving mechanical design, physical prototyping, and motor coordination scripts for automated tasks.',
        'SolidWorks': 'Used for the 3D computer-aided design (CAD) of mechanical components, robotic assemblies, and structure modeling in engineering courses and physical projects.',
        'QGIS': 'Used in spatial data analysis, mapping agricultural areas, and industrial logistics pathfinding to visualize and manage geographic information systems (GIS).',
        'Image Detection': 'Implemented in my Robotics project using OpenCV in Python to detect, track, and interact with objects in real-time video streams.',
        'Cryptography': 'Studied theoretical cryptographic foundations and vulnerabilities, successfully simulating advanced modular arithmetic attacks against cryptosystems like RSA.',
        'Cybersecurity': 'Explored secure systems design, encryption protocols, network vulnerabilities, and defensive programming to protect application infrastructures.',
        'Pentesting Tools': 'Utilized in laboratory environments to test system security, identify configuration vulnerabilities, and understand how to defend networks against malicious attacks.',
        'Django': 'Used to build robust, secure, and database-driven web application backends, integrating Python scripts and analytical tools into responsive web portals.',
        'SageMath': 'Applied in cryptanalysis and algebraic coding theory to perform complex modular arithmetic and number theory calculations, notably in simulating attacks on RSA.',
        'Manim': 'Used to generate mathematical and algorithm animations, turning complex industrial engineering concepts into highly intuitive educational videos.',
        'Overleaf': 'My preferred platform for drafting professional academic reports, research papers, and technical project documentation in LaTeX.',
        'Git': 'Essential for version control, tracking codebase changes, and collaborating on academic and software projects via repository platforms.',
        'AI Prompt Engineering': 'Practiced in project optimization and workflow acceleration to effectively integrate LLMs and prompt techniques for serverless assistant integrations.'
    },
    fr: {
        'Python': 'Python est mon langage de programmation principal, utilisé dans tous mes projets clés pour les modèles d\'apprentissage automatique, la modélisation mathématique, l\'automatisation et le traitement d\'images.',
        'Java': 'Java a été utilisé lors de mes cours d\'ingénieur pour créer des applications structurées orientées objet, renforçant mes bases en conception logicielle et en algorithmique.',
        'C': 'C est la base de mes connaissances en programmation, utilisé pour la programmation système de bas niveau, les micrologiciels embarqués en robotique et l\'optimisation d\'algorithmes critiques en mémoire.',
        'JavaScript': 'JavaScript alimente les fonctionnalités interactives et les animations dynamiques de ce site portfolio, ainsi que les applications web utilisant des fonctionnalités frontend.',
        'Bash': 'Les scripts Bash me permettent d\'automatiser la configuration de l\'environnement, l\'exécution des tâches et la gestion des fichiers dans les systèmes Unix/Linux pour les flux de données.',
        'SQL': 'SQL est essentiel pour requêter, structurer et gérer les bases de données relationnelles afin d\'extraire des informations significatives pour les pipelines d\'analyse de données.',
        'HTML': 'HTML est utilisé pour construire la base sémantique structurelle de mes interfaces web, garantissant l\'accessibilité et la conformité aux normes SEO.',
        'CSS': 'Le style CSS permet la mise en page visuelle, le design adaptatif, les animations personnalisées et les éléments de glassmorphisme dans mes projets web.',
        'Machine Learning': 'Appliqué dans mon projet d\'Analyse Prédictive de la Santé Mentale des Étudiants pour entraîner des modèles de classification (via Scikit-learn) prédisant l\'anxiété, la dépression et le stress à partir de données textuelles et d\'enquêtes.',
        'Data Analysis': 'Utilisé dans les intégrations de tableaux de bord financiers et les projets de modélisation prédictive pour nettoyer, transformer et découvrir des modèles clés au sein d\'ensembles de données complexes.',
        'NLP': 'Mis en œuvre dans mon projet d\'Analyse Prédictive de la Santé Mentale des Étudiants à l\'aide de NLTK et d\'algorithmes de traitement de texte pour extraire des caractéristiques et analyser les sentiments des commentaires des étudiants.',
        'Optimization Algorithms': 'Outil clé en gestion industrielle pour maximiser l\'efficacité des ressources, le routage et l\'aménagement des opérations, appliqué à l\'aide d\'algorithmes standards et d\'heuristiques personnalisées.',
        'Linear Programming': 'Utilisé dans le projet d\'Optimisation de la Production de Fruits Rouges pour construire des modèles de programmation linéaire maximisant les profits des serres sous des contraintes de ressources strictes avec PuLP.',
        'Power BI': 'Employé pour concevoir et développer des tableaux de bord financiers interactifs, en intégrant les relevés bancaires, les bons de livraison et les indicateurs de transaction pour une intelligence d\'affaires centralisée.',
        'VBA': 'Utilisé pour automatiser la génération de rapports Excel, l\'analyse des données et les flux de macro administratifs, simplifiant les opérations répétitives dans la gestion des données.',
        'Excel': 'Mon outil fondamental pour organiser les feuilles de calcul financières, analyser les données et préparer les ensembles de données avant l\'intégration des tableaux de bord Power BI ou des pipelines ML.',
        'Robotics': 'Démontré dans mon projet de Robotique et Détection d\'Images, impliquant la conception mécanique, le prototypage physique et les scripts de coordination des moteurs pour les tâches automatisées.',
        'SolidWorks': 'Utilisé pour la conception assistée par ordinateur 3D (CAO) de composants mécaniques, d\'assemblages robotiques et de modélisation de structures dans les cours d\'ingénierie et les projets physiques.',
        'QGIS': 'Utilisé dans l\'analyse de données spatiales, la cartographie des zones agricoles et la recherche d\'itinéraires logistiques industriels pour visualiser et gérer les systèmes d\'information géographique (SIG).',
        'Image Detection': 'Mis en œuvre dans mon projet de robotique à l\'aide d\'OpenCV en Python pour détecter, suivre et interagir avec des objets dans des flux vidéo en temps réel.',
        'Cryptography': 'Étude des fondements cryptographiques théoriques et des vulnérabilités, simulant avec succès des attaques d\'arithmétique modulaire avancées contre des cryptosystèmes comme RSA.',
        'Cybersecurity': 'Exploration de la conception de systèmes sécurisés, des protocoles de chiffrement, des vulnérabilités réseau et de la programmation défensive pour protéger les infrastructures d\'applications.',
        'Pentesting Tools': 'Utilisé dans des environnements de laboratoire pour tester la sécurité des systèmes, identifier les vulnérabilités de configuration et comprendre comment défendre les réseaux contre les attaques malveillantes.',
        'Django': 'Utilisé pour créer des backends d\'applications web robustes, sécurisés et basés sur des bases de données, en intégrant des scripts Python et des outils analytiques dans des portails web réactifs.',
        'SageMath': 'Appliqué en cryptanalyse et en théorie des codes algébriques pour effectuer des calculs complexes d\'arithmétique modulaire et de théorie des nombres, notamment dans la simulation d\'attaques sur RSA.',
        'Manim': 'Utilisé pour générer des animations mathématiques et algorithmiques, transformant des concepts complexes de génie industriel en vidéos éducatives hautement intuitives.',
        'Overleaf': 'Ma plateforme préférée pour rédiger des rapports académiques professionnels, des articles de recherche et de la documentation technique de projet en LaTeX.',
        'Git': 'Essentiel pour le contrôle de version, le suivi des modifications de code et la collaboration sur des projets académiques et logiciels via des plateformes de référentiel.',
        'AI Prompt Engineering': 'Pratiqué dans l\'optimisation des projets et l\'accélération des flux de travail pour intégrer efficacement les LLM et les techniques de prompt pour les intégrations d\'assistants serverless.'
    }
};

const leadershipData = [
     { id: 'emines-junior-entreprise', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=EJE' },
     { id: 'rubiks-club', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=Rubiks+Club' },
     { id: 'eplus-club', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=E++Club' },
     { id: 'eastro-club', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=Astronomy+Club' },
     { id: 'rotaract-club', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=Rotaract' },
     { id: 'pingpong-club', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=PingPong+Club' },
     { id: 'university-sports', imageUrl: 'https://via.placeholder.com/600x400.png/1F1F1F/A78BFA?text=Sports' }
];

const toggleLabels = {
    en: { more: "See More", less: "See Less" },
    fr: { more: "Voir Plus", less: "Voir Moins" },
    ar: { more: "عرض المزيد", less: "عرض أقل" },
    es: { more: "Ver Más", less: "Ver Menos" },
    de: { more: "Mehr anzeigen", less: "Weniger anzeigen" },
    zh: { more: "查看更多", less: "收起" },
    pt: { more: "Ver Mais", less: "Ver Menos" }
};

const projectReports = {
    'mental-health-analytics': `# Predictive Analytics for Student Mental Health

## Executive Summary & Engineering Problem
University students face high rates of untreated mental health conditions including severe anxiety, depression, and chronic stress. Traditional survey instruments (such as the GAD-7 and PHQ-9 questionnaires) are administered periodically and suffer from reporting latency. This project engineered a multi-modal machine learning pipeline combining numerical psychological questionnaire features with natural language processing (NLP) of student sentiment text to provide early detection of mental health risk.

---

## Technical Architecture & Mathematical Formulation

### 1. Data Processing & NLP Feature Extraction
* **Text Preprocessing:** Tokenization, lemmatization with spaCy, removal of stop words, and N-gram extraction.
* **TF-IDF Vectorization:** Textual sentiment is vectorized using Term Frequency-Inverse Document Frequency:
  $$\\text{TF-IDF}(t, d, D) = \\text{TF}(t, d) \\times \\log\\left(\\frac{1 + |D|}{1 + |\\{d \\in D : t \\in d\\}|}\\right) + 1$$
* **Handling Class Imbalance:** Applied Synthetic Minority Over-sampling Technique (SMOTE) in the feature space:
  $$\\mathbf{x}_{\\text{new}} = \\mathbf{x}_i + \\lambda (\\mathbf{x}_{zi} - \\mathbf{x}_i), \\quad \\lambda \\sim U(0, 1)$$

### 2. Classification Models & Optimization
* **Algorithms Evaluated:** Logistic Regression, Random Forest, Support Vector Machines (SVM with RBF Kernel), and XGBoost.
* **Support Vector Machine Formulation:**
  $$\\min_{\\mathbf{w}, b, \\xi} \\frac{1}{2} \\|\\mathbf{w}\\|^2 + C \\sum_{i=1}^n \\xi_i \\quad \\text{s.t.} \\quad y_i (\\mathbf{w}^T \\phi(\\mathbf{x}_i) + b) \\ge 1 - \\xi_i, \\; \\xi_i \\ge 0$$
* **Hyperparameter Tuning:** 5-fold Stratified Cross-Validation over tree depth, learning rate, and regularizers.

---

## Measurable Results & Performance Metrics
* **Classification Accuracy:** **92.4%** across multi-class risk classification (Low, Moderate, High).
* **Macro Precision:** **91.8%**
* **Macro Recall:** **93.1%** (prioritized to minimize false negatives in mental health screening).
* **F1-Score:** **92.4%**
* **ROC-AUC Score:** **0.965**
* **Key Risk Factors Identified:** Sleep deprivation (<5 hours/night), sudden changes in academic workload, and social isolation indicators.`,

    'red-fruit-optimization': `# Optimization of Red Fruit Production in Greenhouses

## Executive Summary & Engineering Problem
Commercial greenhouse operations for high-value red fruits (strawberries, raspberries, blueberries) require complex resource balancing. Operations managers must allocate multi-parcel greenhouse plots, scarce seasonal irrigation quotas, and specialized labor under volatile market price curves and strict agronomic crop rotation constraints. This project engineered a constrained **Linear Programming (LP)** optimization engine to maximize operational profit across multi-period planning horizons.

---

## Mathematical Modeling & Constraints

### 1. Decision Variables
Let $x_{i,j,t} \\ge 0$ denote the land surface area (hectares) allocated to crop variety $i \\in I = \\{\\text{Strawberry, Raspberry, Blueberry}\\}$ in greenhouse plot $j \\in J$ during period $t \\in T$.

### 2. Objective Function (Profit Maximization)
$$\\max Z = \\sum_{t \\in T} \\sum_{j \\in J} \\sum_{i \\in I} \\left( P_{i,t} \\cdot Y_{i,j,t} - C_{i,j,t} \\right) x_{i,j,t} - \\sum_{t \\in T} \\text{FixedOverhead}_t$$
Where:
* $P_{i,t}$: Expected market selling price per metric ton for crop $i$ in period $t$.
* $Y_{i,j,t}$: Yield output per hectare for crop $i$ in plot $j$ during period $t$.
* $C_{i,j,t}$: Variable direct cost (fertilizers, substrate, maintenance) per hectare.

### 3. Constraints
1. **Land Availability:**
   $$\\sum_{i \\in I} x_{i,j,t} \\le \\text{Area}_j, \\quad \\forall j \\in J, \\; \\forall t \\in T$$
2. **Water Resource Quotas:**
   $$\\sum_{j \\in J} \\sum_{i \\in I} W_{i,t} \\cdot x_{i,j,t} \\le \\text{WaterQuota}_t, \\quad \\forall t \\in T$$
3. **Labor Allocation Limits:**
   $$\\sum_{j \\in J} \\sum_{i \\in I} L_{i,t} \\cdot x_{i,j,t} \\le \\text{LaborCapacity}_t, \\quad \\forall t \\in T$$
4. **Crop Rotation & Soil Rest Rules:** Minimum fallow rest periods enforced between consecutive plantings of the same crop variety.

---

## Implementation & Results
* **Solver Engine:** Formulated in Python using **\`PuLP\`** and solved with the **COIN-OR CBC** simplex solver.
* **Profit Gain:** **+18.5%** net margin increase over standard empirical scheduling.
* **Resource Conservation:** **14.2%** reduction in water consumption through targeted allocation to high-efficiency varieties.
* **Sensitivity Analysis:** Identified shadow prices for water and labor to guide seasonal capital expenditures.`,

    'powerbi-dashboard': `# Bank Statement Integration & Financial Analytics with Power BI

## Executive Summary & Engineering Problem
Medium and large enterprise finance departments struggle with reconciling fragmented transaction data across multiple banking partners, logistics delivery notes, and enterprise ERP records. Manual reconciliation is prone to human error, creates multi-day reporting delays, and obscures cash flow visibility. This project engineered an automated **ETL and Business Intelligence dashboard** integrating bank feeds, supplier disbursements, and operational logistics into an interactive financial control tower.

---

## Technical Architecture & Data Pipeline

### 1. Extraction, Transformation, and Loading (ETL)
* **Ingestion:** Automated Python parsing scripts and Power Query (M Language) pipelines processing unstructured PDF and CSV bank extracts.
* **Data Cleansing:** Regex normalization of transaction descriptions, entity matching algorithms, and automated duplicate transaction pruning.

### 2. Dimensional Data Modeling (Star Schema)
* **Fact Table:** \`Fact_BankTransactions\` (transaction date, account key, counterparty key, debit/credit amounts, clearance status).
* **Dimension Tables:** \`Dim_Accounts\`, \`Dim_Suppliers\`, \`Dim_DateCalendar\`, \`Dim_DeliveryNotes\`.

### 3. Key DAX Formulations
* **Discrepancy Variance Metric:**
  $$\\text{ReconciliationVariance} = \\sum(\\text{Fact\\_BankTransactions}[\\text{Amount}]) - \\sum(\\text{Fact\\_Invoices}[\\text{Amount}])$$
* **Days Payable Outstanding (DPO):**
  $$\\text{DPO} = \\frac{\\text{Average Accounts Payable}}{\\text{Cost of Goods Sold (COGS)}} \\times 365$$
* **Rolling 90-Day Cash Liquidity Forecast:** Time-intelligence DAX calculation combining committed supplier contracts with historical receivables burn rate.

---

## Business Value & Key Results
* **Reconciliation Time Reduction:** **85%** decrease in manual reconciliation workload (from 14 hours/week down to 2 hours).
* **Audit Accuracy:** **100%** audit traceability with automated discrepancy flagging.
* **Executive Decision Speed:** Provided C-level leadership with real-time liquidity forecasting and working capital optimization insights.`,

    'rsa-cryptography': `# Cryptanalysis & Attacks Against Shared Module RSA

## Executive Summary & Engineering Problem
The RSA cryptosystem relies on the computational hardness of factoring large composite integers $N = p \\cdot q$. However, architectural flaws—such as reusing the same modulus $N$ across multiple entities or generating small private exponents—allow adversaries to completely decrypt messages and recover private keys without performing integer factorization. This research project mathematically simulated and implemented classical and modern cryptanalytic attacks against vulnerable RSA configurations.

---

## Mathematical Cryptanalysis

### 1. Common Modulus Attack
When two users share the same modulus $N$ with coprime public exponents $\\gcd(e_1, e_2) = 1$, and receive the same plaintext $m$:
$$c_1 \\equiv m^{e_1} \\pmod N, \\quad c_2 \\equiv m^{e_2} \\pmod N$$
By Bézout's Identity, there exist integers $r, s \\in \\mathbb{Z}$ (computable in $\\mathcal{O}(\\log(\\min(e_1, e_2)))$ via the Extended Euclidean Algorithm) such that:
$$r \\cdot e_1 + s \\cdot e_2 = 1$$
Assuming without loss of generality that $r > 0$ and $s < 0$:
$$m \\equiv c_1^r \\cdot (c_2^{-1})^{-s} \\pmod N$$
This completely recovers the plaintext message $m$ in polynomial time without knowing $p$ or $q$.

### 2. Wiener's Continued Fraction Attack on Small Exponent
If the private key $d$ satisfies $d < \\frac{1}{3} N^{1/4}$, then $\\frac{k}{d}$ appears as a convergent in the continued fraction expansion of $\\frac{e}{N}$:
$$\\left| \\frac{e}{N} - \\frac{k}{d} \\right| < \\frac{1}{2 d^2 N^{1/2}} < \\frac{1}{2 d^2}$$
By iterating through the convergents of continued fractions, $d$ is recovered in $\\mathcal{O}(\\log N)$ arithmetic operations.

---

## Implementation & Defensive Recommendations
* **Simulation Stack:** Implemented in Python using **SageMath** and GMP big-integer libraries for 2048-bit and 4096-bit key spaces.
* **Defensive Engineering:**
  1. Strict enforcement of unique modulus generation per entity.
  2. Adoption of Optimal Asymmetric Encryption Padding (**OAEP**) to introduce probabilistic ciphertext randomization.
  3. Minimum private exponent thresholds ($d > N^{0.292}$) to safeguard against Coppersmith and Wiener lattice-reduction attacks.`,

    'geology-internship': `# STAGE DE GÉOLOGIE, GÉOPHYSIQUE ET HYDROGÉOLOGIE

**EMINES DU 20 AU 25 NOVEMBRE**
**OULMES**

---

## PARTIE 1 : GÉOLOGIE

### Préambule
Le stage d’observation en géologue s’est déroulé dans la région de Oulmès, du lundi 20 novembre 2023 au vendredi 24 novembre 2023, dont l’objectif était de développer le sens de l’observation, de l’analyse et de l’interprétation étant des compétences cruciales pour un ingénieur manager.

### Introduction
La géologie représente un pilier fondamental pour l'ingénieur, offrant un panorama crucial des bases terrestres sur lesquelles reposent de nombreuses industries et infrastructures. La région d'Oulmès présente une diversité géologique notable avec des formations comprenant des séries sédimentaires, des roches magmatiques et des structures tectoniques complexes. Ce territoire renferme une richesse minéralogique, notamment avec des gisements de minéraux variés tels que le quartz, l'andalousite et la muscovite.

### Matériel utilisé
Durant ce stage géologie, nous avons utilisé différents outils :
1. **La boussole** : Pour s'orienter et mesurer la direction et l'inclinaison (pendage) des couches rocheuses.
2. **Le marteau** : Pour collecter des échantillons et observer les affleurements.
3. **Le GPS** : Pour cartographier précisément les emplacements des affleurements.
4. **Cartes topographiques et géologiques** : Pour percevoir le relief, déterminer des altitudes et identifier les formations géologiques.

### Profil topographique et Datation
Lors de notre premier arrêt, nous avons observé deux couches : une couche jaunâtre (calcaire du Miocène) et une couche rougeâtre (argile du Trias).
La datation des roches s'appuie sur des principes fondamentaux :
1. **Le principe de superposition** : Les couches les plus anciennes se trouvent en bas.
2. **Principe de recoupement** : Une formation qui en traverse une autre est plus jeune.
3. **Principe d'inclusion** : Un morceau de roche inclus est plus ancien que la roche qui l'entoure.

*Discordance Miocène-Trias :* Selon le tableau des temps géologiques, le Trias n'est pas suivi par le Miocène. Ce contact direct est une discordance.

### Les failles, les plis, la schistosité
- **Les failles :** Fractures avec déplacement des blocs (failles normales, inverses, cisaillantes).
- **Les plis :** Déformations ductiles des roches (ex. pli couché observé sur le terrain).
- **La schistosité :** Orientation prédominante des minéraux en feuillets. Nous avons observé trois schistosités superposées.

### Roches métamorphiques et magmatiques
- **Métamorphisme régional et de contact :** Le plateau d'Oulmès montre un métamorphisme régional affecté par un métamorphisme de contact dû à l'intrusion d'un pluton granitique d'Oulmès (290-300Ma).
- **Roches magmatiques :** Observation de granite, de granite aplitique et de basalte. Le contact du basalte chaud avec les micaschistes a généré une roche de cuisson (kaolinite).

### Mine d’El Karit
Ancienne mine d’étain (cassitérite). L’extraction est associée à d'autres minéraux comme la tourmaline, le béryl, et la muscovite, formés par l'activité hydrothermale du magma granitique dans l'auréole de contact. La présence d’andalousite indique une exposition à forte température et faible pression.

---

## PARTIE 2 : GÉOPHYSIQUE ET HYDROGÉOLOGIE

### Prospection géoélectrique
Les géophysiciens s’intéressent aux propriétés électriques pour caractériser le sous-sol :
- **Conductibilité électrolytique :** Dépend de la porosité, de la teneur en eau et de la salinité (Loi d'Archie).
- **Les techniques géoélectriques :**
  - **Le sondage électrique (SE) :** Exploration verticale (Dispositif de Schlumberger).
  - **Le traîné électrique (TE) :** Exploration horizontale pour caractériser une zone à profondeur constante.
  - **La tomographie électrique (ERT) :** Cartographie des résistivités apparentes en 2D ou 3D.

### Applications sur le terrain
**Site d’Al QIRIT :**
- Tomographie électrique sur 355m (72 électrodes, pas de 5m). Résistivité calculée (erreur quadratique 3.5), chargeabilité (erreur 1.4). Les zones violettes indiquent le granite.
- Sondage électrique vertical Schlumberger avec AB=1000m.

**Site DAR LAAROUSSI :**
- Tomographie électrique d’un profil de 950m avec un pas de 10m.

### Hydrogéologie
L'hydrogéologie étudie les eaux souterraines, leur infiltration, leur écoulement dans les aquifères, et leur interaction avec la géologie.

**Mesures hydrogéologiques sur le plateau d’Oulmès :**
1. **Source Ain Lalla Hayya** : Eau volcanique, bicarbonatée, sulfureuse. T = 37.78°C (hydrothermalisme), pH = 6.58.
2. **Source Hammou-Agamgam (Aïn Atlas)** : Faciès bicarbonaté sodique. Sort à 930m d'altitude. T = 20.74°C, pH = 9.
3. **Puits Dar Laaroussi** : T = 18.75°C, pH = 7.74.
4. **Source Sidi Ali** : T = 19.3°C, pH = 8.1.

### L'usine des Eaux Minérales d’Oulmès (Tarmilate)
Créée en 1950 (première bouteille "Sidi Ali"). L'usine embouteille en PET et en verre, avec un contrôle continu de la qualité (physico-chimique et microbiologique) des sources Lalla Haya et Sidi Ali Chérif.

---
## Conclusion Générale
Ce stage a permis un contact direct avec le terrain, développant l'esprit d'analyse et les compétences géologiques fondamentales. Il a mis en évidence l'importance de comprendre le sous-sol avant d'exploiter ses ressources naturelles, liant la géologie, la géophysique et l'hydrogéologie.`,

    'wood-behavior-mmc': `# Projet MMC : Loi de Comportement du Bois

**Auteurs / Réalisé par :** Wissal BELABBESS, Aya KAMOUNI, H'nia HARRAS, Mohammed ELBARAKA  
**Encadré par :** Ahmed ROUABHI  

---

## Sommaire
1. Introduction
2. Le bois en quelques chiffres et données !
3. Les propriétés mécaniques du bois
4. Mesure du module de Young
5. Mesure de la résistance de rupture
6. Conclusion

---

## 1. Introduction

### 1.1. Nature et Structure Chimique
- Le bois est un matériau **naturel, organique et renouvelable** composé :
  - De fibres de **cellulose** à haute masse molaire.
  - D'**hémicelluloses**, qui sont des polymères ramifiés à basse masse molaire.
  - De **lignine**.

### 1.2. Organisation Cellulaire et Directionnalité
- Le bois possède une structure interne spécifique où les cellules sont alignées de manière verticale et parallèle dans les parois cellulaires.
- Cette disposition permet aux arbres de résister efficacement aux forces extérieures (comme le vent).
- **Conséquence mécanique :** Le bois présente une résistance nettement supérieure dans la direction parallèle aux fibres (**longitudinale**) comparativement aux directions perpendiculaires (**radiale** et **tangentielle**).

### 1.3. Caractère Orthotrope du Bois
- Le bois est un matériau **orthotrope** : ses propriétés varient en fonction de la direction de sollicitation.
- **Axes principaux :**
  - **L (Longitudinal) :** Direction parallèle au fil des fibres (propriétés mécaniques maximales).
  - **R (Radial) :** Direction perpendiculaire aux cernes d'accroissement (perpendiculaire à la surface).
  - **T (Tangentiel) :** Direction tangente aux cernes de croissance (perpendiculaire aux fibres).
- **Plans de référence (plan ligneux) :**
  - Plan transverse : **(RT)**
  - Plan radial : **(LR)**
  - Plan tangentiel : **(LT)**

---

## 2. Le Bois en Quelques Chiffres et Données

- **Consommation mondiale :** En 2019, la consommation mondiale de bois de construction a atteint environ **430 millions de mètres cubes**.

### Répartition de l'Utilisation de l'Arbre

| Fraction | Pourcentage | Usages & Applications |
| :--- | :---: | :--- |
| **Sciage** | **42 %** | Bois de construction, bois d'ingénierie (poutres assemblées pour structures). |
| **Copeaux** | **38 %** | Fabrication de papiers (journal notamment), pâte kraft pour papier tissu, cartons et bioproduits (biocarburants, bioplastiques). |
| **Écorce** | **10 %** | Combustible énergétique. |
| **Sciure et rabotures** | **10 %** | Particules minces récupérées et transformées en granulés pour le chauffage. |

---

## 3. Les Propriétés Mécaniques du Bois

Dans le domaine élastique, le **module d'Young** (module d'élasticité) est le paramètre prépondérant. Il est influencé par :
1. La densité
2. La teneur en humidité
3. La température

### 3.1. Influence de la Densité
- La densité apparente (prenant en compte la porosité) est le principal facteur déterminant la rigidité entre différentes essences de bois.
- **Loi statistique (loi puissance) :**
  $$Y = a \\cdot D^b$$
  - $Y$ : Propriété élastique (module)
  - $D$ : Densité du bois
  - $a, b$ : Constantes tabulées selon l'espèce de bois (corrélation établie généralement à 12 % d'humidité relative).

### 3.2. Influence de la Température
- L'élévation de la température abaisse la pente de la courbe contrainte-déformation (réduction de la rigidité).
- **Relation d'évolution :**
  $$E_2 = E_1 [1 - \\alpha (T_2 - T_1)]$$
  - $E_1, E_2$ : Modules d'élasticité aux températures $T_1$ et $T_2$
  - $\\alpha$ : Coefficient de dilatation thermique

### 3.3. Influence de la Teneur en Humidité
- Le module d'Young décroît de manière quasi-linéaire avec l'augmentation de l'humidité jusqu'au **Point de Saturation des Fibres (PSF $\\approx 30\\,\\%$)**.
- L'effet de l'humidité sur le module d'Young tangentiel est plus marqué chez le **chêne** et le **bouleau** que chez le **pin**.
- Sous le PSF, les variations d'humidité induisent des changements dimensionnels macroscopiques (**retrait ou gonflement**).

---

## 4. Modélisation du Comportement Élastique Orthotrope

### 4.1. Loi de Hooke Généralisée (3D)
Sous l'hypothèse des petites perturbations (HPP) en élasticité linéaire :
$$\\varepsilon_{ij} = s_{ijkl} \\cdot \\sigma_{kl} \\quad \\text{et} \\quad \\sigma_{ij} = C_{ijkl} \\cdot \\varepsilon_{kl}$$
- $\\sigma_{ij}$ : Tenseur des contraintes
- $\\varepsilon_{ij}$ : Tenseur des déformations
- $C_{ijkl}$ / $C_{ij}$ : Tenseur / matrice des rigidités
- $s_{ijkl}$ / $s_{ij}$ : Tenseur / matrice des complaisances

### 4.2. Matrice de Complaisance en Repère Orthotrope $(R, T, L)$
En notation d'ingénieur compacte :
$$\\begin{pmatrix} \\varepsilon_R \\\\ \\varepsilon_T \\\\ \\varepsilon_L \\\\ \\gamma_{TL} \\\\ \\gamma_{RL} \\\\ \\gamma_{RT} \\end{pmatrix} = \\begin{pmatrix} \\frac{1}{E_R} & -\\frac{\\nu_{TR}}{E_T} & -\\frac{\\nu_{LR}}{E_L} & 0 & 0 & 0 \\\\ -\\frac{\\nu_{RT}}{E_R} & \\frac{1}{E_T} & -\\frac{\\nu_{LT}}{E_L} & 0 & 0 & 0 \\\\ -\\frac{\\nu_{RL}}{E_R} & -\\frac{\\nu_{TL}}{E_T} & \\frac{1}{E_L} & 0 & 0 & 0 \\\\ 0 & 0 & 0 & \\frac{1}{G_{TL}} & 0 & 0 \\\\ 0 & 0 & 0 & 0 & \\frac{1}{G_{RL}} & 0 \\\\ 0 & 0 & 0 & 0 & 0 & \\frac{1}{G_{RT}} \\end{pmatrix} \\begin{pmatrix} \\sigma_R \\\\ \\sigma_T \\\\ \\sigma_L \\\\ \\sigma_{TL} \\\\ \\sigma_{RL} \\\\ \\sigma_{RT} \\end{pmatrix}$$

- $E_R, E_T, E_L$ : Modules de Young axiaux.
- $G_{TL}, G_{RL}, G_{RT}$ : Modules de cisaillement.
- $\\nu_{ij}$ : Coefficients de Poisson.

---

## 5. Mesure Expérimentale du Module de Young (Essai de Compression)

- **Objectifs :** Déterminer le module de Young $E$ du **pin**, mesurer la déformation axiale $\\varepsilon$ jusqu'à rupture et vérifier la loi de Hooke.
- **Protocole :**
  - Éprouvette : Échantillon cubique de **$25\\text{ mm} \\times 25\\text{ mm} \\times 25\\text{ mm}$**.
  - Machine d'essai : **SYNTAX BR**.
  - Vitesse de chargement : **$v = 0{,}5\\text{ mm/min}$**.
- **Tenseurs appliqués :**
  $$\\boldsymbol{\\sigma} = \\begin{pmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & \\sigma \\end{pmatrix} \\quad \\text{avec } \\sigma = -\\frac{N}{S}$$
  $$\\boldsymbol{\\varepsilon} = \\begin{pmatrix} \\frac{\\partial u_r}{\\partial r} & 0 & 0 \\\\ 0 & u_{rr} & 0 \\\\ 0 & 0 & \\varepsilon_{zz} \\end{pmatrix}$$
- **Résultats obtenus & Conclusion partielle 1 :**
  - La loi de Hooke est vérifiée : $\\sigma = 6{,}88\\,\\text{GPa} \\cdot \\varepsilon$.
  - **Module de Young expérimental (Pin) :** $E = 6{,}88\\text{ GPa}$.

---

## 6. Mesure de la Résistance de Rupture (Essai de Flexion)

- **Définition :** La résistance de rupture ($R_m$) représente la contrainte maximale supportable par la pièce avant endommagement/rupture, intervenant dans le domaine plastique après écoulement élastique limite ($R_{el}, \\varepsilon_{el}$).
- **Objectif :** Comparer la résistance en flexion du **bois d'ingénierie** face au **bois de sciage traditionnel** (charpente légère).
- **Protocole :**
  - Éprouvette : Parallélépipède de **$20\\text{ mm} \\times 20\\text{ mm} \\times 80\\text{ mm}$**.
  - Machine : **SYNTAX BR** en configuration flexion 3 points.
  - Vitesse de chargement : **$v = 3\\text{ mm/min}$**.

### Résultats Comparatifs

| Type de Bois | Résistance de Rupture en Flexion | Comportement & Endommagement |
| :--- | :---: | :--- |
| **Bois d'ingénierie** | **$43\\text{ MPa}$** | Déformation infime, résistance accrue due à sa rigidité structurelle. |
| **Bois de sciage traditionnel** | **$16\\text{ MPa}$** | Fissures nettement remarquables accompagnées de ruptures franches des fibres. |

- **Conclusion partielle 2 :**
  - La résistance en flexion du bois d'ingénierie ($43\\text{ MPa}$) est largement supérieure à celle du bois de sciage ($16\\text{ MPa}$).
  - Mise en évidence de l'orthotropie : une coupe **longitudinale** résiste beaucoup mieux à la fissuration et met plus de temps à rompre qu'une coupe **transversale**.

---

## 7. Durabilité et Impact Écologique du Bois

- **Performances structurales et durabilité :** Meilleure résilience face aux intempéries/insectes par rapport à la brique ou au béton et excellente efficacité énergétique (isolant thermique).
- **Empreinte environnementale :** Matériau renouvelable et recyclable issu de forêts gérées durablement ; rôle de puits de carbone réduisant le $\\text{CO}_2$ atmosphérique.

---

## 8. Bibliographie

1. *Fissuration du bois en climat variable sous charges de longues durées : applications aux essences européennes et gabonaises* (\`hal.science\`).
2. *Modélisation du comportement mécanique du bois au cours du séchage* (\`ulaval.ca\`).`,

    'biomedical-diffusion': `# Oxygen Diffusion in the Pulmonary Acinus: Numerical Modeling

## Executive Summary & Engineering Problem
The human pulmonary acinus is the functional gas-exchange anatomical unit of the respiratory system. Pathologies such as pulmonary fibrosis, edema, or emphysema alter alveolar wall thickness and cellular permeability, severely degrading oxygen transport into capillary blood. This biomedical engineering project developed a 2D transient Partial Differential Equation (PDE) numerical solver to simulate oxygen partial pressure gradients across physiological and pathological acinar geometries.

---

## Mathematical Formulation & Numerical Schemes

### 1. 2D Transient Diffusion-Reaction PDE
The concentration of oxygen $C(x, y, t)$ within the acinar domain $\\Omega$ is governed by Fick's Second Law with localized metabolic consumption $k(x, y)$:
$$\\frac{\\partial C}{\\partial t} = D \\left( \\frac{\\partial^2 C}{\\partial x^2} + \\frac{\\partial^2 C}{\\partial y^2} \\right) - k(x, y) C(x, y, t)$$
Where:
* $D$: Molecular diffusion coefficient of oxygen in alveolar gas ($D \\approx 0.22 \\, \\text{cm}^2/\\text{s}$).
* $k(x, y)$: Uptake rate parameter across capillary interfaces.

### 2. Boundary Conditions
* **Inhalation Entrance ($\\Gamma_{\\text{in}}$):** Dirichlet condition $C(x, y, t) = C_{\\text{ambient}} = 0.21 \\, \\text{atm}$.
* **Alveolar-Capillary Membrane ($\\Gamma_{\\text{membrane}}$):** Robin boundary condition modeling passive membrane permeation into blood:
  $$-D \\, \\nabla C \\cdot \\mathbf{n} = P_m \\left( C - C_{\\text{capillary}} \\right)$$

### 3. Discretization via Alternating-Direction Implicit (ADI) Scheme
To guarantee unconditional numerical stability without restrictive Courant-Friedrichs-Lewy (CFL) time-step limits, the 2D spatial grid was discretized using an ADI finite-difference method split into two half-steps:
$$\\frac{C^{n+1/2} - C^n}{\\Delta t / 2} = D \\left( \\delta_x^2 C^{n+1/2} + \\delta_y^2 C^n \\right) - \\frac{k}{2} C^{n+1/2}$$
$$\\frac{C^{n+1} - C^{n+1/2}}{\\Delta t / 2} = D \\left( \\delta_x^2 C^{n+1/2} + \\delta_y^2 C^{n+1} \\right) - \\frac{k}{2} C^{n+1}$$

---

## Results & Physiological Insights
* **Numerical Convergence:** Tridiagonal matrix systems solved with the Thomas Algorithm, achieving $L_2$ norm residual error $< 10^{-5}$.
* **Pathological Impact:** Simulations demonstrated a **34% drop in oxygen flux** when membrane diffusion thickness increases by $2.5\\times$ (modeling acute interstitial edema).
* **Clinical Value:** Provides quantifiable parametric modeling to evaluate mechanical ventilation oxygenation efficacy.`,

    'acoustic-noise-reduction': `# TIPE : Réduction de la Pollution Sonore Causée par le Trafic Routier

## Motivation & Contexte d'Ingénierie
Le bruit urbain généré par le trafic routier continu représente une nuisance sanitaire majeure (troubles du sommeil, pertes auditives, perturbation cognitive). Selon l'OMS, l'exposition continue au-delà de 85 dB constitue un danger avéré pour l'organisme humain. Ce projet d'ingénierie TIPE analyse la propagation ondulatoire du bruit routier et optimise l'efficacité des écrans antibruit grâce à l'intégration de matériaux absorbants poreux.

---

## Modélisation Physique & Formulations Mathématiques

### 1. Physique des Ondes Acoustiques & Pression
La pression acoustique totale s'exprime comme la superposition de la pression atmosphérique au repos et de la surpression acoustique instantanée :
$$P_{\\text{totale}} = P_0 + p(t)$$
* **Impédance acoustique caractéristique de l'air :** $Z_0 = \\rho_0 \\cdot c_0$ (où $\\rho_0 \\approx 1.2\\,\\text{kg/m}^3$ et $c_0 \\approx 340\\,\\text{m/s}$).
* **Intensité acoustique instantanée :**
  $$I = p(t) \\cdot v(t) = \\frac{p^2}{\\rho_0 c_0}$$

### 2. Modélisation Spectrale du Bruit Routier
Le bruit émis par le flux automobile (moteur GMP, contact pneumatique-chaussée, échappement, bruits aérodynamiques) est décomposé en série de Fourier :
$$s(t) = \\sum_{n=1}^N A_n \\sin(\\omega_n t + \\phi_n)$$

### 3. Propriétés des Matériaux Poreux & Bilan Énergétique
Un matériau poreux absorbant est caractérisé par :
* **Porosité ouverte $\\Phi$ :** $\\Phi = \\frac{V_{\\text{fluide}}}{V_{\\text{total}}}$
* **Résistivité au passage de l'air $\\sigma$ ($\\,\\text{N}\\cdot\\text{s}\\cdot\\text{m}^{-4}$) :** quantifie les pertes d'énergie acoustique par frottements visqueux du fluide sur le squelette solide.
* **Bilan de conservation énergétique sur l'écran antibruit :**
  $$1 = T + R + \\alpha$$
  Pour un écran opaque où la transmission $T \\approx 0$ :
  $$\\alpha = 1 - R = 1 - |r|^2$$
  où $\\alpha$ est le coefficient d'absorption acoustique et $r$ le coefficient de réflexion complexe.

---

## Dispositif Expérimental & Résultats (Tube de Kundt)
* **Protocole Expérimental :** Mesure d'ondes stationnaires acoustiques au Tube de Kundt pour déterminer le coefficient d'absorption $\\alpha(f)$ en fonction de la fréquence.
* **Matériaux Comparés :** Mousse compacte vs. Mousse alvéolée / cellulaire.
* **Résultats :** La mousse alvéolée présente un pic d'absorption acoustique $\\alpha > 0.85$ sur la plage fréquentielle critique du bruit de roulement urbain ($500\\,\\text{Hz} - 2000\\,\\text{Hz}$), validant son utilisation optimale pour le garnissage des parois de murs antibruit.`,

    'robotics-vision': `# Robotics and Real-Time Computer Vision Object Detection

## Executive Summary & Engineering Problem
Automated manufacturing and sorting lines require fast, accurate robotic manipulation guided by real-time visual perception. Achieving tight coordination between mechanical degrees of freedom (DOF) and low-latency computer vision is challenging on embedded edge hardware. This project engineered a complete **4-DOF robotic manipulator system** integrated with an **OpenCV visual tracking pipeline** for autonomous object identification, classification, and pick-and-place sorting.

---

## Mechanical Architecture & Kinematics Formulation

### 1. SolidWorks 3D CAD Modeling & Prototyping
* **Structure:** Designed a lightweight 4-DOF articulated robotic arm with end-effector suction/claw gripper in SolidWorks.
* **Structural Analysis (FEA):** Verified torque margins and minimized joint deflection under payload.
* **Actuation:** High-torque digital servo motors controlled via an embedded microcontroller (Arduino/Raspberry Pi).

### 2. Kinematics Modeling (Denavit-Hartenberg Parameters)
Forward kinematics transformation matrix between successive joint coordinate frames $i-1$ and $i$:
$$^{i-1}T_i = \\begin{bmatrix} 
\\cos\\theta_i & -\\sin\\theta_i\\cos\\alpha_i & \\sin\\theta_i\\sin\\alpha_i & a_i\\cos\\theta_i \\\\ 
\\sin\\theta_i & \\cos\\theta_i\\cos\\alpha_i & -\\cos\\theta_i\\sin\\alpha_i & a_i\\sin\\theta_i \\\\ 
0 & \\sin\\alpha_i & \\cos\\alpha_i & d_i \\\\ 
0 & 0 & 0 & 1 
\\end{bmatrix}$$
The complete end-effector pose in world coordinates is:
$$^0T_4 = \\,^0T_1 \\cdot \\,^1T_2 \\cdot \\,^2T_3 \\cdot \\,^3T_4$$
Inverse kinematics equations were solved analytically to calculate joint angles $(\\theta_1, \\theta_2, \\theta_3, \\theta_4)$ from detected target $(X, Y, Z)$ spatial coordinates.

---

## Computer Vision Pipeline & Real-Time Performance
* **Color-Space Segmentation:** Converted live video feed to the HSV color space for robust illumination invariance.
* **Morphological Filtering:** Applied opening and closing kernel operations to eliminate sensor noise.
* **Target Centroid Extraction:**
  $$\\bar{x} = \\frac{M_{10}}{M_{00}}, \\quad \\bar{y} = \\frac{M_{01}}{M_{00}} \\quad \\text{where } M_{pq} = \\sum_x \\sum_y x^p y^q I(x, y)$$
* **Sorting Accuracy:** **96.8%** successful pick-and-place operations on multi-colored moving conveyor payloads.
* **System Latency:** End-to-end vision-to-motion response time of **$< 150\\,\\text{ms}$** operating at **30 FPS**.`,

    'tourist-planner': `# Planificateur de Visites Touristiques

**Réalisé par :** Khadija DADI, Chaimae EL OUAHABI, Mohammed EL BARAKA
**Encadré par :** Pr. Hamid HRIMECH

---

## Introduction
Ce projet, initié par le Professeur Hamid HRIMECH de l'École EMINES (UM6P), consiste en le développement d'un système informatique dédié à la planification et l'optimisation des itinéraires touristiques. Les utilisateurs peuvent spécifier une ville de destination et une liste de sites touristiques, et la plateforme calcule automatiquement la trajectoire optimale pour chaque journée via un algorithme basé sur le Problème du Voyageur de Commerce (TSP).

---

## Cahier des Charges

### Fonctionnalités Principales
1. **Enregistrement des utilisateurs** : Création de comptes avec authentification sécurisée (JWT).
2. **Gestion des destinations** : Ajout, modification et suppression de destinations touristiques.
3. **Planification de visites** : Optimisation automatique des trajets tenant compte de la distance, des conditions de circulation et du mode de transport. Affichage sur carte interactive (Google Maps).
4. **Historique du voyage** : Enregistrement automatique et consultation de tous les voyages précédents.
5. **Flexibilité** : Possibilité d'ajouter des fonctionnalités supplémentaires pour améliorer l'expérience utilisateur.

### Contraintes Techniques
- Compatibilité multi-dispositifs (ordinateurs, tablettes, smartphones) et multi-navigateurs.
- Gestion de bases de données massives (touristes et sites touristiques).
- Utilisation de logiciels open source pour minimiser les coûts.

---

## Architecture Technique

### Stack Technologique
| Composant | Technologie |
| :--- | :--- |
| **Frontend** | React (interfaces interactives, cartes dynamiques) |
| **Backend** | Django (Python, logique métier robuste) |
| **Base de données** | MySQL |
| **API cartographique** | Google Maps API |
| **Communication** | Axios, urllib |
| **Authentification** | JWT (JSON Web Token) |

### Architecture Modulaire
\`\`\`
FRONTEND (React) ←→ REQUÊTES HTTP ←→ BACKEND (Django)
       ↕                                    ↕
   USER INTERFACE                    BASE DE DONNÉES (MySQL)
       ↕                                    ↕
  GOOGLE MAPS API  ←→  REQUÊTES HTTP  ←→  GOOGLE MAPS API
\`\`\`

---

## Algorithme d'Optimisation (TSP)

L'enjeu central du projet est la résolution du **Problème du Voyageur de Commerce (Traveling Salesman Problem)** pour minimiser la distance totale parcourue en visitant tous les sites souhaités.

### Logique de l'algorithme
1. **Formatage des données** pour compatibilité avec l'API Google Maps.
2. **Génération exhaustive des permutations** de waypoints, intégrant points de départ et d'arrivée.
3. **Obtention des temps de trajet** via l'API Google Maps pour chaque paire de points.
4. **Sélection du meilleur itinéraire** minimisant la durée totale du voyage.

### Paramètres d'entrée
- Point de départ et d'arrivée
- Points de passage (waypoints)
- Mode de transport (à pied, en voiture, etc.)
- Heure de départ

---

## Difficultés Rencontrées

### 1. Obtention des données géographiques
- L'API Google Maps requiert des informations de paiement.
- L'API Overpass a échoué en raison de surcharges des serveurs OSM.
- Les fichiers OSM (.osm.pbf) nécessitaient Osmium Tool, non disponible sur Windows.
- **Solution :** Adoption pragmatique de Google Maps malgré les contraintes de coût.

### 2. Liaison Frontend-Backend
- Communication React-Django via Axios et Django REST Framework.
- La fonctionnalité d'authentification a été correctement liée.
- La transmission des données pour la génération d'itinéraire optimisé a rencontré des obstacles supplémentaires.

---

## Conclusion
Le projet a permis d'acquérir une compréhension approfondie des exigences techniques du développement web full-stack, de la gestion de projet et de l'implémentation d'algorithmes d'optimisation combinatoire dans un contexte applicatif réel.`,

    'teachy-platform': `# Teachy : Plateforme d'Apprentissage des Langues en Ligne

**Auteurs / Réalisé par :** Mohammed EL BARAKA, Mohammed Amine TALHI  
**Institution :** UM6P - EMINES (School of Industrial Management)  
**Encadré par :** Nicolas CHEIMANOFF  
**Date :** 30 Mai 2024  
**Projet :** Acte d'Entreprendre  

---

## 1. Résumé Exécutif

Teachy est une plateforme innovante d'apprentissage des langues en ligne conçue pour connecter les apprenants avec des locuteurs natifs et des enseignants qualifiés à travers le monde. Développé dans le cadre du projet d'entrepreneuriat ("Rapport d'ACTE D'ENTREPRENDRE") à l'Université Mohammed VI Polytechnique (UM6P), Teachy comble le fossé critique de l'apprentissage linguistique traditionnel et numérique : l'absence de pratique conversationnelle authentique, interactive et personnalisée. En combinant des ressources pédagogiques structurées avec une immersion en direct, Teachy vise à devenir la plateforme de référence pour les apprenants et les créateurs de contenu éducatif.

---

## 2. Contexte et Problématique

### 2.1 Le Besoin Global en Compétences Linguistiques
Dans un monde de plus en plus globalisé, la maîtrise des langues étrangères est une compétence essentielle pour s'intégrer dans des environnements multiculturels, améliorer les perspectives de carrière et enrichir les expériences personnelles. Cependant, les méthodes traditionnelles échouent souvent à fournir l'interactivité et l'immersion nécessaires pour maintenir la motivation et l'efficacité de l'apprenant. Les contraintes de temps, les barrières financières et le manque d'accès à des locuteurs natifs constituent des obstacles majeurs.

### 2.2 Limites des Solutions Actuelles
Les solutions numériques actuelles présentent des limites significatives :
- **Manque d'interaction en temps réel :** Les apprenants souffrent de l'absence de conversations réelles avec des locuteurs natifs.
- **Contenu monotone et générique :** Les plateformes existantes s'appuient sur des exercices répétitifs et des leçons standardisées non adaptées aux besoins individuels.
- **Déséquilibre entre structure et interactivité :** Les solutions sont souvent soit très structurées mais sans interaction, soit interactives mais sans rigueur pédagogique.

---

## 3. La Solution Teachy

### 3.1 Proposition de Valeur Unique
> "Connecter les apprenants de langues avec des enseignants et des locuteurs natifs du monde entier pour une immersion linguistique interactive et personnalisée."

Teachy révolutionne l'apprentissage des langues en intégrant harmonieusement une interactivité dynamique avec des cours méthodiquement structurés couvrant la grammaire, le vocabulaire, la prononciation et le contexte culturel.

### 3.2 Fonctionnalités Clés de la Plateforme
- **Conversations en Direct (Vidéo & Chat) :** Interaction directe avec des enseignants qualifiés et locuteurs natifs, offrant un retour immédiat et corrigeant la prononciation et les expressions idiomatiques.
- **Cours Personnalisés :** Plans d'études sur mesure générés selon le niveau, les objectifs et les préférences de l'apprenant.
- **Ressources Pédagogiques Variées :** Bibliothèque riche de vidéos éducatives, exercices interactifs, fiches de vocabulaire, articles, podcasts et jeux linguistiques.
- **Séances de Tutorat Privé :** Accompagnement individualisé par des éducateurs qualifiés pour surmonter les points de blocage.
- **Suivi des Progrès :** Outils d'évaluation intégrés pour mesurer l'évolution, définir des objectifs et adapter les méthodes.
- **Communauté Mondiale & Partage Culturel :** Forums, groupes de conversation et projets collaboratifs favorisant l'échange culturel.

**Domaines linguistiques pris en charge :**
- Anglais
- Espagnol
- Français
- Mandarin
- Italien

---

## 4. Modèle Économique & Stratégie

### 4.1 Segments de Clientèle
1. **Apprenants Individuels :** Étudiants et professionnels cherchant une flexibilité d'accès 24/7 à des cours personnalisés.
2. **Établissements Éducatifs :** Écoles et universités utilisant la plateforme comme complément pédagogique.
3. **Touristes et Voyageurs :** Personnes préparant un séjour à l'étranger.
4. **Expatriés et Immigrants :** Personnes en phase d'intégration socioprofessionnelle.

### 4.2 Sources de Revenus & Structure des Coûts
- **Revenus :**
  - Abonnements mensuels ou annuels pour particuliers.
  - Licences institutionnelles pour établissements scolaires.
  - Forfaits d'entreprise pour la formation des collaborateurs.
  - Sponsoring et partenariats.
  - Tarification indicative : 20 à 100 DH par participant.
- **Coûts :**
  - Développement, hébergement et maintenance technique de la plateforme.
  - Rémunération des tuteurs et développeurs.
  - Marketing, acquisition client et communication.

### 4.3 Canaux & Indicateurs de Performance (KPIs)
- Site Web & Application Mobile.
- Partenariats institutionnels et campagnes digitales.
- KPIs : Utilisateurs Actifs Mensuels (MAU), Taux de Rétention, Taux de Satisfaction Utilisateur.

---

## 5. Analyse Concurrentielle

| Fonctionnalité | Teachy | Duolingo | Babbel | Coursera |
| :--- | :---: | :---: | :---: | :---: |
| **Technologie & UI** | ✔ | ✔ | ✔ | ✔ |
| **Prix & Modèle Économique** | ✔ | ✔ | ✘ | ✔ |
| **Support & Assistance** | ✔ | ✔ | ✔ | ✘ |
| **Communauté & Interaction** | ✔ | ✘ | ✘ | ✘ |
| **Interactivité & Immersion** | ✔ | ✘ | ✔ | ✘ |

---

## 6. Partenariats Stratégiques

- **Experts Linguistiques :** 3 professeurs de langues, 2 experts en didactique des langues, 2 étudiants en Master de linguistique appliquée.
- **Instituts & Laboratoires :** Alliances avec le **Codex Center de Benguerir** et le **Language Lab de l'UM6P**.
- **Établissements Éducatifs :** Intégration dans les programmes scolaires et universitaires.
- **Enseignants Indépendants :** Création et publication de contenus propres sur la plateforme.

---

## 7. Défis Rencontrés & Perspectives

1. **Implémentation Technique :** Conception UX/UI, architecture logicielle, gestion de base de données, sécurité et infrastructure serveur.
2. **Adoption Utilisateur :** Convaincre les apprenants habitués aux cours en présentiel (40% de préférence en présentiel selon les sondages).
3. **Négociations Partenaires :** Complexité de signature avec certains acteurs majeurs (ex. Centre de Langue Américain ayant privilégié sa propre solution interne).

---

## 8. Conclusion

Teachy se positionne à l'avant-garde de l'éducation linguistique en ligne grâce à son engagement envers l'innovation, l'immersion interactive et l'échange culturel international.`,

    'biomass-co2-nareva': `# Potentiel de l’Exploitation de la Biomasse pour Valoriser le CO2 Biogénique au Maroc

**Client Industriel :** NAREVA  
**Auteur / Équipe de projet :** Mohammed EL BARAKA & Équipe (EMINES - UM6P)  
**Date de Soutenance :** 01 Mars 2024  
**Discipline :** Initiation au Management Industriel & Ingénierie des Procédés Énergétiques  

---

## 1. Contexte & Mission Industrielle

### 1.1 Le Client : NAREVA
NAREVA est un acteur marocain de référence dans le secteur de l'énergie et la production électrique à partir de ressources renouvelables. NAREVA ambitionne de développer la filière **Power-to-X** au Maroc pour produire des e-carburants durables (*electro-fuels / e-fuels*) à destination des marchés européens.

### 1.2 Cahier des Charges & Objectifs
* **Cible de production :** Capturer et valoriser **150 000 tonnes (150 kt) de $CO_2$ biogénique par an**.
* **Produit fini :** Synthèse d'**e-méthanol vert** à partir de $CO_2$ biogénique et d'hydrogène vert ($H_2$) issu d'électrolyse renouvelable.
* **Périmètre d'étude :**
  1. Évaluation et cartographie de l'approvisionnement en biomasse au Maroc.
  2. Benchmark technologique des procédés de captage de $CO_2$ (Précombustion, Oxycombustion, Post-combustion).
  3. Dimensionnement énergétique et modélisation économique (CAPEX, OPEX, Coût actualisé du $CO_2$ / LCO2, Coût nivelé du E-méthanol).
  4. Analyse du marché européen, régulation (EU-ETS, MACF/CBAM, ReFuelEU Aviation, FuelEU Maritime) et viabilité financière.

---

## 2. Approvisionnement en Biomasse au Maroc

Quatre gisements majeurs de biomasse ont été évalués selon 5 critères : Teneur en carbone, localisation, coût d'acquisition, réglementation et tendance d'évolution.

| Type de Biomasse | Teneur en Carbone | Coût d'Acquisition | Verdict & Justification |
| :--- | :--- | :--- | :--- |
| **Bois Forestier** | Élevée (1kg bois $\\rightarrow$ 1.83kg $CO_2$) | Variable / Restreint | ❌ **Rejeté :** Secteur en crise, surexploitation (3x la capacité), coupe soumise à permis strict (HCEFLCD/ANEF). |
| **Boues d'Épuration (STEP)** | 19% C (38% MOS) | 800 - 900 MAD/t | ⚠️ **Secondaire :** 27 000 tMOS/an exploitable, gisement localisé (Casa-Settat, Rabat, Marrakech). |
| **Déchets Ménagers (DMA)** | Variable (Casa: 122 kt C, Rabat: 85 kt C) | ~1500 MAD/t (TMB + transport) | ⚠️ **Complexe :** Tri mécanobiologique et gestion contractuelle déléguée (Ecomed, Suez, Pizzorno). |
| **Fumier Bovin** | **32% de Carbone (MS)** | **215 - 280 MAD/t** | ✅ **Sélectionné :** Gisement massif (40.3 Mt en 2022 $\\rightarrow$ 45.6 Mt en 2030), disponibilité rurale concentrée (Casa-Settat, Rabat-Salé-Kénitra, Fès-Meknès). |

### Logistique & Prétraitement du Fumier :
* **Besoin quotidien :** 293 t/jour de biomasse brute.
* **Flotte logistique :** 8 camions de 40t (CAPEX: 2.535 MMAD HT, OPEX: 75 000 MAD/an).
* **Unité de prétraitement :** 6 séchoirs (5 t/h, 335 kW) + 3 broyeurs (10 t/h, 22 kW). Conformité Loi N° 28-00 sur les déchets.

---

## 3. Benchmark Technologique du Captage de $CO_2$ (150 kt/an)

| Technologie | Principe & Procédé | TRL | Coût Actualisé ($/t $CO_2$) | Bilan Énergétique & Technique |
| :--- | :--- | :--- | :--- | :--- |
| **Post-combustion (Amine MEA)** | Centrale CHP Biomasse (58.6 MW) + Absorption chimique aux amines | **TRL 9** | **119 USD/tonne** | **Choix Optimal.** Chaleur et électricité coproduites. Surplus d'électricité revendu à 53 $/MWh. CAPEX: 64 M$. |
| **Oxycombustion** | Combustion en atmosphère $O_2/CO_2$ recyclé + Unité de séparation d'air (USA) | **TRL 7** | **130 USD/tonne** | CAPEX élevé (90.56 M$), besoin énergétique interne de 56.9 GWh/an (USA + compression). |
| **Précombustion (Gazéification)** | Gazéification en syngas ($CO + H_2$) + Water-gas shift + Adsorption PSA | **TRL 8** | **180 USD/tonne** | Rendement dépendant de la valorisation de l'hydrogène coproduit (1.26 $/kg). |

---

## 4. Use-Case Industriel : Synthèse d'E-Méthanol Vert

$$\\text{CO}_2 + 3\\text{H}_2 \\xrightarrow{\\text{Catalyseur Cu/ZnO/Al}_2\\text{O}_3} \\text{CH}_3\\text{OH} + \\text{H}_2\\text{O}$$

### 4.1 Bilan Matière & Énergie de l'Installation
* **Entrées :**
  - **$CO_2$ biogénique :** 150 000 t/an (capté par post-combustion à partir de 112 500 t/an de biomasse séchée).
  - **Hydrogène vert ($H_2$) :** 20 600 t/an issu d'un électrolyseur de 58.6 MW alimenté par un parc éolien NAREVA de 100 MW.
* **Sortie :**
  - **E-Méthanol :** **103 840 tonnes / an**.

### 4.2 Évaluation Économique & Structure des Coûts
* **Coût actualisé de l'E-Méthanol :** **815 USD / tonne** (avec un coût $H_2$ de 3.03 $/kg et $CO_2$ à 118 $/t).
* **Prix du marché méthanol fossile :** 200 à 550 USD / tonne.
* **Surcharge verte :** +48% à +60% compensée par les mécanismes réglementaires européens.

---

## 5. Marché, Réglementation & Mécanismes de Soutien

1. **ReFuelEU Aviation & FuelEU Maritime :** Mandats progressifs imposant l'incorporation de carburants de synthèse (e-fuels) dans le transport aérien (10% en 2040, 35% en 2050) et maritime.
2. **Mécanisme d'Ajustement Carbone aux Frontières (MACF / CBAM) & EU-ETS :** Avec un quota $CO_2$ oscillant autour de 90 €/t, l'utilisation de $CO_2$ biogénique certifié exonère les producteurs des taxes carbone européennes à l'importation.
3. **Pacte Vert & Net Zero Industry Act :** Contrats carbone pour différence (*Carbon Contracts for Difference*) garantissant la rentabilité des pionniers du Power-to-X au Maroc.

---

## 6. Conclusion du Projet

L'étude valide la faisabilité technico-économique de l'écosystème proposé :
1. **Source :** Fumier bovin collecté dans l'axe Casablanca-Rabat-Gharb (7.8 M$/an).
2. **Captage :** Centrale CHP biomasse post-combustion aux amines (17.7 M$/an amorti, $119/t $CO_2$).
3. **Synthèse Power-to-X :** Production de 103.8 kt/an d'e-méthanol vert prêt à l'export vers les hubs maritimes et industriels européens.`,

    'sociotechnical-controversy-africa': `# Carte Mentale / Poster : Controverse Sociotechnique

**Sujet de recherche :** *« Est-ce que la technocratie est le nouveau souffle du développement africain ? »*  
**Auteurs / Réalisé par :** BOULLAM Zakaria, LOTFI Imad, BELLOUAHI Mohamed, MHAIDI El Mehdi, EL BARAKA Mohammed  
**Institution :** UM6P - EMINES (School of Industrial Management)  
**Date :** Mai 2024  
**Discipline :** Analyse des Controverses Sociotechniques & Développement Économique  

---

## 1. Définition & Cadrage de la Controverse

### 1.1 Qu'est-ce que la Technocratie ?
La technocratie est une forme de gouvernement et de prise de décision où la place des **experts techniques**, ingénieurs, économistes et scientifiques est centrale. Les décisions reposent sur des données empiriques, des modèles analytiques et des méthodologies rationnelles plutôt que sur des arbitrages partisans.
* **Le profil technocratique exclut :** les politiciens de carrière, les idéologues partisans, les polémistes et les figures purement médiatiques.

### 1.2 La Tension Centrale (Amorce)
La technocratie oscille en Afrique entre deux pôles :
1. **La louange :** Reconnue pour son efficacité opérationnelle, sa rigueur d'ingénierie et sa capacité à résoudre des problèmes d'infrastructures et de gestion de crise complexes.
2. **La critique :** Décriée pour son risque de déficit démocratique, son risque d'élitisme et son potentiel aveuglement face aux réalités sociales, culturelles et humaines des populations locales.

---

## 2. Cartographie des Défis & Axes de Développement

### A. Faible Croissance Économique
* Instabilité de la gouvernance et volatilité institutionnelle.
* Non-diversification des secteurs économiques et dépendance aux matières premières.
* Sous-investissement chronique dans le capital humain et l'enseignement supérieur.
* Incohésion sociale et fragilité des processus de réconciliation nationale.
* Gestion conflictuelle et non planifiée des ressources naturelles.
* Présence de corruption systémique entravant les investissements productifs.

### B. Sécurité Alimentaire & Agriculture
* Manque critique d'infrastructures logistiques pour le transport et la conservation des denrées.
* Faible industrialisation du secteur agricole et dépendance aux méthodes traditionnelles.
* Vulnérabilité extrême face aux chocs climatiques (sécheresses, inondations).
* Trappes de pauvreté limitant l'accès aux intrants modernes et aux investissements technologiques.

### C. Conflits Politiques & Souveraineté
* Déficit de pression et de régulation internationale efficace.
* Dépendance financière et stratégique vis-à-vis des institutions non-africaines.
* Mauvaise gestion des tensions territoriales et politiques héritées de l'histoire.
* Faiblesse de l'intégration économique et de l'esprit d'unité panafricaine.

### D. Cohésion Sociale & Éducation
* Taux d'analphabétisme élevé et inégalités d'accès à une formation de qualité.
* Érosion des budgets sociaux due aux arbitrages macroéconomiques restrictifs.
* Fractures territoriales et disparités d'infrastructures entre métropoles et zones rurales.
* Tensions intercommunautaires exploitées lors des crises économiques.

### E. Santé Publique & Résilience Sanitaire
* Faiblesse de l'engagement politique prioritaire pour la santé universelle.
* Sous-investissement chronique dans les infrastructures hospitalières.
* Déficit en équipements médicaux de pointe et en chaînes d'approvisionnement pharmaceutiques locales.
* Fuite des cerveaux médicaux et inégalités majeures d'accès aux soins.

---

## 3. Cartographie Multi-Acteurs

| Catégorie d'Acteurs | Exemples & Rôles |
| :--- | :--- |
| **Technocrates de Formation & Praticiens** | <ul><li>**Ingénieurs d'iCow :** Agritech mobile révolutionnant l'élevage au Kenya</li><li>**Mehdi Jomaa :** Premier ministre technocrate de transition en Tunisie</li><li>**Hazim El Beblawi :** Économiste et chef de gouvernement égyptien</li><li>**Paul Kagame :** Modèle de planification méthodique et de digitalisation au Rwanda</li><li>**Zweli Mkhize :** Médecin et gestionnaire de crise sanitaire en Afrique du Sud</li><li>**Fouzi Lekjaa :** Haut fonctionnaire du budget et bâtisseur d'infrastructures sportives au Maroc</li></ul> |
| **Figures Politiques, Sportives & Société Civile** | <ul><li>**George Weah / Nelson Mandela :** Légitimité charismatique et réconciliation</li><li>**Walid Regragui :** Management humain, leadership et cohésion d'équipe</li><li>**Haile Gebrselassie / Didier Drogba / Samuel Eto'o :** Investissements philanthropiques et influence sociale</li><li>**Muhammadu Buhari / Mokgweetsi Masisi :** Politiques institutionnelles traditionnelles</li></ul> |
| **Organisations Intergouvernementales & Régionales** | <ul><li>**Union Africaine (UA) & CEDEAO :** Intégration économique et cadre de gouvernance</li><li>**IGAD & SADC :** Coopération régionale et résolution de conflits</li><li>**ONU & OMS (WHO) :** Normes sanitaires internationales et soutien au développement</li><li>**PPAAO & AGRA :** Programmes d'accélération de la productivité agricole africaine</li></ul> |

---

## 4. Synthèse & Conclusion

La technocratie ne constitue pas une panacée isolée mais un **levier d'accélération indispensable** lorsqu'elle s'articule avec des institutions démocratiques inclusives, garantissant une vision technique d'excellence au service de la justice sociale et du progrès humain en Afrique.`,

    'vsm-ciam-steel': `# Système de Production et Logistique : Value Stream Mapping — Usine CIAM

**Institution :** EMINES – School of Industrial Management  
**Discipline :** Systèmes de Production, Logistique Industrielle & Lean Manufacturing  
**Date :** Novembre 2024  
**Équipe de projet :** ElMahdi ELBAKKAR, Abderrahman YOUSFI, Adam EL YAAGOUBI, Mohammed EL BARAKA, Amine ENNADZIM, Samia AMAHMID, Hamza ELMORJANI, Zakaria ET TORI, ElMehdi ER-RAGABI, Ammar HADDAD  

---

## 1. Présentation de l'Entreprise & Enjeux Industriels

### 1.1 Contexte Industriel de l'Usine CIAM
L'usine sidérurgique CIAM est spécialisée dans la transformation de billettes d'acier en produits laminés marchands :
* **Matières premières :** Billettes d’acier (60% importées via le port, 40% approvisionnement local).
* **Produits finis :** Ronds à béton et fils de machine destinés à l'industrie automobile, au BTP et à la construction.
* **Capacité actuelle :** **840 000 tonnes / an**.
* **Demande prévisionnelle du marché :** **1 000 000 tonnes / an** (+19% de croissance à absorber).

### 1.2 Matrice des Objectifs Stratégiques

| Axe de Performance | Situation Initiale | Objectif Cible VSD |
| :--- | :--- | :--- |
| **Capacité annuelle** | 840 000 tonnes/an | **1 000 000 tonnes/an (+19%)** |
| **Délais de livraison** | 5 semaines | **1,25 semaine (-75%)** |
| **Ratio Temps Valeur Ajoutée (VA)** | **40% VA** (60% Non-VA) | **> 75% Temps VA** |
| **Disponibilité des équipements critiques** | Ripeur à 50%, compacteuse instable | **Taux de Rendement Synthétique (TRS) > 85%** |
| **Stocks intermédiaires (WIP)** | Encombrement et stocks de crochets saturés | **Flux tiré / Juste-à-Temps piloté par ERP** |
| **Conformité Qualité Nuances F3/F4** | Taux d'échec traction jusqu'à 44% | **Zéro Défaut / Taux de conformité > 98%** |

---

## 2. Diagnostic Qualité & Propriétés Mécaniques

Tests de caractérisation mécanique normalisés réalisés sur les deux nuances phares :
* $R_e$ : Limite supérieure d'écoulement ($N/mm^2$)
* $R_m$ : Résistance à la traction ($N/mm^2$)
* $A(\%)$ : Allongement à la rupture sur $L_0 = 5d$

| Nuance d'Acier | Limite d'écoulement $R_e$ | Résistance à la Traction $R_m$ | Allongement à la Rupture $A(\%)$ |
| :--- | :---: | :---: | :---: |
| **Nuance F3** | **100% Conforme** | **71% Conforme** (29% Rebuts) | **98% Conforme** (2% Rebuts) |
| **Nuance F4** | **69% Conforme** (31% Rebuts) | **56% Conforme** (44% Rebuts) | **80% Conforme** (20% Rebuts) |

*Causes racines identifiées :* Manque de régulation thermique du four de préchauffage, déviations géométriques au laminage primaire et fortes vibrations du train finisseur.

---

## 3. Value Stream Mapping (VSM — Cartographie de l'État Actuel)

$$\\text{Takt Time} = \\frac{\\text{Temps d'ouverture hebdomadaire}}{\\text{Demande hebdomadaire}}$$

* **Goulot d'étranglement majeur :** Capacité thermique et temps d'enfournement/défournement du four ($>\\text{Takt Time}$).
* **Pertes de flux majeures :**
  1. *Amont :* Ripeur de transfert sous-dimensionné (disponibilité 50%).
  2. *Laminoir :* Pannes récurrentes, déviations train primaire, absence d'amortissement de vibrations sur train finisseur.
  3. *Zone aval :* Défaillances répétées de la compacteuse entraînant des retouches manuelles et rupture récurrente d'étiquetage.
  4. *Flux d'information :* Ordonnancement manuel et absence de synchronisation entre service commercial et gestion de production.

---

## 4. Analyse des Causes Racines : Ishikawa & Diagramme des 5M

### 4.1 Ishikawa Synthétique (Délai, Qualité, Coût)
* **Milieu :** Pénibilité thermique, encombrement par déchets métalliques, dispersion spatiale des parcs de stockage.
* **Matière :** Variations dimensionnelles et chimiques des billettes importées, déformations lors du transport portuaire.
* **Machines :** Pannes imprévisibles, désynchronisation des cadences, manque de capteurs temps réel (IoT).
* **Méthodes :** Absence de SMED pour les changements de gamme, procédures administratives manuelles lentes, gestion anarchique des crochets de transit.
* **Main d'œuvre :** Déplacements inutiles, retards de coordination Maintenance-Production, formation insuffisante aux nouveaux standards.

---

## 5. Plan d'Action Structuré & Value Stream Design (VSD)

### 5.1 Plan d'Action par Horizon
* **Court Terme (Quick Wins) :** Déploiement des chantiers **5S**, application de la méthode **SMED** sur les cisailles/outils de coupe, maintenance préventive systématique sur le ripeur et la compacteuse, élimination des stocks dormants.
* **Moyen Terme :** Réingénierie des flux de transfert, installation d'échangeurs pour la **récupération de chaleur fatale du four**, standardisation des contrôles qualité à réception.
* **Long Terme :** Implémentation d'un **ERP industriel intégré**, automatisation du cerclage/étiquetage RFID, intégration d'infrastructures de **cogénération énergétique** et ajout d'un ripeur redondant.

### 5.2 Résultats Attendus de l'État Futur Cible (VSD)
1. Atteinte de la cible annuelle de **1 000 000 tonnes/an** sans surcoût d'exploitation majeur.
2. Compression du Lead Time de **5 semaines à 1,25 semaine** (-75%).
3. Élimination des goulots thermiques et mécaniques, propulsant le taux de VA à plus de **75%**.`,

    'pg-brand-management-shadowing': `# Shadowing Internship Report: Brand Management & Operations

**Company:** Procter & Gamble Morocco & Algeria (Casablanca Office)  
**Division:** Hair Care Brand Management & Multi-Functional Teams (MFT)  
**Supervisor Shadowed:** Laila — Brand Manager, Hair Care  
**Date:** May 2025  

---

## 1. Executive Summary & Corporate Ecosystem

This report synthesizes the executive frameworks, cross-functional operations, and commercial mechanics observed during an intensive shadowing internship at **Procter & Gamble (P&G) Morocco & Algeria** in Casablanca.

* **Heritage & Local Footprint:** Established in Morocco for **67 years**.
* **Manufacturing Hub:** Ain Sebaa Factory (Casablanca) producing Ariel and Tide powder detergents for Morocco and regional exports (~$5 Million exported to Algeria).
* **Distribution Scale (via Dislog Group):**
  * **Modern Trade (MT):** 4,000+ stores (Hypermarkets: Marjane, Carrefour, Aswak Assalam; Discounters: BIM, Kazyon).
  * **Traditional Trade (TT / Moul L7anout):** 50,000+ High Frequency Stores (HFS) accounting for **70% of Hair Care sales volume**.

---

## 2. Multi-Functional Team (MFT) Structure & Governance

P&G operates through autonomous, highly coordinated Multi-Functional Teams (MFT) where the Brand Manager acts as a **mini-CEO** orchestrating category growth:
* **Brand Manager (BM):** Strategy, innovation, P&L ownership, and regional leadership interface (AMA/NWA).
* **Market Strategy & Planning (MS&P):** Commercial execution bridge between Brand Strategy and Sales.
* **Finance & Accounting (F&A):** Profit margin architecture, rolling monthly/quarterly forecasting, and factory cost variance tracking.
* **Supply Network Operations (SNO):** End-to-end demand planning, safety stock sizing, and logistics crisis resolution.
* **Brand Operations (BOP):** Agency negotiation, in-store POS installations, and campaign theatralisation.

---

## 3. Strategic Frameworks & Commercial Execution

### 3.1 The 5 Vectors of Superiority & Moments of Truth
1. **Packaging:** Structural design, shelf impact, and premium feel.
2. **Product (SMOT — Second Moment of Truth):** In-home consumer delight and formulation superiority.
3. **Retail Execution (FMOT — First Moment of Truth):** In-store placement, visibility, and pricing compliance.
4. **Awareness & Communication (ZMOT — Zero Moment of Truth):** Digital storytelling, influencer partnerships (KOLs), and TikTok/Reels/YouTube media planning ($250k budget).

### 3.2 The Pyramid of Sales (DPSM Framework)
$$\\text{Share of Shelf} \\approx \\text{Share of Market}$$
* **D — Distribution:** Maximizing weighted & numeric distribution across Modern Trade and Traditional Trade.
* **P — Pricing:** Setting competitive list prices and trade margins (Ariel 4L at 100 DH vs. Magix CPI = 167%).
* **S — Shelving:** Eye-level planogram compliance (e.g., Head & Shoulders holding ~33% market share with 35% shelf space).
* **M — Merchandising:** Driving impulse purchases via secondary displays, parasite merchandising (Gillette in hair aisle), and promotional bundles.

---

## 4. Supply Network Operations (SNO) & Crisis Management

* **Gillette Out-of-Stock Crisis:** Managed emergency batch injection (2,000 units/store), absorbed working capital to protect market share against BIC, and applied 10–15% tactical discounts.
* **Dynamic SNO Planning:** Sizing safety stocks monthly, modeling promotional uplift (TPR), and coordinating multi-origin sourcing (Bangkok vs. Bangalore vs. Europe).

---

## 5. Supplementary Analytical Modeling: Linear Regression

Parameter estimation for price elasticity and promotional uplift:
$$\\hat{\\beta} = \\frac{\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sum_{i=1}^n (x_i - \\bar{x})^2}$$
This mathematical foundation underpins baseline sales decomposition, ROI modeling in Excel/Power BI, and forecasting accuracy across SKU portfolios.

---

## 6. Key P&G Business Metrics Summary

* **Heritage:** 67 Years in Morocco
* **Retail Reach:** 4,000+ MT Stores / 50,000+ TT Shops
* **Hair Care Channel Split:** TT: 70% | MT: 23% | Preferred Accounts: 9%
* **Market Leader:** Head & Shoulders holding ~33% Market Share (35% Shelf Share)
* **Digital Media Budget:** $250,000 across digital video & social media platforms`,

    'redstart-reusable-booster': `# Redstart: A Lightweight Reusable Rocket Booster Simulation

**Coursework Project:** Physics Simulation, Optimal Control & Trajectory Optimization  
**Supervisor / Academic Director:** Sébastien Boisgérault (Mines Paris - PSL / EMINES)  
**Environment & Tech Stack:** Python, SciPy, NumPy, Autograd, SymPy, Marimo, Pixi, Matplotlib  
**GitHub Repository:** [github.com/mohammed-el-baraka/redstart-reusable-booster](https://github.com/mohammed-el-baraka/redstart-reusable-booster)  

---

## 1. Project Overview & Physical Model

Redstart is an advanced physics simulation and optimal control systems project focused on modeling the 2D descent, attitude dynamics, and powered soft landing of a reusable rocket booster (inspired by SpaceX Falcon 9 / Falcon Heavy launch vehicles).

### Physical Parameters & Specifications:
* **Booster Mass:** $M = 1\\,\\text{kg}$
* **Total Length:** $2\\ell = 2\\,\\text{m}$ (half-length $\\ell = 1\\,\\text{m}$)
* **Gravitational Acceleration:** $g = 1\\,\\text{m/s}^2$
* **Moment of Inertia:** Modeled as a uniform rigid cylindrical rod rotating about its center of mass:
  $$J = \\frac{1}{3} M \\ell^2 = \\frac{1}{3}\\,\\text{kg}\\cdot\\text{m}^2$$

---

## 2. Mathematical Modeling & Dynamical Derivations

### 2.1 Gimbaled Reactor Thrust Vectoring
The rocket engine at the base is orientable with gimbal angle $\\phi(t)$ and variable thrust amplitude $f(t)$. In the local booster frame tilted by angle $\\theta(t)$, the 2D global thrust vector is:
$$\\begin{bmatrix} f_x \\\\ f_y \\end{bmatrix} = R(\\theta) \\begin{bmatrix} -f \\sin\\phi \\\\ f \\cos\\phi \\end{bmatrix} = \\begin{bmatrix} -f \\sin(\\theta + \\phi) \\\\ f \\cos(\\theta + \\phi) \\end{bmatrix}$$

### 2.2 Center of Mass Translational Equations of Motion
$$\\ddot{x}(t) = \\frac{f_x}{M} = -\\frac{f(t)}{M} \\sin(\\theta(t) + \\phi(t))$$
$$\\ddot{y}(t) = \\frac{f_y}{M} - g = \\frac{f(t)}{M} \\cos(\\theta(t) + \\phi(t)) - g$$

### 2.3 Rotational Dynamics & Attitude Control
Torque $\\tau$ applied at the base of the booster generates angular acceleration:
$$\\tau(t) = -\\ell f(t) \\sin\\phi(t) \\implies \\ddot{\\theta}(t) = -\\frac{\\ell f(t)}{J} \\sin\\phi(t) = -\\frac{3 f(t)}{M \\ell} \\sin\\phi(t)$$

---

## 3. Simulation Engine & Numerical Integration

The system is formulated as a 6-state continuous ODE dynamical system:
$$\\mathbf{y}(t) = \\begin{bmatrix} x(t) & \\dot{x}(t) & y(t) & \\dot{y}(t) & \\theta(t) & \\dot{\\theta}(t) \\end{bmatrix}^T$$
$$\\dot{\\mathbf{y}}(t) = \\begin{bmatrix} \\dot{x} & -\\frac{f}{M}\\sin(\\theta+\\phi) & \\dot{y} & \\frac{f}{M}\\cos(\\theta+\\phi)-g & \\dot{\\theta} & -\\frac{3f}{M\\ell}\\sin\\phi \\end{bmatrix}^T$$

* Implemented in Python via \`scipy.integrate.solve_ivp\` supporting arbitrary time horizons, initial state vectors, and dynamic state-feedback control laws.

---

## 4. Controlled Soft Landing Trajectory

Formulated and solved the two-point boundary value problem for a vertical soft touchdown:
* **Initial State ($t=0\\,\\text{s}$):** $y(0) = 10\\,\\text{m}, \\quad \\dot{y}(0) = 0\\,\\text{m/s}, \\quad \\theta(0) = 0$
* **Target Landing State ($t=5\\,\\text{s}$):** $y(5) = \\ell = 1\\,\\text{m}, \\quad \\dot{y}(5) = 0\\,\\text{m/s}, \\quad \\theta(5) = 0$
* Derived the optimal polynomial thrust schedule $f(t)$ delivering zero impact velocity and precise zero-tilt touchdown at ground level.

---

## 5. Animation & Video Rendering Pipeline

* Built automated visualizers with \`matplotlib.animation.FuncAnimation\` and \`FFMpegWriter\`.
* Real-time rendering of fuselage spatial coordinates $(x,y)$, attitude tilt $\\theta$, dynamically deflected flame vector $\\phi$, and target landing pad.`,

    'academic-career-success': `# Analyse de la Réussite Académique et Professionnelle

**Projet Statistique — Année Universitaire 2024-2025**  
**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Date de soutenance :** 13 Mai 2025  
**Encadrants :** Prof. Mohamed EL MACHKOURI, Prof. Idir OUASSOU  
**Auteurs (Groupe 11) :** Mohammed EL BARAKA, Yassine BOUAZAMI, Ayoub AGMAH, Mohammed Amine TALHI  

---

## 1. Résumé Exécutif du Projet

Ce projet statistique propose une analyse multidimensionnelle approfondie des déterminants de l'insertion et de la réussite professionnelle des jeunes diplômés universitaires. Fondée sur un jeu de données de **5 000 observations** et **20 variables** (\`education-career-success.csv\`), cette étude explore les interactions entre les performances académiques, les compétences comportementales (*soft skills*), l'expérience pratique (stages et projets), ainsi que les retombées professionnelles (salaire de départ, nombre d'offres d'emploi, satisfaction de carrière et équilibre de vie).

---

## 2. Démarche Méthodologique & Pipeline Statistique

1. **Nettoyage & Standardisation :** Complétude vérifiée (0 valeur manquante) et normalisation *StandardScaler* ($\\mu=0, \\sigma=1$).
2. **Analyse Exploratoire Univariée :** Distributions de l'University GPA (médiane $3.26$), du salaire initial (médiane $\$52,300$), des soft skills (médiane $6.0/10$) et du nombre d'offres (médiane $3.0$).
3. **Analyse Multivariée & Corrélations de Pearson :**
   * Forte corrélation Salaire $\\leftrightarrow$ Nombre d'offres ($r = 0.74$) et GPA ($r = 0.69$).
   * **Orthogonalité fondamentale :** Corrélation quasi-nulle ($r = 0.01$) entre le GPA et le score de Soft Skills, démontrant l'indépendance de ces deux dimensions de compétences.
4. **Tests d'Association & Inférence :**
   * Rejet de l'hypothèse de normalité univariée (Shapiro-Wilk $p < 0.05$).
   * Association significative au test du $\\chi^2$ et V de Cramér ($V = 0.54$ pour Offres $\\leftrightarrow$ Salaire, $V = 0.50$ pour GPA $\\leftrightarrow$ Stages).
5. **Modélisation par Régression Linéaire Multiple :**
   $$\\widehat{\\text{Starting\\_Salary}} = 4\\,234 + 10\\,102 \\cdot \\text{GPA} + 4\\,936 \\cdot \\text{Job\\_Offers} + 49 \\cdot \\text{Internships} + 72 \\cdot \\text{Soft\\_Skills}$$
   * **Performance :** $R^2 = 0.825$ (82.5% de variance expliquée), $\\text{RMSE} = \\$4\\,025.81$, validation croisée 5-fold $R^2 = 0.8260$.
   * **Résidus :** Normalité confirmée (Shapiro-Wilk $p=0.54 > 0.05$) et homoscédasticité validée.

---

## 3. Typologie des Diplômés (Segmentation $k$-Means)

* **Profil 1 — "Les Hauts Potentiels / Élite" :** GPA élevé ($>3.7$), stages multiples ($\ge 5$), soft skills solides $\\rightarrow$ offres maximales ($\ge 4$) et salaires $>\\$65\\,000$.
* **Profil 2 — "Les Praticiens Équilibrés" :** GPA ($3.0-3.4$), forte immersion projets/stages, soft skills élevés $\\rightarrow$ salaires $\$52\\,000-\\$58\\,000$ et haute satisfaction.
* **Profil 3 — "Les Profils Académiques Purs" :** Très bon GPA mais faible score relationnel $\\rightarrow$ levier de négociation initial plus modéré.
* **Profil 4 — "Les Profils en Développement" :** GPA et expériences pratiques plus limités.

---

## 4. Recommandations Pédagogiques & Managériales

* **Étudiants :** Préserver l'excellence académique tout en développant proactivement les soft skills et l'aisance relationnelle dès les premières années.
* **Institutions (EMINES / UM6P) :** Intégrer des modules de négociation, prise de parole et leadership au sein des cursus d'ingénierie.
* **Recruteurs :** Déployer des grilles d'évaluation multicritères équilibrant compétences techniques et potentiel relationnel.`,

    'lithium-brine-extraction': `# Ressources Minérales pour la Transition Énergétique : Production de Lithium à partir de Saumures par Évaporation Naturelle

**Projet Académique & Industriel — EMINES – School of Industrial Management**  
**Institution :** Université Mohammed VI Polytechnique (UM6P)  
**Auteurs (Équipe 10) :** Zakaria ET TORI, Laila MONSIF, Mohammed EL BARAKA, Wissal BELABBESS, Othmane TAHFI  
**Date :** Mai 2025  

---

## 1. Contexte Stratégique & Procédé d'Évaporation Solaire

Le lithium est un métal stratégique incontournable pour les batteries Li-ion de la transition énergétique. L'exploitation des saumures continentales des *salars* sud-américains constitue la filière la plus compétitive :
1. **Pompage :** Extraction souterraine de saumure saturée en sels minéraux.
2. **Évaporation fractionnée :** Cascade de bassins ouverts sur 12 à 18 mois exploitant le rayonnement solaire et le vent.
3. **Précipitation sélective :** Cristallisation progressive des sels (NaCl, KCl, sels de Mg et Ca).
4. **Purification & Conversion :** Chaulage pour élimination du Mg, puis carbonatation au $\\text{Na}_2\\text{CO}_3$ pour obtenir le carbonate de lithium ($\\text{Li}_2\\text{CO}_3$, LCE) de pureté batterie.

---

## 2. Benchmark Industriel Comparatif (6 Projets Majeurs)

| Indicateur / Paramètre | Sal de Vida (Catamarca) | Sal de Olaroz (Jujuy) | Solaroz (Jujuy) |
| :--- | :---: | :---: | :---: |
| **Volume de saumure exploitable** | $1\\,299{,}20\\,\\text{Mm}^3$ (5.6 Mt LCE) | **$3\\,180{,}00\\,\\text{Mm}^3$** (6.4 Mt LCE) | $2\\,008{,}00\\,\\text{Mm}^3$ |
| **Concentration en Lithium** | **$806\\,\\text{mg/L}$** | $630\\,\\text{mg/L}$ | $400\\,\\text{mg/L}$ |
| **Ratio $\\text{Mg}/\\text{Li}$** | **$1{,}5$ (Très favorable)** | $2{,}27$ | $2{,}1$ |
| **Taux de récupération métallique** | **$72\\%$** | $60\\%$ | En cours d'ingénierie |
| **Capacité journalière de traitement** | $19\\,068\\,\\text{m}^3/\\text{jour}$ | **$34\\,054\\,\\text{m}^3/\\text{jour}$** | $12\\,000\\,\\text{m}^3/\\text{jour}$ |
| **Intensité énergétique** | **$24{,}14\\,\\text{MJ/m}^3$** ($5{,}6\\,\\text{GJ/t LCE}$) | $42{,}00\\,\\text{MJ/m}^3$ | N/A |
| **Émissions carbone spécifiques** | $0{,}0138\\,\\text{t CO}_2/\\text{m}^3$ | **$0{,}0021\\,\\text{t CO}_2/\\text{m}^3$** | N/A |
| **CAPEX Total consolidé** | $1\\,321\\,\\text{M USD}$ | **$1\\,044\\,\\text{M USD}$** | $1\\,282{,}6\\,\\text{M USD}$ |
| **OPEX unitaire de production** | **$3\\,200\\,\\text{USD/tonne LCE}$** | $4\\,149\\,\\text{USD/tonne LCE}$ | $4\\,611\\,\\text{USD/tonne LCE}$ |
| **CAPEX spécifique annuel** | **$20\\,000\\,\\text{USD/t/an}$** | $26\\,100\\,\\text{USD/t/an}$ | $32\\,065\\,\\text{USD/t/an}$ |

---

## 3. Analyse des Corrélations Multivariées

* **Rendement Métallique vs Volume :** Pas de corrélation linéaire directe. Le rendement dépend de la géochimie ($\text{Mg}/\text{Li}$) et de la conception des bassins, non de la taille brute du gisement.
* **Teneur en Li vs Échelle :** Corrélation négative modérée ; les salars compacts bénéficient souvent d'une concentration hydrogéologique plus dense.
* **CAPEX vs OPEX :** Corrélation inverse démontrant qu'une intensité d'investissement initiale bien ciblée permet de déployer des technologies sobres et d'abaisser les coûts opérationnels unitaires.

---

## 4. Recommandations Stratégiques

1. **Priorité à la qualité géochimique :** Cibler en priorité des saumures à ratio $\\text{Mg}/\\text{Li} < 2$ pour minimiser la consommation de chaux et les pertes en lithium.
2. **Hybridation DLE :** Coupler l'évaporation solaire avec l'extraction directe du lithium (*Direct Lithium Extraction*) pour hisser les rendements au-delà de $80\\%$ et réduire le temps de cycle de 18 mois à quelques heures.
3. **Décarbonation intégrale :** Alimenter les unités de pompage et de traitement par des champs solaires photovoltaïques dédiés sur site.`,

    'petropolis-landslide-modeling': `# Geospatial Data Preparation & Physically-Based Modeling for Landslide Susceptibility Analysis: Petrópolis, Brazil

**Academic & Research Internship Report — September 2025**  
**Host Institution:** Laboratório de Geotecnologia e Hidrologia, Escola de Engenharia, Universidade Federal Fluminense (UFF), Niterói, RJ, Brazil  
**Home Institution:** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P), Ben Guerir, Morocco  
**Author:** Mohammed EL BARAKA  
**Supervisors:** Dr. Gean Paulo MICHEL (UFF / UFRGS), Dr. Danubia LISBOA (UFF)  

---

## 1. Executive Summary & Geomorphological Context

This research established a high-resolution, computationally validated GIS-to-physics modeling pipeline coupling terrain data engineering with the **USGS TRIGRS v2.1.0** (Transient Rainfall Infiltration and Grid-Based Regional Slope-Stability) model to assess shallow translational landslide hazards across the mountainous municipality of **Petrópolis, Rio de Janeiro, Brazil ($795\\,\\text{km}^2$)**.

* **Serra do Mar Setting:** Steep coastal escarpment subject to catastrophic convective summer downpours (e.g. Feb 15, 2022 disaster: **$>260\\,\\text{mm}$ in 4 hours** triggering hundreds of slope failures).
* **Core Pipeline:**
  1. Geodetic harmonization to **SIRGAS 2000 / UTM Zone 23S (EPSG: 31983)**.
  2. Hydrological conditioning and topographic derivative extraction (slope gradient, D8 flow accumulation, and upslope contributing area $m^2$).
  3. High-resolution LiDAR ($1\\,\\text{m}$, 3.7 GB TIN DEM) computational scalability and memory profiling.
  4. Linux Fortran compilation (\`gfortran -O3\`), input deck (\`tr_in.txt\`) parameterization, and steady-state/transient factor of safety modeling.

---

## 2. Theoretical Mechanics: Infinite Slope Stability & Infiltration

### 2.1 Mohr-Coulomb Limit Equilibrium & Factor of Safety
Shallow translational landslides with failure planes parallel to ground surface at depth $z$:
$$\\tau_f = c' + (\\sigma - u) \\tan \\phi'$$
$$FS = \\frac{c_r + c' + (\\rho_s g z \\cos^2 \\theta - \\rho_w g h \\cos^2 \\theta) \\tan \\phi'}{\\rho_s g z \\sin \\theta \\cos \\theta}$$

### 2.2 Transient Infiltration Dynamics (USGS TRIGRS)
Pore-water pressure response $u(z,t)$ coupled with linearized 1D Richards diffusion:
$$u(z, t) = (z - d)\\gamma_w \\cos^2 \\theta + \\sum_{n=1}^N \\Delta I_n \\cdot \\Psi(z, t - t_n)$$
$$FS_{\\min}(x, y, t) = \\min_{0 \\le z \\le H} \\left\\{ \\frac{\\tan \\phi'}{\\tan \\theta} + \\frac{c' - u(z, t) \\tan \\phi'}{\\rho_s g z \\sin \\theta \\cos \\theta} \\right\\}$$

---

## 3. Geotechnical Parameterization for Petrópolis

| Parameter | Symbol | Adopted Value | Physical Significance |
| :--- | :---: | :---: | :--- |
| **Effective Cohesion** | $c'$ | **$0.0\\,\\text{Pa}$** | Cohesionless saprolite colluvium baseline |
| **Effective Friction Angle** | $\\phi'$ | **$33.0^\\circ$** | Sandy-clay internal friction angle |
| **Saturated Unit Weight** | $\\gamma_{\\text{sat}}$ | **$18.0\\,\\text{kN/m}^3$** | Total saturated soil density |
| **Soil Depth to Bedrock** | $H$ | **$1.5\\,\\text{m}$** | Mean regolith thickness |
| **Hydraulic Conductivity** | $K_s$ | **$1.0 \\times 10^{-6}\\,\\text{m/s}$** | Saturated infiltration rate |
| **Hydraulic Diffusivity** | $D_0$ | **$1.0 \\times 10^{-7}\\,\\text{m}^2/\\text{s}$** | Transmissivity / specific storage ratio |

---

## 4. Modeling Benchmarks: Deterministic vs. Stochastic

| Evaluation Metric | SHALSTAB (Deterministic) | SINMAP (Stochastic) | Synthesis |
| :--- | :---: | :---: | :--- |
| **Success Index ($SuI$)** | $19.55\\%$ | **$94.12\\%$** | SINMAP maximizes hazard coverage |
| **Error Index ($ErI$)** | **$6.35\\%$** | $30.22\\%$ | SHALSTAB minimizes false positives |
| **Efficiency Ratio ($SuI/ErI$)** | **$3.11$** | $3.08$ | Comparable global performance |
| **Catchment Unstable Area** | $\\approx 6\\%$ | $\\approx 30\\%$ | TRIGRS/SHALSTAB provide high spatial specificity |

---

## 5. Technical Highlights & Solved Challenges

1. **CRS Transformation:** Resolved 0-byte clipping failures by harmonizing municipal vectors to EPSG:31983.
2. **Memory Profiling:** Identified 28 GB RAM threshold for uncompressed 3.7 GB LiDAR arrays, establishing tiling protocols for HPC deployment.
3. **Engine Validation:** Verified baseline physical stability: all slopes $\\theta < 33^\\circ$ maintain $FS > 1.0$, while $FS < 1.0$ is restricted strictly to steep rock outcrops $\\theta > 33^\\circ$.`,

    'cotton-hedging-inditex': `# Finance de Marché & Gestion des Risques : Évaluation Quantitative des Stratégies de Couverture du Risque de Prix du Coton

**Modélisation Stochastique, Valorisation Dérivée et Couverture Stratégique**  
**Étude de Cas Appliquée au Groupe Inditex (Zara, Pull&Bear, Massimo Dutti) : Simulation de Monte Carlo & Backtesting Historique**  
**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Auteur :** Mohammed EL BARAKA  
**Date de Valorisation :** 10 Janvier 2026  
**Horizons Couverts :** Avril 2026 – Mars 2027 (Simulation) | Décembre 2024 – Novembre 2025 (Backtesting INSEE)  

---

## 1. Contexte Opérationnel Inditex & Exposition Industrielle

Le modèle *fast fashion* d'Inditex (cycles de 4 à 6 semaines, réassorts biseptimanaires, fixité relative des prix catalogue) impose une gestion rigoureuse des matières premières :
* **Consommation annuelle :** $5\\,000\\,000\\,\\text{kg}$ ($416\\,666{,}67\\,\\text{kg/mois}$).
* **Volatilité annuelle ($\sigma$) :** $26{,}00\\%$.
* **Enjeu :** Une hausse de $+20\\%$ à $+30\\%$ du coton érode directement la marge brute et l'EBITDA, tandis qu'un verrouillage rigide crée un coût d'opportunité sévère en cas de marché baissier.

---

## 2. Modélisation Mathématique & Valorisation Dérivée

### 2.1 Dynamique Stochastique (Mouvement Brownien Géométrique sous $\\mathbb{Q}$)
$$dS_t = (r - q)S_t dt + \\sigma S_t dW_t^{\\mathbb{Q}}$$
$$S(t_j) = S(t_{j-1}) \\exp\\left[ \\left(r - q - \\frac{1}{2}\\sigma^2\\right)\\Delta t_j + \\sigma \\sqrt{\\Delta t_j} Z_j \\right], \\quad Z_j \\sim \\mathcal{N}(0, 1)$$

### 2.2 Cost-of-Carry, Swap Forward & Black-Scholes
* **Prix Forward :** $F_0(T_j) = S_0 e^{(r-q)T_j}$ (Marché en Contango car $r=3{,}538\\% > q=0\\%$)
* **Strike Unique Swap :** $K_{\\text{swap}} = \\frac{1}{12}\\sum F_0(T_j) = 1{,}425595\\,\\text{\\$/kg}$ $\\rightarrow$ Budget déterministe de **$7\\,127\\,977{,}35\\,\\$$**.
* **Prime Call Européen (Black-Scholes) :**
  $$c_j = S_0 e^{-q T_j} \\mathcal{N}(d_1) - K e^{-r T_j} \\mathcal{N}(d_2)$$
  $$\\sum c_j = 1{,}4187\\,\\text{\\$/kg} \\quad (\\text{Prime totale} = 591\\,114\\,\\$)$$

---

## 3. Résultats Comparatifs Monte Carlo (2 000 Scénarios)

| Indicateur Financier | Spot (Sans Couverture) | Swap Forward Fixe | Strip de Calls Asymétrique |
| :--- | :---: | :---: | :---: |
| **Coût Moyen Annuel ($\\mathbb{E}[B]$)** | $7\\,179\\,509{,}85\\,\\$$ | $7\\,127\\,977{,}35\\,\\$$ | **$7\\,122\\,623{,}38\\,\\$$** |
| **Volatilité Budgétaire ($\\sigma_B$)** | $1\\,458\\,329{,}11\\,\\$$ | **$0{,}00\\,\\$$** | $693\\,634{,}72\\,\\$$ |
| **Value at Risk ($\\text{VaR}_{95\\%}$)** | $9\\,807\\,186{,}76\\,\\$$ | **$7\\,127\\,977{,}35\\,\\$$** | $7\\,730\\,171{,}39\\,\\$$ |
| **Plafond Garanti (Pire Cas)** | $17\\,109\\,804{,}82\\,\\$$ | **$7\\,127\\,977{,}35\\,\\$$** | $7\\,730\\,171{,}39\\,\\$$ |
| **Participation Baisse (Meilleur Cas)** | **$3\\,549\\,959{,}04\\,\\$$** | $7\\,127\\,977{,}35\\,\\$$ | $4\\,152\\,153{,}08\\,\\$$ |

---

## 4. Backtesting Empirique Réel (Série INSEE 2024 – 2025)

Sur 12 mois réels de livraisons (déc. 2024 – nov. 2025) dans un marché baissier ($S_0=1{,}84\\,\\$$ $\\rightarrow$ $S_{\\text{fin}}=1{,}66\\,\\$$) :
* **Coût Réel Spot :** $8\\,591\\,666{,}67\\,\\$$
* **Coût Réel Swap :** $9\\,406\\,149{,}65\\,\\$$ (Perte d'opportunité de $+814\\,483\\,\\$$)
* **Coût Réel Strip de Calls :** **$9\\,046\\,515{,}21\\,\\$$** (Économie nette de **$+359\\,634{,}44\\,\\$$** par rapport au Swap)

---

## 5. Recommandations Managériales & Stratégie Hybride

1. **Architecture Core / Satellite :**
   * **Socle Fixe ($50-60\\%$) :** Swap Forward pour sécuriser le seuil de marge brute opérationnelle.
   * **Poche Optionnelle ($40-50\\%$) :** Strip de Calls ou *Zero-Cost Collars* pour capter les baisses de cours.
2. **Conformité Comptable IFRS 9 :** Qualification en *Cash Flow Hedge* pour éliminer la volatilité P&L.`,

    'renault5-electric-marketing': `# Renault 5 E-Tech 100% Électrique : Stratégie Marketing & Pénétration de Marché

**Présentation Stratégique Marketing — 05 Janvier 2026**  
**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Auteurs :** Yassine BOUAZAMI, Amine BOUZID, Othmane TAHFI, Mohammed Amine TALHI, Mohamed EL BARAKA, Mohamed FANNI  
**Date :** Janvier 2026  

---

## 1. Synthèse Exécutive du Projet

La **Renault 5 E-Tech 100% Électrique** réinvente une icône automobile rétro en une citadine technologique, fun et accessible sous la signature **« La Révolution Pop Électrique »**. Ce projet stratégique définit les leviers d'occupation du marché marocain face aux acteurs établis (Dacia Spring, Peugeot e-208, Fiat 600e, BYD Atto 3).

---

## 2. Spécifications Techniques & Piliers de Marque

* **Batterie & Autonomie :** $52\\,\\text{kWh}$ pour $390\\,\\text{km}$ WLTP.
* **Motorisation :** $150\\,\\text{ch}$ ($110\\,\\text{kW}$).
* **Temps de Charge :** AC : **$3\\,\\text{h }15\\,\\text{min}$** | DC rapide : **$30\\,\\text{min}$** ($10\\%$ à $80\\%$).
* **Positionnement :** *« Ce n'est pas juste une voiture électrique, c'est une icône émotionnelle. Elle a changé. Pas vous. »*

---

## 3. Benchmark Concurrentiel Comparatif

| Modèle Électrique | Segment | Batterie (kWh) | Autonomie (km) | Puissance | Temps Charge (AC/DC) | Positionnement Prix Indicatif |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **Dacia Spring** | Micro-citadine Budget | $26{,}8$ | $305$ | $48\\,\\text{ch}$ | 5h / 45 min | $210\\,000\\,\\text{DH}$ |
| **Peugeot e-208** | Polyvalente Premium | $48{,}1$ | $400$ | $156\\,\\text{ch}$ | 4h / 30 min | $360\\,000\\,\\text{DH}$ |
| **Fiat 600e** | Crossover Rétro | $50{,}8$ | $406$ | $156\\,\\text{ch}$ | 4h / 30 min | $390\\,000\\,\\text{DH}$ |
| **BYD Atto 3** | SUV Compact | $61{,}0$ | $565$ | $204\\,\\text{ch}$ | 4h30 / 30 min | $340\\,000\\,\\text{DH}$ |
| **Renault 5 E-Tech** | **Citadine Néo-Rétro** | **$52{,}0$** | **$390$** | **$150\\,\\text{ch}$** | **3h15 / 30 min** | **Offensive Tarifaire ($< 330\\,000\\,\\text{DH}$)** |

---

## 4. Projections du Marché Marocain des VE (2023 – 2030)

| Année | Ventes Marché (Unités) | Prix Moyen Estimé (DH) | Chiffre d'Affaires Global (Milliards MAD) |
| :---: | :---: | :---: | :---: |
| **2023** | $463$ | $450\\,000\\,\\text{DH}$ | $0{,}21\\,\\text{MM MAD}$ |
| **2024** | $1\\,135$ | $400\\,000\\,\\text{DH}$ | $0{,}45\\,\\text{MM MAD}$ |
| **2025** | $3\\,500$ | $380\\,000\\,\\text{DH}$ | $1{,}33\\,\\text{MM MAD}$ |
| **2026** | **$7\\,200$** | **$330\\,000\\,\\text{DH}$** | **$2{,}37\\,\\text{MM MAD}$** |
| **2027** | $11\\,500$ | $300\\,000\\,\\text{DH}$ | $3{,}45\\,\\text{MM MAD}$ |
| **2028** | $18\\,000$ | $280\\,000\\,\\text{DH}$ | $5{,}04\\,\\text{MM MAD}$ |
| **2029** | $26\\,000$ | $260\\,000\\,\\text{DH}$ | $6{,}76\\,\\text{MM MAD}$ |
| **2030** | **$35\\,000$** | **$250\\,000\\,\\text{DH}$** | **$8{,}75\\,\\text{MM MAD}$** |

* Multiplications par $\\approx 30$ des volumes annuels d'ici 2030 et expansion du CA global à **$8{,}75\\,\\text{Milliards MAD}$**.

---

## 5. Recommandations & Plan d'Action Stratégique

1. **Occupation Immédiate dès 2026 :** Capter le point d'inflexion du marché ($7\\,200\\,\\text{unités}$) pour verrouiller les parts de marché.
2. **Repositionnement Prix Agressif :** Placer la R5 entre $290\\,000\\,\\text{DH}$ et $330\\,000\\,\\text{DH}$ pour sous-coter la concurrence Stellantis.
3. **Synergie Écosystème Renault Maroc :** Formules tout-en-un (Wallbox offerte, réseau après-vente le plus dense du Maroc, campagnes média immersives).`,

    'mitsubishi-strategic-analysis': `# Analyse Stratégique : Mitsubishi Motors Corporation

**Management Stratégique — Étude Approfondie de la Stratégie d'Entreprise, de l'Avantage Concurrentiel et des Perspectives d'Évolution**  
**Focus Majeur :** Le virage du *Software-Defined SUV* & l'Offensive BEV  
**Date :** Mars 2026  

---

## 1. Identité de l'Entreprise & Ancrage dans l'Alliance

* **Groupe :** Membre historique du conglomérat **Mitsubishi Group (Zaibatsu / Keiretsu)** et pilier de l'**Alliance Renault-Nissan-Mitsubishi**.
* **Piliers Stratégiques :**
  1. **Concentration Régionale :** Leadership historique et forte rentabilité sur les marchés ASEAN et Océanie.
  2. **Synergies Industrielles :** Mutualisation des plateformes (CMF) et partage des coûts de R&D avec Renault et Nissan.
  3. **Électrification Ciblée :** Montée en puissance des hybrides rechargeables (PHEV) et transition vers le 100% électrique (BEV).

---

## 2. Modèle Économique & Répartition du Portefeuille

| Composante | Description Stratégique |
| :--- | :--- |
| **Proposition de Valeur** | Véhicules robustes tout-terrain, pionnier du PHEV (*Outlander PHEV*, transmission *S-AWC*), TCO compétitif. |
| **Segments Clients** | Amateurs d'outdoor/aventure, familles éco-responsables, classe moyenne émergente ASEAN, flottes B2B. |
| **Canaux & Connectivité** | +1 400 points de vente, application *Mitsubishi Connect* (1,2 million d'utilisateurs connectés). |
| **Ressources & Brevets** | +120 brevets PHEV/4x4, plateformes partagées de l'Alliance, puissance du réseau mondial. |

* **Répartition du Portefeuille Produits :** SUV / Crossover (**47%**), Pick-Up Trucks (**26%**), Family Vans (**16%**), Sedans (**7%**), Kei-cars (**4%**).

---

## 3. Diagnostic Stratégique : PESTEL, Porter & SWOT

* **PESTEL :** Pression réglementaire $CO_2$ mondiale très forte, montée des exigences en cybersécurité/données, et essor des *Software-Defined Vehicles* (SDV).
* **5 Forces de Porter :** Menace majeure des constructeurs chinois de VE (BYD, MG) sur les marchés ASEAN, saturation de l'offre et guerre des prix.
* **SWOT :**
  * *Forces :* Image de marque solide et rentabilité en ASEAN (Thaïlande, Indonésie), technologie 4x4 éprouvée, synergies Alliance.
  * *Faiblesses :* Hyper-dépendance à l'ASEAN, gamme restreinte, budget R&D propre plus limité que les géants Toyota/VW.
  * *Opportunités :* Électrification de l'ASEAN, plateformes communes pour relancer des modèles en Europe (ASX, Colt).
  * *Menaces :* Percée agressive des marques chinoises à bas coût, incertitudes sur la fin des motorisations thermiques/hybrides.

---

## 4. Recommandations : Le Virage du Software-Defined SUV

1. **Offensive BEV sur l'ASEAN :** Déployer des SUV et pick-ups électriques compétitifs sur plateforme CMF-EV pour contrer l'offensive chinoise.
2. **Plateforme SDV & Mises à Jour OTA :** Monétiser les services connectés, la maintenance prédictive et l'assurance basée sur l'usage (*Usage-Based Insurance*) via des mises à jour logicielles à distance (*Over-The-Air*).`,

    'wireless-pentest-ceh': `# Projet de Cybersécurité : Sécurité des Réseaux Sans Fil & Tests d'Intrusion

**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Module :** Certified Ethical Hacker (CEH) – Laboratoire de Cybersécurité  
**Auteur :** Mohammed EL BARAKA  
**Date :** Mai 2025  

---

## 1. Contexte & Architecture du Laboratoire

Maquette multi-systèmes d'entreprise :
* **Station Offensive :** Kali Linux avec carte réseau USB en mode moniteur (RFMON) et injection de paquets (chipset Atheros AR9271).
* **Serveurs d'Entreprise :** Windows Server 2019 (Active Directory DS, DNS, IIS, FTP, RDS) et CentOS Linux (Apache, SSH).
* **Stations Cibles :** Postes clients Windows 7 et Windows 10.

---

## 2. Vecteurs d'Attaque & Démonstrations Pratiques

### 2.1 Craquage du Protocole WEP (RC4 & Faiblesse des IVs)
* Exploitation des 24 bits d'IV par injection active ARP (\`aireplay-ng -3\`) et dérivation statistique FMS/PTW (\`aircrack-ng\`).
* Extraction de la clé 128-bit en moins de 3 minutes avec ~25 000 IVs capturés.

### 2.2 Attaque WPA/WPA2-PSK par 4-Way Handshake
* Émission de trames de déauthentification (\`aireplay-ng -0\`) forçant la reconnexion de la victime.
* Capture du 4-Way Handshake (EAPOL) et cassage par dictionnaire (\`aircrack-ng\` / Hashcat GPU mode 22000).

### 2.3 Attaque Rogue AP & Evil Twin (Fluxion)
* Déploiement d'un faux point d'accès jumeau avec brouillage du vrai routeur.
* Redirection DNS vers un portail captif d'ingénierie sociale et validation instantanée de la clé saisie contre le handshake capturé.

### 2.4 Forensics Réseau & Analyse de Trames Wireshark
* Filtrage EAPOL (\`eapol\`), détection d'attaques DoS par déauthentification (\`wlan.fc.type_subtype == 0x000c\`) et trames Beacon (\`wlan.fc.type_subtype == 0x0008\`).

---

## 3. Post-Exploitation & Pivots Internes

* **Rogue DHCP & Man-in-the-Middle :** Interception de flux non chiffrés via Bettercap/Ettercap.
* **Compromission Active Directory :** Extraction des hashs NTLM (Mimikatz/pwdump) et attaques par rejeu *Pass-the-Hash*.

---

## 4. Contremesures & Défense en Profondeur

1. **Migration vers WPA3-SAE (Dragonfly) :** Échange de clé résistant aux attaques par dictionnaire hors-ligne.
2. **Trames de Gestion Protégées (802.11w PMF) :** Chiffrement et signature des trames de déauthentification.
3. **Authentification Entreprise IEEE 802.1X / RADIUS (EAP-TLS) :** Certificats numériques X.509 individuels remplaçant les passphrases statiques.
4. **Systèmes de Détection et Prévention (WIDS/WIPS) :** Surveillance 24/7 de l'espace radio hertzien.`,

    'managerial-accounting-formaction': `# Projet de Comptabilité Analytique & Contrôle de Gestion : Organisme FORMACTION

**Cas d'Analyse des Coûts et Pilotage de la Rentabilité**  
**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Auteur :** Mohammed EL BARAKA  
**Date :** Mars 2026  

---

## 1. Contexte Opérationnel & Structure Pédagogique

L'organisme **FORMACTION** forme 187 stagiaires sur deux filières tertiaires et professionnelles :
* **Filière BTS (145 stagiaires, 4 spécialités) :** $600\\,\\text{h/an}$ ($400\\,\\text{h}$ spécialisées + $200\\,\\text{h}$ générales).
* **Filière BEP (42 stagiaires, 2 spécialités) :** $450\\,\\text{h/an}$ ($300\\,\\text{h}$ spécialisées + $150\\,\\text{h}$ générales).
* **Volume horaire global :** $7\\,500\\,\\text{heures-groupe}$ dispensées ($6\\,000\\,\\text{h}$ BTS, $1\\,500\\,\\text{h}$ BEP).

---

## 2. Modélisation du Chiffre d'Affaires (€678 720,00)

* **BTS :** $583\\,680{,}00\\,\\text{€}$ (Moyenne : $4\\,025{,}38\\,\\text{€/stagiaire}$). Forte dominance du financement entreprises OPCO ($66{,}61\\%$ à $8{,}00\\,\\text{€/h}$).
* **BEP :** $95\\,040{,}00\\,\\text{€}$ (Moyenne : $2\\,262{,}86\\,\\text{€/stagiaire}$). Dépendance aux financements publics contraints État/Région ($62{,}12\\%$ à $4{,}00-4{,}40\\,\\text{€/h}$).

---

## 3. Imputation des Fonctions Supports par la Méthode ABC (€99 000,00)

| Activité Homogène | Coût Activité | Inducteur de Coût (*Cost Driver*) | Volumétrie | Coût Unitaire Inducteur |
| :--- | :---: | :--- | :---: | :---: |
| **1. Gestion des stagiaires** | $38\\,700\\,\\text{€}$ | Nombre de stagiaires | 187 | $206{,}95\\,\\text{€/stagiaire}$ |
| **2. Gestion des formations** | $34\\,200\\,\\text{€}$ | Nombre de diplômes préparés | 6 diplômes | $5\\,700{,}00\\,\\text{€/diplôme}$ |
| **3. Logistique des heures** | $26\\,100\\,\\text{€}$ | Heures groupe dispensées | 7 500 h | $3{,}48\\,\\text{€/heure}$ |

---

## 4. Compte de Résultat Différentiel Consolidé (Direct Costing Évolué)

| Poste Analytique | Filière BTS (€) | % CA | Filière BEP (€) | % CA | Total Global (€) | % CA |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Chiffre d'Affaires** | **$583\\,680{,}00$** | $100\\%$ | **$95\\,040{,}00$** | $100\\%$ | **$678\\,720{,}00$** | $100\\%$ |
| **Charges Variables (CV)** | $312\\,780{,}00$ | $53{,}59\\%$ | $61\\,590{,}00$ | $64{,}80\\%$ | $374\\,370{,}00$ | $55{,}16\\%$ |
| **Marge sur Coûts Variables (MCV)** | **$270\\,900{,}00$** | **$46{,}41\\%$** | **$33\\,450{,}00$** | **$35{,}20\\%$** | **$304\\,350{,}00$** | **$44{,}84\\%$** |
| **Charges Fixes Spécifiques (ABC)**| $73\\,688{,}02$ | $12{,}62\\%$ | $25\\,311{,}98$ | $26{,}63\\%$ | $99\\,000{,}00$ | $14{,}59\\%$ |
| **Marge sur Coûts Spécifiques (MCS)**| **$197\\,211{,}98$** | **$33{,}79\\%$** | **$8\\,138{,}02$** | **$8{,}56\\%$** | **$205\\,350{,}00$** | **$30{,}26\\%$** |
| **Charges Fixes Communes (Prorata CA)**| $32\\,228{,}30$ | $5{,}52\\%$ | $5\\,247{,}70$ | $5{,}52\\%$ | $37\\,476{,}00$ | $5{,}52\\%$ |
| **Résultat Net Analytique** | **$164\\,983{,}68$** | **$28{,}27\\%$** | **$2\\,890{,}32$** | **$3{,}04\\%$** | **$167\\,874{,}00$** | **$24{,}73\\%$** |

---

## 5. Audit Décisionnel : Faut-il Supprimer la Filière BEP ?

**Verdict du Contrôle de Gestion : NON.**
1. **Contribution positive à la couverture :** La filière BEP dégage une Marge sur Coûts Spécifiques (MCS) positive de **$+8\\,138{,}02\\,\\text{€}$**.
2. **Incompressibilité des charges communes :** Les $37\\,476\\,\\text{€}$ de charges communes persisteraient intégralement. La quote-part absorbée par le BEP ($5\\,247{,}70\\,\\text{€}$) retomberait sur le BTS.
3. **Perte sèche :** Supprimer le BEP ferait chuter le résultat global de $167\\,874\\,\\text{€}$ à $159\\,735{,}98\\,\\text{€}$ (perte nette de **$-8\\,138{,}02\\,\\text{€}$**).

---

## 6. Plan d'Action & Optimisation de la Rentabilité

1. **Remplissage des Groupes :** Recrutement de +14 stagiaires dans les groupes existants (passer de 42 à 56 stagiaires) $\\rightarrow$ **$+29\\,744\\,\\text{€}$ de MCS additionnelle**.
2. **Mix Commercial OPCO :** Viser $50\\%$ de contrats pro entreprises à $8{,}00\\,\\text{€/h}$ $\\rightarrow$ **$+17\\,820\\,\\text{€}$ de CA additionnel**.
3. **Mutualisation Transversale :** Regroupement des enseignements généraux compatibles $\\rightarrow$ **$+3\\,500\\,\\text{€}$ d'économies logistiques**.\``,

    'sap-s4hana-production-planning': `# Planification et Gestion de Production sous SAP S/4HANA

**Rapport de Synthèse de Projet — Module PP (Production Planning)**  
**Institution :** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Auteur :** Mohammed EL BARAKA (Session \`learn-112\`)  
**Environnement :** SAP S/4HANA Enterprise Management (Technologie In-Memory HANA)  
**Entreprise d'Étude :** Global Bike Inc. (GBI) — Usine de Dallas (\`DL00\`)  
**Date :** Février 2026  

---

## 1. Contexte & Intégration Transversale ERP

Ce projet couvre l'intégralité du cycle manufacturier sous SAP S/4HANA et ses interactions transversales :
* **SD (Ventes) :** Déclenchement de la demande et consommation des prévisions.
* **PP (Production) :** PIC/SOP, PDP, Calcul des Besoins Nets (MRP), et ordonnancement d'atelier.
* **MM (Stocks & Achats) :** Réservations automatiques, sorties matières (\`MIGO 261\`) et réceptions (\`MIGO 101\`).
* **FI/CO (Finance & Contrôle) :** Calcul du coût de revient standard (\`CK11N / CK24\`), imputations sur centres de coûts et analyse des écarts.

---

## 2. Données de Base de Production (Master Data)

* **Articles & Nomenclatures (BOM) :** Produit fini (\`LEARN-F112\`, FERT $1\\,400\\,\\$$), sous-ensemble cadre semi-fini (\`LEARN-B112\`, HALB $800\\,\\$$) et composants matières (\`ROH\`).
* **Postes de Travail (Work Centers) :** \`ASSY1000\` (Montage), \`INSP1000\` (Contrôle qualité), \`PACK1000\` (Emballage) rattachés aux centres de coûts (\`NAAS1000\`, \`NAIN1000\`, \`NAPA1000\`).
* **Gammes & Versions de Fabrication (\`C223\`) :** Séquencement des 5 opérations et liaison indissociable BOM/Gamme.
* **Calcul du Coût de Revient Standard (\`CK11N / CK24\`) :** Explosion multi-niveaux, marquage et libération du prix standard dans le Grand Livre.

---

## 3. Pyramide de Planification & Scénarios Industriels

1. **PIC / SOP (\`MC81 / MC84\`) :** Planification agrégée à long terme ($50\\,\\text{vélos/mois}$ lissés sur 6 mois).
2. **Transfert Demande (\`MC75 \\rightarrow MD63\`) :** Génération des Besoins Indépendants Prévisionnels (PIR).
3. **Calcul MRP / CBN (\`MD02\`) :** Explosion nette multi-niveaux (NETCH) et génération des Ordres Planifiés & DA.
4. **Stratégie 40 (Fabrication sur Stock) :** Consommation directe des prévisions PIR par les commandes clients fermes (\`VA01\`).
5. **Stratégie 82 (Assemblage à la Commande - ATO) :** Génération automatique d'un Ordre de Fabrication rattaché en segment Stock Client dédié (\`StkCli\`).

---

## 4. Exécution d'Atelier & Contrôle des Coûts

* **Conversion & Ordonnancement :** \`MD04 \\rightarrow CO01 / CO02\` (Statut REL).
* **Sortie Matières (\`MIGO 261\`) :** Débit du compte de consommation d'atelier.
* **Confirmation d'Atelier (\`CO15 / CO11N\`) :** Déclaration de la quantité bonne ($50\\,\\text{pièces}$) et des heures réelles.
* **Entrée en Stock (\`MIGO 101\`) :** Réception en magasin \`FG00\` et crédit de l'OF.
* **Clôture Technique & Analytique (TECO) :** Rapprochement et calcul des écarts de fabrication.\``,

    'data-science-track': `# Programme de Cours — Option Data Science & Intelligence Artificielle

**EMINES School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)**  
**Période :** Septembre 2025 – Février 2026  
**Responsable d'option :** Prof. Éric Moulines (Membre de l'Académie des Sciences, Professeur à l'École Polytechnique)  
**Hub Interactif Dédié :** [Consulter la page interactive de l'Option Data Science](data-science.html)  

---

## 1. Objectif Général de la Spécialisation

Former des ingénieurs d'élite capables de maîtriser l'ensemble du cycle de vie de la Science des Données et de l'IA :
* **Inspection & Formulation Mathématique :** Formulation rigoureuse des problèmes, analyse d'espaces vectoriels et compromis biais-variance.
* **Optimisation & Algorithmique :** Conditions KKT, méthodes proximales, optimisation stochastique (SGD/Adam) et échantillonnage MCMC.
* **Architectures Profondes & Modèles Génératifs :** CNNs, Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), et Modèles de Diffusion (SDEs).
* **Traitement du Langage Naturel & LLMs :** Word2Vec, mécanisme d'attention multi-têtes Transformers, fine-tuning BERT et prompt engineering GPT.
* **Prise de Décision Séquentielle :** Bandits manchots stochastiques, équations de Bellman et Q-Learning.

---

## 2. Synthèse des 8 Modules Thématiques

1. **Période 1 : Régression et classification supervisée** — *Prof. Randal Douc* (Télécom SudParis / École Polytechnique)
   * Moindres carrés, Ridge, Lasso, Elastic-Net, frontière bayésienne, régression logistique, algorithme EM (GMM), ACP et Forêts Aléatoires.
2. **Période 2 : Optimisation Mathématique pour la Data Science** — *Convexité, KKT, Proximal & SGD*
   * Analyse convexe, conditions KKT, opérateurs proximaux (ISTA/FISTA), analyse de convergence SGD/Momentum, sous-gradients et dualité SVM.
3. **Période 3 : Introduction à l'Apprentissage Artificiel** — *Prof. Laurent Miclet*
   * Théorie PAC de Valiant, Arbres de décision (ID3/C4.5/CART), fenêtres de Parzen, Perceptrons multicouches, et calcul hyperdimensionnel (HDC).
4. **Période 4 : Apprentissage Statistique & Réseaux Profonds** — *Prof. Sylvain Lecorff* (Sorbonne Université / ENSIIE)
   * Contrôle du risque statistique, CNNs, modèles probabilistes à variables latentes, borne ELBO et algorithme CAVI.
5. **Période 5 : Inversion et Imagerie Haute Résolution** — *Prof. Jean-François Giovannelli* (IMS Bordeaux / Université de Bordeaux)
   * Problèmes inverses mal-posés, déconvolution, régularisation de Tikhonov, Lagrangien augmenté (ADMM), MCMC et échantillonnage de diffusion a posteriori.
6. **Période 6 : Topics in Generative Machine Learning** — *Prof. Matthieu Jonckheere* (CNRS / LAAS)
   * RBMs, VAEs avec astuce de reparamétrisation, GANs minimax / WGAN-GP, et modèles de diffusion continus/discrets basés sur le score.
7. **Période 7 : Représentations Vectorielles des Mots & LLMs** — *Dr. Julien Perez* (Naver Labs Europe)
   * Sémantique distributionnelle, Word2Vec, architecture Transformer, fine-tuning BERT (SST-2, SQuAD), génération GPT et pipelines Hugging Face.
8. **Période 8 : Apprentissage par Renforcement & Processus Markoviens** — *Prof. Mohammed El Machkouri* (EMINES / Univ. Rouen)
   * Bandits stochastiques (borne de Lai-Robbins, UCB1, Thompson Sampling), Processus de Décision Markoviens (MDP), équations de Bellman et Q-Learning.`,

    'ds-module-1': `# Module 01 : Régression et Classification Supervisée

**Enseignant :** Prof. Randal Douc (Télécom SudParis / École Polytechnique)  
**Période :** 29 Septembre – 03 Octobre 2025  

---

## 1. Principes Théoriques & Modélisation
* **Régression Linéaire & Pénalisation :** Estimateur MCO, régression Ridge ($L_2$), Lasso ($L_1$) pour la parcimonie et Elastic-Net.
* **Décomposition Biais-Variance :** $\\text{MSE}(\\hat{\\theta}) = \\text{Biais}(\\hat{\\theta})^2 + \\text{Var}(\\hat{\\theta})$.
* **Classification :** Frontière de Bayes optimale, régression logistique bi-classe et multi-classes via optimisation Newton-Raphson.
* **Modèles Probabilistes & Clustering :** Algorithme EM pour mélanges de Gaussiennes (GMM), ACP et $k$-Means.`,

    'ds-module-2': `# Module 02 : Optimisation pour la Science des Données

**Période :** 06 Octobre – 10 Octobre 2025  

---

## 1. Analyse Convexe & Conditions d'Optimalité
* Fonctions convexes, différentiables et fortement convexes.
* **Conditions KKT :** Formulation primale, duale, et multiplicateurs de Lagrange pour l'optimisation sous contraintes.

## 2. Algorithmes Proximal & Stochastiques
* **Opérateur Proximal :** $\\text{prox}_{\\gamma g}(x) = \\arg\\min_z \\left( g(z) + \\frac{1}{2\\gamma} \\|z - x\\|_2^2 \\right)$, algorithmes ISTA/FISTA.
* **SGD & Variantes :** Analyse de convergence du gradient stochastique, accélération par Momentum et Adam.
* **Dualité SVM :** Formulation de Wolfe et astuce du noyau (*Kernel Trick*).`,

    'ds-module-3': `# Module 03 : Introduction à l'Apprentissage Artificiel & Théorie PAC

**Enseignant :** Prof. Laurent Miclet  
**Période :** 13 Octobre – 17 Octobre 2025  

---

## 1. Théorie de l'Apprentissage PAC
* Définition de la complexité d'échantillonnage de Valiant et dimension de Vapnik-Chervonenkis (VC-dimension).

## 2. Arbres de Décision & Méthodes Ensemblistes
* Algorithmes ID3, C4.5 et CART : gain d'information (entropie de Shannon) et indice de Gini.
* Bagging, Boosting (AdaBoost), et Forêts Aléatoires.

## 3. Réseaux de Neurones & Calcul Hyperdimensionnel (HDC)
* Rétropropagation du gradient dans les MLP, fonctions d'activation.
* Vecteurs hyperdimensionnels pour l'apprentissage en une seule passe (*Single-Pass Learning*) et réseaux de Hopfield.`,

    'ds-module-4': `# Module 04 : Apprentissage Statistique & Réseaux Profonds

**Enseignant :** Prof. Sylvain Lecorff (Sorbonne Université / ENSIIE)  
**Période :** 20 Octobre – 24 Octobre 2025  

---

## 1. Contrôle du Risque Statistique
* Risque empirique vs risque vrai, inégalités de concentration de Hoeffding et McDiarmid.
* Propriétés de consistance de sélection du Lasso (condition d'irreprésentabilité).

## 2. Réseaux Convolutifs (CNN) & Inférence Variationnelle
* Architectures CNN et couches résiduelles (ResNet).
* **Modèles à variables latentes & ELBO :** $\\log p(X) \\ge \\mathbb{E}_{q(Z)}[\\log p(X, Z)] - \\text{KL}(q(Z) \\parallel p(Z))$.
* **Algorithme CAVI :** Optimisation alternée des facteurs variationnels sous hypothèse de champ moyen.`,

    'ds-module-5': `# Module 05 : Problèmes Inverses & Imagerie Haute Résolution

**Enseignant :** Prof. Jean-François Giovannelli (IMS Bordeaux / Université de Bordeaux)  
**Période :** 24 Novembre – 28 Novembre 2025  

---

## 1. Problèmes Inverses Mal-Posés
* Modèle convolutif dégradé : $Y = HX + N$.
* Régularisation de Tikhonov et filtrage de Wiener : $\\min_X \\|Y - HX\\|_2^2 + \\lambda \\|DX\\|_2^2$.

## 2. Optimisation sous Contraintes & Approches Bayésiennes
* Algorithme du Lagrangien augmenté (ADMM) pour contraintes de positivité et support.
* Méthodes MCMC (Gibbs, Metropolis-Hastings) pour l'estimation autodidacte d'hyperparamètres.
* Échantillonnage guidé a posteriori par modèles de diffusion (*Diffusion Posterior Sampling*).`,

    'ds-module-6': `# Module 06 : Topics in Generative Machine Learning

**Enseignant :** Prof. Matthieu Jonckheere (CNRS / LAAS Toulouse)  
**Période :** 15 Décembre – 19 Décembre 2025  

---

## 1. Variational Autoencoders (VAEs)
* Fonction de coût ELBO et astuce de reparamétrisation : $z = \\mu(x) + \\sigma(x) \\odot \\epsilon$ avec $\\epsilon \\sim \\mathcal{N}(0, I)$.

## 2. Generative Adversarial Networks (GANs)
* Jeu minimax $\\min_G \\max_D V(D, G)$ et Wasserstein GANs avec pénalité de gradient (WGAN-GP).

## 3. Modèles de Diffusion & SDEs
* Processus de diffusion direct et inverse dirigé par score de Langevin.
* Modèles DDPM et DDIM en espaces continus et discrets.`,

    'ds-module-7': `# Module 07 : Représentations Vectorielles des Mots & LLMs

**Enseignant :** Dr. Julien Perez (Principal Scientist, Naver Labs Europe)  
**Période :** 13 Janvier – 23 Janvier 2026  

---

## 1. Sémantique Distributionnelle & Word2Vec
* Modèles Skip-Gram et CBOW avec échantillonnage négatif (*Negative Sampling*).
* Algèbre sémantique vectorielle (ex. $\\vec{v}_{\\text{roi}} - \\vec{v}_{\\text{homme}} + \\vec{v}_{\\text{femme}} \\approx \\vec{v}_{\\text{reine}}$).

## 2. Architecture Transformer & Modèles Pré-entraînés
* Mécanisme d'Auto-Attention Multi-Têtes : $\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V$.
* Fine-tuning de modèles BERT sur SST-2, CoNLL-2003, et SQuAD via Hugging Face.
* Modèles génératifs causaux GPT, stratégies de décodage (Top-$k$, Top-$p$ Nucleus sampling) et Prompt Engineering.`,

    'ds-module-8': `# Module 08 : Apprentissage par Renforcement & Processus Markoviens

**Enseignant :** Prof. Mohammed El Machkouri (EMINES / Université de Rouen)  
**Période :** 16 Février – 20 Février 2026  

---

## 1. Bandits Manchots Stochastiques
* Compromis Exploration-Exploitation, borne de Lai-Robbins.
* Algorithme UCB1 : $A_t = \\arg\\max_a \\left[ \\hat{\\mu}_a + \\sqrt{\\frac{2 \\ln t}{N_a(t)}} \\right]$ et échantillonnage de Thompson.

## 2. Processus de Décision Markoviens (MDP) & Q-Learning
* Tuple $(S, A, P, R, \\gamma)$, fonctions de valeur $V^*(s)$ et $Q^*(s, a)$.
* **Équations d'Optimalité de Bellman :** $Q^*(s, a) = R(s, a) + \\gamma \\sum_{s'} P(s' \\mid s, a) \\max_{a'} Q^*(s', a')$.
* Algorithme Q-Learning et introduction au Deep Q-Learning (DQN).\``,

    'dirty-model-multitask-learning': `# Understanding and Validating "A Dirty Model for Multi-task Learning"

**Academic & Research Project — Option Data Science (Periods 1 & 2)**  
**Institution:** EMINES – School of Industrial Management, Université Mohammed VI Polytechnique (UM6P)  
**Author:** Mohammed EL BARAKA  
**Date:** November 3, 2025  
**Paper Investigated:** *A Dirty Model for Multi-task Learning* (Ali Jalali, Sujay Sanghavi, Pradeep Ravikumar, Chao Ruan — Advances in Neural Information Processing Systems / NIPS 2010)  

---

## 1. Executive Summary & Problem Formulation

In high-dimensional multi-task linear regression ($p \\gg n$), we learn regression models for $r$ related tasks simultaneously sharing a common set of $p$ features:

$$y^{(k)} = X^{(k)} \\theta^{(k)} + w^{(k)}, \\quad k \\in \\{1, \\dots, r\\}$$

where $y^{(k)} \\in \\mathbb{R}^n$, $X^{(k)} \\in \\mathbb{R}^{n \\times p}$, $\\theta^{(k)} \\in \\mathbb{R}^p$, and $w^{(k)} \\sim \\mathcal{N}(0, \\sigma^2 I)$. In matrix notation: $Y = X \\Theta + W$ with parameter matrix $\\Theta \\in \\mathbb{R}^{p \\times r}$.

### The Fundamental Flaw of "Clean" Estimators:
1. **Independent Lasso ($\\ell_1$ penalty):** Treats all $r$ tasks as independent, failing to borrow statistical strength across tasks when relevant features overlap.
2. **Block-Regularization ($\\ell_1/\\ell_\\infty$ group norm):** Forces rigid group sparsity, assuming a feature is either active across *all* tasks or *none*. When the feature-sharing fraction $\\alpha$ is intermediate or low, block regularization breaks down and performs significantly worse than independent Lasso.

---

## 2. The "Dirty Model": Superposition of Structures

The authors decompose the true parameter matrix $\\Theta$ into a superposition of two distinct structural components:

$$\\Theta = B + S$$

* **$B \\in \\mathbb{R}^{p \\times r}$ (Block-Sparse Matrix):** Captures features shared across all or most tasks, penalized via the block-norm $\\|B\\|_{1,\\infty} = \\sum_{j=1}^p \\|B_{j,:}\\|_\\infty$.
* **$S \\in \\mathbb{R}^{p \\times r}$ (Element-Wise Sparse Matrix):** Captures task-specific features that do not belong to the shared support, penalized via the element-wise $\\|S\\|_{1,1} = \\sum_{j=1}^p \\sum_{k=1}^r |S_{j,k}|$.

---

## 3. Convex Optimization Problem

The composite estimator is computed by solving the joint convex optimization program:

$$(\\hat{S}, \\hat{B}) = \\arg\\min_{S, B} \\frac{1}{2n} \\sum_{k=1}^r \\|y^{(k)} - X^{(k)}(S^{(k)} + B^{(k)})\\|_2^2 + \\lambda_s \\|S\\|_{1,1} + \\lambda_b \\|B\\|_{1,\\infty}$$

The reconstructed parameter matrix is given by $\\hat{\\Theta} = \\hat{S} + \\hat{B}$.

---

## 4. Key Theoretical Claims & Sample Complexity

Let $\\alpha \\in [0, 1]$ denote the feature overlap fraction and $s$ the number of relevant features per task:

| Estimator | Required Sample Size ($n$) | Boundary $\\alpha = 0$ (No Sharing) | Boundary $\\alpha = 1$ (Full Sharing) |
| :--- | :---: | :---: | :---: |
| **Independent Lasso** | $\\mathcal{O}(2s \\log p)$ | Optimal | Suboptimal |
| **$\\ell_1/\\ell_\\infty$ Regularizer** | $\\mathcal{O}((4 - 3\\alpha)s \\log p)$ | Highly Suboptimal ($\\approx 4s \\log p$) | Optimal ($\\approx s \\log p$) |
| **Dirty Model (Proposed)** | **$\\mathcal{O}((2 - \\alpha)s \\log p)$** | **Matches Lasso ($2s \\log p$)** | **Matches $\\ell_1/\\ell_\\infty$ ($s \\log p$)** |

> **Theorem 3 (Jalali et al.):** For all $\\alpha \\in (0, 1)$, $(2 - \\alpha)s \\log p$ is strictly lower than both baselines.

---

## 5. Python & CVXPY Implementation

Implemented using \`CVXPY\` in Python:

\`\`\`python
import cvxpy as cp
import numpy as np

def solve_dirty_model(X, Y, lambda_s, lambda_b):
    n, p = X.shape
    _, r = Y.shape
    
    S = cp.Variable((p, r))
    B = cp.Variable((p, r))
    
    loss = 0.5 / n * cp.sum_squares(Y - X @ (S + B))
    penalty_s = lambda_s * cp.norm1(S)
    penalty_b = lambda_b * cp.sum(cp.norm(B, 'inf', axis=1))
    
    objective = cp.Minimize(loss + penalty_s + penalty_b)
    problem = cp.Problem(objective)
    problem.solve(solver=cp.ECOS, verbose=False)
    
    return S.value + B.value
\`\`\`

---

## 6. Empirical Validation & Phase Transition Sweeps

Conducted Monte Carlo simulations on synthetic Gaussian designs ($p = 256$, $s = 16$) across three feature overlap scenarios:

### Empirical Phase Transition Thresholds (Control Parameter $\\theta$ for $\\ge 50\\%$ Exact Signed Support Recovery):

| Feature Overlap ($\\alpha$) | Dirty Model | Single-Task Lasso | $\\ell_1/\\ell_\\infty$ Regularizer |
| :---: | :---: | :---: | :---: |
| **$\\alpha = 0.30$ (Low Overlap)** | **$\\theta \\approx 1.0$** | $\\theta \\approx 2.0$ | $\\theta \\approx 3.0$ |
| **$\\alpha = 0.67$ (Boundary Case)** | **$\\theta \\approx 1.0$** | $\\theta \\approx 2.0$ | $\\theta \\approx 2.0$ |
| **$\\alpha = 0.80$ (High Overlap)** | **$\\theta \\approx 1.0$** | $\\theta \\approx 2.0$ | $\\theta \\approx 1.5$ |

**Conclusion:** The Dirty Model consistently triggers its phase transition at $\\theta \\approx 1.0$, empirically validating its sample optimality across all feature sharing regimes.`
};
