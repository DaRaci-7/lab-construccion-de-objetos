// Type your code below this line

function Journey(start, end) {
  this.start = start;
  this.end = end;

  this.book = function() {
    console.log(`Booking a taxi from ${this.start} to ${this.end}`);
  };
}

// Puedes obtener los datos desde la línea de comandos:
const from = process.argv[3] || "Home";
const to = process.argv[4] || "Work";

const trip = new Journey(from, to);
trip.book();


