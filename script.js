var timeContainer = document.querySelector(".time-container");
var timeBtnContainer = document.querySelector(".time-button");
var tableContainer = document.querySelector(".table");
var inputBox = document.querySelector(".input-box");
var currentDate = document.querySelector("#currentDay");
var currentTime = moment().format("LT")
var currentHour = moment().format("h");

console.log(currentHour);

var timeSlots = [
    "8",
    "9",
    "10",
    "11",
    "12",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
];

var timeSlotLength = timeSlots.length
   
currentDate.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");


function addTime() {
  
    timeSlots.forEach(function (timeSlot) {
        var timeListContainer = document.createElement("div");
        var inputContainer = document.createElement("div")
        var timeList = document.createElement("tr");
        var input = document.createElement("input");
        var time = document.createElement("td");
        var timeButton = document.createElement("button");
    
        if (timeSlot >= 8) {
            time.textContent = timeSlot + "am";
        } else {
            time.textContent = timeSlot + "pm";
        }

        if (timeSlot === 12) {
            time.textContent = timeSlot + "pm";
        };
        

        timeButton.textContent = "Save";
        timeBtnContainer.appendChild(timeButton);
        tableContainer.appendChild(timeBtnContainer);
        timeList.appendChild(time);
        timeList.appendChild(inputContainer);
        inputContainer.appendChild(input);
        timeListContainer.appendChild(timeList);
        timeContainer.appendChild(timeListContainer);
        tableContainer.appendChild(timeContainer);
        time.setAttribute("class", "time");
        timeList.setAttribute("class", "time-list");
        timeButton.setAttribute("class", "saveBtn");
        timeButton.setAttribute("data-time", timeSlot);
        inputContainer.setAttribute("class", "input-container");
        input.setAttribute("class", "input-box");
        input.setAttribute("id", timeSlot);
        input.setAttribute("type", "text");
        timeButton.addEventListener("click", saveData);

    });
};

addTime();

function timeDay() {
   var time = currentHour
    $(".input-box").each(function () {

        var curTime = $(this).attr("id");

        if (curTime === time) {
            $(this).addClass("present")

        } else if (curTime < time) {
            $(this).addClass("past")

        } else {
            $(this).addClass("future")
        
            console.log(curTime)
        }
    });
}
timeDay();

function getData() {

    $(".input-box").each(function () {
        var time = $(this).attr("data-time");
        var timeID = $("#" + time);

        localStorage.getItem(time, timeID.val());
    });

$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#1").val(localStorage.getItem("1"));
$("#2").val(localStorage.getItem("2"));
$("#3").val(localStorage.getItem("3"));
$("#4").val(localStorage.getItem("4"));
$("#5").val(localStorage.getItem("5"));
$("#6").val(localStorage.getItem("6"));
$("#7").val(localStorage.getItem("7"));

}
getData();
    
function saveData() {
    var time = $(this).attr("data-time");
    var timeID = $("#" + time)
    
    localStorage.setItem(time, timeID.val());

}

