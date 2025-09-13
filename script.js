function showMessage() {
    document.getElementById("message").textContent = "Thanks for clicking the button!";
}
window.onscroll = function () {
    document.getElementById("backToTop").style.display =
        window.scrollY > 200 ? "block" : "none";
};

document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
