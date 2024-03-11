const redButton = document.getElementById("RedButton");

redButton.addEventListener("mousedown", function() {
    this.style.transform = "translate(-50%, calc(-50% + 30px))";
    this.classList.add("clicked");
});

redButton.addEventListener("mouseup", function() {
    this.style.transform = "translate(-50%, -50%)";
    this.classList.remove("clicked");
});