let companyName = document.getElementById("companyName");
let street = document.getElementById("street");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zipCode = document.getElementById("zipCode");
let palletNumber = document.getElementById("palletNumber");
let weight = document.getElementById("weight");
let length = document.getElementById("length");
let width = document.getElementById("width");
let height = document.getElementById("height");
let tripId = document.getElementById("tripId");
let submitButton = document.getElementById("submit");
let gatherInfo = document.getElementById("gatherInfo");

submitButton.addEventListener("click", submitAction);

function createDocument() {


    document.getElementById("shipTo").innerHTML = companyName.value;
    document.getElementById("shipStreet").innerHTML = street.value;
    document.getElementById("shipCity").innerHTML = city.value + ", " + state.value + " " + zipCode.value;
    document.getElementById("shipPNumber").innerHTML = "Pallet Number: " + palletNumber.value;
    document.getElementById("shipWeight").innerHTML = "Weight: " + weight.value + " Lb's";
    document.getElementById("shipDimensions").innerHTML = "Dimensions: " + length.value + "L" + " x " + width.value + "W" + " x " + height.value + "H";
    document.getElementById("shipTrip").innerHTML = "Trip ID: " + tripId.value;
}

function formVisibility() {

    if (gatherInfo.style.display == "none") {
        gatherInfo.style.display = "flex";
        console.log("hide");
    } else {
        gatherInfo.style.display = "none";
        console.log("show");
    }
}

function submitAction() {

    createDocument();
    formVisibility();
    window.print();
}