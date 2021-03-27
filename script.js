var timeContainer = document.querySelector(".time-container");
var timeBtnContainer = document.querySelector(".time-button");
var tableContainer = document.querySelector(".table");
var inputBox = document.querySelector(".input-box");
var currentDate = document.querySelector("#currentDay");
var currentTime = moment().format("LT");
var timeSlots = [
    8,
    9,
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7
];

var timeSlotLength = timeSlots.length

currentDate.textContent = moment().format("MMMM Do YYYY, h:mm:ss a")

function addTime() {
    for (var i = 0; i < timeSlotLength; i++) {
        console.log(timeSlots[i]);

    };

    timeSlots.forEach(function (timeSlot) {
        var timeListContainer = document.createElement("div");
        var timeList = document.createElement("tr");
        var input = document.createElement("input")
        var time = document.createElement("td");
        var timeButton = document.createElement("button");
    
        if (timeSlot >= 8) {
            time.textContent = timeSlot + "am";
        } else {
            time.textContent = timeSlot + "pm";
        }

        if (timeSlot === 12) {
            time.textContent = timeSlot + "pm";
        }
        
        timeButton.textContent = "Save";
        timeBtnContainer.appendChild(timeButton);
        tableContainer.appendChild(timeBtnContainer);
        timeList.appendChild(time);
        timeList.appendChild(input);
        timeListContainer.appendChild(timeList)
        timeContainer.appendChild(timeListContainer);
        tableContainer.appendChild(timeContainer);
        time.setAttribute("class", "time");
        timeList.setAttribute("class", "time-list");
        timeButton.setAttribute("class", "saveBtn");
        input.setAttribute("class", "input-box")
    });

    if (currentTime > timeSlots) {
        inputBox.setAttribute("class", "past");
    };
};

addTime();
    
function setCurrentTime() {
    
}
