/**
 * Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0
 */



const price = 60;
let discount;

if(price>=100){
    discount = 20;
}
else if(price>=50){
    discount = 10;
}
else{
    discount = 0;
}
console.log("discount",discount,"%" );