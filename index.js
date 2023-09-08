const form = document.querySelector(".form");
const card = document.querySelectorAll(".cardInput");
const cardHolder = document.querySelector(".card--holder");
const holderInput = document.querySelector(".holder");
const month = document.querySelector("#expirationMonth");
const year = document.querySelector("#expirationYear");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const cvvInput = document.querySelector(".cvv");
const cvv = document.querySelector(".card--cvv");
const button = document.querySelector(".button");
const cardLogo = document.querySelector(".card--logo");

document.addEventListener("DOMContentLoaded", () => {
  monthInput.value = "";
  yearInput.value = "";
});

card.forEach((eachInput, index) => {
  eachInput.addEventListener("input", () => {
    const firstCardNumber = card[0].value.charAt(0);

    // Set the card logo based on the first digit
    if (firstCardNumber === "4") {
      cardLogo.src = "./icons/visa.svg";
      cardLogo.alt = "Visa";
    } else if (firstCardNumber === "5" || firstCardNumber === "2") {
      cardLogo.src = "./icons/mastercard.svg";
      cardLogo.alt = "MasterCard";
    } else if (firstCardNumber === "3") {
      cardLogo.src = "./icons/american-express.svg";
      cardLogo.alt = "American Express";
    } else {
      cardLogo.src = "";
      cardLogo.alt = "Card Logo";
    }
    console.log(cardLogo.src);

    const iterations = eachInput.value.length;
    eachInput.value = eachInput.value.replace(/\D/g, "");

    if (iterations === 4 && index < card.length - 1) {
      return card[index + 1].focus();
    } else if (iterations === 0 && index > 0) {
      return card[index - 1].focus();
    }
  });
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  let concatenatedValue = "";
  card.forEach((input) => {
    concatenatedValue += input.value;
  });

  if (concatenatedValue.length !== 16) {
    alert(
      `Please input a 16-digit ${
        cardLogo.alt ? cardLogo.alt : null
      } account number.`
    );
    return;
  }

  if (monthInput.value.trim() === "" || yearInput.value.trim() === "") {
    alert("Please fill in the expiration date.");
    return;
  }
  if (!holderInput.value.includes(" ")) {
    alert("Please provide a valid card holder name in full.");
    return;
  }
  if (cvvInput.value.length !== 3) {
    alert("Please provide a valid CVV.");
    return;
  }

  alert("Payment Successful");
});

holderInput.addEventListener("input", () => {
  holder.value = holder.value.toUpperCase().replace(/[^A-Za-z\s]/g, "");
  cardHolder.textContent = holderInput.value;
});

monthInput.addEventListener("input", () => {
  month.textContent = monthInput.value;
});

yearInput.addEventListener("input", () => {
  year.textContent = "/" + yearInput.value;
});

cvvInput.addEventListener("input", () => {
  cvvInput.value = cvvInput.value.replace(/\D/g, "");
  cvv.textContent = cvvInput.value;
});
