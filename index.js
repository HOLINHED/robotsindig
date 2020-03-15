
// takes in one range of values in_min, in_max, and returns a range of out_min out_max
function map(num, in_min, in_max, out_min, out_max) {
   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var a = 0;

function doStuff() {

   a += Math.PI / 20;

   var s = Math.sin(a);
   var ms = map(s, -1, 1, -90, 90);

   misty.DriveTime(100, 100, 500, ms);

   doStuff();
};

doStuff();