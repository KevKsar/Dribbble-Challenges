

(function() {
    const button = document.querySelector(".button");
    const bed = document.querySelector(".button__anim__bed");
    const lugg1 = document.querySelector(".button__anim__lugg-one");
    const lugg2 = document.querySelector(".button__anim__lugg-two");
    const dog = document.querySelector(".button__anim__dog");
    const animSide = document.querySelector(".button__anim");
    const bgContainer = document.querySelector(".container");
    const original = document.querySelector(".original");  
  

    button.addEventListener("mouseover", () => {
        bed.style.width = '4.2rem';
        lugg1.style.transform= "translate(140%)";
        lugg2.style.transform= "translate(-160%)";
        dog.style.transform= "translate(-400%)";
        animSide.style.backgroundColor = "#cb83f4"
        bgContainer.style.backgroundColor = "#b446f3"
        original.style.color = "white";
    });
    button.addEventListener("mouseout", () => {
        bed.style.width = '4.6rem'
        lugg1.style.transform= "translate(0%)";
        lugg2.style.transform= "translate(0%)";
        dog.style.transform= "translate(0%)";
        animSide.style.backgroundColor = "#ffbecd"
        bgContainer.style.backgroundColor = " #f4839e"
        original.style.color = "black";

    });
})();
