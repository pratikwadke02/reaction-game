var p = document.getElementsByTagName("p");
var choice = document.getElementsByClassName("choice");

var dragItem = null;

console.log("hello");

for (var i of p) {
  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);
}

function dragStart() {
  dragItem = this;
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  setTimeout(() => (this.style.display = "block"), 0);
  dragItem = null;
}

for (j of choice) {
  j.addEventListener("dragover", dragOver);
  j.addEventListener("dragenter", dragEnter);
  j.addEventListener("dragleave", dragLeave);
  j.addEventListener("drop", Drop);
}

function Drop() {
  this.append(dragItem);
}

function dragOver(e) {
  e.preventDefault();
  this.style.border = "2px dotted red";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.style.border = "none";
}

function checkNuetralization() {
  let choice = document.getElementsByClassName("choice");
  var reactant1 = choice[0].children;
  var reactant2 = choice[1].children;
  console.log(choice);
  try {
    if (
      (reactant1[0].className == "sodium" &&
        reactant1[1].className == "chlorine") ||
      (reactant1[0].className == "chlorine" &&
        reactant1[1].className == "sodium")
    ) {
      if (
        reactant2[1].className == "oxygen" &&
        reactant2[0].className == "hydrogen" &&
        reactant2[2].className == "hydrogen"
      ) {
        alert("Correct");
      } else {
        alert("Incorrect. Please try again.");
      }
    } else {
      alert("Incorrect please try again.");
    }
  } catch (error) {
    alert("Incorrect please try again.");
  }
}

function checkDisplacement() {
  let choice = document.getElementsByClassName("choice");
  var reactant1 = choice[0].children;
  var reactant2 = choice[1].children;
  console.log(choice);
  try {
    if (
      (reactant1[0].className == "potassium" &&
        reactant1[1].className == "oxygen") &&
        reactant1[2].className == "hydrogen"
    ) {
      if (
        reactant2[0].className == "hydrogen" &&
        reactant2[1].className == "hydrogen"
      ) {
        alert("Correct");
      } else {
        alert("Incorrect. Please try again.");
      }
    } else {
      alert("Incorrect please try again.");
    }
  } catch (error) {
    alert("Incorrect please try again.");
  }
}