window.onload = function() {
  var cloneMenu = document.getElementById("menu").innerHTML;
  var menuContent = document.getElementById("mini__menu");
  var menuResponsive = document.getElementById("ident");
  var buttonMenu = document.getElementById("buttonmenu");
  var buttonClose = document.getElementById("buttonclose");

  buttonMenu.addEventListener("click", function toogle() {
    menuContent.innerHTML = cloneMenu;
    menuResponsive.classList.toggle("show");
  });
  buttonClose.addEventListener("click", function closeMenu() {
    menuResponsive.classList.remove("show");
  });

  var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    if (window.scrollY >= 120 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
  

};
