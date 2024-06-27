let btn = document.getElementsByClassName("btn");
let opr = document.getElementsByClassName("opr");
console.log(btn);

let num1 = 0, num2 = 0, ans = 0;
let op = null;

let del = document.getElementById("del");

del.onclick = () =>{
    if(op == null){
        num1 = Math.floor(num1 / 10);
        screen.innerText = num1;
    }

    else{
        num2 = Math.floor(num2/10);
        screen.innerText = num1 + op + num2;
    }
}


for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = (e) => {
        if (op == null) {
            num1 = 10 * num1 + Number(btn[i].innerText);
            console.log(num1);
            screen.innerText = num1;
        }
        else {
            num2 = 10 * num2 + Number(btn[i].innerText);
            console.log(num2);
            screen.innerText = num1 + op + num2;
        }
    }
}

let optemp;

for (let i = 0; i < opr.length; i++) {
    if (op == null) {
        opr[i].onclick = (e) => {
            op = opr[i].innerText;
            console.log(op);
            screen.innerText = num1 + op;
            optemp = op;
        }
    }
}


let eql = document.getElementById("=");

eql.onclick = () => {
    if (op === "+")
        ans = (num1 + num2);
    if (op === "-")
        ans = (num1 - num2);
    if (op === "x")
        ans = (num1 * num2);
    if (op === "/")
        ans = (num1 / num2);
    if (op === "^")
        ans = (num1 ** num2);
    if (op === "%")
        ans = (num1 % num2);

    screen.innerText = ans;

    num1 = num2 = 0;
    op = null;
}

let Clr = document.getElementById("AC");

Clr.onclick = () => {
    num1 = num2 = 0;
    op = null;
    screen.innerText = 0;
}

let screen = document.getElementById("Screen");


console.log(screen.innerText);