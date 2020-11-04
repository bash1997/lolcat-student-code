var wakeUp = 7;
var lunch = 12;
var noon = 12;
var napTime = 14;
var evening = 18;
var partyTime = 20;
var oneSecond = 1000;
var isPartyTime = false;
var messageText;
var timeImage;
var time = new Date().getHours();
var message = document.getElementById("timeEvent");
var image = document.getElementById("lolcat");
var partyTimeButton = document.getElementById("partyTimeButton");
var wakeUpSelector = document.getElementById("wakeUpTimeSelector");
var lunchSelector = document.getElementById("lunchTimeSelector");
var napSelector = document.getElementById("napTimeSelector");

var updateClock = function () {
	if (time >=partyTime || time <= 2) {
		
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "Bring out the catnip, Human! Its party time!";
		
}
	else if (time == wakeUp) {
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "Wake up, Human! Let's go out for 			breakfast today.";
	}
	else if (time < noon) {
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
		messageText = "Good Morning";
	}
	else if (time == lunch) {
		timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "Where's my lunch, Human?";
	}
  else if (time == napTime) {
	  timeImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "*YAWN* Its Kitty's nap time";
	}
	else if (time >= evening) {
		timeImage = "http://www.funnyjunksite.com/pictures/wp-content/uploads/2013/06/Good-Night.jpg";
		messageText = "Good Evening";
	}
	else if (time >= noon) {
		timeImage = "https://i1.wp.com/www.courthousenews.com/wp-content/uploads/2018/01/Grumpy-Cat-New-Year.jpg";
		messageText = "Good Afternoon";
	}
image.src = timeImage;
message.innerText = messageText;
	
showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();

setInterval( updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party Over";// text in the button should read "Party Over"
      partyTimeButton.style.background = "#0A8DAB";// color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY TIME!";// text in the button should read "PARTY TIME!"
      partyTimeButton.style.background = "#222";// color of the button should be "#222" (bonus!)
   }
};

var wakeUpEvent = function() {
	wakeUpEvent = wakeUpSelector.value;
};

var lunchEvent = function() {
	lunchEvent = lunchSelector.value;
};

var napEvent = function() {
	napEvent = napSelector.value;
};

partyTimeButton.addEventListener("click", partyEvent);
wakeUpSelector.addEventListener("change", wakeUpEvent);
lunchSelector.addEventListener("change", lunchEvent);
napSelector.addEventListener("change", napEvent);