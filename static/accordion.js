function updateControlled(el) {
  let controlled = document.getElementById(el.getAttribute("aria-controls"));
  if (el.ariaExpanded == "true") {
    controlled.style.maxHeight = controlled.scrollHeight + "px";
  } else {
    controlled.style.maxHeight = "0";
  }
}

function toggleVisible() {
  if (this.ariaExpanded == "true") this.ariaExpanded = "false";
  else this.ariaExpanded = "true";
  updateControlled(this);
}

function setup() {
  let expand = location.hash ? location.hash.slice(1) : null;
  console.log(expand);
  for (el of document.getElementsByClassName("accordion-toggle")) {
    el.addEventListener("click", toggleVisible);
    if (expand !== null) {
      el.ariaExpanded =
        el.getAttribute("aria-controls") === expand ? "true" : "false";
    }
    updateControlled(el);
  }
}

setup();
