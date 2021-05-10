//== Accordion Module 1
(function(){
    let accTitle = document.getElementsByClassName("acc-heading");
    let accContent = document.getElementsByClassName("acc-content");
    let singleMode = true;
    
    for( let j=0; j<accContent.length; j++ ){
        let realHeight = accContent[j].offsetHeight;
        accContent[j].setAttribute("data-height", realHeight + "px");
        accContent[j].style.height = 0;
    }
    
    for( let i=0; i<accTitle.length; i++ ){
        accTitle[i].onclick = function(){
            let openedAcc = this.getAttribute('href').replace('#', '');
    
            if( this.classList.contains("active") ){
                this.classList.remove("active");
                document.getElementById(openedAcc).style.height = 0;
                
                return false;
            }
            
            if( singleMode ){						
                for(let k=0; k<accTitle.length; k++) {
                    accTitle[k].classList.remove("active");
                }
    
                for(let j=0; j<accContent.length; j++) {
                    accContent[j].style.height = 0;
                }
            }
            
            this.classList.add("active");
            
            document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
            
            return false;
        }
    }
})();
//======================== /Accordion Module 1