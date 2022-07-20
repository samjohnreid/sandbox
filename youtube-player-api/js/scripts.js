var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('realmax-iframe', {
    events: {
      'onReady': onPlayerReady,
    }
  });
}

function onPlayerReady(event) {
  document.getElementById('realmax-iframe').style.borderColor = '#FF0000';
  document.getElementById('realmax-iframe').style.borderWidth = '20px';
  console.log('hello?');
}

const btnRestart = document.getElementById('btnRestart');
btnRestart.addEventListener('click', () => {
  player.seekTo(0);
});

const btnUnmute = document.getElementById('btnUnmute');
btnUnmute.addEventListener('click', () => {
  player.unMute();  
});

const btnControls = document.getElementById('btnControls');
btnControls.addEventListener('click', () => {
  console.log('show controls!');
});

const btnSwapUrl = document.getElementById('btnSwapUrl');
btnSwapUrl.addEventListener('click', () => {
  console.log('swap URL');

  const targetIframe = document.getElementById('realmax-iframe');
  console.log('targetIframe', targetIframe);
  targetIframe.setAttribute('src', 'https://www.youtube.com/embed/bfctwig1HUQ?enablejsapi=1&start=0&end=0&autoplay=1&loop=1&playlist=bfctwig1HUQ&version=3&rel=0');
});