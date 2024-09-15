const endPoint = "http://192.168.90.28";

function getDapurLed() {
    fetch(endPoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDapur.style.background = "blue";
            dapurLedImage.src = "asset/led-on.png";
        }else {
            ledDapur.style.background = "#579fff";
            dapurLedImage.src = "asset/led-off.png";
        }
    });
}
function getTamuLed() {
    fetch(endPoint + "/tamu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledTamu.style.background = "blue";
            tamuLedImage.src = "asset/led-on.png";
        }else {
            ledTamu.style.background = "#579fff";
            tamuLedImage.src = "asset/led-off.png";
        }
    });
}
function getMakanLed() {
    fetch(endPoint + "/makan", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledMakan.style.background = "blue";
            makanLedImage.src = "asset/led-on.png";
        }else {
            ledMakan.style.background = "#579fff";
            makanLedImage.src = "asset/led-off.png";
        }
    });
}
function getToiletLed() {
    fetch(endPoint + "/toilet", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledToilet.style.background = "blue";
            toiletLedImage.src = "asset/led-on.png";
        }else {
            ledToilet.style.background = "#579fff";
            toiletLedImage.src = "asset/led-off.png";
        }
    });
}



function setDapurLed() {
    fetch(endPoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setTamuLed() {
    fetch(endPoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setMakanLed() {
    fetch(endPoint + "/makan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

function setToiletLed() {
    fetch(endPoint + "/toilet", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload());
}

getDapurLed();
getTamuLed();
getMakanLed();
getToiletLed();

