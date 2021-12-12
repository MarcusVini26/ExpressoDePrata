var menuItems = [].slice.call(document.querySelectorAll('.menu__item')),
menuSubs = [].slice.call(document.querySelectorAll('.dropdown-menu')),
selectedMenu = undefined,
subBg = document.querySelector('.dropdown__bg'),
subBgBtm = document.querySelector('.dropdown__bg-bottom'),
subArr = document.querySelector('.dropdown__arrow'),
subCnt = document.querySelector('.dropdown__wrap'),
header = document.querySelector('.main-header'),
closeDropdownTimeout,

startCloseTimeout = function () {
  closeDropdownTimeout = setTimeout(() => closeDropdown(), 50);
},

stopCloseTimeout = function () {
  clearTimeout(closeDropdownTimeout);
},

openDropdown = function (el) {

  //- pegar o ID do menu
  var menuId = el.getAttribute('data-sub');
  
  var menuSub = document.querySelector('.dropdown-menu[data-sub="' + menuId + '"]');
  
  var menuSubCnt = menuSub.querySelector('.dropdown-menu__content');
 
  var menuSubBtm = menuSubCnt.querySelector('.bottom-section').getBoundingClientRect();
  
  var menuSubTop = menuSubCnt.querySelector('.top-section').getBoundingClientRect();
  
  var menuMeta = el.getBoundingClientRect();
  
  var subMeta = menuSubCnt.getBoundingClientRect();


  //- Selecionar o ID do menu
  selectedMenu = menuId;


  
  menuItems.forEach(el => el.classList.remove('active'));
 
  el.classList.add('active');

  
  menuSubs.forEach(el => el.classList.remove('active'));
  
  menuSub.classList.add('active');

  //- Set dropdown menu background style to match current submenu style
  subBg.style.opacity = 1;
  subBg.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
  subBg.style.width = subMeta.width + 'px';
  subBg.style.height = subMeta.height + 'px';
  //- Set dropdown menu bottom section background position
  subBgBtm.style.top = menuSubTop.height + 'px';
  console.log(menuSubBtm);

  //- Set Arrow position
  subArr.style.opacity = 1;
  subArr.style.left = menuMeta.left + menuMeta.width / 2 - 10 + 'px';

  //- Set sub menu style
  subCnt.style.opacity = 1;
  subCnt.style.left = menuMeta.left - (subMeta.width / 2 - menuMeta.width / 2) + 'px';
  subCnt.style.width = subMeta.width + 'px';
  subCnt.style.height = subMeta.height + 'px';

  //- Set current sub menu style
  menuSub.style.opacity = 1;

  header.classList.add('dropdown-active');

},
closeDropdown = function () {

  //- Remove active class from all menu items
  menuItems.forEach(el => el.classList.remove('active'));
  //- Remove active class from all sub menus
  menuSubs.forEach(el => {
    el.classList.remove('active');
    el.style.opacity = 0;
  });
  //- set sub menu background opacity
  subBg.style.opacity = 0;
  //- set arrow opacity
  subArr.style.opacity = 0;


  // unset selected menu
  selectedMenu = undefined;

  header.classList.remove('dropdown-active');
};


//- Binding mouse event to each menu items
menuItems.forEach(el => {

  //- mouse enter event
  el.addEventListener('mouseenter', function () {
    stopCloseTimeout();
    openDropdown(this);
  }, false);

  //- mouse leave event
  el.addEventListener('mouseleave', () => startCloseTimeout(), false);

});

//- Binding mouse event to each sub menus
menuSubs.forEach(el => {

  el.addEventListener('mouseenter', () => stopCloseTimeout(), false);
  el.addEventListener('mouseleave', () => startCloseTimeout(), false);

});


//Amanda
/*login*/
var email = document.getElementById('email');

email.addEventListener('focus', ()=>{
  email.style.borderColor = "#444";
});

email.addEventListener('blur', ()=>{
  email.style.borderColor = "#ccc";
});

var password = document.getElementById('password');

password.addEventListener('focus', ()=>{
  password.style.borderColor = "#444";
});

password.addEventListener('blur', ()=>{
  password.style.borderColor = "#ccc";
});

/*conferir email e senha digitados*/

var usuarios = [
  {"email": "teste", "senha": "teste"},
];

function Login(event) {
  event.preventDefault();
  var email = document.getElementsByName('email')[0].value;
  email = email.toLowerCase();
  var senha = document.getElementsByName('password')[0].value;
  senha = senha.toLowerCase();

  if (email == "teste" && senha == "teste") {
    alert("dados corretos");
    document.getElementById('acao');
    window.location.href = "index.html";
  }else{
    alert("Dados incorretos, tente novamente");
  }
}