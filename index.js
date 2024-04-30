let ko = document.querySelector("#ko");
let papir = document.querySelector("#papir");
let ollo = document.querySelector("#ollo");
let gepValasztott;
let gepKep = document.querySelector("#gepValasztasImg");
let eredmeny = document.querySelector("#eredmeny");

ko.addEventListener("click", () => {
    felhasznaloValasztott("ko")
})
papir.addEventListener("click", () => {
    felhasznaloValasztott("papir")
})
ollo.addEventListener("click", () => {
    felhasznaloValasztott("ollo")
})
ko.addEventListener("mouseover", () => {
    ko.src = "./kepek/ko2.png";
})
ko.addEventListener("mouseout", () => {
    ko.src = "./kepek/ko.png";
})


let felhasznaloValasztott = (jel) =>{
    
    let ellenorzes = () => {
        if(gepValasztott == "ko" && jel == "ko" || gepValasztott == "papir" && jel == "papir" && gepValasztott == "ollo" && jel == "ollo"){
            eredmeny.textContent = "Eredmény: Döntetlen"
            return;
        }
        if(gepValasztott == "ko" && jel == "papir"){
            eredmeny.textContent = "Eredmény: Nyereség"
            return;
        }
        if(gepValasztott == "ko" && jel == "ollo"){
            eredmeny.textContent = "Eredmény: Vereség"
            return;
        }
    }

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



