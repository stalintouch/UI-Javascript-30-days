const obj = {
  a: "a",
  b: "b"
}

const {a,b} = obj;

window.addEventListener('keydown', e => {
  
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  audio.currentTime =0;

  key.classList.add('playing');

  audio.play();

  key.addEventListener('transitionend', (e) => {
     key.classList.remove('playing');
  });

}); 
