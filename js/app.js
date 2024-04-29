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
    const that = document.querySelector('.that');
    that.style.display = "block";
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    const menumobile = document.querySelector('.menumobile');
    menumobile.style.display = "none";
    const that = document.querySelector('.that');
    that.style.display = "none";
})
var cartcounter = 0;
const cart = document.querySelector('.cart');
const avatar = document.querySelector('.avatar');
cart.addEventListener('click', () => {
    cartcounter++;
    if (!(cartcounter % 2) == 0) {
        const basket = document.querySelector('.basket');
        basket.style.display = "flex";
        basket.style.flexDirection = "column";
        basket.style.justifyContent = "center";
        basket.style.width = "85%";
        basket.style.gap = "18px";
        basket.style.height = "fit-content";
        basket.style.backgroundColor = "white";
        basket.style.position = "absolute";
        basket.style.padding = "13px";
        basket.style.paddingTop = "20px";
        basket.style.paddingBottom = "20px";
        basket.style.borderRadius = "6px";
    } else {
        const basket = document.querySelector('.basket');
        basket.style.display = "none";
    }
});
avatar.addEventListener('click', () => {
    cartcounter++;
    if (!(cartcounter % 2) == 0) {
        const basket = document.querySelector('.basket');
        basket.style.display = "flex";
        basket.style.flexDirection = "column";
        basket.style.justifyContent = "center";
        basket.style.width = "85%";
        basket.style.gap = "18px";
        basket.style.height = "fit-content";
        basket.style.backgroundColor = "white";
        basket.style.position = "absolute";
        basket.style.padding = "13px";
        basket.style.paddingTop = "20px";
        basket.style.paddingBottom = "20px";
        basket.style.borderRadius = "6px";
    } else {
        const basket = document.querySelector('.basket');
        basket.style.display = "none";
    }
});
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const zero = document.querySelector('.zero');
zero.innerHTML = cartcounter;

minus.addEventListener('click', () => {
    cartcounter--;
    zero.innerHTML = cartcounter;
    const onetwofive = document.querySelector('.onetwofive');
    onetwofive.innerHTML = "$"+(125*cartcounter)+".00";
    const twofivezero = document.querySelector('.twofivezero');
    twofivezero.innerHTML = "$"+(250*cartcounter)+".00";
})

plus.addEventListener('click', () => {
    cartcounter++;
    zero.innerHTML = cartcounter;
    const onetwofive = document.querySelector('.onetwofive');
    onetwofive.innerHTML = "$"+(125*cartcounter)+".00";
    const twofivezero = document.querySelector('.twofivezero');
    twofivezero.innerHTML = "$"+(250*cartcounter)+".00";
})
