class PlayVideo {
  constructor(
    video,
    videoText,
    videoSubtitle,
    videoLegend,
    buttonPlay,
    imagePlay,
    backgroundVideo
  ) {
    this.video = document.querySelector(video);
    this.videoText = document.querySelector(videoText);
    this.videoSubtitle = document.querySelector(videoSubtitle);
    this.videoLegend = document.querySelector(videoLegend);
    this.buttonPlay = document.querySelector(buttonPlay);
    this.imagePlay = document.querySelector(imagePlay);
    this.backgroundVideo = document.querySelector(backgroundVideo);
    this.watch = this.watch.bind(this);
  }

  watch() {
    this.videoText.style.display = "none";
    this.videoSubtitle.style.display = "none";
    this.backgroundVideo.style.display = "none";
    this.video.play();
  }

  addClickEvent() {
    this.buttonPlay.addEventListener("click", this.watch);
    this.imagePlay.addEventListener("click", this.watch);
  }
}

const watchVideo = new PlayVideo(
  ".video",
  ".video__text",
  ".video__subtitle",
  ".video__legend",
  ".video__play",
  ".video__image-play",
  ".video__background"
);

watchVideo.addClickEvent();
