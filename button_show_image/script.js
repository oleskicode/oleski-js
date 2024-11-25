const showImageButton = document.getElementById("showImage");
const hideImageButton = document.getElementById("hideImage");
const imageShowHide = document.getElementById("imageShowHide");

document.getElementById("showImage").addEventListener("click", function() {
    imageShowHide.style.display = "block";
    showImageButton.disabled = true;
    hideImageButton.disabled = false;
})

document.getElementById("hideImage").addEventListener("click", function() {
    imageShowHide.style.display = "none";
    showImageButton.disabled = false;
    hideImageButton.disabled = true;
})
