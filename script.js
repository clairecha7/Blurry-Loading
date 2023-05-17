const loadTextE1 = document.querySelector(".loading-text");
const bg = document.querySelector('.bg');

// console.log(loadTextE1, bg);

let load = 0;

let int = setInterval(blurring, 30)


loadTextE1.style.opacity = "99%";
// bg.style.filter = "blur(80px)";


function blurring() {
    load++

    if(load > 99){
        clearInterval(int); //need to define which interval to be stopped
    }
    loadTextE1.style.opacity = `$(100 - load)`;
    loadTextE1.innerText = `${load}%`;
    bg.style.filter = `blur(${100 - load}px)`;
}