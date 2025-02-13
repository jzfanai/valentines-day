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

// From the moment our eyes first met,
// A spark ignited, a fate was set.
// Like stars that dance in the midnight blue,
// My heart found home, my heart found you.
// <br><br>
// Your laughter sings a melody sweet,
// A rhythm of love, a tune so deep.
// With every whisper, with every touch,
// You show me love, you give so much.
// <br><br>
// Through golden dawns and moonlit skies,
// I see forever in your eyes.
// A love so pure, a bond so true,
// My world begins and ends with you.
// <br><br>
// In stormy nights or skies so bright,
// You are my calm, my guiding light.
// Hand in hand, through time we'll go,
// With love that only seems to grow.
// <br><br>
// Like flowers bloom in spring’s embrace,
// You fill my soul with warmth and grace.
// No words can say, no verse convey,
// How much I love you, every day.
// <br><br>
// So on this day, my heart is yours,
// A love unbreakable, forever endures.
// Through all of time, come what may,
// You're my Valentine—forever, always. ❤️ 