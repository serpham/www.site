//KNOKPKA 1



const HideElemente1 = [
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
];


const ShowElemente1 = [
    document.getElementById("titlepage"),
    document.getElementById("descriptiontitlepage")
]

document.getElementById("home").onclick = function() {
    HideElemente1.forEach(function(el) {
        el.style.display = "none"
    })

    ShowElemente1.forEach(function(el) {
        el.style.display = "block"
    })
}



//KNOKPKA 2


const HideElemente = [
    document.getElementById("titlepage"),
    document.getElementById("descriptiontitlepage"),
    document.getElementById("contactss"),
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
        el.style.display = "none";

    });
    ShowElemente.forEach(function(el) {
        el.style.display = "block"
    })
}


//KNOKPKA 3


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
];

document.getElementById("contacts").onclick = function() {

    ShowElemente2.forEach(function(el) {
        el.style.display = "block"
    });

    HideElemente2.forEach(function(el) {
        el.style.display = "none";

    });
}