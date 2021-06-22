var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("text_box").innerHTML = "";

    recognition.start();
}
recognition.onresult = function (event) {
 console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("text_box").innerHTML = Content;
    console.log(Content);

speak();
};

function speak() {
  var synth = window.speechSynthesis;

  speak_data = "Taking you Selfie in 5 seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  Webcam.attach(camera);

  setTimeout(function () {
    take_selfie();
    save();
  }, 5000);
}
Webcam.set({
  width : 360,
  height : 250,
  image_format : 'png',
  png_quality : 90
});
camera = document.getElementById("camera");

function take_selfie() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img src = "'+data_uri+'" id = "your_selfie">';
  });
}
function save() {
  link = document.getElementById("link");
  image = document.getElementById("your_selfie").src;
  link.href = image;
  link.click();
}