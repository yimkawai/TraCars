let dataArray = []; // array of people/booking objects

//the function submit is called when the submit button is clicked

function submit() {
  let dateInput = document.getElementById("date").value;
  let nameInput = document.getElementById("name").value;
  let startTime = document.getElementById("timeStart").value;
  let endTime = document.getElementById("timeEnd").value;
  let notes = document.getElementById("notes").value;

  let obj = {};
  obj.date = dateInput;
  obj.name = nameInput;
  obj.startTime = startNum;
  obj.endTime = endNum;
  obj.notes = notes;

  if (dataArray.length >= 1) {
    if (isAlreadyBooked(obj)) {
      console.log("That time is already locked");
    } else {
      dataArray.push(obj);
      console.log("Succefully stored");
    }
  } else if (dataArray.length === 0) {
    dataArray.push(obj);
    console.log("Succefully stored");
  }
} //END OF FUNCTION

// here we are declaring function check whose sole purpose is to validate data and make sure there are no overlapping bookings

function isAlreadyBooked(booking) {
  console.log("Validating time...");
  let isBooked;
  dataArray.forEach(function (bookingItem) {
    if (booking.date === bookingItem.date) {
      console.log("Same date, checking times...");

      for (let i = booking.startTime; i < booking.endTime; i++) {
        for (let k = bookingItem.startTime; k < bookingItem.endTime; k++) {
          if (i === k) {
            console.log(
              "Booking sheduled at the same time as one already booked"
            );
            isBooked = false;
          }
        }
      }

      isBooked = true;
    } else {
      isBooked = true;
    }
  });
  return isBooked;
}

function buildDOM() {
  alert("fxn build dom ");
}
