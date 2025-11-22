document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    const result = document.getElementById("result");

    searchBtn.addEventListener("click", function() {
        const query = searchInput.value.trim();
        let url = "superheroes.php";
        
        if (query !== "") {
            url += "?query=" + encodeURIComponent(query);
        }

        fetch(url)
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            })
            .catch(error => {
                console.error("Error fetching superheroes:", error);
                result.innerHTML = "Error fetching superheroes";
            });
    });
});