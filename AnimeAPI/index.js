const moviesbox = document.getElementById("movies");
let languageSelect = document.getElementById("languageSelect").value;

function select() {
  languageSelect = (languageSelect + 1) % 2;
}
select();
fetchData();

async function fetchData() {
  try {
    const enterName = document.getElementById("nameValue").value.toLowerCase();
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${enterName}&sfw`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const datas = await response.json();
    console.log(datas);

    let movies = [];

    for (i = 0; i < datas.data.length; i++) {
      detail = datas.data[i];
      movies.push(detail);
    }

    let allMovie = "";
    let n = 0;
    movies.forEach((detail) => {
      n++;
      if (languageSelect == 0) {
        viewedTitle = detail.title_english;
      } else {
        viewedTitle = detail.title;
      }

      if (viewedTitle == null) {
        viewedTitle = detail.title;
      }
      
      allMovie += `
      <div class="card" id="each-movie" style="width: 13.9rem" >
        <img src="${detail.images.jpg.image_url}" title= "${viewedTitle}" class="card-img-top" alt="No Picture Found!">
        <div class="card-body">
          <p class="card-title anime-name" title= "${viewedTitle}"><b>${viewedTitle}</b></p>
          <p class="card-text" id="status">${detail.status}</p>
          <select class="form-select" aria-label="Default select example">
            <option disabled selected>Not Watched</option>
            <option value="1">Watching</option>
            <option value="2">Completed</option>
            <option value="3">Dropped</option>
          </select>
        </div>
      </div>
      `;
    });

    moviesbox.innerHTML = allMovie;

    const imagebox = document.getElementById("imageBox");
    const synopsis = document.getElementById("synopsis");

    if (movies.length == 0) {
      moviesbox.innerHTML = "No result found!";
    }
  } catch (error) {
    moviesbox.innerHTML = "Error occured: " + error.message;
  }
}
// document.addEventListener('load', fetchData());
// <select id ="number-${n}">
      // <option value="" disabled selected>Not Watched</option>
      // <option value="1">Watching</option>
      // <option value="2">Completed</option>
      // <option value="3">Dropped</option>
      // </select>
      // <div class="each-movie" onclick = "searchAnime('${detail.url}')">
      // <img src= "${detail.images.jpg.image_url}" title= "${viewedTitle}" class ="cover">
      // <span class="anime-name" title="${viewedTitle}">${viewedTitle}</span>
      // <div id="status">${detail.status}</div>

      // <select class="form-select" aria-label="Default select example">
      //   <option disabled selected>Not Watched</option>
      //   <option value="1">Watching</option>
      //   <option value="2">Completed</option>
      //   <option value="3">Dropped</option>
      // </select>
      // </div>
    