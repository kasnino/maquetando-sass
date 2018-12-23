//Selecionando itms del dom

const menuBtn = document.querySelector('.menu-btn');//aqui la hamburguesa

const menu = document.querySelector('.menu-main');//aqui todo el contenedor

const menuNav = document.querySelector('.menu-nav');//aqui el ul il menu items

const menuBranding = document.querySelector('.menu-branding');//aqui selecciona el avatr

const menuItems = document.querySelectorAll('.nav-items');


/*inicializo estados de los menus*/


let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
	if(!showMenu){
		menuBtn.classList.add('close');
		menu.classList.add('show');
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		menuItems.forEach(item => item.classList.add('show'));


		showMenu = true;


	}else{
		menuBtn.classList.remove('close');
		menu.classList.remove('show');
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		menuItems.forEach(item => item.classList.remove('show'));


		showMenu = false;



	}
}