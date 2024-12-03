//Task 1 Start
var a = 0
var b = 1
var n = 20
var fibo=0
var x=0+"<br>"+1+"<br>"
var show = document.querySelector(".fibo");
for (var i = 0; i <= n - 3; i++) {
    fibo = a + b;
    var a = b
    var b = fibo
    x+=fibo+"<br>"
}
show.innerHTML = x

//Task 2 Start
var t_date = new Date("Jul 3, 2024 15:37:25").getTime();
var x = setInterval(function () {


    var now = new Date().getTime();


    var distance = t_date - now;


    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("graduation-counter").innerHTML = "I will graduate from TAMK in " + days + "days";
}, 1000);

//Task3 Start
function bmi() {
    var mass = document.getElementById("mass").value;
    var height = document.getElementById("height").value / 100;
    var bmi = mass / (height * height)
    bmi = bmi.toFixed(2)
    var main = document.getElementById("bmi-calculator");
    main.innerHTML = "BMI = " + bmi + " kg/m<sup>2</sup>"
}

//Task 4 Start
function hiphop() {
    var h = ""

    var min = Number(document.getElementById("min").value);
    var max = Number(document.getElementById("max").value);

    var text = document.getElementById("hiphops");
    for (var i = min; i <= max; i++) {
        if (i % 7 == 0 && i % 3 == 0) {
            text.innerHTML = h += "hiphop<br>"
        } else if (i % 3 == 0) {
            text.innerHTML = h += "hip <br>"
        } else if (i % 7 == 0) {
            text.innerHTML = h += "hop <br>"
        } else {
            text.innerHTML = h += i + "<br>"
        }
    }

}