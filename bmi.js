const weight = 80;
const height = 1.6764;
const BMI = weight / (height * height);
if (BMI <= 18.4) {
    console.log("Underweight");
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal");
}
else if (BMI >= 25 && BMI <= 39.9) {
    console.log("Overweight");
}
else {
    console.log("Obese");
}