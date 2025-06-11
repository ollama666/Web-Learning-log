let song1 = document.getElementById("song1");
let icon = document.getElementById("icon");

icon.onclick = function () {
    if (song1.paused) {
        song1.play();
        icon.className = "iconfont icon-zanting"
    }else {
        song1.pause();
        icon.className = "iconfont icon-24gl-play"
    }
}

let toTop = document.getElementById('toTop');

toTop.addEventListener ('click',function () {
    window.scrollTo ({
        top: 0,
        behavior: 'smooth'
    }) 
})
