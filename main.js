status = "";
object = "";

function preload(){

}

function setup(){
  canvas = createCanvas(350 , 380);
  canvas.center();

  video = createCapture(350 , 380);
  video.hide();
}

function draw(){
  image(video , 0 , 0 , 350 , 380);
}

function start(){
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object = document.getElementById("input").value;
}

function modelLoaded(){
  console.log("Model Loaded!");
  status = true;
}