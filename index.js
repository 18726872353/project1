var Li = document.getElementsByTagName('li');
for (var i = 0; i < Li.length; i++) {
    Li[i].index = i;
    Li[i].onclick = function () {
       for(var j=0;j<Li.length;j++){
        Li[j].className="";
       }
       Li[this.index].className="cative";
    }
}

