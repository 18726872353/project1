var Li = document.getElementsByTagName('li');
for (var i = 0; i < Li.length; i++) {
    Li[i].index = i;
    Li[i].onclick = function () {
        console.log(200);
        console.log(Li[i].index);
    }
}

