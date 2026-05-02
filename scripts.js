function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}


function toggleDescription(id) {
    var desc = document.getElementById(id);

    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}


function highlight(element) {
    element.style.backgroundColor = "#facc15";
}

function normal(element) {
    element.style.backgroundColor = "";
}


window.onload = function () {
    var p = document.createElement("p");

    var now = new Date();

    var text = document.createTextNode("Page loaded on: " + now);

    p.appendChild(text);

    document.querySelector("footer").appendChild(p);
};
