misty.Debug("The HelloWorld skill is starting!")

function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

misty.RegisterTimerEvent("look_around", getRandomInt(5, 10) * 1000, false);
misty.RegisterTimerEvent("rainbowLED", 1, false);
_registerFaceRec();

misty.PlayAudio("s_PhraseHello.wav", 100);
function waveRightArm(){
    misty.MoveArmDegrees("right", -80, 50);
    misty.Pause(5000);
    misty.MoveArmDegrees("right", 80, 50);
}

waveRightArm();

/*misty.Pause(100);

    misty.DriveTime(0, 100, 5000); // Turns Misty to her left
    misty.Pause(10000); // Wait for turn to complete
    misty.DriveTime(0, -100, 5000); // Turns Misty to her right
    misty.Pause(5000); // Wait for turns to complete
    misty.Stop(); // Stops driving motors
    misty.pause(1000);*/

function _look_around(repeat = true) {
misty.MoveHeadDegrees(
    getRandomInt(-40,20),
    getRandomInt(-30,30),
    getRandomInt(-40,40),
    100);

if (repeat) misty.RegisterTimerEvent(
    "look_around",
    getRandomInt(5, 10) * 1000,
    false);
}

function _rainbowLED(){
    i=0

    while(true){
        i++;
        misty.ChangeLED(i%255, (i+85)%255, (i+170)%255);
        misty.Pause(1);
    }
    misty.RegisterTimerEvent("rainbowLED", 1, false);
}

function _registerFaceRec(){
    misty.StopFaceRecognition();
    misty.StartFaceRecognition();
    misty.AddPropertyTest("FaceRec", "PersonName", "exists", "", "string");
    misty.RegisterEvent("FaceRec", "FaceRecognition", 1000, false);
}

function _FaceRec(data) {
    var faceDetected = data.PropertyTestResults[0].PropertyValue;
    misty.Debug("Misty sees " + faceDetected);

    if (faceDetected != "unknown person") {
        misty.Debug("I see " + faceDetected);
        misty.DisplayImage("e_Joy.jpg");
        //misty.PlayAudio("s_Joy3.wav");
        misty.Speak("Hi " + faceDetected, true);
        waveRightArm();
    }

    else if (faceDetected == "unknown person") {
        misty.DisplayImage("e_Contempt.jpg");
        misty.PlayAudio("s_DisorientedConfused4.wav");
    };
    misty.RegisterTimerEvent("registerFaceRec", 7000, false);
}

