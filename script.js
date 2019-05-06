function calculateTip() {

    //store input data
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("Cannot be blank");
        return;
    }

    // Checks if input is empty or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // MATHS

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display tip

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide tip amount on load

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clocking button calls this function

document.getElementById("calculate").onclick = function() {calculateTip(); };
