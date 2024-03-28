// lets get acces the navbar links
let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let contentheader = document.querySelector('.content-header');
let menubtn = document.querySelector('.menubtn');

// lets get acces the card element
let cards = document.querySelectorAll('.card');
let foodimg = document.querySelector('.foodimg');
let foodname = document.querySelector('.foodname');
let foodprice = document.querySelector('.foodprice');
let fooddescription = document.querySelector('.fooddescription');
let foodordre = document.querySelector('.foodordre');


// =========== lets strat coding the menu page inside the home page ========//


// lets create all breakfast cards
let breakfast = document.querySelectorAll('.breakfast');
let breakfasts = [
    {
        img : 'photos/breakfast-cofe.jpg',
        hisname :'morocan cofe',
        hisdescription : 'this is the morocan cofe breakfast',
        hisprice : '20 DH',
    },
    {
        img : 'photos/breakfast-lobiya.jpg',
        hisname :'morocan 9atani',
        hisdescription : 'this is the morocan 9atani breakfast',
        hisprice : '20 DH',
    },
    {
        img : 'photos/breakfast-marok.jpg',
        hisname :'morocan marok',
        hisdescription : 'this is the morocan marok breakfast',
        hisprice : '50 DH',
    },
    {
        img : 'photos/breakfast-omlit.jpg',
        hisname :'morocan omlit',
        hisdescription : 'this is the morocan omlit breakfast',
        hisprice : '20 DH',
    },
    {
        img : 'photos/breakfast-patisry.jpg',
        hisname :'morocan patisry',
        hisdescription : 'this is the morocan patisry breakfast',
        hisprice : '20 DH',
    },
    {
        img : 'photos/breakfast-tost.jpg',
        hisname :'morocan tost',
        hisdescription : 'this is the morocan tost breakfast',
        hisprice : '30 DH',
    },
];

/* lets loop over the breakfast card */
for( let i = 0; i < breakfast.length; i++){
    breakfast[i].style.background  = 'green';
};

/* lets loop over the array   and create function that change card content */






// lets create all dinner cards
let dinner = document.querySelectorAll('.dinner');
let dinners = [
    {
        img : 'photos/dinner-chawaya.jpg',
        hisname :'morocan chawaya',
        hisdescription : 'this is the moeocan chawaya dinner',
        hisprice : '50 DH',
    },
    {
        img : 'photos/dinner-crepe.jpg',
        hisname :'morocan crepe',
        hisdescription : 'this is the moeocan crepe dinner',
        hisprice : '50 DH',
    },
    {
        img : 'photos/dinner-roze.jpg',
        hisname :'morocan rize',
        hisdescription : 'this is the moeocan rize dinner',
        hisprice : '50 DH',
    },
    {
        img : 'photos/dinner-salad.jpg',
        hisname :'morocan salad',
        hisdescription : 'this is the moeocan salad dinner',
        hisprice : '50 DH',
    },
    {
        img : 'photos/dinner-soup.jpg',
        hisname :'morocan soup',
        hisdescription : 'this is the moeocan soup dinner',
        hisprice : '50 DH',
    },
    {
        img : 'photos/dinner-spagitti.jpg',
        hisname :'morocan spagitti',
        hisdescription : 'this is the moeocan spagitti dinner',
        hisprice : '50 DH',
    }
];

/* lets loop over the breakfast card */
for( let i = 0; i < dinner.length; i++){
    dinner[i].style.background  = 'red';
};

// lets create all lunchs cards
let lunch = document.querySelectorAll('.lunch');
let lunchs = [
    {
        img : 'photos/lunch-burger.jpg',
        hisname :'morocan burger',
        hisdescription : 'this is the morocan burger lunch',
        hisprice : '80 DH',
    },
    {
        img : 'photos/lunch-djaj-mhamar.jpg',
        hisname :'morocan cheken',
        hisdescription : 'this is the morocan cheken lunch',
        hisprice : '80 DH',
    },
    {
        img : 'photos/lunch-kafta.jpg',
        hisname :'morocan kafta',
        hisdescription : 'this is the morocan kafta lunch',
        hisprice : '80 DH',
    },
    {
        img : 'photos/lunch-sandwitch.jpg',
        hisname :'morocan sandwith',
        hisdescription : 'this is the morocan sandwitch lunch',
        hisprice : '50 DH',
    },
    {
        img : 'photos/lunch-tacos.jpg',
        hisname :'morocan tacos',
        hisdescription : 'this is the morocan tacos lunch',
        hisprice : '80 DH',
    },
    {
        img : 'photos/lunch-tajin.jpg',
        hisname :'morocan tajin',
        hisdescription : 'this is the morocan tajin lunch',
        hisprice : '60 DH',
    }
];

/* lets loop over the breakfast card */
for( let i = 0; i < lunch.length; i++){
    lunch[i].style.background  = 'blue';
};

menu.addEventListener('click',function(){
    menu.classList.add('active');
    home.classList.remove('active');
    contentheader.textContent = 'Our menu';
    contentheader.style.textDecorationLine = 'underline ';
    menubtn.style.display = 'block';
    console.log(cards);
    hidecontent();

    
});

function hidecontent(){
    for(let i = 0; i < cards.length; i++){
        cards[i].style.display = 'none'
    }
}


