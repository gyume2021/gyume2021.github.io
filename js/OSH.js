function calculateTimeLeft() {
    // var today = new Date();
    // Convert UTC time to GMT+0 time
    var now = new Date();
    var today = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

    var dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
    var daysUntilNextFriday = (5 - dayOfWeek + 7) % 7; // Calculate days until next Friday
    // var hoursUntilNextFriday = (daysUntilNextFriday * 24) + 10 - today.getHours(); // Calculate hours until next Friday
    var hoursUntilNextFriday = (daysUntilNextFriday * 24) + 2 - today.getHours(); // Calculate hours until next Friday
    var minutesUntilNextFriday = 0;
    var secondsUntilNextFriday = 0;
    
    if ((0 - today.getMinutes())==0){
        minutesUntilNextFriday = 0;
    }
    else {
        minutesUntilNextFriday = 60 - today.getMinutes();
        hoursUntilNextFriday = hoursUntilNextFriday - 1;
    }

    if ((0 - today.getSeconds())==0){
        secondsUntilNextFriday = 0;
    }
    else {
        secondsUntilNextFriday = 60 - today.getSeconds();
        minutesUntilNextFriday = minutesUntilNextFriday - 1;
    }
    // document.getElementById("time-left").innerText = today;
    document.getElementById("time-left").innerText = "Next Guild Raid Boss Fight will begin in: "+ Math.floor(hoursUntilNextFriday/24) +" Days, " + hoursUntilNextFriday%24 + " Hours, " + minutesUntilNextFriday + " Minutes, " + secondsUntilNextFriday + " Seconds.";
}