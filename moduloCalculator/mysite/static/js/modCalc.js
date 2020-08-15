function generateNums(){
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}