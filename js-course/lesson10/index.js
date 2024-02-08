let x, y, z;

document.getElementById("roll-btn").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 8) + 1;
    z = Math.floor(Math.random() * 20) + 1;

    document.getElementById("x-label").innerHTML = x;
    document.getElementById("y-label").innerHTML = y;
    document.getElementById("z-label").innerHTML = z;
}