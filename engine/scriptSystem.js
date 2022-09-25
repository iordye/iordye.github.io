var navigation = document.getElementById("navigationBox");
var menuButton = document.getElementById("menu_button");
let searchBox = document.querySelector(".search_box");
let searchBoxButton = document.getElementById("search_box_button");
let searchBoxButtonNotTooUsed = document.getElementById("search_box_button_not_too_used");
var intervarDefine;
window.onload = function(){
    menuButton.style.cursor = "pointer";
    searchBoxButton.style.cursor = "pointer";
    searchBoxButtonNotTooUsed.style.cursor = "pointer";
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
