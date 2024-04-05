
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
    
});


// lets show just lunchs 
lunchbtn.addEventListener('click',function(){
    allfoodbtn.style.background = '';
    dinnerbtn.style.background = '';
    breakfastbtn.style.background = '';
    this.style.background = 'black';
    
});


// lets show just dinners 
dinnerbtn.addEventListener('click',function(){
    breakfastbtn.style.background = '';
    lunchbtn.style.background = '';
    allfoodbtn.style.background = '';
    this.style.background = 'black';
   
});


// lets show all cards
allfoodbtn.addEventListener('click',function(){
    breakfastbtn.style.background = '';
    lunchbtn.style.background = '';
    dinnerbtn.style.background = '';
    this.style.background = 'black';
    
});


// this function hide all breakfasts 
function hideallbreakfasts(){
    for(let i = 0; i < breakfast.length; i++){
        breakfast[i].style.display = 'none';
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

// this function shhow all breakfasts 
function showallbreakfasts(){
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
};

// this function show all lunchs
function showalllunchs(){
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
}

// this function show all dinners
function showalldinners(){
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
}

// this function shows all content
function showallcards(){
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();
    create_breackfasts_cards();

    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();
    create_dinners_cards();

    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
    create_lunchs_cards();
};