function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

misty.RegisterTimerEvent("head_move", 6240, false);
misty.RegisterTimerEvent("arms_move", 6240, false);
misty.RegisterTimerEvent("rainbowLED", 1, false);
misty.PlayAudio("Daft-Punk-Harder-Better-Faster-S.mp3", 10);


function _head_move(repeat = true) {
    misty.MoveHeadDegrees(
        getRandomInt(-40,20),
        getRandomInt(-30,30),
        getRandomInt(-40,40),
        100);
    
    if (repeat) misty.RegisterTimerEvent(
        "head_move", 480, false);
    }

function _arms_move(repeat = true) {
    misty.Debug("arms");
    var move_amount = Math.round(Math.random() * 180)

    misty.MoveArmDegrees("right", move_amount - 90, 80);
    misty.MoveArmDegrees("left", move_amount - 90, 80);

    if(repeat) misty.RegisterTimerEvent("arms_move", 480, false);
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