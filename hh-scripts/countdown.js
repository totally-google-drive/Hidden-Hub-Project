    // The data/time we want to countdown to
//Old variable :(    var countDownDate = new Date("Feb 28, 2023 10:00:00").getTime();
var countDownDate = new Date("Mar 2, 2023 12:00:00").getTime();
    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + " Days "
    document.getElementById("hours").innerHTML = hours + "H " 
    document.getElementById("mins").innerHTML = minutes + "M " 
    document.getElementById("secs").innerHTML = seconds + "S " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
     // :(   document.getElementById("end").innerHTML = "RUMBLEVERSE IS NOW GONE...";
        document.getElementById("end").innerHTML = "The Video is out now!";
    }
    }, 1000);