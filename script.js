shareBtn = document.querySelector(".share-btn")
sharePopup = document.querySelector(".share-popup")
let isHidden
let share
let shared = localStorage.getItem("share")
if (shared == 'true') {
 sharePopup.classList.add("hidden")
} else {
 sharePopup.classList.remove("hidden")
}
console.log(shared)

shareBtn.addEventListener('click', function() {
 sharePopup.classList.toggle("hidden")
saveHidden()
})


document.addEventListener('click', function(e) {
 if (shareBtn.contains(e.target) || sharePopup.contains(e.target)) {
  return
 } else {
  sharePopup.classList.add('hidden')
  saveHidden()
 }
 
 })
 
 function saveHidden() {
  isHidden = sharePopup.classList.contains('hidden')
  localStorage.setItem('share', isHidden)
 }
 