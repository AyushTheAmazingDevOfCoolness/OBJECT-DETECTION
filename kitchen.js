function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetection=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = ("Status : Object Detected");
}

img ="";
status="";

function preload()
{
img = loadImage("kitchen.jpeg");
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status= "True";
    objectDetection.detect(img, gotPoses);
}

function draw()
{
 image(img, 0, 0, 640, 420);
 fill("#800000");
 text("Oven and Gas", 250, 170);
 noFill();
 stroke("#FF0000");
 rect(250, 180, 300, 350);  
}

function gotPoses(error, results)
{
    if(error){
        console.log(error)
    }
    else{
       console.log(results);     
    }
}