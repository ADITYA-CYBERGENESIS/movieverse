// homepage slider

let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let slideContainer = document.querySelector(".slider_container");

margin = 0;
arrowLeft.addEventListener("click", () => {
  if (margin == 0) {
    margin = margin + 400;
  } else {
    margin = margin - 100;
  }

  slideContainer.style.marginLeft = `-${margin}%`;
});

arrowRight.addEventListener("click", () => {
  if (margin == 400) {
    margin = margin - 400;
  } else {
    margin = margin + 100;
  }

  slideContainer.style.marginLeft = `-${margin}%`;
});

setInterval(() => {
  if (margin == 400) {
    margin = margin - 400;
  } else {
    margin = margin + 100;
  }

  slideContainer.style.marginLeft = `-${margin}%`;
}, 5000);

// homepage slider end
isScrolling = false;
function cardcloner(card) {
  if (isScrolling) return;
}

let cards = document.querySelectorAll(".card");
let cardPlayBtns = document.querySelectorAll(".card-play_btn")
cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    document.querySelectorAll(".hover-card").forEach(element => element.remove());
    let cardPostion = this.getBoundingClientRect();
    let duplicate = this.cloneNode(true);
    duplicate.classList.add("hover-card");
    duplicate.setAttribute("data-interactive", "true");
    duplicate.style.position = "absolute";
    duplicate.style.top = `${cardPostion.top + window.scrollY}px`;
    duplicate.style.left = `${cardPostion.left + window.scrollX}px`;
    duplicate.style.zIndex = "10";

    document.body.appendChild(duplicate);
    setTimeout(() => {
      duplicate.style.left = `${cardPostion.left - 10}px`
      ;
    }, 10);
    duplicate.children[3].addEventListener('click',()=>{
      window.location.href ='./video_player.html'
    })
    duplicate.firstElementChild.addEventListener('click',()=>{
      window.location.href ='./movies_series_info.html'
    })
    setTimeout(() => {
      duplicate.firstElementChild.firstElementChild.style.display = `inline`;
    }, 1);
    duplicate.addEventListener("mouseleave", function () {
      duplicate.style.left = `${cardPostion.left}px`;

      setTimeout(() => {
        duplicate.remove();
      }, 600); 
    });
  });
});

// category scroller

let categoryScroller = document.querySelector(".category_scroller");
let categoryCards = document.querySelectorAll(".category_card");

categoryCards.forEach((item) => {
  let categoryCardDuplicate = item.cloneNode(true);
  categoryScroller.appendChild(categoryCardDuplicate);
});
// category scroller

let cardSections = document.querySelectorAll(".card_section-container");

let arrowsLeftCardSection = document.querySelectorAll(
  ".card_section-container-arrow-left"
);
let arrowsRightCardSection = document.querySelectorAll(
  ".card_section-container-arrow-right"
);

arrowsLeftCardSection.forEach((arrowLeftCardSection) => {
  arrowLeftCardSection.addEventListener("click", () => {
    arrowLeftCardSection.parentElement.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  });
});
arrowsRightCardSection.forEach((arrowRightCardSection) => {
  arrowRightCardSection.addEventListener("click", () => {
    arrowRightCardSection.parentElement.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  });
});

cardSections.forEach((cardSection)=>{
  cardSection.addEventListener('mouseenter',()=>{
    cardSection.lastElementChild.lastElementChild.style.display = `block`;
    cardSection.lastElementChild.children[cardSection.lastElementChild.children.length-2].style.display = `block`;
    cardSection.addEventListener("mouseleave",()=> {
      cardSection.lastElementChild.lastElementChild.style.display = `none`;
      cardSection.lastElementChild.children[cardSection.lastElementChild.children.length-2].style.display = `none`;
    });


})})
