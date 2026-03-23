document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");

    if (!menuButton || !nav) {
        return;
    }

    var navLinks = nav.querySelectorAll("a");

    function closeMenu() {
        nav.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("scroll-lock");
    }

    function openMenu() {
        nav.classList.add("open");
        menuButton.classList.add("open");
        menuButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("scroll-lock");
    }

    menuButton.addEventListener("click", function () {
        if (nav.classList.contains("open")) {
            closeMenu();
            return;
        }
        openMenu();
    });

    navLinks.forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});
