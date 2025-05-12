// Select the progress bar element inside the .scroll-indicator container
let indicator = document.querySelector(".scroll-indicator .progress");

// Calculate the total scrollable height of the page
// (total height of content - height of the visible viewport)
let scrollHeight =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Add an event listener to detect when the user scrolls the page
window.addEventListener("scroll", scroll);

// Function to update the width of the progress bar as the user scrolls
function scroll() {
    let scrollTop = document.documentElement.scrollTop; // How far the user has scrolled from the top
    let scrolled = (scrollTop / scrollHeight) * 100; // Calculate the percentage of the page scrolled
    indicator.style.width = `${scrolled}%`; // Set the width of the progress bar accordingly
}

