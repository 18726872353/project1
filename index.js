var op = document.getElementById("options");
var oLi = op.getElementsByTagName('li');
var oL = document.getElementById("list");
var oLLi = oL.getElementsByTagName('li');
for (var i = 0; i <oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onclick = function () {
        for (var j = 0; j < oLi.length; j++) {
            oLi[j].className = "";
        }
        oLi[this.index].className = "cative";
        for (var i = 0; i < oLLi.length; i++) {
            oLLi[i].style.display = "none";
        }
        oLLi[this.index].style.dipslay = "block";
    }
}

