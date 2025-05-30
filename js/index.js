const videoList = [
    "/recursos/video3.mp4",
    "/recursos/video4.mp4",
    "/recursos/video5.mp4",
    "/recursos/video6.mp4",
    "/recursos/video1.mp4",
    "/recursos/video.mp4",
    "/recursos/video2.mp4",
];

const videoElement = document.querySelector("main video");
let currentVideoIndex = 0;

videoElement.src = videoList[currentVideoIndex];
videoElement.play();

videoElement.addEventListener("ended", () => {
    currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    videoElement.src = videoList[currentVideoIndex];
    videoElement.play();
});