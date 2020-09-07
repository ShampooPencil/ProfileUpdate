// import anime from 'node_modules/animejs/lib/anime'
// var anime = require('animejs');
// var animation = require('animejs');

var animation = anime({
  targets: '#rod',
  rotate: [60, -60],
  duration: 3000,
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});      
  