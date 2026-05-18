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
        activite: "Jeu de motricité sur les animaux d'Afrique"
    },
    {
        titre: "Animaux de la forêt",
        emoji: "🌲",
        theme: "Amérique",
        date: "27/05/2026",
        description: "Découverte des animaux des forêts américaines.",
        animaux: ["Ours", "Castor", "Puma"],
        objectif: "Donner la nourriture à l’animal correspondant",
        activite: "Jeu de tri et jeu sportif sur les animaux de la forêt"
    },
    {
        titre: "Animaux de la ferme",
        emoji: "🚜",
        theme: "Europe",
        date: "03/06/2026",
        description: "Découverte des animaux de la ferme européenne et de leurs produits.",
        animaux: ["Vache", "Poule", "Mouton"],
        objectif: "Associer chaque animal de la ferme à sa production (lait, œuf, laine…)",
        activite: "Memory Géant : associer chaque animal à sa production"
    },
    {
        titre: "Animaux de la jungle",
        emoji: "🌿",
        theme: "Asie",
        date: "10/06/2026",
        description: "Découverte des animaux de la jungle asiatique et de leur habitat.",
        animaux: ["Tigre", "Panda", "Paon"],
        objectif: "Reconnaître les différents habitats",
        activite: "Débat mouvement : associer l'animal au bon habitat"
    },
    {
        titre: "Animaux des pôles",
        emoji: "🧊",
        theme: "Arctique / Antarctique",
        date: "17/06/2026",
        description: "Découverte des animaux vivant dans les régions polaires.",
        animaux: ["Manchot", "Phoque", "Morse"],
        objectif: "Classer les animaux polaires par lieu de vie",
        activite: "Jeu d'expression et jeu de mémoire sur les animaux des pôles"
    },
    {
        titre: "Animaux des océans",
        emoji: "🌊",
        theme: "Monde",
        date: "24/06/2026",
        description: "Découverte des animaux marins et bilan final du projet.\nRécupération des cartes !",
        animaux: ["Dauphin", "Baleine", "Pieuvre"],
        objectif: "Replacer sur le planisphère l'ensemble des animaux vus",
        activite: "Activité manuelle et tri global de tous les animaux vus"
    }
];

const quizQuestions = [
    { question: "Quel animal vit dans la savane ?", reponse: "Lion" },
    { question: "Quel animal donne du lait à la ferme ?", reponse: "Vache" }
];

// NAVIGATION

function showSection(id) {
    document.querySelectorAll("section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
    document.querySelectorAll(".nav-btn").forEach(b => {
        b.classList.toggle("active", b.getAttribute("onclick").includes("'" + id + "'"));
    });
}

// SÉANCES — LOGIQUE DE VERROUILLAGE

function parseDate(str) {
    const parts = str.split("/");
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}

function toggleDetails(index) {
    const details = document.getElementById("details-" + index);
    const arrow = document.getElementById("arrow-" + index);
    const isOpen = details.classList.contains("open");
    details.classList.toggle("open", !isOpen);
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
            '</div>';
    }

    listeSeances.appendChild(div);
});

// QUIZ

const quizContainer = document.getElementById("quizContainer");

quizQuestions.forEach(function(q, index) {
    const div = document.createElement("div");
    div.innerHTML =
        '<p>' + q.question + '</p>' +
        '<input type="text" id="reponse' + index + '" placeholder="Votre réponse...">' +
        '<button onclick="verifierReponse(' + index + ')">Valider</button>' +
        '<p id="resultat' + index + '"></p>';
    quizContainer.appendChild(div);
});

function verifierReponse(index) {
    const input = document.getElementById("reponse" + index).value;
    const resultat = document.getElementById("resultat" + index);
    if (input.toLowerCase() === quizQuestions[index].reponse.toLowerCase()) {
        resultat.textContent = "✅ Bonne réponse !";
        resultat.style.color = "green";
    } else {
        resultat.textContent = "❌ Mauvaise réponse.";
        resultat.style.color = "red";
    }
}

// COLLECTION — uniquement les séances débloquées

const collectionContainer = document.getElementById("collectionContainer");

seances.forEach(function(seance) {
    const seanceDate = parseDate(seance.date);
    if (seanceDate > today) return;
    seance.animaux.forEach(function(animal) {
        const carte = document.createElement("div");
        carte.classList.add("carte");
        carte.innerHTML =
            '<div style="font-size:2rem;margin-bottom:8px">' + (emojisAnimaux[animal] || "🐾") + '</div>' +
            '<h4>' + animal + '</h4>' +
            '<p>' + seance.titre + '</p>';
        collectionContainer.appendChild(carte);
    });
});

function deconnexion() {
    localStorage.removeItem("accesAutorise");
    window.location.href = "login.html";
}
