
Status="";
objects = [];
video = "";

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(840, 620);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function draw() {
    image(video, 0, 0, 840, 620);
    if(Status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objetos Encontrados";
            document.getElementById("numberOfObjects").innerHTML = "Quantidade de Objetos Encontrados" + objects.length

            FileList("#FF0000");
            percent - floor(objects[i].confidence = 100);
            Text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult() {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}
