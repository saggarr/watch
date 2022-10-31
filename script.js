//declaring a function
function myTime(){
    var myDate = new Date();   //gate constructor to get time and date
    //ternary operators
    var hour,minute = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes(); //if minute is < 10 then add a 0 before it
    var second = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();  //if second is < 10 then add a 0 before it
    var am_pm = (myDate.getHours() <= 12) ? "AM" : "PM"; //if time < 12 then its AM. otherwise PM

    //if else, for converting 24hr format to 12hr format
    if(myDate.getHours() == 0){
        hour = 12;
    }
    else if(myDate.getHours() > 12){
        hour = myDate.getHours() - 12;
    }
    else{
        hour = myDate.getHours();
    }

    //declaring variables to store hr min sec data
    var currentHour = hour;
    var currentMinute = minute;
    var currentSecond = second;

    //showing hr min sec data to html page in span tag
    document.getElementsByClassName("hourSpan")[0].innerHTML = currentHour;
    document.getElementsByClassName("minuteSpan")[0].innerHTML = currentMinute;
    document.getElementsByClassName("secondSpan")[0].innerHTML = currentSecond;
    document.getElementsByClassName("am_pmSpan")[0].innerHTML = am_pm;

    //store days and month in array
    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //access todays date
    var currentDay = myDate.getDate();

    //declaring variables to store name of today, name of this month & todays date data
    var currentDate = Days[myDate.getDay()]; //name of today
    var currentMonth = Months[myDate.getMonth()] + " " + currentDay; //name of this month & todays date
    
    //showing name of today, name of this month & todays date data to html page in span tag
    document.getElementsByClassName("daynameSpan")[0].innerHTML = currentDate;
    document.getElementsByClassName("monthname_dateSpan")[0].innerHTML = currentMonth;


}
//calling the function
myTime();
setInterval(function(){ //setting interval time to anonymus function to refresh repeatedly
    myTime(); //calling the function from the interval function
}, 1000);

