const redButton = document.getElementById("RedButton");

redButton.addEventListener("mousedown", function () {
    this.style.transform = "translate(-50%, calc(-50% + 30px))";
    this.classList.add("clicked");
});

redButton.addEventListener("mouseup", function () {
    this.style.transform = "translate(-50%, -50%)";
    this.classList.remove("clicked");
});

const redButton2 = document.getElementById("RedButton2");

redButton2.addEventListener("mousedown", function () {
    this.style.transform = "translate(-50%, calc(-50% + 30px))";
    this.classList.add("clicked");
});

redButton2.addEventListener("mouseup", function () {
    this.style.transform = "translate(-50%, -50%)";
    this.classList.remove("clicked");
});

