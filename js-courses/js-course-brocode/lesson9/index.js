// counter program

let count = 0;

document.getElementById("decrease-btn").onclick = function(){
    count -=1;
    document.getElementById("counter-label").innerHTML = count;

}

document.getElementById("reset-btn").onclick = function(){
    count = 0;
    document.getElementById("counter-label").innerHTML = count;
}

document.getElementById("increase-btn").onclick = function(){
    count += 1;
    document.getElementById("counter-label").innerHTML = count;
}