function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }
}


// TOMBOL BUKA SURPRISE
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        console.log("Tombol berhasil diklik!");

        createConfetti(60);
        showPage("birthday");
    });
}


// CONFETTI
function createConfetti(amount) {
    const container = document.getElementById("confetti-container");

    if (!container) return;

    const symbols = [
        "🎀",
        "💗",
        "✨",
        "🌸",
        "⭐",
        "🎉",
        "💖"
    ];

    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.fontSize =
            (12 + Math.random() * 15) + "px";

        confetti.style.animationDuration =
            (2 + Math.random() * 2) + "s";

        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4500);
    }
}


// KOTAK HADIAH
const giftBox = document.getElementById("giftBox");
const surpriseMessage = document.getElementById("surpriseMessage");

if (giftBox) {
    giftBox.addEventListener("click", function () {

        giftBox.style.display = "none";

        const hint = document.querySelector(".click-hint");

        if (hint) {
            hint.style.display = "none";
        }

        if (surpriseMessage) {
            surpriseMessage.classList.add("show");
        }

        createConfetti(80);
    });
}


// TOMBOL CELEBRATE
const celebrateBtn = document.getElementById("celebrateBtn");

if (celebrateBtn) {
    celebrateBtn.addEventListener("click", function () {

        createConfetti(150);

        this.innerHTML = "🎉 YAYYYY! 🎉";
    });
}