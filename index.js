//DOM elemek elérése
let ko = document.querySelector("#ko");
let papir = document.querySelector("#papir");
let ollo = document.querySelector("#ollo");
let gepKep = document.querySelector("#gepValasztasImg");
let eredmeny = document.querySelector("#eredmeny");
let pontFLBL = document.querySelector("#pontFLBL")
let pontGLBL = document.querySelector("#pontGLBL")


//szkripten belüli változók
let gepValasztott;
let pontF = 0;
let pontG = 0;

//egér klikkelés figyelők:
ko.addEventListener("click", () => {
    felhasznaloValasztott("ko")
})
papir.addEventListener("click", () => {
    felhasznaloValasztott("papir")
})
ollo.addEventListener("click", () => {
    felhasznaloValasztott("ollo")
})

//egér mozgást figyelők => kép változik:
ko.addEventListener("mouseover", () => {
    ko.src = "./kepek/KO2.png";
})
ko.addEventListener("mouseout", () => {
    ko.src = "./kepek/KO.png";
})
ollo.addEventListener("mouseover", () => {
    ollo.src = "./kepek/OLLO2.png";
})
ollo.addEventListener("mouseout", () => {
    ollo.src = "./kepek/OLLO.png";
})
papir.addEventListener("mouseover", () => {
    papir.src = "./kepek/PAPIR2.jpg";
})
papir.addEventListener("mouseout", () => {
    papir.src = "./kepek/PAPIR.png";
})

let felhasznaloValasztott = (jel) =>{
    
    let eredmenyKiiratas = () => {
        pontFLBL.textContent = `Te pontjaid: ${pontF}`;
        pontGLBL.textContent = `Gép pontjai: ${pontG}`;
    }

    let ellenorzes = () => {
        eredmeny.textContent = ""
        if(gepValasztott == "ko" && jel == "ko" || gepValasztott == "papir" && jel == "papir" || gepValasztott == "ollo" && jel == "ollo"){
            eredmenyKiiratas();
            eredmeny.textContent = "Eredmény: Döntetlen"

            return;
        }
        else if(gepValasztott == "ko" && jel == "papir" || gepValasztott == "papir" && jel == "ollo" ||gepValasztott == "ollo" && jel == "ko"){
            eredmeny.textContent = "Eredmény: Nyereség"
            pontF++
            eredmenyKiiratas();
            return;
        }
        else{
            eredmeny.textContent = "Eredmény: Vereség"
            pontG++
            eredmenyKiiratas();
            return;
        }
    }

    let gepvalaszt = () => {
        let randomSzam = Math.floor(Math.random() * 3) //0,1,2
        document.querySelector(".gep").style.display  = "flex";
        switch(randomSzam){
            case 0:
                gepValasztott = "ko";
                gepKep.src = "./kepek/KO.png"
                ellenorzes();
                break;
            case 1:
                gepValasztott = "papir";
                gepKep.src = "./kepek/PAPIR.png"
                ellenorzes();
                break;
            case 2:
                gepValasztott = "ollo";
                gepKep.src = "./kepek/OLLO.png"
                ellenorzes();
                break;
        }
    }

    gepvalaszt();
}