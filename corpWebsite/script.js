const partOfHeaderAnime1 = document.querySelector(".partOfHeaderAnime1")
const partOfHeaderAnime2 = document.querySelector(".partOfHeaderAnime2")
const partOfHeaderAnime3 = document.querySelector(".partOfHeaderAnime3")

const header = document.querySelector(".header")
const navItems = document.querySelector(".header")
const buttonBookOnline = document.querySelector(".header")

const slogan = document.querySelector(".main__slogan")
const sloganPart1 = document.querySelector(".main__sloganOne")
const sloganPart2 = document.querySelector(".main__sloganTwo")
const textMain = document.querySelector(".main__text")
const buttonMain = document.querySelector(".button--white")

const buttonVideo = document.querySelector(".buttonVideo")
const buttonPlay = document.querySelector(".buttonVideo__play")
const buttonPause = document.querySelector(".buttonVideo__pause")

const scrollIndicator = document.querySelector(".scrollIndicator")
const bgVideo = document.querySelector(".bgVideo")
const logoIntro = document.querySelector(".logoIntro")
const logoIntroIcon = document.querySelector(".logoIntro__icon")
const logoIntroText = document.querySelector(".logoIntro__text")

opacity0 = (elem) =>{
    elem.style.opacity = "0"
}
transitionOpacity1 = (elem, duration) =>{
    elem.style.transition = "all 1s linear 4s"
    elem.style.opacity = "1"
}
removeElem = (elem, delay)=>{
    window.setTimeout( ()=> {elem.remove()}, delay) 
}

//initial state of elements animate
sloganPart1.style.top = "15rem"
sloganPart2.style.bottom = "y5rem"

textMain.style.top = "5rem"

logoIntro.style.display = "block"

partOfHeaderAnime1.style.display = "block"
partOfHeaderAnime2.style.display = "block"
partOfHeaderAnime2.style.height = "100vh"
partOfHeaderAnime3.style.display = "block"

logoIntroIcon.style.opacity = "0"
logoIntroText.style.opacity = "0"
opacity0(textMain)
opacity0(buttonMain)
opacity0(buttonPause)
opacity0(scrollIndicator)
opacity0(sloganPart1)
opacity0(sloganPart2)


//function animation onload
animationOnLoad = () =>{
    window.onload =  () =>{       
        partOfHeaderAnime1.style.transition = "all 0.5s linear 2.2s"
        partOfHeaderAnime1.style.height = "0rem"
        partOfHeaderAnime2.style.transition = "all 2s ease-out 2.2s"
        partOfHeaderAnime2.style.height = "18rem"
        partOfHeaderAnime3.style.transition = "all 2s ease-out 2.8s"
        partOfHeaderAnime3.style.height = " 0rem"

        sloganPart1.style.transition  = "all 1.5s linear 2.2s"
        sloganPart1.style.top = "0rem"
        sloganPart1.style.opacity  = "1"
        sloganPart2.style.transition  = "all 1.5s linear 3s"
        sloganPart2.style.bottom = "0rem"
        sloganPart2.style.opacity  = "1"

        textMain.style.transition  = "all 2s linear 2.2s"
        textMain.style.top = "0rem"

        logoIntroIcon.animate([{transform: "scale(10)", opacity: "1"},
        { transform: "scale(5)", opacity: "1"},
        { opacity: "1" , transform: "rotateZ(180deg)"},
        { transform: "scale(30)", opacity: "0" },
        ],{duration: 2000, fill: 'backwards' })
        logoIntroText.animate([{transform: "scale(10)", opacity: "0"},
        { transform: "scale(5)", opacity: "1"},
        { transform: "scale(5)", opacity: "1"},
        { transform: "scale(30)", opacity: "0" },
        ],{duration: 2000, fill: 'backwards'})
        
        transitionOpacity1(textMain)
        transitionOpacity1(buttonMain)
        transitionOpacity1(buttonPause)
        transitionOpacity1(scrollIndicator)    
    }
}


//execution
animationOnLoad()
removeElem(logoIntro, 2100)
buttonPause.addEventListener("click", ()=> {
        bgVideo.pause()
        buttonPause.style.display = "none"
        buttonPlay.style.display = "block"
})
buttonPlay.addEventListener("click", ()=> {
    bgVideo.play()
    buttonPlay.style.display = "none"
    buttonPause.style.display = "block"
})

