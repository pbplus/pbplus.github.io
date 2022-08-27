let cards = document.querySelectorAll(".card");
let cardPopup = document.querySelector(".card-pop");
let exitBtn = document.querySelector(".exit-btn");
let modalBg = document.querySelector(".modal-bg");

cards.forEach(card => {
    card.addEventListener("click", function cardPop() {
        cardPopup.classList.add("card-pop-show")
        modalBg.classList.add("modal-bg-show")
    })
})

exitBtn.addEventListener("click", function closePop () {
    cardPopup.classList.remove("card-pop-show")
    modalBg.classList.remove("modal-bg-show")
})
