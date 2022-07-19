const toggleSwitch = document.querySelector("input[type='checkbox']");

// SWITCH THEME DYNAMICALLY
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", light);
  }
}

// EVENT LISTENER
toggleSwitch.addEventListener("change", switchTheme);
