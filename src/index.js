import './less/index.less'

// Your code goes here!
const nav = document.querySelector('.nav');

// mouseover 
  nav.addEventListener("mouseover", function( event ) {
    event.target.style.color = "blue";
  })
// mouseout
  nav.addEventListener("mouseout", function( event ) {
    // highlight the mouseout target
    event.target.style.color = "black";
  })

// keydown
// function escKey(evt) {
//     if(evt.key === 'Escape'){
//         modal.classList.add('off');
//     }
// }
// document.addEventListener('keydown', escKey);

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('div');
  el.onwheel = zoom;