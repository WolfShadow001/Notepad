const note = document.getElementById("note")
//clear
const clear = document.getElementById("clear")
clear.addEventListener("click", () => {
  const confirmed = confirm(
    "Are you sure you want to clear this note?"
  )
  if (confirmed) {
    note.innerHTML = ""
    localStorage.removeItem("note")
  }
})

//save and load
note.innerHTML = localStorage.getItem("note") || "";
note.addEventListener("input", () => {
    localStorage.setItem("note", note.innerHTML)
})