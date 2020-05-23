var zaman;
var resimler = new Array("", "url(images/1.jpg)", "url(images/2.jpg)",
    "url(images/3.jpg)", "url(images/4.jpg)", "url(images/5.jpg)",
    "url(images/6.jpg)", "url(images/7.jpg)", "url(images/8.jpg)",
    "url(images/9.jpg)", "url(images/10.jpg)");


function stop(z) {
    window.clearInterval(zaman);
    for (var i = 1; i <= 10; i++) {
        if (z == i) {
            document.getElementById("sayi" + i).style.background = "red";
            document.getElementById("sliderust").style.background = resimler[z];
        } else { document.getElementById("sayi" + i).style.background = "black"; }
    }


}

function start(x) {
    if (x == 1) {
        document.getElementById("sliderust").style.background = resimler[x]
        document.getElementById("sayi" + x).style.background = "red";
        document.getElementById("sayi10").style.background = "black";
        x++;
    }



    zaman = window.setInterval(function() {
        document.getElementById("sliderust").style.background = resimler[x];

        for (var i = 1; i <= 10; i++) {
            if (x == i) { document.getElementById("sayi" + i).style.background = "red" } else { document.getElementById("sayi" + i).style.background = "black" }

        };

        x++;
        if (x == 11) { x = 1 };

    }, 2000)
};