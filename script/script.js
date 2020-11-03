console.log("Hello from script file")

const images = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg"];
const imageToChange = document.getElementById("image");

function changeImage(){
    console.log("button clicked!");
    let rnd = Math.floor((Math.random() * images.length-1) +1);
    console.log(rnd);
    imageToChange.src = images[rnd];
}