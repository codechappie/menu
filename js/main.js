window.onload = function() {
  var cloneMenu = document.getElementById("menu").innerHTML;
  console.log(cloneMenu);
  var menuContent = document.getElementById("mini__menu");
  var menuResponsive = document.getElementById("ident");
  console.log(menuResponsive);
  var buttonMenu = document.getElementById("buttonmenu");
  var buttonClose = document.getElementById("buttonclose");

  buttonMenu.addEventListener("click", function toogle() {
    menuContent.innerHTML = cloneMenu;
    console.log(menuResponsive);
    menuResponsive.classList.toggle("show");
  });
  buttonClose.addEventListener("click", function closeMenu() {
    console.log(menuResponsive);
    menuResponsive.classList.remove("show");
  });
};
