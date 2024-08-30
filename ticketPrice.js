/*Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
*/


const age = 0;

if (age < 12 && age > 0) {
    console.log("ticket price = 5tk");
}
else if (age < 18 && age > 0) {
    console.log("ticket price = 10tk");
}
else if (age < 60 && age > 0) {
    console.log("ticket price = 20tk");
}
else
    if (age > 60 && age > 0) {
        console.log("ticket price = 15tk");
    }
else{
    console.log("invalid age")
}