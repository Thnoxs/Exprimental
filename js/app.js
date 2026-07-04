const tabs = document.querySelectorAll(".project-tab-list li");
const box = document.querySelector(".project-box");
const click = new Audio("/assets/Click_main-01.wav");

const imageUrls = [
  "url(/assets/Gallery/image-1.jpg)",
  "url(/assets/Gallery/image-2.jpg)",
  "url(/assets/Gallery/image-3.jpg)",
  "url(/assets/Gallery/image-4.jpg)",
];

// Function to handle the tab change
function setActiveTab(index) {
  // 1. Remove .active class from all tabs
  tabs.forEach((tab) => tab.classList.remove("active"));

  // 2. Add .active to the clicked tab
  tabs[index].classList.add("active");

  // 3. Update the background image
  box.style.background = imageUrls[index];
  box.style.backgroundSize = "cover"; // Ensures image fits well
}

// Attach event listeners
tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    click.play();
    setActiveTab(index);
  });
});

// Set default state on page load (Project 1)
setActiveTab(0);
