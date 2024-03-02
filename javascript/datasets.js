let data;

fetch('../json/data_film.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    const showsContainer = document.getElementById('movies-data');
    renderTitles(data, showsContainer); // Render first 10 show titles initially
  })
  .catch(error => console.error('Error fetching data:', error));

function renderTitles(shows, container) {
  container.innerHTML = ''; // Clear existing content
  const limitedShows = shows.slice(0, 10); // Ambil hanya 10 elemen pertama
  limitedShows.forEach(show => {
    const showElement = document.createElement('div');
    showElement.classList.add('title-result')
    showElement.innerHTML = `<h2 onclick="showDetails('${show.show_id}')">${show.title}</h2>`;
    container.appendChild(showElement);
  });
}

function showDetails(showId) {
  const selectedShow = data.find(show => show.show_id === showId);
  const showsContainer = document.getElementById('movies-data');
  showsContainer.innerHTML = ''; // Clear existing content
  
  const showDetailsElement = document.createElement('div');
  showDetailsElement.classList.add('data-container');
  showDetailsElement.innerHTML = `
    <h2>${selectedShow.title}</h2>
    <p><strong>Type:</strong> ${selectedShow.type}</p>
    <p><strong>Director:</strong> ${selectedShow.director}</p>
    <p><strong>Cast:</strong> ${selectedShow.cast}</p>
    <p><strong>Country:</strong> ${selectedShow.country}</p>
    <p><strong>Date Added:</strong> ${selectedShow.date_added}</p>
    <p><strong>Release Year:</strong> ${selectedShow.release_year}</p>
    <p><strong>Rating:</strong> ${selectedShow.rating}</p>
    <p><strong>Duration:</strong> ${selectedShow.duration}</p>
    <p><strong>Listed In:</strong> ${selectedShow.listed_in}</p>
    <p><strong>Description:</strong> ${selectedShow.description}</p>
    <div class="back">
      <a href="search.html"><i class="fa fa-arrow-left"></i>
      </a>
      <span onclick="back()">back</span>
    </div>
  `;
  showsContainer.appendChild(showDetailsElement);
}

function back() {
  window.location.href = "search.html"
}

function showAllTitles() {
  const showsContainer = document.getElementById('movies-data');
  renderTitles(data, showsContainer); // Render all show titles
}

// Search function
const searchInput = document.getElementById('input');
searchInput.addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredShows = data.filter(show => show.title.toLowerCase().includes(searchTerm));
  const showsContainer = document.getElementById('movies-data');
  renderTitles(filteredShows, showsContainer);
});

const menu = document.getElementById("menu");
const menuTab = document.getElementById("menu-tab");
const closeTab = document.getElementById("close-tab");

menu.addEventListener('click', function() {
  menuTab.classList.add('menu-move-left');
  menuTab.classList.remove('menu-move-right');
});
closeTab.addEventListener('click', function() {
  menuTab.classList.add('menu-move-right')
  menuTab.classList.remove('menu-move-left')
})