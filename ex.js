const video = document.querySelector('video');
const canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;
const button = document.querySelector('button');

button.onclick = function() {
    /* set the canvas to the dimensions of the video feed */
    canvas.width = video.Width;
    canvas.height = video.Height;
    /* make the snapshot */
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  function openCam(){
    let All_mediaDevices=navigator.mediaDevices
    if (!All_mediaDevices || !All_mediaDevices.getUserMedia) {
       console.log("getUserMedia() not supported.");
       return;
    }
    All_mediaDevices.getUserMedia({
       audio: false,
       video: true
    })
    .then(function(vidStream) {
       var video = document.getElementById('video');
       if ("srcObject" in video) {
          video.srcObject = vidStream;
       } else {
          video.src = window.URL.createObjectURL(vidStream);
       }
       video.onloadedmetadata = function(e) {
          video.play();
       };
    })
    .catch(function(e) {
       console.log(e.name + ": " + e.message);
    });
 }