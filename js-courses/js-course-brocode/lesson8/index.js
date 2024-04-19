// hypotenuse calc practice program
let a, b, c;

document.getElementById("btn-submit").onclick = function () {

    a = document.getElementById("input-a").value;
    a = Number(a);

    b = document.getElementById("input-b").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("label-c").innerHTML = "Side C: " + c;
}