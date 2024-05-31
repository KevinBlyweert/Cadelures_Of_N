'use strict';

const app = {
    createImages: () => {
        const grid = document.querySelector(".grid");
        for (let index = 1; index <= 6; index++) {
            const link = `/assets/images/calligraphies/calli${index}.jpg`;
            const cardTemplate = document.querySelector("#card-template");
            const cloneCard = cardTemplate.content.cloneNode(true);
            cloneCard.querySelector("img").src = link;
            grid.append(cloneCard);
        }
    },
    toggleTheme: (event) => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    },
    init: () => {
        document.querySelector(".themeToggle").addEventListener("click", app.toggleTheme);
        app.createImages();
    }
}

document.addEventListener("DOMContentLoaded", app.init)