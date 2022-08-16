let x = 10;
let y = "a";
let b = 3;
let a = 8;
let str = "true";
let msg = "haha!"
let eBonito = "false"
let t = 5;
let s = 9;

x < 10 && x !== 5; // false
x > 9 || x === 5; // true
!(x === y); // true
console.log( (y <= "b") || (x >= 10) ); //true
console.log( !(b == "3" || b !== a) && !(a => 8 && b <= a) );//false
console.log(!((str || msg) && eBonito));//false

!true; //False

!false; //True


!!false true; //False

!!true; //true

!1; //false

!!1; //true

!0; //true

!!0 //false

!!""; //false
