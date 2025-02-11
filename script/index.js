document.getElementById('yes-btn').addEventListener('click', function() {
    let envelope = document.getElementById('envelope-img');
    let letter = document.getElementById('letter');

    // Change envelope image smoothly
    envelope.style.opacity = "0";

    setTimeout(() => {
        envelope.src = "https://cdn-icons-png.flaticon.com/128/1790/1790814.png";
        envelope.style.opacity = "1";
        
        // Show letter after envelope transition
        setTimeout(() => {
            letter.style.opacity = "1";
            letter.style.transform = "translate(-50%, -100%) scale(1)";
        }, 500);
    }, 800);

    // Delay before transition starts
    setTimeout(() => {
        document.body.classList.add("fade-out"); // Add fade-out effect

        // Redirect after fade-out
        setTimeout(() => {
            window.location.href = "landing.html"; // Change this to your actual landing page
        }, 2000);
    }, 5000);
});

// Move "No" button randomly when clicked
document.getElementById('no-btn').addEventListener('click', function() {
    let button = this;

    // Get viewport dimensions
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // Generate random position within visible screen area
    let randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    let randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

    // Apply new position
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});