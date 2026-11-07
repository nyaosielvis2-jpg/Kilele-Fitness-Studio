
// ===================================
// KILELE FITNESS STUDIO
// JAVASCRIPT FUNCTIONALITIES
// ===================================

document.addEventListener("DOMContentLoaded", function () {

    // 1. MOBILE NAVIGATION MENU
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    if (header && nav) {
        header.classList.add("has-mobile-menu");

        const menuButton = document.createElement("button");
        menuButton.textContent = "☰";
        menuButton.className = "menu-toggle";
        menuButton.setAttribute("aria-label", "Toggle navigation");
        menuButton.setAttribute("aria-expanded", "false");

        header.insertBefore(menuButton, nav);

        menuButton.addEventListener("click", function () {
            const isOpen = header.classList.toggle("menu-open");

            menuButton.textContent = isOpen ? "✕" : "☰";
            menuButton.setAttribute("aria-expanded", isOpen);
        });

        // Close menu after clicking a navigation link
        nav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                header.classList.remove("menu-open");
                menuButton.textContent = "☰";
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    // 2. MEMBERSHIP PLAN SELECTION
    const membershipButtons = document.querySelectorAll(
        ".membership-plan .btn, .membership .btn"
    );

    membershipButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const plan = button.closest(".membership-plan, .membership");

            if (plan) {
                const planName = plan.querySelector("h4").textContent;
                const messageBox = document.querySelector("#message");

                if (messageBox) {
                    messageBox.value =
                        "Hello Kilele Fitness Studio, I am interested in the " +
                        planName + ". Please provide more information.";
                }
            }
        });
    });


    // 3. CONTACT FORM VALIDATION
    const contactForm = document.querySelector("#contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all the required fields.");
                return;
            }

            if (!contactForm.checkValidity()) {
                contactForm.reportValidity();
                return;
            }

            alert(
                "Thank you, " + name +
                "! Your message has been received in this demo."
            );

            contactForm.reset();
        });
    }


    // 4. BACK TO TOP BUTTON
    const topButton = document.createElement("button");

    topButton.textContent = "↑";
    topButton.className = "back-to-top";
    topButton.setAttribute("aria-label", "Back to top");

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // 5. AUTOMATIC COPYRIGHT YEAR
    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            "&copy; " + new Date().getFullYear() +
            " Kilele Fitness Studio. All rights reserved.";
    }

});
