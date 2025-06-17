
const  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const  weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

function calculateRemainingTime()
{
    let currentDate = new Date();
    let delta =  scheduledDate.getTime() - currentDate.getTime();

    if (delta < 0) {
        clearInterval(countdown);
        document.querySelector(".deadline").innerHTML = `<h4 class="expired">The webinar has passed!</h4>`;
    }

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let remainingDays = Math.floor(delta / oneDay)
    document.querySelector(".days").innerHTML = remainingDays ;

    let remainingHours = Math.floor((delta % oneDay) / oneHour);
    document.querySelector(".hours").innerHTML = remainingHours;

    let remainingMins = Math.floor((delta % oneHour) / oneMinute);
    document.querySelector(".mns").innerHTML = remainingMins;

    let remainingSecs = Math.floor((delta % oneMinute) / 1000);
    document.querySelector(".secs").innerHTML = remainingSecs;

}


let scheduledDate = new Date(2025, 6, 30, 5,10, 0)
let year = scheduledDate.getFullYear()
let month = months[scheduledDate.getMonth()]
let day = weekdays[scheduledDate.getDay()]
let date = scheduledDate.getDate()
let hours = scheduledDate.getHours()
let mins = scheduledDate.getMinutes()

document.querySelector(".webinar-date").innerHTML = `On ${day}, ${month} ${date} ${year}, at ${hours}:${mins} pm`

let countdown = setInterval(calculateRemainingTime, 1000);




