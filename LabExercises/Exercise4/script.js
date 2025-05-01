const container = document.getElementById("card-container");

function createCard() {
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
}
