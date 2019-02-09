var opener = document.querySelector('.menu-opener');
var menu = document.querySelector('.main-navigation');
var openMenu = function(){
	menu.classList.toggle('is-opened');
};
opener.addEventListener('click', openMenu);