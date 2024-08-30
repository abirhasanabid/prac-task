/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/



const price = 800;
const age = 70;
const student = false;

if (age < 10) {
    console.log("free");
}
else if (student === true) {
    // 50% discount
    const discountPrice = price * 50 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if(age >=60){
    // 15% discount
    const discountPrice = price * 15 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}