document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", function() {
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert(data);
            })
            .catch(error => {
                console.error("Error fetching superheroes:", error);
                alert("Error fetching superheroes. Please try again.");
            });
    });
});