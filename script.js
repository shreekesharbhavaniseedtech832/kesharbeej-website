// ===============================
// SHREE KESHARBHAVANI SEEDTECH
// Premium Website Script
// ===============================

// Navbar shadow on scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
    } else {
        navbar.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)";
    }
});

// Reveal animation
const revealItems = document.querySelectorAll(".card, .about-box div, form");

const reveal = () => {
    revealItems.forEach((item) => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
};

revealItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.7s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Back To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "95px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#1b5e20";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact Form Success Message
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function () {
        alert("✅ Thank you! Your enquiry has been submitted successfully.");
    });
}

console.log("SHREE KESHARBHAVANI SEEDTECH Website Loaded Successfully");
