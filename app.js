let dataArray = []; // array of people/booking objects

//the function submit is called when the submit button is clicked

function submit() {
  let dateInput = document.getElementById("date").value;
  let nameInput = document.getElementById("name").value;
  let startTime = document.getElementById("timeStart").value;
  let endTime = document.getElementById("timeEnd").value;
  let notes = document.getElementById("notes").value;

  startNum = parseInt(startTime);
  endNum = parseInt(endTime);

  let obj = {};
  obj.date = dateInput;
  obj.name = nameInput;
  obj.startTime = startNum;
  obj.endTime = endNum;
  obj.notes = notes;

  if (dataArray.length >= 1) {
    if (isAlreadyBooked(obj, dataArray)) {
      console.log("That time is already locked");
    } else {
      dataArray.push(obj);
      console.log("Succefully stored");
      buildDOM(dataArray);
    }
  } else if (dataArray.length === 0) {
    dataArray.push(obj);
    console.log("Succefully stored");
    buildDOM(dataArray);
  }
} //END OF FUNCTION

// here we are declaring function check whose sole purpose is to validate data and make sure there are no overlapping bookings

function isAlreadyBooked(booking, data) {
  console.log("Validating time...");
  let isBooked;
  data.forEach(function (bookingItem) {
    if (booking.date === bookingItem.date) {
      console.log("Same date, checking times...");

      for (let i = booking.startTime; i < booking.endTime; i++) {
        for (let k = bookingItem.startTime; k < bookingItem.endTime; k++) {
          if (i === k) {
            console.log(
              "Booking sheduled at the same time as one already booked."
            );
            isBooked = true;
          }
        }
      }
    } else {
      isBooked = false;
    }
  });
  return isBooked;
}

function buildDOM(data) {
  const reservationContainer = document.getElementById("reservation-container");
  reservationContainer.innerHTML = "";

  data.forEach(function (reservation) {
    let card = document.createElement("div");
    card.setAttribute("class", "reservations-card");

    let newRow = document.createElement("div");
    newRow.setAttribute("class", "row mb-3");
    newRow.appendChild(buildCol("Name: ", reservation.name));
    newRow.appendChild(buildCol("Date: ", reservation.date));
    card.appendChild(newRow);

    newRow = document.createElement("div");
    newRow.setAttribute("class", "row mb-3");
    newRow.appendChild(
      buildCol("Start Time: ", reservation.startTime.toString() + ":00")
    );
    newRow.appendChild(
      buildCol("End Time: ", reservation.endTime.toString() + ":00")
    );
    card.appendChild(newRow);

    newRow = document.createElement("div");
    newRow.setAttribute("class", "row mb-3");
    let noteText = document.createElement("p");
    noteText.innerText = "Notes for reservation: ";
    newRow.appendChild(noteText);
    let noteData = document.createElement("p");
    noteData.innerText = reservation.notes;
    newRow.appendChild(noteData);
    card.appendChild(newRow);

    reservationContainer.appendChild(card);
  });
}

function buildCol(label, data) {
  const col = document.createElement("div");
  col.setAttribute("class", "col sm-10");

  const p = document.createElement("p");
  p.innerText = label;
  const span = document.createElement("span");
  span.innerText = data;

  p.appendChild(span);
  col.appendChild(p);

  return col;
}
