const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}.`

const hamburger = document.querySelector(".hamburger-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('open')

    if (navLink.classList.contains('open')) {
        hamburger.textContent = 'X'
    } else {
        hamburger.textContent = '☰'
    }
});

const snakes = [
    {
        snakeName: "Reticulated Python",
        location: "Asia",
        length: "20 ft",
        type: "Constrictor",
        imageUrl: "images/reticulated-python.webp"
    },
    {
        snakeName: "Anaconda",
        location: "South America",
        length: "18 ft",
        type: "Constrictor",
        imageUrl: "images/anaconda.webp"
    },
    {
        snakeName: "Boa",
        location: "Central and South America",
        length: "10 ft",
        type: "Constrictor",
        imageUrl: "images/boa.webp"
    },
    {
        snakeName: "Rattlesnake",
        location: "North and Central America",
        length: "6 ft",
        type: "Venomous",
        imageUrl: "images/rattlesnake.webp"
    },
    {
        snakeName: "King Cobra",
        location: "Asia",
        length: "18 ft",
        type: "Venomous",
        imageUrl: "images/cobra.webp"
    },
    {
        snakeName: "Viper",
        location: "Asia, Africa, Americas, Europe",
        length: "5 ft",
        type: "Venomous",
        imageUrl: "images/viper.webp"
    },
    {
        snakeName: "Yellow-Bellied Sea Snake",
        location: "Indo-Pacific Waters",
        length: "5 ft",
        type: "Venomous",
        imageUrl: "images/seasnake.webp"
    },
    {
        snakeName: "Banded Sea Krait",
        location: "Indo-Pacific Waters",
        length: "5 ft",
        type: "Venomous",
        imageUrl: "images/banded-seasnake-article.webp"
    },
    {
        snakeName: "Black Mamba",
        location: "Africa",
        length: "10 ft",
        type: "Venomous",
        imageUrl: "images/black-mamba.webp"
    }
];


const snakeList = document.querySelector('.snake-list')

function createSnakeCard(filteredSnakes) {
    if (!snakeList) return;
    snakeList.innerHTML = "";

    filteredSnakes.forEach((snake) => {
        const card = document.createElement("section");
        const snakeName = document.createElement("h2");
        const location = document.createElement("p");
        const length = document.createElement("p");
        const type = document.createElement("p");
        const imageUrl = document.createElement("img");

        snakeName.textContent = snake.snakeName;
        location.textContent = `Location: ${snake.location}`;
        length.textContent = `Length: ${snake.length}`;
        type.textContent = `Type: ${snake.type}`;
        
        imageUrl.src = snake.imageUrl;
        imageUrl.alt = snake.snakeName;
        imageUrl.loading = "lazy";
        imageUrl.width = 350;
        imageUrl.height = 250;

        card.appendChild(snakeName);
        card.appendChild(location);
        card.appendChild(length);
        card.appendChild(type);
        card.appendChild(imageUrl);

        snakeList.appendChild(card);

    });
}

// createSnakeCard(snakes);

function loadContent() {
    const currentPath = window.location.pathname.toLocaleLowerCase();

    if (currentPath.includes("constrictors.html")) {
        const constrictorsOnly = snakes.filter(snake => snake.type === "Constrictor");
        createSnakeCard(constrictorsOnly);
    } else if (currentPath.includes("venomous.html")) {
        const venomousOnly = snakes.filter(snake => snake.type === "Venomous");
        createSnakeCard(venomousOnly);
    }
}

loadContent();
