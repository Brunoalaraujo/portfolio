document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector(".abrirSaibaMais").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-saibaMais")
);

document.querySelector(".retornarBtn").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-saibaMais")
);