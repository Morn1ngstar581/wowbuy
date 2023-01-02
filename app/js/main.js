import { Swiper } from "swiper";

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    speed: 1000,


});


let tabButton = document.querySelectorAll(".login__register");
let tabContent = document.querySelectorAll(".login__main");


tabButton.forEach(function(el) {
    el.addEventListener('click', tabActive);
});

function tabActive(el) {
    let btn = el.currentTarget;
    let dTarget = btn.dataset.target;
    tabContent.forEach(function(el) {
        el.classList.remove("show");
    });

    document.querySelector("#" + dTarget).classList.add("show");
};