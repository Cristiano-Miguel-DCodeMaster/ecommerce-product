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
    next.style.backgroundColor = "rgba(255,255,255,0.514)";
})
const close = document.querySelector('.close');
close.addEventListener('click', () => {
    const menumobile = document.querySelector('.menumobile');
    menumobile.style.display = "none";
    const that = document.querySelector('.that');
    that.style.display = "none";
    next.style.backgroundColor = "white";
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
var bgcounter = 0;
const bigimage = document.querySelector('.bigimage'); 
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
next
    .addEventListener('click',
        () => {
            if (bgcounter == 0) {
                bigimage.style.backgroundImage = "url(/images/image-product-2.webp)";
                bgcounter++;
            } else if( bgcounter == 1){
                bigimage.style.backgroundImage = "url(/images/image-product-3.webp)";
                bgcounter++;
            } else if( bgcounter == 2){
                bigimage.style.backgroundImage = "url(/images/image-product-4.webp)";
            }
        })
previous
    .addEventListener('click',
        () => {
            if (bgcounter == 2) {
                bigimage.style.backgroundImage = "url(/images/image-product-3.webp)";
                bgcounter--;
        } else if (bgcounter == 1) {
                bigimage.style.backgroundImage = "url(/images/image-product-2.webp)";
                bgcounter--;
            } else  if( bgcounter == 0){
                bigimage.style.backgroundImage = "url(/images/image-product-1.webp)";
            }
        })

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const zero = document.querySelector('.zero');
zero.innerHTML = cartcounter;

var itemnumber = 0;
minus.addEventListener('click', () => {
    if (itemnumber == 0) {
        alert('Select a number');
    } else if (itemnumber == 1) {
        itemnumber--;
        zero.innerHTML = "0";
        const onetwofive = document.querySelector('.onetwofive');
        onetwofive.innerHTML = "$" + (125 * 1) + ".00";
        const twofivezero = document.querySelector('.twofivezero');
        twofivezero.innerHTML = "$" + (250 * 1) + ".00";

        const N2 = document.querySelector('.N2');
N2.innerHTML = itemnumber;
    const result = document.querySelector('.result');
result.innerHTML = "$"+itemnumber*125+".00";
    } else {
        itemnumber--;
        zero.innerHTML = itemnumber;
        const onetwofive = document.querySelector('.onetwofive');
        onetwofive.innerHTML = "$" + (125 * itemnumber) + ".00";
        const twofivezero = document.querySelector('.twofivezero');
        twofivezero.innerHTML = "$" + (250 * itemnumber) + ".00";
        const N2 = document.querySelector('.N2');
N2.innerHTML = itemnumber;
    const result = document.querySelector('.result');
result.innerHTML = "$"+itemnumber*125+".00";
    }
})

plus.addEventListener('click', () => {
    itemnumber++;
    zero.innerHTML = itemnumber;
    const onetwofive = document.querySelector('.onetwofive');
    onetwofive.innerHTML = "$"+(125*itemnumber)+".00";
    const twofivezero = document.querySelector('.twofivezero');
    twofivezero.innerHTML = "$"+(250*itemnumber)+".00";

    const N2 = document.querySelector('.N2');
N2.innerHTML = itemnumber;
    const result = document.querySelector('.result');
result.innerHTML = "$"+itemnumber*125+".00";
})
