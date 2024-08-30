/*Write a program that checks if a number is even or odd.
*/


const num = 10;

if (num % 2 == 0) {
    console.log("even number" , num);
}
else{
    console.log("odd number",num);
}

// using logical not

if (num % 2 != 1) {
    console.log("even number" , num);
}
else{
    console.log("odd number",num);
}