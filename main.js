
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 420);
    video.hide();
    start();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
        return;
    }
}

function draw() {
    image(video, 0, 0, 640, 420);
}
