const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});






/*
var elem1 = document.querySelector("#elem1");
elem1.addEventListener("mouseenter",function(){
  var image = elem1.getAttribute("data-image");
  fixed.style.backgroundImage =`url(${image})`;
})
*/


function page4animation(){

    var fixed = document.querySelector("#fixed-image");
    var elemC = document.querySelector("#elem-container");
    
    
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block";
    })
    elemC.addEventListener("mouseleave",function(){
        fixed.style.display = "none";
    })

var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`
        })
    })

};




function menuAnimation() {

    var menu = document.querySelector("nav h4")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0;


    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}






page4animation();
menuAnimation()
loaderAnimation()