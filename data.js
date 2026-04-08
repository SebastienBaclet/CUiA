// Données complètes CUA & Outils IA
window.CUA_DATA = {
  piliers: {
    engagement: {
      name: "Engagement",
      color: "#8B5CF6",
      icon: "💪",
      description: "Soutenir l'auto-régulation émotionnelle, développer la conscience de soi et cultiver l'empathie pour un apprentissage efficace.",
      categories: {
        effort: "Soutenir l'effort et la persistance",
        interests: "Accueillir les intérêts et identités",
        emotion: "Développer la capacité émotionnelle"
      },
      tools: [
        {
          name: "LLM généraliste (ChatGPT, Claude, Gemini)",
          type: "LLM",
          description: "Modèles de langage polyvalents pour dialogues, objectifs et feedback personnalisés",
          relevance: { effort: 3, interests: 3, emotion: 2 },
          categories: ["effort", "interests", "emotion"],
          usageCases: [
            "Générer objectifs d'apprentissage contextualisés et adaptés aux intérêts",
            "Créer variations d'exercices à différents niveaux de complexité",
            "Engager dialogues réflexifs et questionnement socratique pour développement émotionnel"
          ],
          price: "Gratuit (limité) à 20$/mois",
          url: "https://chat.openai.com",
          tutorialUrl: "https://www.youtube.com/watch?v=MOAHS6QLfEg"
        },
        {
          name: "NotebookLM",
          type: "Plateforme",
          description: "Assistant IA qui transforme documents en savoirs accessibles (podcasts, flashcards, guides)",
          relevance: { effort: 2, interests: 2, emotion: 1 },
          categories: ["effort", "interests"],
          usageCases: [
            "Learning Guide avec questionnement structuré pour clarifier objectifs",
            "Flashcards et quiz auto-générés avec niveaux adaptés pour optimiser le défi",
            "Podcasts audio et cartes mentales pour diversifier formats et cultiver l'intérêt"
          ],
          price: "Gratuit",
          url: "https://notebooklm.google.com",
          tutorialUrl: "https://www.youtube.com/watch?v=mbJuqzHRufI"
        },
        {
          name: "Wooflash",
          type: "Plateforme",
          description: "Révision adaptative basée sur répétition espacée et neurosciences cognitives",
          relevance: { effort: 3, interests: 2, emotion: 1 },
          categories: ["effort", "interests"],
          usageCases: [
            "Exercices adaptatifs ajustant difficulté automatiquement selon performances",
            "Feedback immédiat et constructif orienté vers l'action",
            "Mode collaboratif et gamification pour révision en groupe et appartenance"
          ],
          price: "Gratuit (limité) / à partir de 39€/mois",
          url: "https://www.wooflash.com",
          tutorialUrl: "https://www.youtube.com/watch?v=Vm-0NWZYB2o"
        },
        {
          name: "MagicSchool AI",
          type: "Plateforme",
          description: "Suite complète de 60+ outils IA pour enseignants : génération de cours, quiz, différenciation",
          relevance: { effort: 3, interests: 3, emotion: 1 },
          categories: ["effort", "interests"],
          usageCases: [
            "Générer objectifs d'apprentissage différenciés selon niveaux et intérêts",
            "Créer quiz et exercices adaptatifs avec feedback personnalisé",
            "Produire activités engageantes et pertinentes culturellement"
          ],
          price: "Gratuit / Premium à partir de 9.99$/mois",
          url: "https://www.magicschool.ai",
          tutorialUrl: "https://www.youtube.com/watch?v=rOQ4mP1bCJE"
        },
        {
          name: "AnkiDroid",
          type: "Application",
          description: "Application de répétition espacée pour mémorisation optimale avec flashcards personnalisables",
          relevance: { effort: 3, interests: 2, emotion: 1 },
          categories: ["effort", "interests"],
          usageCases: [
            "Créer parcours de révision personnalisés optimisant l'effort selon courbe d'oubli",
            "Adapter contenu aux intérêts via flashcards multimodales (texte, image, audio)",
            "Suivi de progression pour feedback orienté vers action et motivation"
          ],
          price: "Gratuit (open source)",
          url: "https://play.google.com/store/apps/details?id=com.ichi2.anki",
          tutorialUrl: "https://www.youtube.com/watch?v=k6G6S64CGAg"
        },
        {
          name: "Speech-to-Text / Text-to-Speech",
          type: "Outil",
          description: "Solutions gratuites de conversion voix-texte bidirectionnelle pour accessibilité",
          relevance: { effort: 2, interests: 2, emotion: 1 },
          categories: ["effort", "interests"],
          usageCases: [
            "Google Docs saisie vocale, Dictée Windows/macOS pour prise de notes réduisant effort",
            "Microsoft Edge lecture, NaturalReader, Balabolka pour lecture vocale rendant contenus accessibles",
            "Whisper (OpenAI) via WhisperDesktop/Buzz, Otter.ai pour transcription multilingue"
          ],
          price: "Gratuit (solutions multiples disponibles)",
          url: "https://support.google.com/docs/answer/4492226",
          tutorialUrl: "https://www.youtube.com/watch?v=rRCPuMUw-HM"
        },
        {
          name: "Tutoring Systems (Socratic, MATHia)",
          type: "Plateforme",
          description: "Systèmes de tutorat IA fournissant guidance étape par étape avec hints adaptatifs",
          relevance: { effort: 2, interests: 1, emotion: 1 },
          categories: ["effort"],
          usageCases: [
            "Hints et retours adaptatifs soutenant persistance face aux difficultés",
            "Pratique sans jugement d'erreurs pour environnement d'apprentissage sécurisant",
            "Support 24/7 avec feedback orienté vers action et compréhension"
          ],
          price: "Gratuit à enterprise",
          url: "https://socratic.org",
          tutorialUrl: "https://www.youtube.com/watch?v=cEJbkk07akg"
        },
        {
          name: "DidakBot (bot pédagogique open source)",
          type: "Bot pédagogique",
          description: "Bot pédagogique open source pour concevoir des activités différenciées, des fiches de préparation et des adaptations inclusives.",
          relevance: { effort: 3, interests: 3, emotion: 2 },
          categories: ["effort", "interests", "emotion"],
          usageCases: [
            "Co-construire des séances en tenant compte des besoins DYS, TDAH, allophones et autres élèves à besoins éducatifs particuliers.",
            "Générer rapidement des variantes d’exercices pour différencier par niveau de difficulté et modalité d’entrée (texte, image, oral).",
            "Proposer des idées d’adaptations pour l’évaluation (temps supplémentaire, consignes simplifiées, supports visuels)."
          ],
          price: "Gratuit (open source)",
          url: "https://novapeda.eu/didakbot2",
          tutorialUrl: "https://novapeda.eu/didakbot2"
        }
      ],
      combinations: [
        {
          name: "Combinaison Motivation Complète",
          description: "Approche holistique couvrant effort, intérêts et feedback",
          tools: ["LLM généraliste", "NotebookLM", "Wooflash"],
          integration: "LLM génère objectifs personnalisés et variations d'exercices, NotebookLM transforme en Learning Guide structuré avec multiples formats, Wooflash assure révision adaptative avec feedback immédiat."
        },
        {
          name: "Combinaison Différenciation Pédagogique",
          description: "Outils pour adapter l'enseignement aux besoins individuels",
          tools: ["MagicSchool AI", "AnkiDroid", "Speech-to-Text/TTS"],
          integration: "MagicSchool génère contenus différenciés, AnkiDroid personnalise révision selon rythme individuel, Speech-to-Text/TTS élimine barrières sensorielles et motrices."
        }
      ]
    },

    representation: {
      name: "Représentation",
      color: "#3B82F6",
      icon: "✨",
      description: "Éveiller la curiosité en offrant des choix, en optimisant la pertinence et en cultivant la joie et le jeu.",
      categories: {
        perception: "Options concernant la Perception",
        language: "Langage et Symboles",
        knowledge: "Construction des Connaissances"
      },
      tools: [
        {
          name: "LLM généraliste (ChatGPT, Claude, Gemini)",
          type: "LLM",
          description: "Génération de contenus dans formats variés et adaptés aux besoins perceptifs",
          relevance: { perception: 3, language: 3, knowledge: 3 },
          categories: ["perception", "language", "knowledge"],
          usageCases: [
            "Générer versions simplifiées ou détaillées de contenus pour personnalisation affichage",
            "Traduction et explication de concepts complexes dans langage accessible",
            "Création de supports multimodaux facilitant construction des connaissances"
          ],
          price: "Gratuit (limité) à 20$/mois",
          url: "https://chat.openai.com",
          tutorialUrl: "https://www.youtube.com/watch?v=MOAHS6QLfEg"
        },
        {
          name: "NotebookLM",
          type: "Plateforme",
          description: "Transformation de documents en multiples formats accessibles (podcasts, cartes, guides)",
          relevance: { perception: 2, language: 2, knowledge: 3 },
          categories: ["perception", "language", "knowledge"],
          usageCases: [
            "Générer podcasts audio à partir de textes pour perception auditive",
            "Créer cartes mentales visuelles pour perception visuelle et spatiale",
            "Produire synthèses structurées facilitant construction progressive des connaissances"
          ],
          price: "Gratuit",
          url: "https://notebooklm.google.com",
          tutorialUrl: "https://www.youtube.com/watch?v=mbJuqzHRufI"
        },
        {
          name: "Text-to-Speech (Readest, Speechify)",
          type: "Outil",
          description: "Lecture vocale de textes pour accessibilité auditive avec voix naturelles et traduction instantanée",
          relevance: { perception: 3, language: 2, knowledge: 1 },
          categories: ["perception", "language"],
          usageCases: [
            "Convertir tout texte en audio naturel pour déficiences visuelles ou dyslexie",
            "Personnaliser voix, vitesse, intonation pour préférences perceptives individuelles",
            "Lecture simultanée texte-audio pour apprentissage multimodal"
            "traduction instantannée des pages de l'ebook"
          ],
          price: "Gratuit / Premium 10€/mois",
          url: "https://readest.com/fr",
          tutorialUrl: "https://youtu.be/jUE06fYCB9Q"
        },
        {
          name: "OCR Tools (Text Fairy, FreeOCR, Adobe Scan)",
          type: "Outil",
          description: "Solutions gratuites de reconnaissance optique pour manuscrits et documents imprimés",
          relevance: { perception: 3, language: 1, knowledge: 1 },
          categories: ["perception"],
          usageCases: [
            "Text Fairy (Android gratuit) : numériser documents et manuscrits en texte éditable",
            "FreeOCR (Windows gratuit) : convertir PDFs et images en texte pour accessibilité",
            "Adobe Scan, Google Keep : OCR gratuit pour smartphone avec export multiple formats"
          ],
          price: "Gratuit (multiples solutions disponibles)",
          url: "https://play.google.com/store/apps/details?id=com.renard.ocr",
          tutorialUrl: "https://www.youtube.com/watch?v=sNb0_HDcoH8"
        },
        {
          name: "Seeing AI / Be My Eyes",
          type: "Accessibilité",
          description: "Description vocale d'images et scènes pour personnes malvoyantes",
          relevance: { perception: 3, language: 1, knowledge: 1 },
          categories: ["perception"],
          usageCases: [
            "Décrire images, graphiques, schémas vocalement pour accès au contenu visuel",
            "Lire textes manuscrits et imprimés en temps réel",
            "Reconnaissance d'objets et personnes pour contexte situationnel"
          ],
          price: "Gratuit",
          url: "https://www.microsoft.com/en-us/ai/seeing-ai",
          tutorialUrl: "https://www.youtube.com/watch?v=az7FIueAY3A"
        },
        {
          name: "Cartable Fantastique",
          type: "Accessibilité",
          description: "Ressources et extensions pour adapter supports aux élèves DYS (dyslexie, dyspraxie)",
          relevance: { perception: 2, language: 3, knowledge: 1 },
          categories: ["perception", "language"],
          usageCases: [
            "Adaptation polices et espacement pour faciliter lecture (dyslexie)",
            "Outils de compensation pour dyspraxie (règles, claviers adaptés)",
            "Extension LibreOffice pour accessibilité automatique des documents"
          ],
          price: "Gratuit",
          url: "https://www.cartablefantastique.fr",
          tutorialUrl: "https://www.youtube.com/watch?v=k6G6S64CGAg"
        },
        {
          name: "Immersive Reader (Microsoft)",
          type: "Outil",
          description: "Suite d'outils pour améliorer lecture et compréhension (intégré Office/Edge)",
          relevance: { perception: 2, language: 3, knowledge: 2 },
          categories: ["perception", "language", "knowledge"],
          usageCases: [
            "Lecture vocale intégrée avec surlignage synchronisé pour perception multimodale",
            "Espacement, polices, tailles adaptables pour préférences visuelles",
            "Dictionnaire visuel et traducteur intégré pour clarification vocabulaire"
          ],
          price: "Gratuit (intégré Office/Edge)",
          url: "https://www.onenote.com/learningtools",
          tutorialUrl: "https://www.youtube.com/watch?v=RkzuBaxk50g"
        },
        {
          name: "DeepL / Google Translate",
          type: "Outil",
          description: "Traduction automatique multilingue haute qualité avec contexte",
          relevance: { perception: 1, language: 3, knowledge: 1 },
          categories: ["language"],
          usageCases: [
            "Traduire contenus pour apprenants multilingues et allophones",
            "Accès aux ressources en langues étrangères pour perspectives multiples",
            "Support pour familles non-francophones dans suivi scolaire"
          ],
          price: "Gratuit / Pro 8€/mois (DeepL)",
          url: "https://www.deepl.com",
          tutorialUrl: "https://www.youtube.com/watch?v=az7FIueAY3A"
        }
      ],
      combinations: [
        {
          name: "Combinaison Accessibilité Sensorielle",
          description: "Éliminer barrières sensorielles pour accès universel aux contenus",
          tools: ["Seeing AI", "Text-to-Speech", "OCR Tools", "Cartable Fantastique"],
          integration: "Seeing AI décrit images vocalement, Text-to-Speech lit tous textes, OCR Tools numérise documents physiques, Cartable Fantastique adapte pour DYS. Couverture complète des besoins sensoriels."
        },
        {
          name: "Combinaison Multimodale",
          description: "Multiples formats pour construction robuste des connaissances",
          tools: ["LLM généraliste", "NotebookLM"],
          integration: "LLM génère contenus variés, NotebookLM les transforme en formats multiples (podcasts, cartes mentales, guides structurés). Approche multimodale texte + audio + visuel sans outil propriétaire lourd."
        }
      ]
    },

    action: {
      name: "Action et Expression",
      color: "#10B981",
      icon: "🧠",
      description: "Développer la capacité émotionnelle et l'auto-régulation, reconnaître les attentes et promouvoir la réflexion.",
      categories: {
        expression: "Expression et Communication",
        physical: "Action Physique",
        executive: "Fonctions Exécutives"
      },
      tools: [
        {
          name: "LLM généraliste (ChatGPT, Claude, Gemini)",
          type: "LLM",
          description: "Génération et assistance à l'écriture multiformat pour expression diversifiée",
          relevance: { expression: 3, physical: 1, executive: 3 },
          categories: ["expression", "executive"],
          usageCases: [
            "Générer textes, scripts, présentations variés pour expression multimodale",
            "Assistance à l'écriture avec suggestions contextuelles et feedback constructif",
            "Créer plans détaillés et décomposer tâches complexes pour fonctions exécutives"
          ],
          price: "Gratuit (limité) à 20$/mois",
          url: "https://chat.openai.com",
          tutorialUrl: "https://www.youtube.com/watch?v=MOAHS6QLfEg"
        },
        {
          name: "Canva",
          type: "Plateforme",
          description: "Création de designs visuels avec IA intégrée (Magic Media, templates intelligents)",
          relevance: { expression: 3, physical: 2, executive: 1 },
          categories: ["expression", "physical"],
          usageCases: [
            "Créer présentations, infographies, vidéos facilement pour expression créative",
            "Templates intelligents adaptés au contenu pour réduire charge cognitive",
            "Génération d'images avec Magic Media pour alternatives à l'écriture"
          ],
          price: "Gratuit / Pro 12€/mois",
          url: "https://www.canva.com",
          tutorialUrl: "https://www.youtube.com/watch?v=mbJuqzHRufI"
        },
        {
          name: "NotebookLM",
          type: "Plateforme",
          description: "Synthèse, organisation et création de contenus structurés automatiquement",
          relevance: { expression: 2, physical: 0, executive: 3 },
          categories: ["expression", "executive"],
          usageCases: [
            "Synthétiser documents en formats variés pour expression adaptée aux besoins",
            "Créer structures et plans automatiquement pour soutenir planification",
            "Organiser informations avec cartes mentales pour gestion de projet"
          ],
          price: "Gratuit",
          url: "https://notebooklm.google.com",
          tutorialUrl: "https://www.youtube.com/watch?v=mbJuqzHRufI"
        },
        {
          name: "Handy",
          type: "Outil",
          description: "Transcription vocale gratuite, hors ligne, open source basée sur Whisper d'OpenAI",
          relevance: { expression: 3, physical: 3, executive: 1 },
          categories: ["expression", "physical"],
          usageCases: [
            "Dicter compositions au lieu de taper pour difficultés motrices ou préférence orale",
            "Transcrire présentations orales automatiquement en temps réel",
            "Fonctionnement hors ligne pour confidentialité et accessibilité universelle"
          ],
          price: "Gratuit (open source)",
          url: "https://github.com/cjpais/Handy",
          tutorialUrl: "https://www.youtube.com/watch?v=sNb0_HDcoH8"
        },
        {
          name: "Grammarly",
          type: "Outil",
          description: "Assistant d'écriture avec corrections IA et feedback explicatif en temps réel",
          relevance: { expression: 2, physical: 1, executive: 2 },
          categories: ["expression", "executive"],
          usageCases: [
            "Corrections en temps réel orthographe et grammaire pour expression écrite fluide",
            "Suggestions de clarté et concision pour amélioration continue",
            "Feedback explicatif pour apprentissage des conventions linguistiques"
          ],
          price: "Gratuit / Premium 12€/mois",
          url: "https://www.grammarly.com",
          tutorialUrl: "https://www.youtube.com/watch?v=az7FIueAY3A"
        }
      ],
      combinations: [
        {
          name: "Combinaison Création Multimodale",
          description: "Expression diversifiée au-delà de l'écriture traditionnelle",
          tools: ["Canva", "LLM généraliste"],
          integration: "Canva permet de créer des supports visuels (présentations, infographies, affiches), tandis que le LLM aide à structurer et rédiger les contenus. Ensemble, ils couvrent texte + visuel sans recourir à une suite vidéo propriétaire."
        },
        {
          name: "Combinaison Accessibilité Physique",
          description: "Alternative simple au clavier pour difficultés motrices",
          tools: ["Handy"],
          integration: "Handy fournit une dictée vocale hors ligne et open source, permettant de rédiger textes et réponses sans clavier, tout en respectant la confidentialité des données."
        }
      ]
    }
  },

  combinaisons: [
    {
      nom: "Motivation Complète",
      pilier: "engagement",
      emoji: "💡",
      outils: ["LLM généraliste", "NotebookLM", "Wooflash"],
      integration: "LLM génère objectifs personnalisés et variations d'exercices, NotebookLM transforme en Learning Guide structuré avec multiples formats, Wooflash assure révision adaptative avec feedback immédiat."
    },
    {
      nom: "Différenciation Pédagogique",
      pilier: "engagement",
      emoji: "🎯",
      outils: ["MagicSchool AI", "AnkiDroid", "Speech-to-Text/TTS"],
      integration: "MagicSchool génère contenus différenciés, AnkiDroid personnalise révision selon rythme individuel, Speech-to-Text/TTS élimine barrières sensorielles et motrices."
    },
    {
      nom: "Accessibilité Sensorielle",
      pilier: "representation",
      emoji: "👁️",
      outils: ["Seeing AI", "Text-to-Speech", "OCR Tools", "Cartable Fantastique"],
      integration: "Seeing AI décrit images vocalement, Text-to-Speech lit tous textes, OCR Tools numérise documents physiques, Cartable Fantastique adapte pour DYS. Couverture complète des besoins sensoriels."
    },
    {
      nom: "Multimodale",
      pilier: "representation",
      emoji: "🎨",
      outils: ["LLM généraliste", "NotebookLM"],
      integration: "LLM génère contenus variés, NotebookLM les transforme en formats multiples (podcasts, cartes mentales, guides d’étude). Approche multimodale complète texte + audio + visuel, sans dépendre d’un tableau blanc propriétaire."
    },
    {
      nom: "Création Multimodale",
      pilier: "action",
      emoji: "🎬",
      outils: ["Canva", "LLM généraliste"],
      integration: "Canva crée designs visuels et infographies, LLM génère textes structurés (scripts, légendes, plans). Ensemble, ils permettent de travailler plusieurs modes d’expression sans outil vidéo complexe."
    },
    {
      nom: "Accessibilité Physique",
      pilier: "action",
      emoji: "♿",
      outils: ["Handy"],
      integration: "Handy fournit une transcription vocale hors ligne et open source, permettant aux élèves ayant des difficultés motrices d’écrire et de interagir avec les supports numériques sans clavier."
    }
  ]
};
