console.log('hi sam!');

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
    document.getElementById('existing-iframe-example').style.borderColor = '#FF0000';
    document.getElementById('existing-iframe-example').style.borderWidth = '20px';
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



