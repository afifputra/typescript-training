const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();

  const enteredAddress = addressInput.value;

  // send this to Google's API!
  console.log(enteredAddress);
}

form.addEventListener("submit", searchAddressHandler);
