const container = document.getElementById("card-container");
const template = document.getElementById("card-template");

const data = [
  {
    title: "Card Title 1",
    text: "This is the description for card 1.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 2",
    text: "This is the description for card 2.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 3",
    text: "This is the description for card 3.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 4",
    text: "This is the description for card 4.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 5",
    text: "This is the description for card 5.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 6",
    text: "This is the description for card 6.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 7",
    text: "This is the description for card 7.",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Card Title 8",
    text: "This is the description for card 8.",
    img: "https://via.placeholder.com/150"
  }
];

data.forEach(item => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".card-title").innerText = item.title;
  clone.querySelector(".card-text").innerText = item.text;
  clone.querySelector("img").src = item.img;
  container.appendChild(clone);
});


/*function createCard() {
  return `
    <div class="col-12 col-md-6 col-lg-3">
      <div class="card">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="160" xmlns="http://www.w3.org/2000/svg"
             role="img" aria-label="Image cap" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Image cap</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em" text-anchor="middle">Image cap</text>
        </svg>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  `;
}

// Render 8 cards
for (let i = 0; i < 8; i++) {
  container.innerHTML += createCard();
}*/
