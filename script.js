document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skillsbox .value");
    skillBars.forEach((bar) => {
        let width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.transition = "width 2s ease-in-out";
            bar.style.width = width;
        }, 500);
    });

    const profileImage = document.querySelector(".imgbox img");
    if (profileImage) {
        profileImage.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
        });
        profileImage.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    }

    const menuItems = document.querySelectorAll("nav a");
    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const backToTop = document.createElement("button");
    backToTop.innerText = "↑";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px";
    backToTop.style.background = "#231fbf";
    backToTop.style.color = "#fff";
    backToTop.style.border = "none";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const phoneElement = document.querySelector(".contactinfo li .text");
    if (phoneElement && phoneElement.textContent.includes("+62")) {
        phoneElement.style.cursor = "pointer";
        phoneElement.title = "Click to copy";

        phoneElement.addEventListener("click", function () {
            navigator.clipboard.writeText(phoneElement.textContent.trim()).then(() => {
                alert("Phone number copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy: ", err);
            });
        });
    }
});
