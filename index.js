var Li = document.getElementsByTagName('li');
var oBox = document.getElementsByClassName("box");
for (var i = 0; i < Li.length; i++) {
    Li[i].index = i;
    Li[i].onclick = function () {
        for (var j = 0; j < Li.length; j++) {
            Li[j].className = "";
        }
        Li[this.index].className = "cative";
        for (var i = 0; i < oBox.length; i++) {
            oBox[i].style.display = "none";
        }
        oBox[this.index].style.dipslay = "block";
    }
}

