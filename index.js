// alert("ohk lets check the other file are working or not ")

// code for fetching the current date and time that has to be displayed on the home screen
let a;
let time;
let date;

setInterval(() => {
    

a = new Date();
date =a.toLocaleDateString();
time = a.getHours() + ":" +a.getMinutes()+ ":" + a.getSeconds();
document.getElementById("time").innerHTML= time + " on " + date;

}, 1000);
