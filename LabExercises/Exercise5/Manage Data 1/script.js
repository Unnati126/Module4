let news = [
    { id: 1, title: 'Election Results', content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success', content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning', content: "Residents should prepare..." }
];

function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear previous content

    news.forEach(item => {
        const newDiv = document.createElement('div');
        newDiv.className = 'news-item';
        newDiv.innerHTML = `
            <div class="news-title">${item.title}</div>
            <div class="news-content">${item.content}</div>
        `;
        container.appendChild(newDiv);
    });
}

renderNews();
setInterval(renderNews, 5000); // Refresh every 5 seconds
