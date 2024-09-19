// KNOKPKA 1
const HideElemente1 = [
    document.getElementById("avatarka-moja"),
    document.getElementById("DevHub"),
    document.getElementById("Narumi"),
    document.getElementById("DevHub-avatarka"),
    document.getElementById("DevHub-button"),
    document.getElementById("DevHubname"),
    document.getElementById("debhubdesc"),
    document.getElementById("Lunacyname"),
    document.getElementById("Lunacydesc"),
    document.getElementById("Lunacy-avatarka"),
    document.getElementById("Lunacy-button"),
    document.getElementById("contactss"),
    document.getElementById("telegram"),
    document.getElementById("discord"),
    document.getElementById("myname"),
];

const ShowElemente1 = [
    document.getElementById("titlepage"),
    document.getElementById("descriptiontitlepage")
]

document.getElementById("home").onclick = function() {
    HideElemente1.forEach(function(el) {
        if (el) el.style.display = "none"; // Проверяем наличие элемента
    });

    ShowElemente1.forEach(function(el) {
        if (el) el.style.display = "block"; // Проверяем наличие элемента
    });
}


// KNOKPKA 2
const HideElemente = [
    document.getElementById("avatarka-moja"),
    document.getElementById("titlepage"),
    document.getElementById("descriptiontitlepage"),
    document.getElementById("contactss"),
    document.getElementById("telegram"),
    document.getElementById("discord"),
    document.getElementById("myname"),
];

const ShowElemente = [
    document.getElementById("DevHub"),
    document.getElementById("Narumi"),
    document.getElementById("DevHub-avatarka"),
    document.getElementById("DevHub-button"),
    document.getElementById("DevHubname"),
    document.getElementById("debhubdesc"),
    document.getElementById("Lunacyname"),
    document.getElementById("Lunacydesc"),
    document.getElementById("Lunacy-avatarka"),
    document.getElementById("Lunacy-button"),
];

document.getElementById("projects").onclick = function() {
    HideElemente.forEach(function(el) {
        if (el) el.style.display = "none"; // Проверяем наличие элемента
    });

    ShowElemente.forEach(function(el) {
        if (el) el.style.display = "block"; // Проверяем наличие элемента
    });
}


// KNOKPKA 3
const HideElemente2 = [
    document.getElementById("DevHub"),
    document.getElementById("titlepage"),
    document.getElementById("descriptiontitlepage"),
    document.getElementById("Narumi"),
    document.getElementById("DevHub-avatarka"),
    document.getElementById("DevHub-button"),
    document.getElementById("DevHubname"),
    document.getElementById("debhubdesc"),
    document.getElementById("Lunacyname"),
    document.getElementById("Lunacydesc"),
    document.getElementById("Lunacy-avatarka"),
    document.getElementById("Lunacy-button"),
];

const ShowElemente2 = [
    document.getElementById("contactss"),
    document.getElementById("avatarka-moja"),
    document.getElementById("telegram"),
    document.getElementById("discord"),
    document.getElementById("myname"),
];

document.getElementById("contacts").onclick = function() {
    HideElemente2.forEach(function(el) {
        if (el) el.style.display = "none"; // Проверяем наличие элемента
    });

    ShowElemente2.forEach(function(el) {
        if (el) el.style.display = "block"; // Проверяем наличие элемента
    });
}