// const endDate = new Date("January 7, 2026 01:00:00").getTime();
// const endDate = new Date("January 7, 2026 23:27:00").getTime();
const startDate = new Date().getTime();
const endDate = startDate + (2 * 60 * 1000); // 2 minutes from now


function updateCountdown(){
    const now = new Date().getTime();
    const totalDuration = endDate - startDate;
    const completed = now - startDate;
    const progressPercent = Math.min((completed / totalDuration) * 100, 100);

    document.getElementById("progress-bar").style.width = progressPercent + "%";


    let day = 1000 * 60 * 60 * 24;
    let hour = 1000 * 60 * 60;
    let minute = 1000 * 60;
    let second = 1000;

    const remaining = endDate - now;
    const days = Math.floor(remaining / day);
    const hours = Math.floor((remaining % day) / hour);
    const minutes = Math.floor((remaining % hour) / minute);
    const seconds = Math.floor((remaining % minute) / second);

    // populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(remaining < 0){
        clearInterval(x);
        document.getElementsByClassName("countdown")[0].innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}
const x = setInterval(updateCountdown, 1000);