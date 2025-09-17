//-----------JavaScript Strict----------//


"use strict"         // use strict করলে কোড করা অনেক সহজ হয়ে যাবে । এতে কোন প্রকার ভূল কোড লিখলে সেটা দেখাবে । 

//Example//
/*
fullName = "Alok";
console.log(fullName);  //এখানে ReferenceError: fullName দেখাচ্ছে //
*/

 //Right//
let fullName = "Alok";
console.log(fullName);


/*
function fullName(){
    x= 5;
    console.log(x);
}
fullName ();  //এখানে ভূল দেখাচ্ছে //
*/

//Right//
function fastName(){
    const x= 5;
    console.log(x);
}
fastName ();


/*
function lastName (a,a){
    const y = 7;
    console.log(a,a);
}
lastName(5,6);  //এখানে ভূল করে (a,b) না লিখে (a,a) লিখলে  SyntaxError দেখাবে এবং use strict থাকলে (a,a) দু্ইটা একই নাম লিখতে দিবে না //
*/

//Right//
function lastName (a,b){
    const y = 7;
    console.log(a,b);
}
lastName(5,6);


//নিদিষ্ট করে  কোন ব্লকের মধ্যে use strict দেখাতে চাইলে //
//Example//
function number (){
    "use strict" 
    const z=10;
    console.log(z);
}
number();



//use strict থাকলে রিজার্ভ কিউয়ার্ড ব্যাবহার করলে সেটা দেখিয়ে দিবে //
//Example//
/*
const private = "text";
const public = "One Person";
const package = 20; 
*/


//use strict ব্যাবহার করে কোড করলে অনেক ভালো হবে। এবং কোডের মধ্যে ভূল হলে মার্ক করে দিবে। //
