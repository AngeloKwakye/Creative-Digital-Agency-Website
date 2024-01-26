'use strict';

/* 
* adding event on elements
*/

const addEventOnELement = function(elem, type, callback){
    if(elem.length > 1){
        for(let i = 0; i< elem.length; i++){
            elem[i].addEventListener(type, callback)
        }
    } else{
        elem.addEventListener(type, callback)
    }
}


/* 
* navbar toggle
 */ 

const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}


addEventOnELement(navToggle, "click", toggleNavbar);


const closeNavbar = function (){
    navbar.classList.remove("active")
    overlay.classList.remove("active")
}

addEventOnELement(navbarLinks, "click", closeNavbar);

/* *
    header & backtoTop btn show when scroll is down to 100px
*/

const header = document.querySelector("[data-header]")
const backToTop = document.querySelector("[data-back-to-top]")

const headerActive = function() {
    if (window.scrollY > 80) {
        header.classList.add("active")
        backToTop.classList.add("active")
    }else{
        header.classList.remove("active")
        backToTop.classList.remove("active")
    };
};

addEventOnELement(window, "scroll", headerActive);