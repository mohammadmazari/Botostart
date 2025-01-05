const list_introduction = document.querySelectorAll(
  ".list-introduction ul li a"
);

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
