window.onload = addTabFocus;
imageBox = document.getElementById("image");
imageTxt = document.getElementById("imageText");

previews = document.querySelectorAll(".preview");
function addTabFocus() {
    console.log("page loaded - tabindex added");
    for (i = 0; i < previews.length; i++){
        pic =previews[i]
        pic.setAttribute("tabindex", "0");
        pic.addEventListener("mouseover", function () { upDate(this);
});
        pic.addEventListener("mouseout", unDo);
        pic.addEventListener("focus", function () { upDate(this);
});
        pic.addEventListener("blur", unDo);

    }
}

function upDate(previewPic) {
    if (!previewPic || !previewPic.src) return;
    imageBox.style.backgroundImage = "url('" + previewPic.src + "')";  
    imageTxt.textContent = previewPic.alt ;

}
function unDo(previewPic) {
   imageTxt.textContent = "Hover over image Below to display here.";
   imageBox.style.backgroundImage = "url('')";  
}