const menuFixed = document.getElementsByTagName('nav')[0]
const topoNav = menuFixed.offsetTop


window.onscroll = function(){
    fixaMenuNoTopo()
}
function fixaMenuNoTopo(){
    if (window.matchMedia("(min-width: 855.98px)").matches) {
        if(window.pageYOffset >= topoNav){
            menuFixed.classList.add("menuFixado")
        }
        else{
            menuFixed.classList.remove("menuFixado")
        }
    }
}