
var fors = 3;
var test;

function forsøk(di) {
    if (fors > 0) {
        test = Math.ceil(Math.random() * 9);
        if (test==1) {
            if (fors == 3) {
                console.log("Du vant");
                document.getElementById("svar").innerHTML = '<h1>Gratulerer, du vant en 1989 Polonez II</h1>';
                document.getElementById("svar").id = "nei";
                document.getElementById(di).innerHTML = '<button onclick="" class="buton" id=""><img src="img/winner.png" alt=""></button>';
            }
            else if (fors == 2) {
                console.log("Du vant");
                document.getElementById("svar").innerHTML = '<h1>Gratulerer, du vant en Peel P50</h1>';
                document.getElementById("svar").id = "nei";
                document.getElementById(di).innerHTML = '<button onclick="" class="buton" id=""><img src="img/winner.png" alt=""></button>';
            }
            
            else {
                console.log("Du vant");
                document.getElementById("svar").innerHTML = '<h1>Gratulerer, du vant en absolutt ingenting :)</h1>';
                document.getElementById("svar").id = "nei";
                document.getElementById(di).innerHTML = '<button onclick="" class="buton" id=""><img src="img/winner.png" alt=""></button>';
            }
            fors = 0;
        }

        else {
            document.getElementById(di).innerHTML = '<button onclick="" class="buton" id=""><img src="img/try_again.png" alt=""></button>';
            console.log("Feil");
            console.log("Du har " + fors + " forsøk igjenn");
            fors--;
        }
    }
    else {
        console.log("Ikke flere forsøk")
        document.getElementById("svar").innerHTML = '<h1>Du har ikke flere forsøk</h1>';
    }
}
