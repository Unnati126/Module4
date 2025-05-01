let news = [
    { id: 1, title: 'Election Results', content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
  ];

  let nextId = 4;

  function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; 

    news.forEach(item => {
      const newsDiv = document.createElement('div');
      newsDiv.classList.add('news-item');
      newsDiv.innerHTML = `
        <div class="news-title">${item.title}</div>
        <div class="news-content">${item.content}</div>
      `;
      container.appendChild(newsDiv);
    });
  }

  setInterval(renderNews, 5000);
  renderNews();

  // Handle form submit
  document.getElementById('newsForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const title = document.getElementById('newsTitle').value.trim();
    const content = document.getElementById('newsContent').value.trim();

    if (title && content) {
      news.push({
        id: nextId++,
        title: title,
        content: content
      });

      // Clear form fields
      document.getElementById('newsTitle').value = '';
      document.getElementById('newsContent').value = '';
    }
  });