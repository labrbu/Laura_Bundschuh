function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Klick außerhalb schließt das Menü
document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnIcon = icon.contains(event.target);

    // Wenn Menü offen ist und man außerhalb klickt → schließen
    if (menu.classList.contains("open") && !isClickInsideMenu && !isClickOnIcon) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});



// Get the button
var scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document smoothly
scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
