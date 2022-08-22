const nav = document.querySelector('.nav-content');
const navBtn = document.querySelector('.nav__btn');

navBtn.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    navBtn.classList.toggle('active')
})

// slider

const sliderBtns = document.querySelectorAll('[data-target]');
const sliderItems = document.querySelectorAll('.slider__item');
const slider = document.querySelectorAll('.slider');
let activeSlide = 0

for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains('active')) {
        activeSlide = i
    }
}
for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', (e)=>{
        move(e.target.getAttribute('data-target'))
    })
    
}
function move(btn) {
    if (btn === 'next') {
        if (activeSlide < sliderItems.length-1) {
            activeSlide++
        }else{
            activeSlide = 0
        }
    }else{
        if (activeSlide > 0) {
            activeSlide--
        }else{
            activeSlide = sliderItems.length-1
        }
    }
    sliderItems.forEach(item =>{
        item.classList.remove('active')
    })
    sliderItems[activeSlide].classList.add('active')
}

// application

const applyStep = document.querySelectorAll('.apply__step');
const applyBlock = document.querySelectorAll('.apply__block');
const applyBtn = document.querySelectorAll('.apply__btn, .apply__btn-back');


for (let i = 0; i < applyBtn.length; i++) {
    applyBtn[i].addEventListener('click',function (e) {
        e.preventDefault()
        if (i === 0) {
            applyStep[1].classList.add('active')
            applyBlock[0].classList.remove('active')
            applyBlock[1].classList.add('active')
        }
        if (i === 1) {
            applyStep[1].classList.remove('active')
            applyBlock[0].classList.add('active')
            applyBlock[1].classList.remove('active')
        }
        if (i === 2) {
            applyStep[2].classList.add('active')
            applyBlock[1].classList.remove('active')
            applyBlock[2].classList.add('active')
        }
    })
    
}


// video

const video = document.querySelector('.option__video');
const prevSpeed = document.querySelector('.option__prev-speed');
const prev = document.querySelector('.option__prev');
const play = document.querySelector('.option__play');
const next = document.querySelector('.option__next');
const nextSpeed = document.querySelector('.option__next-speed');
const start = document.querySelector('#start');
const duration = document.querySelector('.option__duration');
const line = document.querySelector('.option__line');
const end = document.querySelector('#end');
const volumeIcon = document.querySelector('.option__volume-icon');
const range = document.querySelector('.option__volume-range');
const speedText = document.querySelector('.option__speed-watch');

video.addEventListener('click', ()=>playPause())
play.addEventListener('click', ()=>playPause())

function playPause() {
    play.classList.toggle('active')
    if (video.paused) {
        video.play()
        videoEnd()
        videoStart()
    }else{
        video.pause()
    }
}
prevSpeed.addEventListener('click', ()=>{
    videoPrevSpeed()
})
function videoPrevSpeed() {
    if (video.playbackRate > 0) {
        video.playbackRate += - 0.25
        speedText.style.display = 'flex'
        speedText.innerHTML = video.playbackRate + 'x'
        setTimeout(() => {
            speedText.style.display = 'none'
        }, 1500);
    }
}
nextSpeed.addEventListener('click', ()=>{
    videoNextSpeed()
})
function videoNextSpeed() {
    if (video.playbackRate < 2) {
        video.playbackRate += 0.25
        speedText.style.display = 'flex'
        speedText.innerHTML = video.playbackRate + 'x'
        setTimeout(() => {
            speedText.style.display = 'none'
        }, 1500);
    }
}
next.addEventListener('click', ()=> alert('no video'))
prev.addEventListener('click', ()=> alert('no video'))
video.addEventListener('dblclick', ()=> video.requestFullscreen())

function changeTime(time) {
    const noll = (num)=> num < 10 ? '0' + num : num
    let hour = Math.trunc(time / 3600)
    time -= hour * 3600
    let min = Math.trunc(time / 60)
    time -= min * 60
    time = Math.trunc(time)
    return `${noll(min)}:${noll(time)}`
}

function videoStart() {
    setInterval(() => {
        start.innerHTML = changeTime(video.currentTime)
    }, 1000);
}
function videoEnd() {
    end.innerHTML = changeTime(video.duration)
}

duration.addEventListener('click', (e)=>{
    let videoTime = (e.offsetX / duration.clientWidth) * video.duration
    video.currentTime = videoTime
})
video.addEventListener('timeupdate', function () {
    let lineWidth = (video.currentTime / video.duration)
    line.style.width = lineWidth * 100 + '%'
})

const volumeClass = ['mute','down','normal','up']

video.onvolumechange = ()=>{
    for (let i = 0; i < volumeClass.length; i++) {
        volumeIcon.classList.remove(volumeClass[i])
    }
    let volume = video.volume * 100
    if (video.muted) {
        volumeIcon.classList.add("mute")
    }else if (volume > 75) {
        volumeIcon.classList.add("up")
    }else if (volume > 40) {
        volumeIcon.classList.add("normal")
    }else if (volume > 15) {
        volumeIcon.classList.add("down")
    }else if (volume >= 0) {
        volumeIcon.classList.add("mute")
    }
}
volumeIcon.addEventListener('click', ()=> video.muted ? video.muted = false : video.muted = true)


range.addEventListener('click', function (e) { 
    video.volume = e.currentTarget.value / 100
})

// service slider

const serviceSlider = document.querySelector('.service__block');
const serviceLeft = document.querySelector('.service__left');
const serviceRight = document.querySelector('.service__right');

serviceLeft.addEventListener('click', function () {
    serviceSlider.scrollLeft -= 150
})
serviceRight.addEventListener('click', function () {
    serviceSlider.scrollLeft += 150
})

const serviceWidth = serviceSlider.scrollWidth - serviceSlider.clientWidth

function servicePlay() {
    if (serviceSlider.scrollLeft > (serviceWidth - 1)) {
        serviceSlider.scrollLeft -= serviceWidth
    }else{
        serviceSlider.scrollLeft += 1
    }
}

setInterval(() => {
    servicePlay()
}, 20);

// accardion

const accardionBox = document.querySelectorAll('.accardion__box');

for (let i = 0; i < accardionBox.length; i++) {
    accardionBox[i].addEventListener('click', function () {
        for (let i = 0; i < accardionBox.length; i++) {
            accardionBox[i].classList.remove('active')
        }
        accardionBox[i].classList.add('active')
    })
    
}