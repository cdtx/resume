var data = {
    "fr": {
        "me": {
            "last_name": "DUTRIEUX",
            "first_name": "Cyril",
            "avatar": "avatar.jpg",
            "title": "Développeur logiciel - Freelance",
            "description_short" : ["Ingénieur senior en développement informatique, spécialisé en logiciel embarqué, sécurité numérique, Python et développement web"],
            "description": [
                "Diplomé de l'ENSEA, spécialisé dans le logiciel embarqué et l'électronique numérique.",
                "Passionné, curieux et ouvert d'esprit.",
                "En 10 ans j'ai cultivé des compétences allant du monde de l'électronique à celui du web.",
                "Je suis par nature en veille technologique permanente.",
                "36 ans, marié, 2 enfants.",
                "Je pratique le cyclisme et la course à pied en compétition",
            ],
            "mobility" : "Remote privilégié. Déplacements ponctuels possibles sur Lyon ou Grenoble",
            "tjm" : "400€ HT",
            "contact" : {
                "location": "Saint-Vulbas (01)",
                "phone": "+336 81 21 92 48",
                "email": "cyril.dutrieux@gmail.com",
                "linkedin": "https://fr.linkedin.com/in/cyrildutrieux",
                "github": "https://github.com/cdtx"
            }
        },
        "skills" : [
            {"title": "Systèmes embarqués", "skills": ["C/C++", "PIC", "ESP8266", "ESP32", "QNX", "Linux", "Buildroot", "Raspberry Pi", "FreeRTOS", "MicroPython", "I²C", "SPI", "CAN", "USB", "TCP/IP", "Wifi", "MQTT", "VHDL", "Verilog"]},
            {"title": "Développement PC", "skills": ["Linux", "C/C++", "Python", "Qt", "PyQt", "OOP", "MVC"]},
            {"title": "Web", "skills": ["Python", "Django", "REST API", "HTML", "Css/Less/Sass", "Javascript", "Vue.js", "Scrapy", "Docker"]},
            {"title": "Environnement de travail", "skills": ["Linux", "Bash", "Vim", "TMux", "makefile", "CMake", "Git", "Subversion", "Jira", "Jenkins"]},
            {"title": "Autres", "skills": ["Design 3D", "Impression 3D"]},
            {"title": "", "skills": [""]},
        ],
        "experiences": [
            {
                "title": "Ingénieur logiciel - freelance (depuis 2016)",
                "description" : [
                    "Intégré à une équipe de marketing et SEO d'une entreprise de vente en ligne, mise en place d'outils d'analyse des ventes et du marché",
                    "- Collecte de données produit",
                    "- Collecte de données de traffic et ventes",
                    "- Analyse de performances Web",
                    "- Déploiement de ces outils sur un espace web local",
                ],
                "keywords": ["Python, scrapy, eBay developper, mercadolibre developper, django, vue.js, docker, webpagetest"],
            },
            {
                "title": "Création de startup - porteye.fr (2016-2018)",
                "description": [
                    "Plateforme d'aide à la vente de voitures d'occasion.",
                    "La vente est fiabilisée par un diagnostique et des tests filmés, réalisés en concession.",
                    "Co-créateur, j'ai entre autre pris en charge la partie technique de la plateforme.",
                    "- Architecture et choix de solutions techniques.",
                    "- Responsable développement Web backend et frontend",
                    "- Configuration AWS"
                ],
                "keywords": [
                    "Python, Django, backbone.js, HTML, Saas, AWS",
                ],
                "company": {
                    "logo": "porteye.png"
                }
            },
            {
                "title": "Développeur logiciel embarqué sécurisé (2014-2016)",
                "description": [
                    "Travail sur le système d'exploitation propriétaire Java Card pour microcontroleurs sécurisés, pour le domaine bancaire et la téléphonie.",
                    "- Développement et architecture logiciel embarqué",
                    "- Contraintes sécuritaires",
                    "- Formé et réferent sur les spécifications GlobalPlatform"
                ],
                "keywords": [
                    "C, ARM, AVR, GlobalPlatform, Java Card, NFC, ISO 7816, Cryptography basics",
                ],
                "company": {
                    "name": "Inside Secure",
                    "logo": "insidesecure.png"
                }
            },
            {
                "title": "Expert Python (2014-2016)",
                "description": [
                    "Definition, architecture, developpement and maintient d'un framework de dialogue PC / carte à puce.",
                    "J'ai démarré ce projet de ma propre initiative, puis intégré un stagiaire, et géré la collaboration de certains membre de l'équipe R&D."
                ],
                "keywords": [
                    "Python, pyscard, SVN"
                ],
                "company": {
                    "name": "Inside Secure",
                    "logo": "insidesecure.png"
                }
            },
            {
                "title": "Ingénieur outils (2012 - 2014)",
                "description": [
                    "La société s'équipe d'une plateforme d'émulation hardware sur FPGA.",
                    "J'ai eu à écrire et maintenir un logiciel d'accès à cette plateforme. (accès mémoire, breakpoints, etc.)",
                    "",
                    "Définition d'un formalisme de description du mapping mémoire d'un composant digital.",
                    "Développement d'une librairie capable de charger et simuler le composant."
                ],
                "keywords": [
                    "C/C++, Python, Qt, XML, FPGA, JTAG",
                ],
                "company": {
                    "name": "Inside Secure",
                    "logo": "insidesecure.png"
                }
            },
            {
                "title": "Ingénieur en logiciel embarqué (2008-2012)",
                "description": [
                    "Développement d'une nouvelle génération de pupitres conducteur",
                    "Répartition automatique des applications sur l'ensemble des consoles",
                    "Redondance en cas de panne d'une console",
                    "",
                    "Déploiement d'un prototype d'équipement de maintenance à distance d'une flotte de trains",
                    "Lecture de données sur le bus interne du train, et téléversement vers sol en 3G"
                ],
                "keywords" : [
                    "C, C#, QNX, Photon, ClearCase, Perl",
                ],
                "company": {
                    "name": "Alstom transport",
                    "logo": "alstom.jpg"
                },
            },
        ],
        "education": [
            {
                "title": "Ingénieur en électronique et systèmes embarqués (2008)",
                "description": [
                    "En double diplome avec un master recherche",
                    "    - Systèmes d'exploitation temps réel",
                    "    - Systèmes numériques (FPGA, Verilog)",
                    "    - Electronique, numérique, analogique, de puissance"
                ],
                "company": {
                    "name": "ENSEA",
                    "logo": "ensea.png"
                }
            },
            {
                "title" : "BTS en mécanique et automatismes industriels",
                "description" : [],
                "company" : {
                    "name": "",
                    "logo": ""
                }
            },
        ],
        "languages" : [
            {
                "name": "Français",
                "short": "fr",
                "eval": 5
            },
            {
                "name": "Anglais",
                "short": "gb",
                "eval": 3
            }
        ]
    }
}

