
function getRandomColor() {
    var randomcolor = Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255);
    return "rgb(" + randomcolor + ")";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("setColor").addEventListener("click", function () {
        var color = document.getElementById("colorInput").value;
        document.getElementById("div1").style.backgroundColor = color;
        document.getElementById("color1").innerText = color;
    });

    document.getElementById("randomColor").addEventListener("click", function () {
        var randomColor = getRandomColor();
        document.getElementById("div2").style.backgroundColor = randomColor;
        document.getElementById("color2").innerText = randomColor;
    });

    document.getElementById("reset").addEventListener("click", function () {
        document.getElementById("div1").style.backgroundColor = "";
        document.getElementById("color1").innerText = "Div 1";
        document.getElementById("div2").style.backgroundColor = "";
        document.getElementById("color2").innerText = "Div 2";
    });
});




function rgbToColorName(r, g, b) {
    
    const colorMap = {
        "red": [255, 0, 0],
        "green": [0, 255, 0],
        "blue": [0, 0, 255],
        
    };

    
    let closestColor = "";
    let minDistance = Number.MAX_SAFE_INTEGER;

    for (const color in colorMap) {
        const [rRef, gRef, bRef] = colorMap[color];
        const distance = Math.sqrt((r - rRef) ** 2 + (g - gRef) ** 2 + (b - bRef) ** 2);

        if (distance < minDistance) {
            minDistance = distance;
            closestColor = color;
        }
    }

    return closestColor;
}