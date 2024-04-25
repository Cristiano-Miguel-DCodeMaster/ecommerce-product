const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const menumobile = document.querySelector('.menumobile');
    menumobile.style.display = "block";
    menumobile.style.display = "flex";
    menumobile.style.flexDirection = "column";
    menumobile.style.position = "fixed";
    menumobile.style.backgroundColor = "var(--White)";
    menumobile.style.zIndex = "1";
    menumobile.style.height = "100vh";
    menumobile.style.top = "0";
    menumobile.style.left = "0";
    menumobile.style.width = "60%";
    menumobile.style.padding = "16px";
    menumobile.style.gap = "10px";
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    const menumobile = document.querySelector('.menumobile');
    menumobile.style.display = "none";
})