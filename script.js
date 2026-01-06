const spinner = document.getElementById("spinner");

function showSpinner() {
  spinner.style.display = "block";

  setTimeout(() => {
    spinner.style.display = "none";
  }, 3000);
}
