function ding() {
    var sound = new  Audio("kazoo.mp3");  
    sound.play();
}
document.getElementsByTagName("button")[0].addEventListener("click", ding);