'use strict';
const app = {
    toggleTheme: (event) => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    },
    init: () => {
        document.querySelector(".themeToggle").addEventListener("click", app.toggleTheme)
    }
}

document.addEventListener("DOMContentLoaded", app.init)