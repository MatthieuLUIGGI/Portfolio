const projects = [
    {
        image: "/assets/images/project1.png",
        description: "Site web portfolio",
        link: "/index.html"
    },
    {
        image: "/assets/images/project2.png",
        description: "Générateur de mots de passe",
        link: "/projets/GenerateurMDP/generateur.html"
    },
    {
        image: "/assets/images/project3.png",
        description: "Cartes de visite",
        link: "/html/project3Detail.html"
    },
    {
        image: "/assets/images/project4.png",
        description: "Application de cartographie des systèmes d'information",
        link: "/html/project4Detail.html"
    },
];

let currentIndex = 0;

const cardLeft = document.querySelector(".card-left");
const cardCenter = document.querySelector(".card-center");
const cardRight = document.querySelector(".card-right");

const linkLeft = document.getElementById("project-link-left");
const linkCenter = document.getElementById("project-link-center");
const linkRight = document.getElementById("project-link-right");

function updateProjects() {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    // Mettre à jour les images, descriptions et liens
    cardLeft.querySelector("img").src = projects[prevIndex].image;
    cardLeft.querySelector(".card-description").textContent = projects[prevIndex].description;
    linkLeft.href = projects[prevIndex].link;
    linkLeft.target = "_blank";

    cardCenter.querySelector("img").src = projects[currentIndex].image;
    cardCenter.querySelector(".card-description").textContent = projects[currentIndex].description;
    linkCenter.href = projects[currentIndex].link;
    linkCenter.target = "_blank";

    cardRight.querySelector("img").src = projects[nextIndex].image;
    cardRight.querySelector(".card-description").textContent = projects[nextIndex].description;
    linkRight.href = projects[nextIndex].link;
    linkRight.target = "_blank";
}

function nextProject() {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProjects();
}

function prevProject() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProjects();
}

// Initialisation
updateProjects();