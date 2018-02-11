const secondsHand = document.querySelector('.seconds-hand');
const minuteHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hours-hand');
let sRotations = 0;
let mRotations = 0;
let hRotations = 0;


function curentTime() {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();
    const secondsToDeg = (seconds * 6) + 90 + sRotations;
    const minutesToDeg = (minutes * 6) + 90 + mRotations;
    const hoursToDeg = (hours * 30) + 90 + hRotations;
    
    if( seconds === 59 ) {
        sRotations += 360;
    }else if (minutes ===59) {
        mRotations += 360;
    }else if (hours === 24) {
        hRotations += 360
    };

    
    secondsHand.style.transform= `rotate(${secondsToDeg}deg)`;
    minuteHand.style.transform= `rotate(${minutesToDeg}deg)`;
    hourHand.style.transform= `rotate(${hoursToDeg}deg)`;
}

setInterval(curentTime, 1000);
