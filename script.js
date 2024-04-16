

// lets get acces the resturante content
let content = document.querySelector('.content');
let contentheader = document.querySelector('.content-header');
// lets get acces the card element
let foodimg = document.querySelectorAll('.foodimg');
let foodname = document.querySelectorAll('.foodname');
let foodprice = document.querySelectorAll('.foodprice');
let fooddescription = document.querySelectorAll('.fooddescription');






// lets get acces the navbar links
let home = document.querySelector('.home');
let menu = document.querySelector('.menu');
let about = document.querySelector('.about');
let contact = document.querySelector('.contact');
let menubtn = document.querySelector('.menubtn');









// let get acces the menu buttons
let allfoodbtn = document.querySelector('.allfoodbtn');
let breakfastbtn = document.querySelector('.breakfastbtn');
let lunchbtn = document.querySelector('.lunchbtn');
let dinnerbtn = document.querySelector('.dinnerbtn');





// =========== lets strat coding the menu page inside the home page ========//


//******lets create all breakfast cards********//

//let breakfast = document.querySelectorAll('.breakfast');
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

/* lets create function that set breakfast img dynamicly */
let curentcard ; // this variable here tobe globale to use him in the createcards() function below
function breakfast_img(){
    //let curentcard = 0 ;
    curentcard = 0 ;
    for( let j = 0; j < foodimg.length ; j++){
        
        foodimg[j].src  = breakfasts[curentcard].img;
        curentcard ++ ;
        //console.log(curentcard);
    };
};
breakfast_img();

/* lets create function that set breakfast name dynamicly */
function breakfast_name(){
    let curentcard = 0 ;
    for( let j = 0; j < foodname.length; j++){
        
        foodname[j].textContent  = breakfasts[curentcard].hisname;
        curentcard ++ ;
        //console.log(curentcard);
    };
};
breakfast_name();

/* lets create function that set breakfast price dynamicly */
function breakfast_price(){
    let curentcard = 0 ;
    for( let j = 0; j < foodprice.length; j++){
        
        foodprice[j].textContent  = breakfasts[curentcard].hisprice;
        curentcard ++ ;
        //console.log(curentcard);
    };
};
breakfast_price();

/* lets create function that set breakfast price dynamicly */
function breakfast_description(){
    let curentcard = 0 ;
    for( let j = 0; j < fooddescription.length; j++){
        
        fooddescription[j].textContent  = breakfasts[curentcard].hisdescription;
        curentcard ++ ;
        //console.log(curentcard);
    };
};
breakfast_description();

// now display breacfast  cards
create_breackfasts_cards();
create_breackfasts_cards();
create_breackfasts_cards();
create_breackfasts_cards();
create_breackfasts_cards();
create_breackfasts_cards();
// if you just add a card and ther is no data check the console
let allbreakfasts = document.querySelectorAll('.breakfast06'); // i drop it here after creating it 


//******lets create all dinner cards********//


//let dinner = document.querySelectorAll('.dinner');
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
    },
];

/* lets create function that set dinners img dynamicly */
let curentcard1 ; // this variable here tobe globale to use him in the createcards() function below
function dinner_img(){
    //let curentcard = 0 ;
    curentcard1 = 0 ;
    for( let j = 0; j < foodimg.length; j++){
        
        foodimg[j].src  = dinners[curentcard1].img;
        curentcard1 ++ ;
        //console.log(curentcard);
    };
};
dinner_img();

/* lets create function that set dinners name dynamicly */
function dinner_name(){
    let curentcard1 = 0 ;
    for( let j = 0; j < foodname.length; j++){
        
        foodname[j].textContent  = dinners[curentcard1].hisname;
        curentcard1 ++ ;
        //console.log(curentcard);
    };
};
dinner_name();

/* lets create function that set dinners price dynamicly */
function dinner_price(){
    let curentcard1 = 0 ;
    for( let j = 0; j < foodprice.length; j++){
        
        foodprice[j].textContent  = dinners[curentcard1].hisprice;
        curentcard1 ++ ;
        //console.log(curentcard);
    };
};
dinner_price();

/* lets create function that set dinners description dynamicly */
function dinner_description(){
    let curentcard1 = 0 ;
    for( let j = 0; j < fooddescription.length; j++){
        
        fooddescription[j].textContent  = dinners[curentcard1].hisdescription;
        curentcard1 ++ ;
        //console.log(curentcard);
    };
};
dinner_description();

// now display dinner cards
create_dinners_cards();
create_dinners_cards();
create_dinners_cards();
create_dinners_cards();
create_dinners_cards();
create_dinners_cards();
// if you just add a card and there is no data check the console
let dinner = document.querySelectorAll('.dinner06'); // drop it here after creating it 


//******lets create all lunch cards********//


//let lunch = document.querySelectorAll('.lunch');
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

/* lets create function that set lunch img dynamicly */
let curentcard2 ; // this variable here tobe globale to use him in the createcards() function below
function lunch_img(){
    //let curentcard = 0 ;
    curentcard2 = 0 ;
    for( let j = 0; j < foodimg.length; j++){
        
        foodimg[j].src  = lunchs[curentcard2].img;
        curentcard2 ++ ;
        //console.log(curentcard);
    };
};
lunch_img();

/* lets create function that set lunch name dynamicly */
function lunch_name(){
    let curentcard2 = 0 ;
    for( let j = 0; j < foodname.length; j++){
        
        foodname[j].textContent  = lunchs[curentcard2].hisname;
        curentcard2 ++ ;
        //console.log(curentcard);
    };
};
lunch_name();

/* lets create function that set lunch price dynamicly */
function lunch_price(){
    let curentcard2 = 0 ;
    for( let j = 0; j < foodprice.length; j++){
        
        foodprice[j].textContent  = lunchs[curentcard2].hisprice;
        curentcard2 ++ ;
        //console.log(curentcard);
    };
};
lunch_price();

/* lets create function that set lunch description dynamicly */
function lunch_description(){
    let curentcard2 = 0 ;
    for( let j = 0; j < fooddescription.length; j++){
        
        fooddescription[j].textContent  = lunchs[curentcard2].hisdescription;
        curentcard2 ++ ;
        //console.log(curentcard);
    };
};
lunch_description();

// now display lunch cards
create_lunchs_cards();
create_lunchs_cards();
create_lunchs_cards();
create_lunchs_cards();
create_lunchs_cards();
create_lunchs_cards();
// if you just add a card and ther is no data check the console
let lunch = document.querySelectorAll('.lunch06');// drop it here after creating it

let cards = document.querySelectorAll('.card');


// this function about creating breakfasts cadrs dynamicly
function create_breackfasts_cards(){
    
    if(curentcard < breakfasts.length){
        let newcard = document.createElement('div');
            newcard.classList.add('card');
            newcard.classList.add('breakfast06');

        content.appendChild(newcard);

        let newimg = document.createElement('img');
            newimg.src = breakfasts[curentcard].img;
            newimg.classList.add('foodimg');
        
        let newname = document.createElement('h2');
            newname.innerHTML = breakfasts[curentcard].hisname;
            newname.classList.add('foodname');

        let newprice = document.createElement('span');
            newprice.textContent = breakfasts[curentcard].hisprice;
            newprice.classList.add('foodprice');

        let newdescription = document.createElement('p');
            newdescription.textContent = breakfasts[curentcard].hisdescription;
            newdescription.classList.add('fooddescription');

        let newordrebtn = document.createElement('button');
            newordrebtn.textContent = 'orde me';
            newordrebtn.classList.add('foodordre');
        newcard.appendChild(newimg);
        newcard.appendChild(newname);
        newcard.appendChild(newprice);
        newcard.appendChild(newdescription);
        newcard.appendChild(newordrebtn);

        
        curentcard++ ;
    }else{
        //console.log('there is no enougph data for breackfsts please add some data to breackfasts array to be displayed');
    };
    // this variable need to be incremented if we want to redeclare this function many time to avoid seme card content
};


// this function about creating dinners cadrs dynamicly
function create_dinners_cards(){
    if(curentcard1 < dinners.length){
        let newcard = document.createElement('div');
            newcard.classList.add('card');
            newcard.classList.add('dinner06');
        
        content.appendChild(newcard);

        let newimg = document.createElement('img');
            newimg.src = dinners[curentcard1].img;
            newimg.classList.add('foodimg');
        
        let newname = document.createElement('h2');
            newname.innerHTML = dinners[curentcard1].hisname;
            newname.classList.add('foodname');

        let newprice = document.createElement('span');
            newprice.textContent = dinners[curentcard1].hisprice;
            newprice.classList.add('foodprice');

        let newdescription = document.createElement('p');
            newdescription.textContent = dinners[curentcard1].hisdescription;
            newdescription.classList.add('fooddescription');

        let newordrebtn = document.createElement('button');
            newordrebtn.textContent = 'orde me';
            newordrebtn.classList.add('foodordre');
        newcard.appendChild(newimg);
        newcard.appendChild(newname);
        newcard.appendChild(newprice);
        newcard.appendChild(newdescription);
        newcard.appendChild(newordrebtn);
        curentcard1++ ;
    }else{
        //console.log('there is no enougph data for dinners please add some data to dinners array to be displayed');
    };
};



// this function about creating dinners cadrs dynamicly
function create_lunchs_cards(){
    if(curentcard2 < lunchs.length){
        let newcard = document.createElement('div');
            newcard.classList.add('card');
            newcard.classList.add('lunch06');
        
        content.appendChild(newcard);

        let newimg = document.createElement('img');
            newimg.src = lunchs[curentcard2].img;
            newimg.classList.add('foodimg');
        
        let newname = document.createElement('h2');
            newname.innerHTML = lunchs[curentcard2].hisname;
            newname.classList.add('foodname');

        let newprice = document.createElement('span');
            newprice.textContent = lunchs[curentcard2].hisprice;
            newprice.classList.add('foodprice');

        let newdescription = document.createElement('p');
            newdescription.textContent = lunchs[curentcard2].hisdescription;
            newdescription.classList.add('fooddescription');

        let newordrebtn = document.createElement('button');
            newordrebtn.textContent = 'orde me';
            newordrebtn.classList.add('foodordre');
        newcard.appendChild(newimg);
        newcard.appendChild(newname);
        newcard.appendChild(newprice);
        newcard.appendChild(newdescription);
        newcard.appendChild(newordrebtn);
        curentcard2++ ;
    }else{
       // console.log('there is no enougph data for lunchs please add some data to lunchs array to be displayed');
    };
};




//********************** code menu part ************************************* *//


menu.addEventListener('click',function(){
    menu.classList.add('active');
    home.classList.remove('active');
    contentheader.textContent = 'Our menu';
    contentheader.style.textDecorationLine = 'underline ';
    menubtn.style.display = 'block';
    allfoodbtn.style.background = 'black';
});

// lets show just breakfasts 
breakfastbtn.addEventListener('click',function(){
    allfoodbtn.style.background = '';
    dinnerbtn.style.background = '';
    lunchbtn.style.background = '';
    this.style.background = 'black';
    hidealldinners();
    hidealllunchs();
    showallbreakfasts();
});


// lets show just lunchs 
lunchbtn.addEventListener('click',function(){
    allfoodbtn.style.background = '';
    dinnerbtn.style.background = '';
    breakfastbtn.style.background = '';
    this.style.background = 'black';
    hideallbreakfasts();
    hidealldinners();
    showalllunchs();
});


// lets show just dinners 
dinnerbtn.addEventListener('click',function(){
    breakfastbtn.style.background = '';
    lunchbtn.style.background = '';
    allfoodbtn.style.background = '';
    this.style.background = 'black';
    hideallbreakfasts();
    hidealllunchs();
    showalldinners();
});


// lets show all cards
allfoodbtn.addEventListener('click',function(){
    breakfastbtn.style.background = '';
    lunchbtn.style.background = '';
    dinnerbtn.style.background = '';
    this.style.background = 'black';
    showallcards();
});


// this function hide all breakfasts 
function hideallbreakfasts(){
    for(let i = 0; i < allbreakfasts.length; i++){
        allbreakfasts[i].style.display = 'none';
    };
};

// this function hide all dinners
function hidealldinners(){
    for(let i = 0; i < dinner.length; i++){
        dinner[i].style.display = 'none';
    };
};

// this function hide all lunch 
function hidealllunchs(){
    for(let i = 0; i < lunch.length; i++){
        lunch[i].style.display = 'none';
    };
};

// this functon hide all cards

function hideallcards(){
    hideallbreakfasts();
    hidealldinners();
    hidealllunchs();
}

// this function shhow all breakfasts 
function showallbreakfasts(){
    for(let i = 0; i < allbreakfasts.length; i++){
        allbreakfasts[i].style.display = 'inline-block';
    };
};

// this function show all lunchs
function showalllunchs(){
    for(let i = 0; i < lunch.length; i++){
        lunch[i].style.display = 'inline-block';
    };
};


// this function show all dinners
function showalldinners(){
    for(let i = 0; i < dinner.length; i++){
        dinner[i].style.display = 'inline-block';
    };
}

// this function shows all content
function showallcards(){
    showallbreakfasts();
    showalllunchs();
    showalldinners();
};


// lets code the ordre button
let foodordree = document.querySelectorAll('.foodordre');
console.log( foodordree);



//********************** lets code the about page **************/

about.addEventListener('click',function(){
    console.log('about');
    about.classList.add('active');
    menu.classList.remove('active');
    home.classList.remove('active');
    contentheader.textContent = 'About Us';
    contentheader.style.textDecorationLine = 'underline ';
    hideallcards();
    menubtn.style.display = 'none';
    buildaboutcontnet();
});


function buildaboutcontnet(){
    let aboucontent = document.createElement('section');
    aboucontent.classList.add('aboutmaincontent');
    aboucontent.textContent = 'about main text comming soon';
    content.appendChild(aboucontent);
}

