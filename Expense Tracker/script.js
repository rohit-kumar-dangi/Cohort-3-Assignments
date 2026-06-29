let loginSection = document.querySelector("#login_section");
let registerSection = document.querySelector("#register_section");

const goLoginSection = ()=>{
    registerSection.style.display = "none";
    loginSection.style.display = "flex";
};

const goRegisterSection = ()=>{
    loginSection.style.display = "none";
    registerSection.style.display = "flex";
};

