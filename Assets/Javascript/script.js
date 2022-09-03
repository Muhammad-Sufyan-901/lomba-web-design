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
      document.querySelector(`.navbar__container a[href*=${sectionId}]`).classList.add("active-link");
    } else {
      document.querySelector(`.navbar__container a[href*=${sectionId}]`).classList.remove("active-link");
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

/*=============== Creating Function For Looping Elements With Dynamic Contents ===============*/
function loopElements(data, container, child) {
  let value = ``;

  data.forEach((...item) => {
    value += child(...item);
  });

  container.innerHTML = value;
}

/*=============== Creating Function For Truncating Description ===============*/
function truncateString(string) {
  const length = 75;

  return string.length > length ? string.substring(0, length) + " ..." : string;
}

/*=============== Calling The Function to Loop into Products Section and Passing Some Arguments ===============*/
const productsContainer = document.getElementById("products-container");

const productsData = [
  {
    img: "./Assets/Images/products-1.png",
    prices: "$1279,17",
    category: "New Products",
    title: "Phantom ION RXZ10",
    description: "Introducing Smartphone with the most powerfull camera and smooth screen",
  },
  {
    img: "./Assets/Images/products-2.png",
    prices: "$1211,84",
    category: "Popular Products",
    title: "Phantom Spectrum Z1",
    description: "Most popular Gaming Phones with high processor performance and smooth refresh rate screen",
  },
  {
    img: "./Assets/Images/products-3.png",
    prices: "$1144,51",
    category: "Popular Products",
    title: "Phantom Spectrum X9",
    description: "Most powerfull with high performance makes your gaming experiences is more enjoyable.",
  },
  {
    img: "./Assets/Images/products-4(1).png",
    prices: "$673,28",
    category: "New Products",
    title: "Phantom RGX T9",
    description: "Gaming Smartphones with high specifications for gaming needed with affordable prices",
  },
  {
    img: "./Assets/Images/products-5.png",
    prices: "$740,61",
    category: "Popular Products",
    title: "Phantom PRO 12",
    description: "Introducing Smartphone with the most smooth camera and great result of photos",
  },
  {
    img: "./Assets/Images/products-6.png",
    prices: "$471,30",
    category: "Popular Products",
    title: "Phantom XS Series",
    description: "First releases of Phantom Smartphones with enough specifications and cheap prices",
  },
];

const productsCard = ({ img, prices, category, title, description }) => `
    <article class="products__card">
      <img src="${img}" alt="Products Image" class="products__img" />

      <div class="products__data">
        <div class="products__data-prices">
          <h3 class="products__price">${prices}</h3>
          <span class="products__category">${category}</span>
        </div>
        <h2 class="products__title">${title}</h2>
        <p class="products__description">${truncateString(description)}</p>
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
    </article>`;

loopElements(productsData, productsContainer, productsCard);

/*=============== Calling The Function to Loop into Article Section and Passing Some Arguments ===============*/
const articleContainer = document.getElementById("article-container");

const articleData = [
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
  {
    img: "Assets/Images/article-1.jpg",
    uploadedAt: "12 Mins Ago",
    views: "76,5K",
    comments: "12",
    title: "4 Smartphones Recommendations",
    description: "The blogs about smartphone recommendations will help you a lot for choosing a smartphones.",
  },
];

const articleCard = ({ img, uploadedAt, views, comments, title, description }) => `
    <article class="article__card">
      <div class="article__image">
        <img src="${img}" alt="Article Image" class="article__img" />
      </div>

      <div class="article__data">
        <div class="article__stats">
          <div class="article__stats-data">
            <div class="article__reaction">
              <i class="bx bx-time"></i>
              <span>${uploadedAt}</span>
            </div>
            <div class="article__reaction">
              <i class="bx bx-show"></i>
              <span>${views}</span>
            </div>
          </div>

          <div class="article__reaction article__comment">
            <i class="bx bx-comment"></i>
            <span>${comments}</span>
          </div>
        </div>
        <h2 class="article__title">${title}</h2>
        <p class="article__description">${truncateString(description)}</p>
        <button class="button article__button">Read More</button>
      </div>
    </article>
`;

loopElements(articleData, articleContainer, articleCard);
