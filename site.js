    console.log(222);
            home.style.gap = 0
            home.style.flexWrap = "nowrap"
    
            function slide(){
                home.style.transition = "0s"
    
                let gap1 = 18
                home.style.gap = gap1+"%"
                
                function f2(){
                    home.style.transition = "0.01s"
                    home.style.transitionTimingFunction = "cubic-bezier(0.39, 0.58, 0.57, 1)"
                    gap1--
                    home.style.gap = gap1+"%" 
                    if(gap1==0){
                        clearInterval(set10)
                    }
                } 
                let set10 = setInterval(function(){f2()},100)
            }
    
            let btn = document.getElementsByClassName("bnt1")
            btn[0].addEventListener("click", slide)
            btn[1].addEventListener("click", slide)
    
            
            let nkarr = [ "home-img-2.png", "home-img-3.png", "home-img-4.png", "home-img-1.png"]
            let textarr = ["Make Your Girlfriend Happy With Beautiful Flowers", "Choose The Most Beautiful Flower", "Gifts For Family And Friends", "Choose Your Favorite Flowers"]
            let pox = 0
            function next(){
                
                nkar.innerHTML = ""
                pox++
    
    
                if(pox==4){
                    pox=0
                }  
                if(pox==-1){
                    pox=3
                }
                let nk1 = document.createElement("img")
                nk1.style = "width: 570px; height: 320px"
                nkar.appendChild(nk1)
                nk1.setAttribute("src", nkarr[pox])
    
    
    
                p1.innerHTML = textarr[pox]
    
            }
    
            function prev(){
    
                nkar.innerHTML = ""
                pox--
    
    
                if(pox==4){
                    pox=0
                }  
                if(pox==-1){
                    pox=3
                }
    
                let nk1 = document.createElement("img")
                nk1.style = "width: 570px; height: 320px"
                nkar.appendChild(nk1)
                nk1.setAttribute("src", nkarr[pox])
    
    
    
                p1.innerHTML = textarr[pox]
            }
    
            
            let navMenu = document.getElementById("nav-menu-hidden")
            
    
            function menu(){
                
                if(navMenu.style.display == "none"){
                    navMenu.style = "transition:2s; height:208px; width:100%; background:white; display: flex; padding:10px;position: fixed;top: 91px;font-size: 24px;"
                }
                else{
                    navMenu.style = "transition:2s; display:none; height:0"
                }
            }
    
            let logo1 = document.getElementById("logo")
    
    
            function logomove(){
                logo1.style.animationName ="key1"
                logo1.style.animationDuration ="6s"
                logo1.style.animationDelay ="0s"
                logo1.style.animationIterationCount ="infinite"
                logo1.style.animationTimingFunction = "ease-in-out"
    
            }setInterval(function(){logomove()},1000)
            
    
            function open1() {
                register.style.animationName = "regkeyopen"
                register.style.animationDuration ="0.2s"
                register.style.animationDelay ="0s"
                register.style.animationTimingFunction = "ease-in-out"
                register.style.animationFillMode = "forwards"
            }
            function close() {
                register.style.animationName = "regkeyclose"
                register.style.animationDuration ="0.2s"
                register.style.animationDelay ="0s"
                register.style.animationTimingFunction = "ease-in-out"
                register.style.animationFillMode = "forwards"
            }
    
            back.addEventListener("click", close)
    
            
    
            let order1 = document.getElementById("order-bar")
            function open2() {
                order1.style.animationName = "orderkeyopen"
                order1.style.animationDuration ="0.2s"
                order1.style.animationDelay ="0s"
                order1.style.animationTimingFunction = "ease-in-out"
                order1.style.animationFillMode = "forwards"
            }
            function close2() {
                order1.style.animationName = "orderkeyclose"
                order1.style.animationDuration ="0.2s"
                order1.style.animationDelay ="0s"
                order1.style.animationTimingFunction = "ease-in-out"
                order1.style.animationFillMode = "forwards"
            }
    
            let shop1 = document.getElementById("shop-bar")
            function open3() {
                shop1.style.animationName = "orderkeyopen"
                shop1.style.animationDuration ="0.2s"
                shop1.style.animationDelay ="0s"
                shop1.style.animationTimingFunction = "ease-in-out"
                shop1.style.animationFillMode = "forwards"
            }
            function close3() {
                shop1.style.animationName = "orderkeyclose"
                shop1.style.animationDuration ="0.2s"
                shop1.style.animationDelay ="0s"
                shop1.style.animationTimingFunction = "ease-in-out"
                shop1.style.animationFillMode = "forwards"
            }

    
            // function wheelclose(){
            //     if(shop1.style.right==0){
            //         shop1.style.animationName = "orderkeyclose"
            //         shop1.style.animationDuration ="0.2s"
            //         shop1.style.animationDelay ="0s"
            //         shop1.style.animationTimingFunction = "ease-in-out"
            //         shop1.style.animationFillMode = "forwards"
            //     }
            //     if(order1.style.right==0){
            //         order1.style.animationName = "orderkeyclose"
            //         order1.style.animationDuration ="0.2s"
            //         order1.style.animationDelay ="0s"
            //         order1.style.animationTimingFunction = "ease-in-out"
            //         order1.style.animationFillMode = "forwards"
            //     }   
            // }
            // document.body.addEventListener("wheel", wheelclose)
    
    
            let faqBox1 = document.getElementsByClassName("faq-box")
            let faqHead = document.getElementsByClassName("faq-box-header")
            let faqText = document.getElementsByClassName("faq-box-text")
            let faqBtn = document.getElementsByClassName("fa-angle-down")
    
            faqHead[0].style.background = "#b91515"
    
            function faqBox(){
                console.log(faqBtn[0]); 
                for(i=0;i<faqBox1.length;i++){
                    faqHead[i].style.background = "#2e2c2c"
                    faqText[i].style.display = "none"
                    faqBtn[i].style.transform = "rotate(0deg)"
                }
                for(i=0;i<faqBox1.length;i++){
                    if(+this.attributes.name.value == i){
                        faqHead[i].style.background = "#b91515"
                        faqText[i].style.display = "block"
                        faqBtn[i].style.transform = "rotate(180deg)"
                    }
                }
            }
            for(a=0;a<faqBox1.length;a++){
                faqBox1[a].addEventListener("click", faqBox)
            }



            
            let qrp = document.getElementsByClassName("qr_p")
            function funcQR(){
                console.log(this.attributes.name.value);
                modalBodyText.innerHTML = ""
                
                let ptext = document.getElementsByClassName("Ptext")
                if(this.attributes.name.value==0){
                    for(i=0;i<ptext.length;i++){
                        let mejinP = document.createElement("p")
                        mejinP.style = "margin:0px; overflow-x: hidden; background:white; padding:5px"
                        modalBodyText.appendChild(mejinP)
                        mejinP.innerHTML =  ptext[i].innerHTML
                    }
                }
                let ptext1 = document.getElementsByClassName("Ptext1")
                if(this.attributes.name.value==1){
                    for(i=0;i<ptext1.length;i++){
                        let mejinP1 = document.createElement("p")
                        mejinP1.style = "margin:0px; overflow-x: hidden; background:white; padding:5px"
                        modalBodyText.appendChild(mejinP1)
                        mejinP1.innerHTML =  ptext1[i].innerHTML
                    }
                }
            }
            for(i=0;i<qrp.length;i++){
                qrp[i].addEventListener("click", funcQR)
            }

    
    
