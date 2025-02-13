// Auto-cycle the carousel every 3 seconds
let carousel = new bootstrap.Carousel(document.querySelector('#loveCarousel'), {
    interval: 3000,
    wrap: true
});

document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500); // Create hearts continuously
});

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("loveVideo");

    if (video) {
        video.muted = true; // Ensure it's muted
        video.play().catch(error => console.log("Autoplay prevented:", error));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();  // Play when in view
                } else {
                    video.pause(); // Pause when out of view
                }
            });
        }, { threshold: 0.5 }); // Triggers when 50% of the video is visible

        observer.observe(video);
    }
});

