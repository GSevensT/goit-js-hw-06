const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));
  const actualLength = validationInput.value.length;

  if (actualLength === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
