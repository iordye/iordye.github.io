var navigation = document.getElementById("navigationBox");
var menuButton = document.getElementById("menu_button");
var searchBox = document.querySelector(".search_box");
var searchBoxButton = document.getElementById("search_box_button");
var searchBoxButtonNotTooUsed = document.getElementById("search_box_button_not_too_used");
var sliceImages = document.getElementsByClassName("slice_image");
var imageText = document.getElementById("image_text");
var clickChecker = document.querySelector(".clickChecke");
var sliceImagesSmall = document.getElementsByClassName("slice_image_small");
var intervarDefine;
window.onload = function(){
    menuButton.style.cursor = "pointer";
    searchBoxButton.style.cursor = "pointer";
    searchBoxButtonNotTooUsed.style.cursor = "pointer";
    sliceImages[0].style.display = "block";
    imageText.innerHTML = sliceImages[0].alt;
    sliceImagesSmall[0].style.opacity = 1;
}

function navigationFunction(){
    if(navigation.style.display == "block"){
        navigation.style.display = "none";
    }else{
        navigation.style.display = "block";
    }
}
function searchBoxFunction(){
    if(searchBox.style.display == "block"){
        searchBox.style.display = "none";
        searchBoxButton.style.display = "inline";
    }else{
        searchBox.style.display = "block";
        searchBoxButton.style.display = "none";
        window.scrollBy(0,-(window.outerHeight * 2));
    }
}

var x = 0;
function showSliceImages(){
    sliceImages[x].style.display = "none";
    sliceImagesSmall[x].style.opacity = 0.3;
    x++;
    if(x == 5){
        x = 0;
    }
    sliceImages[x].style.display = "block";
    imageText.innerHTML = sliceImages[x].alt;
    sliceImagesSmall[x].style.opacity = 1;
}
intervarDefine = setInterval(showSliceImages, 2000);
function showSliceImagesRight(){
    stopInt();
    startTim();
    sliceImagesSmall[x].style.opacity = 0.3;
    sliceImages[x].style.display = "none";
    x++;
    if(x == 5){
        x = 0;
    }
    sliceImages[x].style.display = "block";
    imageText.innerHTML = sliceImages[x].alt;
    sliceImagesSmall[x].style.opacity = 1;
}
function showSliceImagesLeft(){
    stopInt();
    startTim();
    sliceImagesSmall[x].style.opacity = 0.3;
    sliceImages[x].style.display = "none";
    x--;
    if(x < 0){
        x = 4;
    }
    sliceImages[x].style.display = "block";
    imageText.innerHTML = sliceImages[x].alt;
    sliceImagesSmall[x].style.opacity = 1;
    if(x > 4){
        x = 0;
    }
}

const once = f => {
    let called = false;
    return () => {
        if(called) return;
            called = true;
            f();
            setTimeout(function(){called = false;},10000);
    }
}

function startSlice(){
    intervarDefine = setInterval(showSliceImages, 2000);
}
function stopInterval(){
    clearInterval(intervarDefine); 
}
function startTimeout(){
    setTimeout(start, 10000);
}
var start = once(startSlice);
var stopInt = once(stopInterval);
var startTim = once(startTimeout);