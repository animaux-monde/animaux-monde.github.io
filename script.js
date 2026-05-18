// DONNÉES DU PROJET

const emojisAnimaux = {
    "Vache": "🐄", "Poule": "🐔", "Mouton": "🐑",
    "Lion": "🦁", "Éléphant": "🐘", "Girafe": "🦒",
    "Ours": "🐻", "Castor": "🦫", "Puma": "🐆",
    "Tigre": "🐯", "Panda": "🐼", "Paon": "🦚",
    "Manchot": "🐧", "Phoque": "🦭", "Morse": "🦈",
    "Dauphin": "🐬", "Baleine": "🐋", "Pieuvre": "🐙",
};

const seances = [
    {
        titre: "Animaux de la savane",
        emoji: "🌍",
        theme: "Afrique",
        date: "20/05/2026",
        description: "Découverte des animaux de la savane africaine et de leur continent.",
        animaux: ["Lion", "Éléphant", "Girafe"],
        objectif: "Attribuer les animaux de la savane à leur continent (Afrique) sur la carte",
        activite: "Jeu de motricité sur les animaux d'Afrique",
        quiz: [
            { question: "Sur quel continent vit le lion ?", reponse: "Afrique" },
            { question: "Quel grand animal gris à trompe vit en Afrique ?", reponse: "Éléphant" },
            { question: "Quel animal de la savane a un très long cou ?", reponse: "Girafe" },
            { question: "Comment s'appelle le milieu naturel des animaux de cette séance ?", reponse: "Savane" },
            { question: "Cite un animal que l'on trouve en Afrique (parmi ceux vus en séance).", reponses: ["Lion", "Éléphant", "Girafe"] }
        ]
    },
    {
        titre: "Animaux de la forêt",
        emoji: "🌲",
        theme: "Amérique",
        date: "27/05/2026",
        description: "Découverte des animaux des forêts américaines.",
        animaux: ["Ours", "Castor", "Puma"],
        objectif: "Donner la nourriture à l'animal correspondant",
        activite: "Jeu de tri et jeu sportif sur les animaux de la forêt",
        quiz: [
            { question: "Sur quel continent vit le puma ?", reponse: "Amérique" },
            { question: "Quel animal construit des barrages dans les rivières ?", reponse: "Castor" },
            { question: "Quel grand animal brun hiberne en forêt ?", reponse: "Ours" },
            { question: "Comment s'appelle le milieu naturel des animaux de cette séance ?", reponse: "Forêt" },
            { question: "Cite un animal que l'on trouve en Amérique (parmi ceux vus en séance).", reponses: ["Ours", "Castor", "Puma"] }
        ]
    },
    {
        titre: "Animaux de la ferme",
        emoji: "🚜",
        theme: "Europe",
        date: "03/06/2026",
        description: "Découverte des animaux de la ferme européenne et de leurs produits.",
        animaux: ["Vache", "Poule", "Mouton"],
        objectif: "Associer chaque animal de la ferme à sa production (lait, œuf, laine…)",
        activite: "Memory Géant : associer chaque animal à sa production",
        quiz: [
            { question: "Sur quel continent trouve-t-on la plupart des fermes de cette séance ?", reponse: "Europe" },
            { question: "Quel animal de la ferme nous donne du lait ?", reponse: "Vache" },
            { question: "Quel animal de la ferme pond des œufs ?", reponse: "Poule" },
            { question: "Quel animal de la ferme nous donne de la laine ?", reponse: "Mouton" },
            { question: "Comment appelle-t-on l'endroit où vivent ces animaux ?", reponse: "Ferme" }
        ]
    },
    {
        titre: "Animaux de la jungle",
        emoji: "🌿",
        theme: "Asie",
        date: "10/06/2026",
        description: "Découverte des animaux de la jungle asiatique et de leur habitat.",
        animaux: ["Tigre", "Panda", "Paon"],
        objectif: "Reconnaître les différents habitats",
        activite: "Débat mouvement : associer l'animal au bon habitat",
        quiz: [
            { question: "Sur quel continent vit le tigre ?", reponse: "Asie" },
            { question: "Quel animal noir et blanc mange du bambou ?", reponse: "Panda" },
            { question: "Quel oiseau coloré peut déployer un magnifique éventail de plumes ?", reponse: "Paon" },
            { question: "Comment s'appelle le milieu naturel des animaux de cette séance ?", reponse: "Jungle" },
            { question: "Cite un animal que l'on trouve en Asie (parmi ceux vus en séance).", reponses: ["Tigre", "Panda", "Paon"] }
        ]
    },
    {
        titre: "Animaux des pôles",
        emoji: "🧊",
        theme: "Arctique / Antarctique",
        date: "17/06/2026",
        description: "Découverte des animaux vivant dans les régions polaires.",
        animaux: ["Manchot", "Phoque", "Morse"],
        objectif: "Classer les animaux polaires par lieu de vie",
        activite: "Jeu d'expression et jeu de mémoire sur les animaux des pôles",
        quiz: [
            { question: "Comment appelle-t-on les régions très froides situées aux deux bouts du monde ?", reponse: "Pôles" },
            { question: "Quel oiseau noir et blanc ne vole pas mais nage très bien ?", reponse: "Manchot" },
            { question: "Quel animal des pôles possède de grandes défenses et vit sur la glace ?", reponse: "Morse" },
            { question: "Quel animal des pôles a un corps allongé recouvert de fourrure et nage dans les eaux froides ?", reponse: "Phoque" },
            { question: "Cite un animal que l'on trouve aux pôles (parmi ceux vus en séance).", reponses: ["Manchot", "Phoque", "Morse"] }
        ]
    },
    {
        titre: "Animaux des océans",
        emoji: "🌊",
        theme: "Monde",
        date: "24/06/2026",
        description: "Découverte des animaux marins et bilan final du projet.\nRécupération des cartes !",
        animaux: ["Dauphin", "Baleine", "Pieuvre"],
        objectif: "Replacer sur le planisphère l'ensemble des animaux vus",
        activite: "Activité manuelle et tri global de tous les animaux vus",
        quiz: [
            { question: "Dans quel milieu vivent les animaux de cette séance ?", reponse: "Océan" },
            { question: "Quel grand mammifère marin est le plus grand animal du monde ?", reponse: "Baleine" },
            { question: "Quel animal marin très intelligent communique par sons et sauts ?", reponse: "Dauphin" },
            { question: "Quel animal marin a huit tentacules ?", reponse: "Pieuvre" },
            { question: "Cite un animal que l'on trouve dans les océans (parmi ceux vus en séance).", reponses: ["Dauphin", "Baleine", "Pieuvre"] }
        ]
    }
];

// NAVIGATION

function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    document.querySelectorAll(".nav-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("onclick").includes("'" + id + "'"));
    });
}

// QUIZ — chargement dynamique

var quizSeanceIndex = -1; // -1 = quiz général

function chargerQuiz(seanceIndex) {
    quizSeanceIndex = seanceIndex;
    const quizContainer = document.getElementById("quizContainer");
    const quizTitre = document.getElementById("quizTitre");
    const btnRetour = document.getElementById("btnRetourSeances");

    quizContainer.innerHTML = "";

    if (seanceIndex === -1) {
        // Quiz général (onglet nav)
        quizTitre.textContent = "Quiz";
        btnRetour.style.display = "none";
        const questions = [
            { question: "Quel animal vit dans la savane ?", reponse: "Lion" },
            { question: "Quel animal donne du lait à la ferme ?", reponse: "Vache" }
        ];
        questions.forEach(function(q, i) { afficherQuestion(q, "g" + i, quizContainer); });
    } else {
        // Quiz d'une séance
        const seance = seances[seanceIndex];
        quizTitre.textContent = "Quiz — " + seance.emoji + " " + seance.titre;
        btnRetour.style.display = "inline-flex";
        seance.quiz.forEach(function(q, i) { afficherQuestion(q, seanceIndex + "_" + i, quizContainer); });
    }

    showSection("quiz");
}

function afficherQuestion(q, id, container) {
    const div = document.createElement("div");
    div.classList.add("quiz-card");
    div.innerHTML =
        '<p class="quiz-question">' + q.question + '</p>' +
        '<div class="quiz-input-row">' +
            '<input type="text" id="reponse_' + id + '" placeholder="Votre réponse…">' +
            '<button onclick="verifierReponse(\'' + id + '\')">Valider</button>' +
        '</div>' +
        '<p class="quiz-resultat" id="resultat_' + id + '"></p>';
    container.appendChild(div);

    // Valider avec Entrée
    div.querySelector("input").addEventListener("keydown", function(e) {
        if (e.key === "Enter") verifierReponse(id);
    });
}

function verifierReponse(id) {
    const input = document.getElementById("reponse_" + id).value.trim().toLowerCase();
    const resultat = document.getElementById("resultat_" + id);

    // Récupère la question correspondante
    var q;
    if (id.startsWith("g")) {
        var idx = parseInt(id.slice(1));
        q = [
            { question: "Quel animal vit dans la savane ?", reponse: "Lion" },
            { question: "Quel animal donne du lait à la ferme ?", reponse: "Vache" }
        ][idx];
    } else {
        var parts = id.split("_");
        q = seances[parseInt(parts[0])].quiz[parseInt(parts[1])];
    }

    // Accepte reponse (string) ou reponses (tableau)
    var bonnes = q.reponses
        ? q.reponses.map(function(r) { return r.toLowerCase(); })
        : [q.reponse.toLowerCase()];

    if (bonnes.indexOf(input) !== -1) {
        resultat.textContent = "✅ Bonne réponse !";
        resultat.className = "quiz-resultat correct";
    } else {
        resultat.textContent = "❌ Pas tout à fait… La réponse était : " + (q.reponses ? q.reponses.join(" / ") : q.reponse);
        resultat.className = "quiz-resultat incorrect";
    }
}

function retourDepuisQuiz() {
    showSection("seances");
}

// Lier le bouton Quiz de la nav au quiz général
document.querySelector(".nav-btn[onclick*=\"'quiz'\"]").addEventListener("click", function() {
    chargerQuiz(-1);
});

// SÉANCES — LOGIQUE DE VERROUILLAGE

function parseDate(str) {
    const parts = str.split("/");
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}

function toggleDetails(index) {
    const details = document.getElementById("details-" + index);
    const footer = document.getElementById("footer-" + index);
    const arrow = document.getElementById("arrow-" + index);
    const isOpen = details.classList.contains("open");
    details.classList.toggle("open", !isOpen);
    if (footer) footer.style.display = isOpen ? "none" : "flex";
    arrow.textContent = isOpen ? "▼" : "▲";
}

const listeSeances = document.getElementById("listeSeances");
const today = new Date();
today.setHours(0, 0, 0, 0);

seances.forEach(function(seance, index) {
    const seanceDate = parseDate(seance.date);
    const unlocked = seanceDate <= today;

    const div = document.createElement("div");
    div.classList.add("seance-item");

    if (!unlocked) {
        div.classList.add("seance-locked");
        div.innerHTML =
            '<div class="seance-header seance-header-locked">' +
                '<div class="seance-left">' +
                    '<span class="seance-emoji">' + seance.emoji + '</span>' +
                    '<div>' +
                        '<div class="seance-titre">' + seance.titre + '</div>' +
                        '<div class="seance-meta">' + seance.theme + ' · Disponible le ' + seance.date + '</div>' +
                    '</div>' +
                '</div>' +
                '<span class="seance-lock">🔒</span>' +
            '</div>';
    } else {
        const animauxTags = seance.animaux.map(function(a) {
            return '<span class="animal-tag">' + (emojisAnimaux[a] || "🐾") + ' ' + a + '</span>';
        }).join("");

        div.innerHTML =
            '<div class="seance-header" onclick="toggleDetails(' + index + ')">' +
                '<div class="seance-left">' +
                    '<span class="seance-emoji">' + seance.emoji + '</span>' +
                    '<div>' +
                        '<div class="seance-titre">' + seance.titre + '</div>' +
                        '<div class="seance-meta">' + seance.theme + ' · ' + seance.date + '</div>' +
                    '</div>' +
                '</div>' +
                '<span class="seance-arrow" id="arrow-' + index + '">▼</span>' +
            '</div>' +
            '<div class="seance-details" id="details-' + index + '">' +
                '<p class="seance-desc">' + seance.description + '</p>' +
                '<p class="seance-info">🎯 <strong>Objectif :</strong> ' + seance.objectif + '</p>' +
                '<p class="seance-info">🎲 <strong>Activité :</strong> ' + seance.activite + '</p>' +
                '<div class="animaux-list">' + animauxTags + '</div>' +
            '</div>' +
            '<div class="seance-details-footer" id="footer-' + index + '" style="display:none">' +
                '<button class="btn-quiz-seance" onclick="chargerQuiz(' + index + ')">🧠 Quiz de cette séance</button>' +
            '</div>';
    }

    listeSeances.appendChild(div);
});

// COLLECTION — animaux débloqués en couleur, verrouillés en grisé sans nom

const collectionContainer = document.getElementById("collectionContainer");

seances.forEach(function(seance) {
    const seanceDate = parseDate(seance.date);
    const unlocked = seanceDate <= today;

    seance.animaux.forEach(function(animal) {
        const carte = document.createElement("div");
        carte.classList.add("carte");

        if (unlocked) {
            carte.style.cursor = "pointer";
            carte.title = "Voir la carte de " + animal;
            carte.onclick = (function(a) {
                return function() { ouvrirModal(a); };
            })(animal);
            carte.innerHTML =
                '<div style="font-size:2rem;margin-bottom:8px">' + (emojisAnimaux[animal] || "🐾") + '</div>' +
                '<h4>' + animal + '</h4>' +
                '<p>' + seance.titre + '</p>';
        } else {
            carte.classList.add("carte-locked");
            carte.innerHTML =
                '<div class="carte-locked-emoji">' + (emojisAnimaux[animal] || "🐾") + '</div>' +
                '<div class="carte-locked-lock">🔒</div>';
        }

        collectionContainer.appendChild(carte);
    });
});

// MODALE CARTE ANIMAL

function ouvrirModal(animal) {
    var path = "./cartes/" + animal + ".png";
    var modal = document.getElementById("carteModal");
    var img = document.getElementById("carteModalImg");
    var nom = document.getElementById("carteModalNom");
    var dl = document.getElementById("carteModalDl");

    img.src = path;
    img.alt = "Carte de " + animal;
    nom.textContent = animal;
    dl.href = "#";
    dl.onclick = function(e) {
        e.preventDefault();
        fetch(path)
            .then(function(r) { return r.blob(); })
            .then(function(blob) {
                var url = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.href = url;
                a.download = animal;
                a.click();
                URL.revokeObjectURL(url);
            });
    };

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function fermerModalBtn() {
    document.getElementById("carteModal").classList.remove("open");
    document.body.style.overflow = "";
}

function fermerModal(e) {
    if (e.target === document.getElementById("carteModal")) {
        fermerModalBtn();
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") fermerModalBtn();
});

function deconnexion() {
    localStorage.removeItem("accesAutorise");
    window.location.href = "login.html";
}
