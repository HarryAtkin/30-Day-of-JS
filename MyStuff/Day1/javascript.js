window.addEventListener('keydown', function(e){
    console.log(e.key);
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    if(!audio){return};
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});