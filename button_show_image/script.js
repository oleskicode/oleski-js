document.getElementById("showImage").addEventListener("click", function() {
    const image = document.getElementById("imageShowHide");
    image.style.display = "block";

    const buttonShow = document.getElementById("showImage");
    buttonShow.disabled = true;

    const buttonHide = document.getElementById("hideImage");
    buttonHide.disabled = false;
})

document.getElementById("hideImage").addEventListener("click", function() {
    const image = document.getElementById("imageShowHide");
    image.style.display = "none";

    const buttonShow = document.getElementById("showImage");
    buttonShow.disabled = false;

    const buttonHide = document.getElementById("hideImage");
    buttonHide.disabled = true;
})