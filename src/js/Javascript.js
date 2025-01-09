const list_introduction = document.querySelectorAll(
  ".list-introduction ul li a"
);
// const togglearrow = document.querySelectorAll(".toggle-arrow");
const toggleBtn = document.querySelectorAll(".toggle-btn");
const carousel = document.querySelector(".carousel");
console.log(toggleBtn);
const addclassname = (item) => {
  // toggle active class
  list_introduction.forEach((e) => {
    if (e.className === "active") e.className = "";
  });
  item.className = "active";

  const targetId = item.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    // scroll
    const ofset = 70;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const ofsetPostion = window.scrollY + elementPosition - ofset;
    window.scrollTo({ top: ofsetPostion, behavior: "smooth" });
  }
};
list_introduction.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    addclassname(item);
  });
});

// slider

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    970: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
    },
    330: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Traded quotations
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".icon");

    // Toggle current item
    if (content.classList.contains("open")) {
      content.classList.remove("open");
      content.style.maxHeight = "0";
      icon.classList.remove("open");
    } else {
      // Close other open items
      document
        .querySelectorAll(".accordion-content.open")
        .forEach((openContent) => {
          openContent.classList.remove("open");
          openContent.style.maxHeight = "0";
          openContent.previousElementSibling
            .querySelector(".icon")
            .classList.remove("open");
        });

      // Open the clicked item
      content.classList.add("open");
      content.style.maxHeight = `${content.scrollHeight}px`;
      icon.classList.add("open");
    }
  });
});
