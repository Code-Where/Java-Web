let checkBox = document.getElementById("checkMenu");
let navMenu = document.getElementById("navMenu");
checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
        navMenu.style.top = "75px";
        console.log(document.getElementById("headTxt"));
        document.getElementById("headTxt").classList.add("filter")
    }
    else {
        navMenu.style.top = "-400px";
        document.getElementById("headTxt").classList.remove("filter");

    }
});
const data = ["2D ARRAYS", "APPLETS", "BASIC PROGRAMMING CONSTRUCTS", " DATA CONVERSION", "DELEGATION EVENT MODEL", "EXCEPTION HANDLING", "FUNCTIONS", "GRAPHICAL USER INTERFACE (AWT)",
    "GRAPHICAL USER INTERFACE (SWINGS)", "INHERITANCE", "INPUT/OUTPUT", "INTERFACES", "JAVA DATABASE CONNECTIVITY", "MULTITHREADING", "OBJECT ORIENTED PROGRAMMING",
    "PACKAGES", "SINGLE DIMENSION ARRAYS", "STRINGS"]

let menu = document.getElementById("selectTopic");
let quesMenu = document.getElementById("selectQues");
let difficultyMenu = document.getElementById("selectdifficulty");

menu.innerHTML = "";

for (let index = 0; index < data.length; index++) {
    menu.innerHTML += `<option value="${index}">${data[index]}</option>`;
}
createQues(0, "mix");
menu.addEventListener("change", () => {
    createQues(menu.selectedIndex, difficultyMenu.options[difficultyMenu.selectedIndex].value);
});
difficultyMenu.addEventListener("change", () => {
    createQues(menu.selectedIndex, difficultyMenu.options[difficultyMenu.selectedIndex].value);
});
function createQues(index, mode) {
    quesMenu.innerHTML = "";
    for (let i = 0; i < quesData.questions.length; i++) {
        if (index == quesData.questions[i].topic) {
            if (mode == "mix") {
                quesMenu.innerHTML += `<option value="${quesData.questions[i].id}">${quesData.questions[i].description}</option>`;
            }
            else {
                if (mode == quesData.questions[i].difficulty) {
                    quesMenu.innerHTML += `<option value="${quesData.questions[i].id}">${quesData.questions[i].description}</option>`;
                }
            }
        }
    }
}
document.getElementById("code").innerHTML += quesData.questions[0].solution.code;