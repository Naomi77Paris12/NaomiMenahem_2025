// My Api key from TMDB
const api = "api_key=6c90eb1cbe9a729f47eba5b53199555e";

// base url of the site
const base_url = "https://api.themoviedb.org/3";

// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

// img url
const img_url = "https://image.tmdb.org/t/p/original";


// requests for the movies data 

const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};


// used to truncate the string
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


// banner
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);

  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner_title");
  var banner_desc = document.getElementById("banner_desc");
  banner.style.backgroundImage = "url('Images/Nomi-hero-flipped.png')";
  banner_desc.innerText = "Part storyteller, part systems thinker, Naomi designs for how people feel as much as what they do. Each project is a new experiment in empathy, craft, and courage--proof that great design isn't decoration, it's transformation.";
  banner_title.innerHTML = "Naomi Designs — <br>A True Story";
})


// movies rows - NAOMI ORIGINALS (always first)
fetch(requests.fetchNetflixOrignals)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("netflixrow");
  // Insert at the beginning to ensure it's always first
  if (headrow.firstChild) {
    headrow.insertBefore(row, headrow.firstChild);
  } else {
    headrow.appendChild(row);
  }
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "NAOMI ORIGINALS";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  // Create exactly 4 thumbnails
  for (let i = 0; i < 4; i++) {
    const poster = document.createElement("img");
    poster.className = "row_posterLarge row_posterLarge-full";
    poster.id = "naomi-original-" + (i + 1);
    
    // First thumbnail (index 0) links to Figma prototype
    if (i === 0) {
      poster.loading = "lazy";
      poster.src = "Images/naomi-original-1.png?v=" + Date.now();
      poster.style.cursor = "pointer";
      const link = document.createElement("a");
      link.href = "https://www.figma.com/proto/yGOCu5SKIT9Na3FcueoYrL/Naomi-Menahem----Netflix?node-id=958-57564&t=r7dXBWWIpMaxo7Qo-1&scaling=scale-down-width&content-scaling=fixed&page-id=533%3A32175&starting-point-node-id=958%3A57564";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.textDecoration = "none";
      link.appendChild(poster);
      row_posters.appendChild(link);
    }
    // Second thumbnail (index 1) uses Tableau Re-Imagined image and links to Figma prototype
    else if (i === 1) {
      poster.loading = "lazy";
      poster.src = "Images/tableau-reimagined.png?v=" + Date.now();
      poster.style.cursor = "pointer";
      const link = document.createElement("a");
      link.href = "https://www.figma.com/proto/yGOCu5SKIT9Na3FcueoYrL/Naomi-Menahem----Netflix?node-id=1072-54381&t=zXsgSvamIpXSlW0F-0&scaling=scale-down-width&content-scaling=fixed&page-id=1072%3A53944&starting-point-node-id=1072%3A54381";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.textDecoration = "none";
      link.appendChild(poster);
      row_posters.appendChild(link);
    }
    // Third thumbnail (index 2) uses CRT image and links to CRT redesign - second from right
    else if (i === 2) {
      poster.loading = "lazy";
      poster.src = "Images/CRT.png?v=" + Date.now();
      poster.style.cursor = "pointer";
      const link = document.createElement("a");
      link.href = "https://naomimenahem.com/crt-redesign";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.textDecoration = "none";
      link.appendChild(poster);
      row_posters.appendChild(link);
    }
    // Fourth thumbnail (index 3) uses portfolio image and is clickable - rightmost
    else if (i === 3) {
      poster.loading = "lazy";
      poster.src = "Images/portfolio-thumbnail.png?v=" + Date.now();
      poster.style.cursor = "pointer";
      // Create link wrapper for fourth thumbnail
      const link = document.createElement("a");
      link.href = "https://www.naomimenahem.com";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.style.textDecoration = "none";
      link.appendChild(poster);
      row_posters.appendChild(link);
    }
  }
});



//trending

fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Trending Now";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.loading = "lazy";
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

// top rated

fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_posterLarge";
    var s2 = movie.id;
    poster.id = s2;
    poster.loading = "lazy";
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});


// Romance

fetch(requests.fetchRomanceMovies)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Romance Movies";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});


// documentry

fetch(requests.fetchDocumentaries)
.then((res) => res.json())
.then((data) => {
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = "Documentaries";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row_posters";
  row.appendChild(row_posters);
  data.results.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row_poster";
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.backdrop_path;
    row_posters.appendChild(poster);

  });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const moreInfoBtn = document.querySelector('.more-info-btn');
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');

  // Open modal when "More Info" button is clicked
  if (moreInfoBtn) {
    moreInfoBtn.addEventListener('click', function() {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  }

  // Close modal when close button is clicked
  if (modalClose) {
    modalClose.addEventListener('click', function() {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    });
  }

  // Close modal when clicking on overlay (but not on the image)
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
    }
  });
});
