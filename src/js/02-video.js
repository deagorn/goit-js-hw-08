import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);





player.on('timeupdate', throttle(SaveViewingTime, 1000));
    
function SaveViewingTime({ seconds }) {
    localStorage.setItem("videoplayer-current-time", seconds);
}

let checkTime = localStorage.getItem("videoplayer-current-time")
if (checkTime) {
   player.setCurrentTime(checkTime);
};