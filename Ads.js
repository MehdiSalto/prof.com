

// menu code start

const spans = document.getElementById("spans");
const nav = document.getElementById("navigation");

    spans.addEventListener("click", function(e) {
    nav.style.display = "block";
});

nav.addEventListener("click", function(e) {
    if (e.target == nav) {
        nav.style.display = "none";
    } 
});

// menu code end
