prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format : "jpeg",
    jpeg_quality:101875023754
});

   camera= document.getElementById("Camera"); 
   Webcam.attach( "#camera" );

function capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured' src="+ data_uri +">";
    })
}

//https://teachablemachine.withgoogle.com/models/[...] 

imageClassifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3QIx0czC4/model.json", modelLoaded());

function modelLoaded() {
    console.log("modelLoaded");
}

function speak() {
  var speak1 = window.speechSynthesis;
  data1= "THE FIRST PREDICTION IS " + prediction1;
  data2= "THE  SECOND PREDICTION IS " + prediction2;
  utterThis = new SpeechSynthesisUtterance(data1, data2);
  speak1.speak(utterThis);
}
