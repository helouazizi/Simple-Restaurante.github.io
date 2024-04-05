

//let about = document.querySelector('.about');
//let cards = document.querySelectorAll('.card');
about.addEventListener('click',function(){
    home.classList.remove('active');
    menu.classList.remove('active');
    this.classList.add('active');
    contentheader.textContent = 'About us';
    contentheader.style.textDecorationLine = 'underline ';
    console.log(cards) ;
});