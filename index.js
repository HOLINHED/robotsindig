
// takes in one range of values in_min, in_max, and returns a range of out_min out_max
const map = (num, in_min, in_max, out_min, out_max) => {
   return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let a = 0;
misty.LinearVelocity(100);

const doStuff = () => {

   a += Math.PI / 10;

   const s = sin(a);
   const ms = map(s,-1,1,-100,100);

   misty.AngularVelocity(ms);

   doStuff();
};

doStuff();