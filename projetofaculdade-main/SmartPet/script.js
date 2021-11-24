const imgs = document.getElementById("imgc");
const img = document.querySelectorAll("#imgc img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translatex(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);