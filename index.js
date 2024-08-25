function myFunction() {
    var navbar = document.getElementById("navbar");
    var icon = document.getElementById("menu-icon");

    // Toggle navbar display
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }

    // Toggle icon classes
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
    icon.classList.toggle("clicked");
}

// Handle menu icon click
document.getElementById("menu-icon").addEventListener("click", function(event) {
    event.stopPropagation(); 
    myFunction();
});

// Close navbar when clicking outside of it
document.body.addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
        var icon = document.getElementById("menu-icon");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        icon.classList.remove("clicked");
    }
});

// Prevent closing the navbar when clicking inside it
document.getElementById("navbar").addEventListener("click", function(event) {
    event.stopPropagation(); 
});



