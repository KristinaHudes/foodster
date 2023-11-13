/* /////////////////////////////
 * SET CURRENT YEAR *
 */ /////////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/* /////////////////////////////
 * ADD MOBILE NAV *
 */ /////////////////////////////
const headerEl = document.querySelector(".header");
const btnNavEl = document.querySelector(".mobile-nav__btn");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

/* /////////////////////////////
 * ADD NAV OPEN *
 */ /////////////////////////////
const linksEl = document.querySelectorAll("a:link");

linksEl.forEach((link) =>
  link.addEventListener("click", (e) => {
    if (link.classList.contains("main-nav__link"))
      headerEl.classList.toggle("nav-open");
  })
);

/* /////////////////////////////
 * ADD STICKY NAV *
 */ /////////////////////////////
const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },

  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
