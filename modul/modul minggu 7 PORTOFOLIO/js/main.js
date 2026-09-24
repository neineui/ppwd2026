/* Typing effect */

const typingText = document.getElementById("typing-text");

if (typingText) {

    const texts = [
        "Web Learner",
        "UI/UX Learner",
        "Tech Explorer"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        const currentText = texts[textIndex];

        if (!deleting) {

            typingText.textContent = currentText.substring(
                0,
                charIndex + 1
            );

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(
                    typingEffect,
                    1500
                );

                return;
            }

        } else {

            typingText.textContent = currentText.substring(
                0,
                charIndex - 1
            );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex =
                    (textIndex + 1) % texts.length;
            }
        }

        setTimeout(
            typingEffect,
            deleting ? 50 : 100
        );
    }

    typingEffect();
}

/* Project data */

const projects = [

    {
        title: "Website Profil",

        description:
            "Website profil sederhana menggunakan HTML dan CSS.",

        image:
            "https://via.placeholder.com/600x400?text=Website+Profil"
    },

    {
        title: "Kalkulator JavaScript",

        description:
            "Aplikasi kalkulator sederhana menggunakan JavaScript.",

        image:
            "https://via.placeholder.com/600x400?text=Kalkulator"
    },

    {
        title: "Form Interaktif",

        description:
            "Form interaktif dengan validasi menggunakan JavaScript.",

        image:
            "https://via.placeholder.com/600x400?text=Form+Interaktif"
    }

];

/* Project card */

const projectGrid = document.getElementById("project-grid");

if (projectGrid) {

    projects.forEach(function (project) {

        const card = document.createElement("div");

        card.classList.add("project-card");

        card.innerHTML = `

            <img
                src="${project.image}"
                alt="${project.title}"
            >

            <div class="project-info">

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

            </div>

        `;

        card.addEventListener(
            "click",
            function () {

                alert(
                    "Project: " +
                    project.title
                );

            }
        );

        projectGrid.appendChild(card);

    });
}

/* Dark mode */

const navbar = document.querySelector(".navbar");

if (navbar) {

    const themeButton = document.createElement("button");

    themeButton.classList.add("theme-button");

    themeButton.setAttribute(
        "aria-label",
        "Ganti tema"
    );

    themeButton.textContent = "🌙";

    navbar.appendChild(themeButton);

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark-mode");

            const isDark =
                document.body.classList.contains("dark-mode");

            if (isDark) {

                themeButton.textContent = "☀️";

                localStorage.setItem(
                    "theme",
                    "dark"
                );

            } else {

                themeButton.textContent = "🌙";

                localStorage.setItem(
                    "theme",
                    "light"
                );
            }
        }
    );
}

/* Contact form */

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Oops! Please fill in all the fields first."
                );

                return;
            }

            alert(
                "Message sent successfully!"
            );

            contactForm.reset();
        }
    );
}

/* Particle background */

const canvas = document.getElementById("particles");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    /* Create particles */

    function createParticles() {

        particles = [];

        const jumlahParticle = 50;

        for (
            let i = 0;
            i < jumlahParticle;
            i++
        ) {

            particles.push({

                x:
                    Math.random() *
                    canvas.width,

                y:
                    Math.random() *
                    canvas.height,

                size:
                    Math.random() *
                    1.8 + 0.7,

                speedX:
                    (Math.random() - 0.5) *
                    0.35,

                speedY:
                    (Math.random() - 0.5) *
                    0.35
            });
        }
    }

    createParticles();

    /* Animate particles */

    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(
            function (particle) {

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                /* Reset horizontal position */

                if (particle.x < 0) {

                    particle.x =
                        canvas.width;
                }

                if (particle.x > canvas.width) {

                    particle.x = 0;
                }

                /* Reset vertical position */

                if (particle.y < 0) {

                    particle.y =
                        canvas.height;
                }

                if (particle.y > canvas.height) {

                    particle.y = 0;
                }

                /* Draw particle */

                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    "rgba(59, 130, 246, 0.45)";

                ctx.fill();
            }
        );

        requestAnimationFrame(
            animateParticles
        );
    }

    animateParticles();
}