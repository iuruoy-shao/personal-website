if (document.title == "Home") {
    document.onmousemove = (event) => {
        const {
        clientX,
        clientY
        } = event;
        
        var Xpercent = clientX/window.innerWidth*100;
        var Ypercent = clientY/window.innerHeight*100;
        var HSL = "hsla(223, " + Ypercent + "%, " + Xpercent + "%, " + "1)"
        for (var id of ["1","2","3"]) {
            document.getElementById(id).style.color = HSL;
        }   
    }
}

// highlights page in nav
document.getElementById(document.title).style.color = "#7887AD";

// takes care of gallery
var elementCount = document.getElementsByClassName("gallery")[0].childElementCount;
if (elementCount%3 == 0) {
    var n = Math.floor(elementCount/3);
} else {
    var n = Math.floor(elementCount/3) + 1;
}
document.getElementsByClassName("gallery")[0].style.gridTemplateColumns = "repeat(" + n + ",28vh)";

// // dashed line in header length
// addEventListener('resize', (resize) => {
//     var lineLength = .96 * window.innerWidth;
//     console.log(lineLength);
//     var dashedLines = document.querySelectorAll("header img");
//     for (var Line of dashedLines) {
//         console.log(Line)
//         Line.style.width = lineLength;
//     }
// });
