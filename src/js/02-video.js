import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (time) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
});

const saveTime = localStorage.getItem('videoplayer-current-time');
const timeStop = JSON.parse(saveTime);


player.setCurrentTime(timeStop.seconds||0)

