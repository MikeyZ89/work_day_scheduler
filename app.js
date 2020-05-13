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

$("#9a").children("textarea").val(localStorage.getItem("9a"));
$("#10a").children("textarea").val(localStorage.getItem("10a"));
$("#11a").children("textarea").val(localStorage.getItem("11a"));
$("#12a").children("textarea").val(localStorage.getItem("12a"));
$("#13a").children("textarea").val(localStorage.getItem("13a"));
$("#14a").children("textarea").val(localStorage.getItem("14a"));
$("#15a").children("textarea").val(localStorage.getItem("15a"));
$("#16a").children("textarea").val(localStorage.getItem("16a"));
$("#17a").children("textarea").val(localStorage.getItem("17a"));

$('button').on('click', function (){
    let time = $(this).parent().attr('id');
    let text = $(this).siblings('textarea').val();
    localStorage.setItem(time, text);
});