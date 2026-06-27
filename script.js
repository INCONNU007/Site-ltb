// On récupère le bouton burger et le menu de navigation
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

// On écoute le clic sur le bouton burger
burgerBtn.addEventListener('click', () => {
    // La méthode toggle ajoute la classe "active" si elle n'y est pas, et l'enlève si elle y est déjà
    navMenu.classList.toggle('active');
});


