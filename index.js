let day=document.querySelector("#day");
let hour=document.querySelector("#hour");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

let counter=()=>{
    let futuredate= new Date(2022,9,7);
    let presentdate= new Date();
    let mydate= futuredate - presentdate;
     
    let days= Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hours= Math.floor(mydate / 1000 / 60 / 60) %24;
    let mins= Math.floor(mydate / 1000 / 60 ) % 60;
    let secs= Math.floor(mydate / 1000) % 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = mins;
    sec.innerHTML = secs;
}
counter();

setInterval(counter, 1000);



// scroll 
scrollfn = () =>{
   let scrollbtn=document.querySelector("#scrollup");
    window.onscroll = function(){
      var scroll= document.documentElement.scrollTop;
      if(scroll>=300){
        scrollbtn.classList.add('scroll-active');
    }
    else{
          scrollbtn.classList.remove('scroll-active');

      }
    }
    
}
scrollfn();


// close menubar in phone 

let navlink=document.querySelectorAll(".nav-link")
let navcollapse=document.querySelector('.navbar-collapse.collapse');
navlink.forEach(function(e){
    e.addEventListener('click', function(){
        navcollapse.classList.remove('show');
    })
})
