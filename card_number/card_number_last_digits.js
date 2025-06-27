function maskCardNumber() {
  const cardNumber = document.getElementById("cardNumber");
  let lastFourDigits = cardNumber.value.slice(-4);
  console.log("lastFourDigits = " + lastFourDigits);
  console.log("getCardNumber(): cardNumber.value = " + cardNumber.value);
  console.log("cardNumber.value.length = " + cardNumber.value.length);

  let maskedCardNumber = "";
  for (let i = 0; i < cardNumber.value.length - 4; i++) {
    maskedCardNumber += "*";
  }
  maskedCardNumber += lastFourDigits;
  console.log(maskedCardNumber);
  document.getElementById("maskedCardNumber").textContent = maskedCardNumber;
}
