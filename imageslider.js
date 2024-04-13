let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');


let imageDom = document.querySelector('.image');
let SliderDom = imageDom.querySelector('.image .list');
let thumbnailBorderDom = document.querySelector('.image .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.image .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');
}

prevDom.onclick = function(){
    showSlider('prev');
}

// let timeAutoPrev = 7000;
let runTimeOut;
let runNextAuto = setTimeout(()=>{
    next.click();
}, timeAutoNext)

function showSlider(type){
    let SliderItemsDom = document.querySelectorAll('.image .list .items');
    let thumbnailItemsDom = document.querySelectorAll('.image .thumbnail .item');

    if (type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        imageDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        imageDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        imageDom.classList.remove('next');
        imageDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(()=>{
        next.click();
    }, timeAutoNext);
}