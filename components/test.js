// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontSize,txt) {
message = “%c” + txt;
style = color: ${color};
style += background: ${background};
style += font-Size: ${fontSize};
console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler() {
fontStyle = “color: tomato; font-size: 50px”;
if (reason == "birthday") {
console.log(%Happy birthday, fontStyle);
}
else if (reason == “champions”) {
console.log(%cCongrats on the title!, fontStyle);
}
else {
console.log(message, style);
}
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');
// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
consoleStyler('ef7c8e', 'fae8eo', '30px', 'You made it');
celebrateStyler('champions');
}
// Call styleAndCelebrate