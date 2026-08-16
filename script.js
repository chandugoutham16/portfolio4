// ========================================
// MOBILE NAVIGATION MENU
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    // Close menu after clicking navigation link

    const navLinks = document.querySelectorAll("#nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const themeIcon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }


    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

            localStorage.setItem("theme", "light");

        } else {

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

            localStorage.setItem("theme", "dark");

        }

    });

}


// ========================================
// SCROLL ANIMATION
// ========================================

const sections = document.querySelectorAll("section");

sections.forEach(function (section) {

    section.classList.add("reveal");

});


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ========================================
// CONTACT FORM VALIDATION
// ========================================

const contactForm =
    document.getElementById("contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Input fields

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            // Error messages

            const nameError =
                document.getElementById("name-error");

            const emailError =
                document.getElementById("email-error");

            const messageError =
                document.getElementById("message-error");

            const successMessage =
                document.getElementById("form-success");


            let isValid = true;


            // Clear old messages

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";
            successMessage.textContent = "";


            // Remove old styles

            name.classList.remove(
                "error",
                "success"
            );

            email.classList.remove(
                "error",
                "success"
            );

            message.classList.remove(
                "error",
                "success"
            );


            // NAME VALIDATION

            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                name.classList.add("error");

                isValid = false;

            } else {

                name.classList.add("success");

            }


            // EMAIL VALIDATION

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email.";

                email.classList.add("error");

                isValid = false;

            }

            else if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                emailError.textContent =
                    "Please enter a valid email address.";

                email.classList.add("error");

                isValid = false;

            }

            else {

                email.classList.add("success");

            }


            // MESSAGE VALIDATION

            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter your message.";

                message.classList.add("error");

                isValid = false;

            }

            else if (
                message.value.trim().length < 10
            ) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                message.classList.add("error");

                isValid = false;

            }

            else {

                message.classList.add("success");

            }


            // SUCCESS

            if (isValid) {

                successMessage.textContent =
                    "✓ Message submitted successfully!";

                contactForm.reset();

                name.classList.remove("success");
                email.classList.remove("success");
                message.classList.remove("success");


                setTimeout(function () {

                    successMessage.textContent = "";

                }, 5000);

            }

        }
    );

}