document.addEventListener("DOMContentLoaded", function(event) {
    // Get the current URL path
    var path = window.location.pathname;

    // Remove trailing slash if exists
    path = path.replace(/\/$/, "");

    // Get all navigation links
    var navLinks = document.querySelectorAll(".main-nav a");

    // Loop through each link
    navLinks.forEach(function(link) {
        // Get the link's href attribute
        var href = link.getAttribute("href");

        // Check if the href attribute matches the current path
        if (href === path) {
            // Add a class to the link for styling
            link.classList.add("active");
        }
    });
});
