
var a = prompt('Enter a number', '');
var b =  Math.sqrt(a);
console.log(b);

//4 find triangle area//

var base = prompt("Please enter the base value");
let height = prompt("please enter the height value");
var area =( base * height)/2;
//console.log(area); '//
 console.log("Base :" + base + "height:" + height + "area:" + area );



 //regular area Heron's formula//
  

 var a = 10;
 var b = 22;
 var c = 10;
  
 var s = (a+b+c)/2;
 var temp = s* (s-a)*(s-b)*(s-c);
 var area = Math.sqrt(temp);
 console.log(temp);
 //console.log(s);//



