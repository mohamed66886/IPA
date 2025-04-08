var loading = document.querySelector(".loading");
var show_loading = document.querySelectorAll("a");
window.onload = function(){
    console.log("ss")
    setTimeout(()=>
        loading.style.display = "none"
        ,2000);
}
var nav = document.querySelector(".nav");


document.onscroll = function(){
    if(scrollY > 100){
        nav.classList.add("scroll","animate__fadeInDown","animate__animated","active")
    }else{
        nav.classList.remove("scroll","animate__fadeInDown","animate__animated","active")
    }
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    loop: true,
    autoplay:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var shownew = document.querySelector(".show-new");
var closenew = document.querySelector(".close-new");
var newsletter = document.querySelector("section.newsletter");
var newsletteroverlay = document.querySelector(".newsletteroverlay");

shownew.onclick = function(){
    newsletteroverlay.classList.add("active");
    newsletter.classList.add("active");
}
closenew.onclick = () =>{
    newsletter.classList.remove("active");
    newsletteroverlay.classList.remove("active");
}

var InputNewsletter = document.querySelectorAll(".newsletter .group input");
var state = 0;
InputNewsletter.forEach(function (el){
    el.onfocus = function(){
        state = 1;
        el.previousElementSibling.classList.add("label")
    }
    el.onfocusout = function(){
        if(el.value == ""){
            el.style.border = "none";
            el.previousElementSibling.classList.remove("label")
        }else{
            el.style.border = "1px solid #6AC6EF";
        }  
    }
})

var show_bord = document.querySelectorAll(".show-bord");

show_bord.forEach(function(el){
    el.onclick = function(){
        el.children[0].classList.toggle("active");
        if(!el.nextElementSibling.style.maxHeight){
            el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight - 20 + "px";
        }else{
            el.nextElementSibling.style.maxHeight = null;
        }
    }
})


// var poligon = document.querySelectorAll(".poligon");

// poligon.forEach(function(item){
//     item.onclick = function(){
//         item.nextElementSibling.classList.add("active");
//     }
// })

var show_day = document.querySelectorAll(".sessions .day .show");
var details_day = document.querySelectorAll(".sessions .content .title");

show_day.forEach((el,index) => {
    el.onclick  = function(){
        show_day.forEach((day) => {
            day.classList.remove("active");
        })
        this.classList.add("active");
        details_day.forEach((item) => {
            item.classList.remove("active");
        })
        details_day[index].classList.add("active");    }
})

var our_committees = document.querySelectorAll(".our-committees .content");
var des_committees = document.querySelectorAll("section.mission .title");
var mission = document.querySelector("section.mission");

our_committees.forEach((el,index) => {
    el.onclick  = function(){
        window.scrollTo(0, mission.offsetTop);    
        des_committees.forEach((item) => {
            item.classList.remove("active");
        })
        des_committees[index].classList.add("active");    }
})



// show_loading.forEach = function(el){
//     el.onclick =  function(){
//         loadind.style.display = "block";   
//     } 
// }