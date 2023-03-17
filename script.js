"use strict";
const daysBackground = document.querySelector(".days-timer-background");
const hoursBackground = document.querySelector(".hours-timer-background");
const minutesBackground = document.querySelector(".minutes-timer-background");
const secondsBackground = document.querySelector(".seconds-timer-background");

const countDown = () => {
    const endDate = new Date("june, 31, 2024 20:17:00").getTime()
    const now = new Date().getTime()
    
    const difference  = endDate - now

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours *24
    const timeDays = Math.floor(difference / days)
    const timeHours = Math.floor((difference & days) / hours)
    const timeMinutes = Math.floor((difference % hours) / minutes)
    const timeSeconds = Math.floor((difference % minutes)/seconds)
    if(document.querySelector(".seconds-text").innerHTML = timeSeconds < 10) {
        document.querySelector(".seconds-text").innerHTML = `0${timeSeconds}`;
    }
    else {
        document.querySelector(".seconds-text").innerHTML = timeSeconds;
    }
    if(document.querySelector(".hours-text").innerHTML = timeHours < 10) {
        document.querySelector(".hours-text").innerHTML = `0${timeHours}`;
    }
    else {
        document.querySelector(".hours-text").innerHTML = timeHours;
    }
    if (document.querySelector(".minutes-text").innerHTML = timeMinutes <10) {
        document.querySelector(".minutes-text").innerHTML = `0${timeMinutes}`;
    }
    else {
        document.querySelector(".minutes-text").innerHTML = timeMinutes;
    }
    if(document.querySelector(".days-text").innerHTML = timeDays < 10){
        document.querySelector(".days-text").innerHTML = `0${timeDays}`
    }
    else {
        document.querySelector(".days-text").innerHTML = timeDays;
    }
}

setInterval(countDown, 1000);


