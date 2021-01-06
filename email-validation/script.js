

(function() {
    const myInput = document.getElementById("email");
    const simpleEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    myInput.addEventListener("keyup", () => {
        let atIcon = document.querySelector('#at-icon');
        let checkIcon =document.querySelector('#check-icon')
        if(myInput.value == ""){
            myInput.style.outlineColor = '#6c757d'        
            atIcon.style.color = '#6c757d'; 
            atIcon.style.opacity = '1';        
            checkIcon.style.opacity = '0';  
        }else if(!simpleEmailRegex.test(myInput.value)){
            myInput.style.outlineColor = '#ff006a'        
            atIcon.style.transition = "all 0.4s ease-out 0s";
            atIcon.style.color = '#ff006a';
            atIcon.style.opacity = '1';            
            checkIcon.style.opacity = '0';  
        }else{
            myInput.style.outlineColor = '#05ff97'        
            atIcon.style.transition = "all 0.4s ease-out 0s";
            checkIcon.style.transition = "opacity 0.4s ease-out 0s";
            checkIcon.style.opacity = '1';          
            atIcon.style.opacity = '0'; 
        }
    
    });
})();