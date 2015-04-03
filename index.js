window.onload = function() {
    setBoxColor();
    sparkle();
    document.addEventListener('mousemove', function() {
        if (Date.now() % 5 === 0) {
            sparkle();
        }
    });
}
function renderSection(section) {
    var project = projects[section];
    var page = document.getElementById('page');
    page.innerHTML = 
        '<h2><span id="' + project.id + '">' + project.name + '</h2>' +
        '<div class="text" align="left">' + project.text + '</div>';
    return;
}
function getRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 256) +
        ' ,' + Math.floor(Math.random() * 256) +
        ' ,' + Math.floor(Math.random() * 256) +
        ')';
}
function getRandomRedColor() {
    return 'rgb(' + Math.floor(Math.random() * 130 + 86) +
        ' ,' + Math.floor(Math.random() * 70) +
        ' ,' + Math.floor(Math.random() * 155 + 25) +
        ')';
}
function getRandomFontSize() {
    return Math.floor(Math.random() * 50) + 'px';
}
function getRandomFontFamily() {
    var fonts = ['Arial', 'Minion Pro', 'Helvetica Neue',
                 'Rockwell', 'Gil Sans', 'Times New Roman', 'Trebuchet', 'Verdana',
                 'Papyrus', 'Palatino Linotype', 'Copperplate Gothic Bold'];
    return fonts[Math.floor(Math.random() * fonts.length)] + ", Lucida Console";
}
function setBoxColor() {
    var boxes = document.getElementsByClassName('box');
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomRedColor();
    }
    return;
}
function sparkle() {
    var sparkles = document.getElementById('sparkles');
    var rows = 50;
    var cols = 800;
    var sparkleString = '';
    for (var i = 0; i < rows; i++) {
        var rowString = '';
        while (rowString.length < cols) {
            for (var k = 0; k < Math.floor(Math.random()*30); k++) {
                rowString += '&nbsp';
            }
            rowString += "<span style='color: " + getRandomColor() + ";" +
                "font-size: " + getRandomFontSize() + ";" +
                "font-family: " + getRandomFontFamily() + ";>";
            if (Date.now() %2 === 0) {
                rowString += ".</span>";
            } else rowString += "*</span>";
        }
        sparkleString += rowString + '<BR>';
    }
    sparkles.innerHTML = sparkleString;
    return;
}
