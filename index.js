let sliderdiv = document.getElementsByClassName("sliderdiv")[0];
let leftbtn = document.querySelector(".leftbtn");
let rightbtn = document.querySelector(".rightbtn");

leftbtn.addEventListener("click",(e)=>{
    sliderdiv.scrollLeft -= sliderdiv.clientWidth;
    console.log(sliderdiv.scrollLeft);
})

rightbtn.addEventListener("click",(e)=>{
    sliderdiv.scrollLeft += sliderdiv.clientWidth;
    console.log(sliderdiv.scrollLeft);
})
