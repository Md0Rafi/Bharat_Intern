document.getElementById("convert").onclick = function() {
    var c = document.getElementById("cel").value;
    var f = (c * 9 / 5) + 32;
    document.getElementById("faren").innerHTML = f;
}