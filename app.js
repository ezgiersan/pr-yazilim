document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      item.classList.toggle("active");

      const icon = header.querySelector(".accordion-icon");
      icon.textContent = item.classList.contains("active") ? "-" : "+";

      const content = item.querySelector(".accordion-content");
      if (item.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
});

function ToggleNavDropdown(element) {
  var targetDiv = document.getElementById("targetDiv");
  var divElement = element;
  var imgElement = divElement.querySelector("img");

  divElement.classList.toggle("active");


  var currentSrc = imgElement.src;
  var newSrc = currentSrc.includes("down-icon.png")
    ? "./images/up-icon.png"
    : "./images/down-icon.png";
  imgElement.src = newSrc;

  if (targetDiv.style.display === "none" || targetDiv.style.display === "") {
    targetDiv.style.display = "block";
  } else {
    targetDiv.style.display = "none";
  }
}
let selectedStep = 1;

function SelectStep(divNumber) {

  document.getElementById("step" + selectedStep).classList.remove("selected");
  document.getElementById("step" + selectedStep).querySelector("p").classList.remove("text-gray700", "text-purple")
  document.getElementById("step" + selectedStep).querySelector("img").classList.remove("selected-img")
  

  document
    .getElementById("step" + selectedStep)
    .classList.add("border-gray300", "border");

  selectedStep = divNumber;
  document
    .getElementById("step" + selectedStep)
    .classList.remove("border-gray300", "border");
  document
    .getElementById("step" + selectedStep)
    .classList.add("selected", "border-purple-500");
    document.getElementById("step" + selectedStep).querySelector("p").classList.add("text-purple")
    document.getElementById("step" + selectedStep).querySelector("img").classList.add("selected-img")
}

let selectedTab = 1;

function NextStep(stepNumber) {
  const elementToHide = document.getElementById("step-div-" + selectedTab);

  elementToHide.style.transition = "opacity 500ms ease-in-out";
  elementToHide.style.opacity = "0";

  setTimeout(function () {
    elementToHide.style.display = "none";
  }, 500);

  const previousStepElement = document.getElementById("step-" + selectedTab);
  previousStepElement.classList.remove("selectedTab");
  previousStepElement.classList.add("text-purple");

  const checkIconElement = document.getElementById("check-icon-" + selectedTab);
  checkIconElement.classList.remove("hidden");

  if (stepNumber === 2) {
    const nextStepBtn = document.getElementById("nextStepBtn");
    nextStepBtn.classList.add("translate-y-28", "transition", "duration-500");

    nextStepBtn.addEventListener("transitionend", function () {
      nextStepBtn.remove();
    });
  }else if(stepNumber === 3){
    const nextStepBtn = document.getElementById("nextStepBtn2");
    nextStepBtn.classList.add("-translate-y-52","scale-x-150", "transition", "duration-500", "-translate-x-24");

    nextStepBtn.addEventListener("transitionend", function () {
      nextStepBtn.remove();
    });
  }

  selectedTab = stepNumber;

  const currentStepElement = document.getElementById("step-" + selectedTab);
  currentStepElement.classList.add("selectedTab");
  currentStepElement.classList.remove("text-purple");

  const elementToShow = document.getElementById("step-div-" + selectedTab);
  elementToShow.style.transition = "opacity 700ms ease-in-out";
  elementToShow.style.opacity = "1";

  setTimeout(function () {
    elementToShow.classList.remove("hidden");
  }, 500);
}


function NavMenu() {
  var item = document.getElementById("nav-menu");
  if (item.classList.contains("hidden")) {
    item.classList.remove("hidden");
  } else {
    item.classList.add("hidden");
  }
}
function ResourcesDropdown() {
  var item = document.getElementById("resources-dropdown");
  if (item.classList.contains("hidden")) {
    item.classList.remove("hidden");
  } else {
    item.classList.add("hidden");
  }
}

function openModal(){
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

function closeModal(){
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });


  