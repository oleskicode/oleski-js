document.getElementById("showImage").addEventListener("click", function() {
    document.getElementById("imageShowHide").style.display = "block";
    document.getElementById("showImage").disabled = true;
    document.getElementById("hideImage").disabled = false;
})

document.getElementById("hideImage").addEventListener("click", function() {
    document.getElementById("imageShowHide").style.display = "none";
    document.getElementById("showImage").disabled = false;
    document.getElementById("hideImage").disabled = true;
})
