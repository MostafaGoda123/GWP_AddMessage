let allParagraphs = document.querySelector(".allParagraphs")
let form = document.querySelector("form")
let inputText = document.getElementById("inputText")

form.addEventListener("submit",function (e) {
   e.preventDefault();
   if (inputText.value == "") {
      inputText.focus()
   }else {
      let p = document.createElement("p")
      let span = document.createElement("span")
      span.classList.add("delete")
      span.innerHTML = "x"
      p.innerHTML = `${inputText.value}`
      p.appendChild(span)
      allParagraphs.appendChild(p)
      inputText.value = ""
   }
})
document.body.addEventListener("click",function (e) {
   if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove()
   }
})

