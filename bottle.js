status="";
function preload()
{
img=loadImage("Bottle.jpg");
}
function setup(){
    canvas = createCanvas(550,550);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}
function modelLoaded(){
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if (error){
    console.log(error);
    }
     console.log(results);
     objects=results;
}
function back(){
    window.location="index.html";
    }