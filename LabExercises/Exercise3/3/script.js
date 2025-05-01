const artist = { 
    name: "Van Gogh",
    portfolio: [
      {
        title: "Portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
      },
      {
        title: "Sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
      }
    ]
  };

  function createArtistProfile(artist) {
    const container = document.getElementById('app');
    const profileDiv = document.createElement('div');
    profileDiv.classList.add('artist-profile');

    const nameEl = document.createElement('div');
    nameEl.classList.add('artist-name');
    nameEl.innerText = artist.name;
    profileDiv.appendChild(nameEl);

    const portfolioDiv = document.createElement('div');
    portfolioDiv.classList.add('portfolio');

    artist.portfolio.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('art-card');

      const img = document.createElement('img');
      img.src = item.url;
      img.alt = item.title;

      const title = document.createElement('div');
      title.classList.add('art-card-title');
      title.innerText = item.title;

      card.appendChild(img);
      card.appendChild(title);
      portfolioDiv.appendChild(card);
    });

    profileDiv.appendChild(portfolioDiv);
    container.appendChild(profileDiv);
  }

  createArtistProfile(artist);