const buttons = document.querySelectorAll(".btn");

let count = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let content = document.getElementById(btn.dataset.id);
    content.style.filter = "none";
    // this.style.display = "none";
    this.style.visibility = "hidden";
    count++;
    if (count >= 2) {
      buttons.forEach((btn) => (btn.style.visibility = "hidden"));
    }
  });
});
