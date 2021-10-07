function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded() {
  console.log("Model Loaded!");
}

function draw() {
  image(video, 0, 0, width / 2, height);
  translate(width, 0);
  scale(-1.0, 1.0);
  image(video, 0, 0, width, height);
  classifier.classify(video, gotResult);
  // filter(INVERT);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name1").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy1").innerHTML =
      results[0].confidence.toFixed(3);
    document.getElementById("result_object_name2").innerHTML = results[1].label;
    document.getElementById("result_object_accuracy2").innerHTML =
      results[1].confidence.toFixed(3);
    document.getElementById("result_object_name3").innerHTML = results[2].label;
    document.getElementById("result_object_accuracy3").innerHTML =
      results[2].confidence.toFixed(3);
  }
}
