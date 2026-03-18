let first = document.getElementById('btn1');
let second = document.getElementById('btn2');
const totop = document.getElementById('totop');
const notify = document.getElementById('notifications');


window.addEventListener('scroll', function(){
    if(this.window.pageYOffset > 100){
        totop.classList.add('active');
    }
    else{
        totop.classList.remove('active');
    }
})

totop.addEventListener('click', function(){
    window.scrollTo(0,0);
})

// NOTIFICATIONS
notify.addEventListener('click', function(){
    notify.classList.toggle('bg-white');
    notify.classList.toggle('text-dark');
    
})
