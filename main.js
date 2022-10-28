var escribir = window.webkitSpeechRecognition;
var escribir2 = new escribir();
function escri() {
document.getElementById("textoavoz").innerHTML =" ";
escribir2.start();
}

escribir2.onresult=function(rest){
    console.log(rest);
    var audio = rest.results[0][0].transcript;
    document.getElementById("textoavoz").innerHTML = audio ;
    if (audio == "Toma mi selfie") {
        hablar();
    }
}

function hablar() {
var j = window.speechSynthesis;
d = "tomando foto";
var k = new SpeechSynthesisUtterance(d);
j.speak(k);
Webcam.attach(foto);
setTimeout( function() {
    tomarfotos();
}, 3000);
}
foto = document.getElementById("fotos");
Webcam.set({
    width: 360,
    height: 250,
    image_format:'jpg', 
    jpg_quality: 95
});

function tomarfotos() {
    Webcam.snap(function (f) {
        document.getElementById("fotos001").innerHTML='<img id="fo" src="'+f+'">';
    });
}