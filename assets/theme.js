document
  .getElementById("header-cart-icon")
  .addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById("drawer").open();
  });
