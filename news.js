const butHom = document.querySelector('.home-button');
const butTim = document.querySelector('.times-button');
const navBar = document.getElementById('bar-nav');
butHom.addEventListener('click', function(){
    if (butHom.className !==""){
        butHom.style.display="none";
        butTim.style.display= "block";
        navBar.classList.add("show-nav");
    }
})
butTim.addEventListener('click', function(){
    if(butHom.className !==""){
        this.style.display="none";
        butHom.style.display="block";
        navBar.classList.remove("show-nav");
    }
})