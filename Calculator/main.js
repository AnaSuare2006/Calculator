console.log("functioneste");
var pressed = null;
var operand = null;
let rezultatpartial = 0;
var semn = null;

function scrie(element) {
    pressed = element.innerHTML;
    console.log(pressed);

    if (pressed == "*") {
        let parsed = parseInt(operand, 10);
        console.log(parsed);
        rezultatpartial = rezultatpartial + parsed;
        semn = "*";
    }
    if (pressed == "/") {
        let parsed = parseInt(operand, 10);
        console.log(parsed);
        rezultatpartial = rezultatpartial + parsed;
        semn = "/";
    }
    if (pressed == "+") {
        let parsed = parseInt(operand, 10);
        console.log(parsed);
        rezultatpartial = rezultatpartial + parsed;
        semn = "+";
    }
    if (pressed == "-") {
        let parsed = parseInt(operand, 10);
        console.log(parsed);
        rezultatpartial = rezultatpartial + parsed;
        semn = "-";
    }

    if (operand != null) {
        operand = pressed + operand;
        document.getElementById("ecran").innerText =
        document.getElementById("ecran").innerText + pressed;
    }
    else {
        document.getElementById("ecran").innerText =
            document.getElementById("ecran").innerText + pressed;
        operand = pressed;
    }
};

function calc() {
    let parsed = parseInt(operand, 10);
    if (semn == "*") { rezultat = rezultatpartial * parsed; }
    if (semn == "+") { rezultat = rezultatpartial + parsed; }
    if (semn == "-") { rezultat = rezultatpartial - parsed; }
    if (semn == "/") { rezultat = rezultatpartial / parsed; }
    console.log(rezultat);
    document.getElementById("ecran").innerText = rezultat;
}

function del() {
    document.getElementById("ecran").innerText = "";
    pressed=null;
    operand=null;
    rezultatpartial=0;
    rezultat=0;
}

function change()
{
    var arr = ['a','b','c','d','e','f'];
function random_item()
{
return [Math.floor(Math.random()*arr.length)];
}

document.getElementById("btn").addEventListener("click", function () {
   let x;
   let y= "#" ;
   x = Math.random() * 100000;
   x = Math.floor(x);
   y=y+x;
   console.log(y);
   p=random_item();
   q=arr[p]
   console.log(q);
   y=y+q;
   console.log(y)   
   document.body.style.backgroundColor = y;
});
}