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

document.addEventListener("DOMContentLoaded", () => {
  monthInput.value = "";
  yearInput.value = "";
});

card.forEach((eachInput, index) => {
  eachInput.addEventListener("input", () => {
    const iterations = eachInput.value.length;

    eachInput.value = eachInput.value.replace(/\D/g, "");
    console.log(eachInput);

    if (iterations === 4 && index < card.length - 1) {
      return card[index + 1].focus();
    } else if (iterations === 0 && index > 0) {
      return card[index - 1].focus();
    }
  });
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
