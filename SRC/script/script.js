document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded");  // ✅ Debugging Step 1: Ensure script is running

    let menu = document.querySelector("#menu-icon-js");
    let menuicon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    console.log("Menu:", menu);      // ✅ Debugging Step 2: Ensure menu element exists
    console.log("Menu Icon:", menuicon); // ✅ Debugging Step 3: Ensure menu icon exists
    console.log("Navbar:", navbar);  // ✅ Debugging Step 4: Ensure navbar exists

    if (menu && menuicon && navbar) {
        menu.addEventListener("click", function () {
            console.log("Menu Clicked!"); // ✅ Debugging Step 5: Ensure click works
            menuicon.classList.toggle("bx-x");
            navbar.classList.toggle("open");
        });
    } else {
        console.warn("⚠️ Navbar elements not found. Check your HTML structure.");
    }

    // Scroll-based Navbar Hide/Show
    let prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", function () {
        let currentScrollPos = window.pageYOffset;
        let header = document.getElementById("header");

        if (header) {
            header.classList.add("scrolled");
            if (currentScrollPos === 0) {
                header.classList.remove("scrolled");
            }

            if (prevScrollpos > currentScrollPos) {
                header.style.top = "0";
            } else {
                header.style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    });

    console.log("✅ Navbar and scrolling functions initialized successfully.");
});