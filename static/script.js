document.addEventListener("DOMContentLoaded", () => {
    window.onload = function() {
        var audio = document.getElementById("intro");
        audio.volume = 1
        audio.play();
    };
    })

document.addEventListener("DOMContentLoaded", function() {
    var buttonContainer = document.getElementById("button_container");
    var onscreenVideo = document.getElementById("onscreen_video");

    buttonContainer.addEventListener("click", function() {


        onscreenVideo.style.zIndex = "10000";

        onscreenVideo.style.display = "block";
        onscreenVideo.play();

        

        onscreenVideo.addEventListener("ended", function() {
            var audio = document.getElementById("background_audio");
            window.location.href = "/menu?position="+ audio.currentTime;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("background_audio");
    var audioButton = document.getElementById("audio_toggle");

    audioButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});