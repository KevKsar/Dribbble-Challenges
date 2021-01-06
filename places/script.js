//get and display time
getTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let h = today.getHours();
    if (h < 10) { h = "0" + h }
    let m = today.getMinutes();
    if (m < 10) { m = "0" + m }
    let s = today.getSeconds();
    if (s < 10) { s = "0" + s }
    return  h+":"+m ;
};
document.querySelector(".notifBar__time").innerHTML=getTime();
//end

//slideshow
const slides = document.querySelectorAll('.slideBox__image');
const buttonLeft = document.querySelector('.slideBox__buttonLeft');
const buttonRight = document.querySelector('.slideBox__buttonRight');
const dots = document.querySelectorAll('.slideBox__dot');
let countDots = 0;
let countSlides = 0;

nextSlide = () => {
    slides[countSlides].classList.remove('slideBox__image--active');
    dots[countDots].classList.remove('slideBox__dot--active');
    if( countSlides < slides.length - 1 && countDots < dots.length - 1){
        countSlides++;
        countDots++;
    }else{
        countSlides = 0;
        countDots = 0;
    }
    slides[countSlides].classList.add('slideBox__image--active');
    dots[countDots].classList.add('slideBox__dot--active');
};

previousSlide = () => {
    slides[countSlides].classList.remove('slideBox__image--active');
    dots[countDots].classList.remove('slideBox__dot--active');
    if(countSlides > 0 && countDots > 0){
        countSlides--;
        countDots--;
    }else{
        countSlides = slides.length -1;
        countDots = dots.length -1;
    } 
    slides[countSlides].classList.add('slideBox__image--active');;
    dots[countDots].classList.add('slideBox__dot--active');
};

buttonRight.addEventListener("click", () =>{
    nextSlide();
    slides.forEach((img) => {img.animate([{ transform: 'translate(-10rem, 0rem) rotateY(150deg) scale(0.5)', opacity:0, easing: "ease-out"},{ transform: 'translateX(0rem) rotateY(0deg) scale(1)', opacity:1 }], 300);})   
});
buttonLeft.addEventListener("click", ()=>{
    previousSlide();
    slides.forEach((img) => {img.animate([{ transform: 'translate(10rem, 0rem) rotateY(150deg) scale(0.5)', opacity:0, easing: "ease-out"},{ transform: 'translateX(0rem) rotateY(0deg) scale(1)', opacity:1 }], 300);})   
});
//end

const screenSign = document.querySelector('.screenSignIn');
const screenFavorite = document.querySelector('.screenFavorite');
const screenPlace = document.querySelector('.screenPlace');

const buttonSign = document.querySelector('.connect__signButton');
const buttonRestaurant = document.querySelector('#btnRestaurant');

buttonSign.addEventListener("click", () => {
    screenSign.style.transform = "translate(0rem, -60rem)";
    screenSign.style.opacity = "0"
    screenSign.style.visibility = "hidden";
    screenFavorite.style.transform = "scale(1)";
    screenFavorite.style.opacity = "1"
    screenFavorite.style.visibility="visible"
});

buttonRestaurant.addEventListener("click", ()=> {
    screenFavorite.style.transform = "scale(10)";
    screenFavorite.style.opacity = "0"
    screenFavorite.style.visibility= "hidden";
    screenPlace.style.visibility="visible"
});

document.getElementById("buttonMenu").addEventListener("click", ()=>{
    screenPlace.style.visibility="hidden"
    screenFavorite.style.transform = "scale(1)";
    screenFavorite.style.opacity = "1"
    screenFavorite.style.visibility= "visible";


});
document.getElementById("buttonHome").addEventListener("click", ()=>{
    screenPlace.style.visibility="hidden"
    screenFavorite.style.visibility="hidden"
    screenSign.style.transform = "translate(0)";
    screenSign.style.opacity = "1"
    screenSign.style.visibility= "visible";
});
document.getElementById("buttonBack").addEventListener("click", ()=>{
    screenPlace.style.visibility="hidden"
    screenFavorite.style.transform = "scale(1)";
    screenFavorite.style.opacity = "1"
    screenFavorite.style.visibility= "visible";
});