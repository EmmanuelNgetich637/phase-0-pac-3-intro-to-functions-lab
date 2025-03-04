// Function to log the string in all lowercase
function logWhisper(string) {
    console.log(string.toLowerCase());
}

// Function to respond based on the input string
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}

// Function to return the string in all lowercase
function whisper(string) {
    return string.toLowerCase();
}

// Function to log the string in all uppercase
function logShout(string) {
    console.log(string.toUpperCase());
}

// Function to return the string in all uppercase
function shout(string) {
    return string.toUpperCase();
}

// Example usage:
logWhisper("HELLO"); // Logs: "hello"
console.log(sayHiToHeadphonedRoommate("hello")); // Outputs: "I can't hear you!"
console.log(sayHiToHeadphonedRoommate("HELLO")); // Outputs: "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Outputs: "I would love to!"
console.log(whisper("HELLO")); // Outputs: "hello"
logShout("hello"); // Logs: "HELLO"
console.log(shout("hello")); // Outputs: "HELLO"
