function calculations () {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmio = (bmi.toFixed(2));

    if (bmio < 18.5) {
        document.getElementById("result").style.color = "Blue";
        document.getElementById("conclusion").innerHTML="You are underweight";
    } else if (bmio > 24.9 && bmio < 30){
        document.getElementById("result").style.color = "Yellow"
        document.getElementById("conclusion").innerHTML="You are overweight";

    } else if (bmio > 30 && bmio < 35){
        document.getElementById("result").style.color = "Orange"
        document.getElementById("conclusion").innerHTML="You are obese";

    } else if (bmio > 35){
        document.getElementById("result").style.color = "Red"
        document.getElementById("conclusion").innerHTML="You are EXTREMELY obese";

    } else {
        document.getElementById("result").style.color = "Green"
        document.getElementById("conclusion").innerHTML="Your BMI is normal";
    }

    document.getElementById("result").innerHTML="Your BMI is " + bmio
}