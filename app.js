console.log("help im stuck")
const wrapper = document.querySelector(".sliderWrapper")
const nextImg = document.querySelectorAll(".nextImg")
const nextImgLast = document.querySelectorAll(".nextImgInLast")
const lastImg = document.querySelectorAll(".lastImg")
const sliderItem = document.querySelectorAll(".sliderItem")
posActual = 0

const cvButton1 = document.querySelector(".cvButton1");
const cvButton2 = document.querySelector(".cvButton2");
const cvButton3 = document.querySelector(".cvButton3");
const cvContent1 = document.querySelector(".cvContent1");
const cvContent2 = document.querySelector(".cvContent2");
const cvContent3 = document.querySelector(".cvContent3");
const close1 = document.querySelector(".close1");
const close2 = document.querySelector(".close2");
const close3 = document.querySelector(".close3");

nextImg.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    posActual++
    if (sliderItem.length > posActual) {
      wrapper.style.transform = `translateX(${(-100 * posActual)}vw)`;
    } else {
      posActual = 0
      wrapper.style.transform = `translateX(${(-100 * posActual)}vw)`;
    }
  });
});


lastImg.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    posActual--
    if (posActual == -1) {
      posActual = 5
      wrapper.style.transform = `translateX(${(-100 * posActual)}vw)`;
    } else {
      wrapper.style.transform = `translateX(${(-100 * posActual)}vw)`;
    }
  });
});

cvButton1.addEventListener("click", () => {
  cvContent1.style.display = "flex"
});

cvButton2.addEventListener("click", () => {
  cvContent2.style.display = "flex"
});

cvButton3.addEventListener("click", () => {
  cvContent3.style.display = "flex"
});

close1.addEventListener("click", () => {
  cvContent1.style.display = "none"
  cvContent2.style.display = "none"
  cvContent3.style.display = "none"
});

close2.addEventListener("click", () => {
  cvContent1.style.display = "none"
  cvContent2.style.display = "none"
  cvContent3.style.display = "none"
});

close3.addEventListener("click", () => {
  cvContent1.style.display = "none"
  cvContent2.style.display = "none"
  cvContent3.style.display = "none"
});
