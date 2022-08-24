import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY_PLAYER = 'videoplayer-current-time';

const refPlayer = document.querySelector('#vimeo-player');
const player = new Player(refPlayer);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(time) {
  localStorage.setItem(STORAGE_KEY_PLAYER, time.seconds);
}
