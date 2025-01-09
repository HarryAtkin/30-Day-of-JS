const second_hand = document.querySelector('.second-hand');
const minute_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand');
function setDate(){
    const time_now = new Date();
    const seconds = time_now.getSeconds();
    const seconds_Degrees = ((seconds/60) * 360) + 90; /*offsets the 90degrees from earlier so when at 60 it is pointing at 12 */
    second_hand.style.transform = `rotate(${seconds_Degrees}deg)`;

    const minutes= time_now.getMinutes();
    const minutes_Degrees = ((minutes/60) *360) + 90;
    minute_hand.style.transform = `rotate(${minutes_Degrees}deg)`;

    const hours= time_now.getHours();
    const hours_Degrees = ((hours/60) * 360) + 90;
    hour_hand.style.transform = `rotate(${hours_Degrees}deg)`;

}

setInterval(setDate, 1000);