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
img = loadImage("desk.jpeg");
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
 text("Desk", 45, 75);
 noFill();
 stroke("#FF0000");
 rect(30, 60, 450, 350);  
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
