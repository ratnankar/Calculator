let t = document.getElementById("t");

let a = "";
let b = "";
let op = "";

function Clck(num){

    if(op == ""){
        if(a.length<9){

            t.innerText += num;
            a += num;
        }
        
    }
    else{
        
        if(b.length<9){

        t.innerText += num;
        b += num;
        }
    }
    
    return;
    
}

function add(){
    if(a == "") return;

    if(op=="+"){

        calc();
    }
    if(op==""){

        op = "+";
        t.innerText += " + ";
    }
    else{

        calc();
        op = "+";
        t.innerText += " + ";
    }
}

function sub(){
    if(a == "") return;

    if(op==""){

        op = "-";
        t.innerText += " - ";
    }
    else{

        calc();
        op = "-";
        t.innerText += " - ";
    }
}

function mult(){
    if(a == "") return;

    if(op==""){

        op = "*";
        t.innerText += " * ";
    }
    else{

        calc();
        op = "*";
        t.innerText += " * ";
    }
}

function divi(){
    if(a == "") return;

    if(op==""){

        op = "/";
        t.innerText += " / ";
    }
    else{

        calc();
        op = "/";
        t.innerText += " / ";
    }
}

function calc(){
    if(op == "") return;

    if(a != "" && op != "" && b== ""){

        let x = Number(a);
        let result = 0;

        if(op == "+") result = x + x;
        if(op == "-") result = x - x;
        if(op == "*") result = x * x;
        if(op == "/") result = x / x;

        t.innerText = result;

        a = "" + result;
        op = "";
    }
    else{

        let x = Number(a);
        let y = Number(b);
        let result = 0;

        if(op == "+") result = x + y;
        if(op == "-") result = x - y;
        if(op == "*") result = x * y;
        if(op == "/") result = x / y;

        t.innerText = result;

        a = "" + result;
        b = "";
        op = "";
    }
}

function clr(){
    t.innerText = "";
    a = "";
    b = "";
    op = "";
}

function bk(){
    let text = t.innerText;

    if(text.length > 0){
        t.innerText = text.slice(0, -1);
    }

    // Update values correctly
    if(op === ""){
        // editing first number
        a = a.slice(0, -1);
    } else if(b !== ""){
        // editing second number
        b = b.slice(0, -1);
    } else {
        // removing operator
        op = "";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Numbers
    if (!isNaN(key) && key !== " ") {
        Clck(key);
    }

    // Operators
    if (key === "+") add();
    if (key === "-") sub();
    if (key === "*") mult();
    if (key === "/") divi();

    // Enter or =
    if (key === "Enter" || key === "=") calc();

    // Backspace
    if (key === "Backspace") bk();

    // Clear
    if (key.toLowerCase() === "c") clr();
});
