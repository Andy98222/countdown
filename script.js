var d1 = document.getElementById("days")
var h1 = document.getElementById("hours")
var m1 = document.getElementById("minutes")
var s1 = document.getElementById("seconds")

var d2
var h2
var m2
var s2


const img1 = "url(https://images.hdqwalls.com/download/final-fantasy-vii-remake-and-rebirth-r4-1920x1080.jpg)";
const img2 = "url(https://images.hdqwalls.com/download/final-fantasy-vii-rebirth-uh-1920x1080.jpg)";


function countdownTimer() {


  const date = new Date();
  const date1 = new Date('2/29/2024');
  var i = 0;
  let currentDay = String(date.getDate()).padStart(2, '0');

  let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

  let currentYear = date.getFullYear();

  // we will display the date as DD-MM-YYYY 

  const interval = setInterval(() => {
    const date2 = new Date();
    const diffTime = date1 - date2;
    //console.log(diffTime + " milliseconds");

    var diffDays = (diffTime / (1000 * 60 * 60 * 24));
    var diffHours = (diffDays - Math.floor(diffDays)) * 24;
    var diffMinutes = (diffHours - Math.floor(diffHours)) * 60;
    var diffSeconds = (diffMinutes - Math.floor(diffMinutes)) * 60;
  //  console.log(diffDays, diffHours, diffMinutes, diffSeconds);
    d1.innerHTML = formatNumber(Math.floor(diffDays));
    h1.innerHTML = formatNumber(Math.floor(diffHours));
    m1.innerHTML = formatNumber(Math.floor(diffMinutes));
    s1.innerHTML = formatNumber(Math.floor(diffSeconds));
    if (diffDays == 0.00 && diffHours == 0.00 && diffMinutes == 0.00 && diffSeconds == 0.00)
      clearInterval(interval);
    i = 1000;
  }, i)

}



function changeBackground() {
 
  var backgrounds = [img1,img2]; // Add as many background images as needed
  var currentIndex = 0;
 
  setInterval(function() {
     var img = document.querySelector(".image");
    
    img.style.backgroundImage= backgrounds[currentIndex];
    img.style.opacity= 0.7;
    

    console.log(backgrounds[currentIndex]);
    
    currentIndex = (currentIndex + 1) % backgrounds.length;
  }, 5000); // 10 seconds
  
}

function changeOpacity() {
  var backgrounds = [img1, img2];
  var currentIndex = 0;
  var sign = 1;
  var fullCycle = 0;
  var stopChangingOpacity = false;
  setInterval(function() {
    var img = document.querySelector(".image");
    if (!stopChangingOpacity) {
      img.style.opacity = Number(img.style.opacity) + sign * 0.01; // Toggle opacity between 0.5 and 1
      console.log(img.style.opacity);
      if (Number(img.style.opacity) <= 0.0) {
        sign = 1;
        fullCycle++;
      }
      if (Number(img.style.opacity) > 0.7) {
        sign = -1;
        fullCycle++;
        // Stop changing opacity for 3 seconds
        stopChangingOpacity = true;
        setTimeout(function() {
          stopChangingOpacity = false;
        }, 3000);
      }
      if (fullCycle == 2) {
        fullCycle = 0;
        img.style.backgroundImage = backgrounds[currentIndex];
        currentIndex = (currentIndex + 1) % backgrounds.length;
      }
    }
  }, 10);
}

function formatNumber(number) {
  console.log()
  if (number < 10) {
    return '0' + number;
  }
  else {
    return number;
  }
}

//Run
countdownTimer();


changeOpacity();




