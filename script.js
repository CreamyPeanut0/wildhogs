document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".mitten"); // Byt ut body mot .mitten

    container.addEventListener("wheel", function(e) {
        e.preventDefault(); // Förhindrar vertikal scroll
        container.scrollLeft += e.deltaY * 2; // Ökar skrollhastigheten lite
    });
});

