// Select all the links within your tab list
const tabs = document.querySelectorAll(".project-tab-list li");
const TabtextColor = document.querySelectorAll(".project-tab-list li a");
const click = new Audio("/assets/Click_main-01.wav");
tabs.forEach((tab) => {
  tab.addEventListener("click", function (event) {
    click.play();
    // 1. Remove .active class from all tabs
    tabs.forEach((item) => item.classList.remove("active"));

    // 2. Add .active class to the clicked tab
    this.classList.add("active");
  });
});
