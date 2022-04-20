// Set the date we're counting down to
var countDownDate = new Date("Sep 30, 2021 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  effectCircle(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function effectCircle( current ){
    const porcent_second = 60; // maximo value second
    const porcent_minute = 60; // maximo value second
    const porcent_hour = 24; // maximo value second
    const porcent_day = 1; // maximo value second

    var opacity = ((100 * current) / porcent_second) / 100; // value between 0 - 1
    var size = (100 * current) / porcent_second;

    console.log('opacity: '+ opacity);
    console.log('size: '+ size);

    var box2 = document.getElementsByClassName("box-2");
    box2[0].style.width = size+'px';
    box2[0].style.height = size+'px';
    box2[0].style.opacity = opacity;
}