/*=============== Change Background Header ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== Set To Active Link When Scrolled ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".navbar__container a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".navbar__container a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== Toggle Accordion When Clicked ===============*/
const accordionItems = document.querySelectorAll(".features__accordion-item");

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".features__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".features__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

/*=============== Loop Over Cards For Dynamic Contents ===============*/
const data = [
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
  {
    img: "./Assets/Images/home.png",
    prices: "$500",
    category: "New Products",
    title: "Phantom Spectrum Z1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse.",
  },
];

function loopCards() {
  const productsContainer = document.getElementById("products-container");
  let value = ``;

  data.forEach(({ img, prices, category, title, description }) => {
    value += `
    <article class="products__card">
      <img src="${img}" alt="Products Image" class="products__img" />

      <div class="products__data">
        <div class="products__data-prices">
          <h3 class="products__price">${prices}</h3>
          <span class="products__category">${category}</span>
        </div>
        <h2 class="products__title">${title}</h2>
        <p class="products__description">${description}</p>
        <div class="products__buttons">
          <a href="#" class="products__buy-button">
            Buy
            <i class="bx bx-cart"></i>
          </a>
          <a href="#" class="products__view-button">
            View More
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>
      </div>
    </article>
    `;
  });

  productsContainer.innerHTML = value;
}

loopCards();
