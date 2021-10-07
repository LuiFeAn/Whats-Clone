//Obtendo elementos
let talkBar = document.querySelectorAll(".talk-bar");
let headerMenuBar = document.querySelector("#header-menu-bar");
let contactBarImg = document.querySelector("#contact-image");
let contactBarName = document.querySelector("#header-menu-contact");
let contactBarMen = document.querySelectorAll(".section-bar-men");
let contactImg = document.querySelectorAll(".contact-img");
let contactName = document.querySelectorAll(".contact");
let activeTalkBar = document.querySelectorAll(".active");
let getInputMen = document.querySelector("#form-left-input");
let gtbar = document.querySelector(".section-talk-bar-container")
//Criando variáveis
let items;
let imgs;
let nam;
let barImg;
let barName;
//Função responsável pelo evento de clique
talkBar.forEach((element,index)=>{
    element.addEventListener("click",()=>{
       activeBar(element);
       setInfos(index);
    })
})
//Função responsável por setar a classe ''active''
const activeBar = (element)=>{
    let em = document.querySelector(".talk-bar.active");
    em.classList.remove("active")
    element.classList.add("active");
}
//Função responsável por alterar informações
const setInfos = (element)=>{
    items = talkBar[element];
    imgs = contactImg[element];
    nam = contactName[element];
    barImg = contactBarImg;
    barName = contactBarName;
    barImg.setAttribute("src",imgs.src);
    barName.innerHTML = nam.innerHTML;
}
//Funções responsáveis por ativar e desativar o menu
function headerLeftMenu(){
   let menu = headerMenuBar;
   menu.style.display = "block";
   menu.style.transition = "1s"
}
function backMenuHeader(){
    let menu = headerMenuBar;
    menu.style.display = "none";  
}

//Função responsável pelo envio das mensagens.
function sendMen(){
    getInputMen.addEventListener("keyup",(e)=>{
        if(e.keyCode == 13){
           createMen();
        }
    })
}
//Função responsável por criar mensagens
const createMen = ()=>{
    let men = document.querySelector(".men");
    let div = document.createElement("div");
    div.classList.add("user-bar-men-container");
    gtbar.appendChild(div);
    let mensage = document.createElement("p");
     mensage.classList.add("user-section-bar-men");
    div.appendChild(mensage);
    men.innerHTML = getInputMen.value;
    mensage.innerHTML = getInputMen.value;
    getInputMen.value = "";
}