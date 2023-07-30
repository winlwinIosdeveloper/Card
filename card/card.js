let button = document.getElementById("view-profile-btn");

function changeButtonColor() {
  let backgroundColor = button.style.backgroundColor;

  if (backgroundColor == "white") {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.borderColor = "black";
  } else {
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.style.borderColor = "gainsboro";
  }
}

changeButtonColor();
