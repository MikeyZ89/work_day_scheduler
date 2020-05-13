const date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

$(".time-block").each(function(){
    const currentHour = parseInt(moment().format("H"));
    const hour = parseInt($(this).attr("data-hour"));
    if(hour < currentHour){
        $(this).find("textarea").addClass("past");
    }else if(hour> currentHour){
        $(this).find("textarea").addClass("future");
    }else {
        $(this).find("textarea").addClass("present");
    }
    console.log(hour, currentHour);
});

$("#9a").val(localStorage.getItem("9a"));
$("#10a").val(localStorage.getItem("10a"));
$("#11a").val(localStorage.getItem("11a"));
$("#12a").val(localStorage.getItem("12a"));
$("#13a").val(localStorage.getItem("13a"));
$("#14a").val(localStorage.getItem("14a"));
$("#15a").val(localStorage.getItem("15a"));
$("#16a").val(localStorage.getItem("16a"));
$("#17a").val(localStorage.getItem("17a"));

$('button').on('click', function (){
    let time = $(this).parent().attr('id');
    let text = $(this).siblings('textarea').val();
    localStorage.setItem(time, text);
});

// //Save function, detects a click anywhere in the container, then checks if the click is on an element with class saveBtn, before getting the specific row from an assigned ID on the button.
// $(".container").on("click", function(e){
//     if(e.target.classList.contains("saveBtn")){ 
//         planner[e.target.id] = $(e.target).prev()[0].value; //This seems needlessly complex.
//         localStorage.setItem("planner", JSON.stringify(planner));
//     }
