https://teachablemachine.withgoogle.com/models/dnZnBCs-c/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classiffier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/VaiI-SsEP/model.json", modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    console.log("gotResult")
}