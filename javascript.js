function calculations () {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmio = (bmi.toFixed(2));

    if (bmio < 18.5 || bmio > 24.9) {
        document.getElementById("result").style.color = "Red"
    } else {
        document.getElementById("result").style.color = "Green"
    }

    document.getElementById("result").innerHTML="Your BMI is " + bmio
}