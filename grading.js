const score = 50;

if (score >= 80 && score <= 100) {
    console.log("A+")
}
else if (score >= 70 && score <= 79) {
    console.log("A");
}
else if (score >= 60 && score <= 69) {
    console.log("A-");
}
else if (score >= 50 && score <= 59) {
    console.log("B");
}
else if (score >= 40 && score <= 49) {
    console.log("C");
}
else if (score >= 33 && score<=39) {
    console.log("D");
} else {
    console.log("fail---better luck next time");
}