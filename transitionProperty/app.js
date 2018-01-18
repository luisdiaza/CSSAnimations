// $('.trigger').on('click', function(){
//   $(this).toggleClass('clicked');
// });

const trigger = document.querySelector('.trigger');

trigger.addEventListener('click',function(e){
    trigger.classList.toggle('clicked');
});
