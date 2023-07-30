let Theme = document.getElementById("theme-changer");
let ThemeSmChanger = document.getElementById("theme-sm-changer");
let HomePage = document.getElementById("HomePage");
let Logo = document.getElementById("logo");
let Para = document.getElementById("para");
let Heading = document.getElementById("heading");
let Spanned = document.getElementById("spanned");
let ImageChanger = document.getElementById("image");
//about
let AboutPage = document.getElementById("about");
let ListContent = document.querySelectorAll("#ListContent");
let tableList = document.querySelectorAll("#tableList");
//services
let ServicePage = document.getElementById("services");
let ServiceHeading = document.getElementById("Services-heading");
//portfolio
let Portfolio = document.getElementById("Portfolio");
let Layer = document.querySelectorAll("#layer-elemnt");
//Contact
let Contact = document.getElementById("contact");
let value = false;



function pink() {
    HomePage.style.backgroundImage = "linear-gradient(to right bottom, #250537, #70324a, #a67266, #ceb89b, #f9ffe8)";
    Logo.style.color = "White";
    Para.style.color = "black";
    Heading.style.color = "#b0b0b0";
    Spanned.style.color = "#250537";
    ImageChanger.style.borderRadius = "37% 63% 36% 64% / 64% 67% 33% 36%";
    //about
    AboutPage.style.backgroundImage = "linear-gradient(to left bottom, #f9ffe8, #ceb89b, #a67266, #70324a, #250537)";
    ListContent.forEach((list) => {
        list.style.color = "#bec4ad";
    });
    tableList.forEach((list) => {
        list.style.color = "#ceb89b";
    });
    //services
    ServicePage.style.backgroundImage = "linear-gradient(to right bottom, #250537, #70324a, #a67266, #ceb89b, #f9ffe8)";
    ServiceHeading.style.color = "#bec4ad";
    //portfolio
    Portfolio.style.backgroundImage = "linear-gradient(to left bottom, #f9ffe8, #ceb89b, #a67266, #70324a, #250537)";
    Layer.forEach((element) => {
        element.classList.remove("layer");
        element.classList.add("layer2");
    });
    //contact
    Contact.style.backgroundImage = "linear-gradient(to right bottom, #250537, #70324a, #a67266, #ceb89b, #f9ffe8)";
    value = true;
}

function blue() {
    HomePage.style.backgroundImage = "linear-gradient(to left bottom, #051937, #1c5065, #58898b, #a5c4b3, #d2d8c4)";
    Logo.style.color = "Black";
    Para.style.color = "black";
    Heading.style.color = "black";
    Spanned.style.color = "#2e6264";
    ImageChanger.style.borderRadius = "70% 30% 31% 69% / 53% 29% 71% 47%";
    //about
    AboutPage.style.backgroundImage = "linear-gradient(to right bottom, #d2d8c4, #a5c4b3, #58898b, #1c5065, #051937)";
    ListContent.forEach((list) => {
        list.style.color = "#122f5b";
    })
    tableList.forEach((list) => {
        list.style.color = "black";
    });
    //services
    ServicePage.style.backgroundImage = "linear-gradient(to left bottom, #051937, #1c5065, #58898b, #a5c4b3, #d2d8c4)";
    ServiceHeading.style.color = "rgb(34, 34, 34)";
    //portfolio
    Portfolio.style.backgroundImage = "linear-gradient(to right bottom, #d2d8c4, #a5c4b3, #58898b, #1c5065, #051937)";
    Layer.forEach((element) => {
        element.classList.remove("layer2");
        element.classList.add("layer");
    });
    //contact
    Contact.style.backgroundImage = "linear-gradient(to left bottom, #051937, #1c5065, #58898b, #a5c4b3, #d2d8c4)";
    value = false;
}

Theme.addEventListener("click", function() {
    if (value === false) {
        pink();
    } else if (value === true) {
        blue();
    }
});

ThemeSmChanger.addEventListener("click", function() {
    if (value === false) {
        pink();
    } else if (value === true) {
        blue();
    }
});

//For about
let TabLinks = document.getElementsByClassName("tabs");
let TableContent = document.getElementsByClassName("table-content");

function openTab(tabname) {
    for (let i of TabLinks) {
        i.classList.remove("active-tab");
    }
    for (let j of TableContent) {
        j.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-tab");
    document.getElementById(tabname).classList.add("active-tab");
}
