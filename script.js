// lets get acces the navbar links
let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let contentheader = document.querySelector('.content-header');
let menubtn = document.querySelector('.menubtn');

// lets get acces the card element
let card = document.querySelector('.card');
let cards = document.getElementById('card');
let foodimg = document.querySelector('.foodimg');
let foodname = document.querySelector('.foodname');
let foodprice = document.querySelector('.foodprice');
let fooddescription = document.querySelector('.fooddescription');
let foodordre = document.querySelector('.foodordre');


// =========== lets strat coding the menu page inside the home page ========//

menu.addEventListener('click',function(){
    menu.classList.add('active');
    home.classList.remove('active');
    contentheader.textContent = 'Our menu';
    contentheader.style.textDecorationLine = 'underline ';
    menubtn.style.display = 'block';

    
})
