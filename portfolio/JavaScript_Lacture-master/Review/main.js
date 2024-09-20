const reviewList = [
    {
        id: 1,
        name: "Killa",
        type: "Boss",
        img: "./img/Killa.jpg",
        text: "Interchange boss."
    },
    {
        id: 2,
        name: "Duo",
        type: "Flat",
        img: "./img/Duo.jpg",
        text: "escaping with friend."
    },
    {
        id: 3,
        name: "Darkness",
        type: "PMC",
        img: "./img/Darkness.png",
        text: "Solo PMC."
    },
    {
        id: 4,
        name: "Hideout",
        type: "Living",
        img: "./img/Hideout.jpg",
        text: "make it AKM."
    },
    {
        id: 5,
        name: "Squad",
        type: "four_people",
        img: "./img/Squad.jpg",
        text: "Squad team."
    },
    {
        id: 6,
        name: "Battle",
        type: "Interchange",
        img: "./img/Battle.jpg",
        text: "battle in Interchange."
    },
]

const mainImg = document.querySelector("#main-img");
const EFTname = document.querySelector("#EFT-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 0;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    EFTname.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
});



function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    EFTname.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);
})