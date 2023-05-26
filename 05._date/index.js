const date = new Date();
console.log(date);

// Unix:
// Antal a sekunder siden 1970 (UTC)
console.log(date());

// Unix Timestamp:
console.log(date.getTime());

console.log();

// Region specific
console.log(new Intl.DateTimeFormat('en-US').format(date));
console.log(new Intl.DateTimeFormat('da-US').format(date));