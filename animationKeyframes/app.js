// Define UI variables
const box = document.querySelector('.box');
const body = document.querySelector('.body');

// box.addEventListener('click',function(e){
//     box.classList.toggle('is-paused');
// });

// Function that creates a div element with a class name of box and appends it to the body
//  Creates multiple pink squares on the window
body.addEventListener('click',function(e){
    const div = document.createElement("div");
    div.className = "box";
    div.innerHTML = "I am a pink box!";
    body.appendChild(div);
});
