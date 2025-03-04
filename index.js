//Add note

let add = document.querySelector("#add");
let noInput = document.querySelector("#noInputText");
let noteInput = document.getElementById("note");

noteInput.addEventListener("click", function () {
  noInput.classList.remove("show");
});

add.addEventListener("click", () => {
  let noteobj = [];
  let addtxt = document.getElementById("note");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = []
  } else {
    noteobj = JSON.parse(localStorage.getItem("notes"));

  }
  if (addtxt.value != "") {
    noteobj.push(addtxt.value);
  } else {
    noInput.classList.add("show");
  }

  localStorage.setItem("notes", JSON.stringify(noteobj));

  showNotes();
});

function showNotes() {
  let notesobj = JSON.parse(localStorage.getItem("notes"));
  console.log(notesobj);
  if (notesobj == null) {
    notesobj = [];
  } else {
    notesobj = JSON.parse(localStorage.getItem("notes"));
  }
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div id="box" >
    <h5>NOTE :${index + 1}</h5>
    <p>${element.toUpperCase()}</p>
    <button id=delete onclick=deleted(${index})>Delete note</button>
        </div>`;
  });
  let box = document.getElementById("mainbox");
  box.innerHTML = html;
}

function deleted(index) {
  console.log("Deletion of " + index + " success");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteobj = [];
  } else {
    noteobj = JSON.parse(localStorage.getItem("notes"));
  }
  noteobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteobj));
  showNotes();
}
