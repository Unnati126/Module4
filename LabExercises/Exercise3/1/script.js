function addCard(title, text) {
    const template = document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;
    document.querySelector('#card-list').appendChild(template);
  }

  // Example cards
  addCard("First Card", "This is the first card.");
  addCard("Second Card", "This is another card.");
