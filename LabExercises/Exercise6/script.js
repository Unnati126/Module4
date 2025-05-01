async function fetchPosts(limit = 10) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const posts = await response.json();
      displayPosts(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  
  function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; // clear existing posts
  
    posts.forEach(post => {
      const col = document.createElement('div');
      col.className = 'col-12 col-md-6 col-lg-3';
  
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${post.body}</p>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  }
  
  fetchPosts();
  