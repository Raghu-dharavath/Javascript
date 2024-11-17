

const increasebtn = document.getElementById('btn1');
const resetbtn = document.getElementById('btn2');
const decreasebtn = document.getElementById('btn3');
const  lablevalue = document.getElementById('labelid');
let count = 0;

increasebtn.onclick=function(){
    count++;
    lablevalue.textContent = count;
}
decreasebtn.onclick=function(){
    count--;
    lablevalue.textContent = count;
}
resetbtn.onclick=function(){
    count=0;
    lablevalue.textContent = count;
}