//buttons
const btnMonthly = document.querySelector('#btnMonthly');
const btnBiannually = document.querySelector('#btnBiannually');
const btnAnnually = document.querySelector('#btnAnnually');

// targets
const pricesContainer = document.querySelectorAll('.card__prices');
const targetNoReduc = document.querySelector('#planBasic .card__prices__full');
const targetNoReducPro = document.querySelector('#planPro .card__prices__full');
const targetCurentPrice = document.querySelector('#planBasic .card__prices__reduce');
const targetCurentPricePro = document.querySelector('#planPro .card__prices__reduce');

const targetBilled = document.querySelectorAll('.card__prices__billed');
const priceNoReduc = targetNoReduc.textContent;

// converte prices string to number
const priceBasic = Number(targetNoReduc.textContent);
const pricePro = Number(targetNoReducPro.textContent);

//functions
reduc10 = (nombre) => {
    let result = nombre * 0.90;
    return result.toFixed(2);
};

reduc20 = (nombre) => {
    let result = nombre * 0.80;
    return result.toFixed(2);
};

replaceInString = (target, by) =>{
    return target.textContent.replace(/12{1}|1{1}|6{1}/g, by);
};

const buttons = document.querySelectorAll(".nav__button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("nav__button--active");
        current[0].className = current[0].className.replace(" nav__button--active", "");
        this.className += " nav__button--active";
    });
}

// animations and style
hiddenPriceNoReduc = (param) =>{
    targetNoReduc.style.visibility = param;
    targetNoReducPro.style.visibility = param;
};
animChangeText = () => {
    pricesContainer.forEach((text) => {text.animate([{ opacity: 0, easing: "cubic-bezier(.56,1.69,.43,-0.35)"},{ opacity: 1 }], 2200);})   
};

//events
btnMonthly.addEventListener("click", () => {
    targetCurentPrice.innerHTML = priceBasic;
    targetCurentPricePro.innerHTML = pricePro;
    targetBilled.forEach((targetBilled) => {targetBilled.innerHTML = replaceInString(targetBilled, 1);})
    hiddenPriceNoReduc("hidden");
    animChangeText();
});
btnBiannually.addEventListener("click", ()=>{
    targetNoReduc.innerHTML = priceBasic;
    targetNoReducPro.innerHTML = pricePro;
    targetCurentPrice.innerHTML= reduc10(priceBasic);
    targetCurentPricePro.innerHTML= reduc10(pricePro);
    targetBilled.forEach((targetBilled) => {targetBilled.innerHTML = replaceInString(targetBilled, 6);})
    hiddenPriceNoReduc("visible");
    animChangeText();
});
btnAnnually.addEventListener("click", ()=>{
    targetNoReduc.innerHTML = priceBasic;
    targetNoReducPro.innerHTML = pricePro;
    targetCurentPrice.innerHTML= reduc20(priceBasic);
    targetCurentPricePro.innerHTML= reduc20(pricePro);
    targetBilled.forEach((targetBilled)=> {targetBilled.innerHTML = replaceInString(targetBilled, 12);})
    hiddenPriceNoReduc("visible");
    animChangeText();
});
