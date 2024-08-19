const navButton = document.querySelector(".nav__button");
const navListMobile = document.querySelector(".nav__list__mobile");
const toggleBack = document.querySelector(".back");
const toggleNext = document.querySelector(".next");
const header = document.querySelector(".header");
const section2Header = document.querySelector(".section2__header");
const section2Text = document.querySelector(".section2__text");

let slideIndex = 1;
const wordDict = [
  (one = {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. ",
  }),
  (two = {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  }),
  (three = {
    title: "Manufactured with the best materials ",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office. Shop now About our furniture Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. ",
  }),
];

console.log(wordDict[0].title);
navButton.addEventListener("click", () => {
  if (navButton.classList.contains("active")) {
    navButton.classList.toggle("active");
    navListMobile.style.opacity = "0";
  } else {
    navButton.classList.toggle("active");
    navListMobile.style.opacity = "1";
  }
});

toggleBack.addEventListener("click", () => {
  slideIndex--;
  console.log(slideIndex);
  if (slideIndex != 0) {
    header.style.backgroundImage = `url(./images/mobile-image-hero-${slideIndex}.jpg)`;
  } else {
    slideIndex = 3;
    header.style.backgroundImage = `url(./images/mobile-image-hero-${slideIndex}.jpg)`;
  }
  section2Header.innerHTML = `${wordDict[slideIndex - 1].title}`;
  section2Text.innerHTML = `${wordDict[slideIndex - 1].text}`;
});

toggleNext.addEventListener("click", () => {
  slideIndex++;
  console.log(slideIndex);
  if (slideIndex != 4) {
    header.style.backgroundImage = `url(./images/mobile-image-hero-${slideIndex}.jpg)`;
  } else {
    slideIndex = 1;
    header.style.backgroundImage = `url(./images/mobile-image-hero-${slideIndex}.jpg)`;
  }

  section2Header.innerHTML = `${wordDict[slideIndex - 1].title}`;
  section2Text.innerHTML = `${wordDict[slideIndex - 1].text}`;
});
