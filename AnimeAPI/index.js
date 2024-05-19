const moviesbox = document.getElementById('movies');
let languageSelect = document.getElementById('languageSelect').value;

function select(){
  languageSelect= (languageSelect + 1)%2; 
}
select();

async function fetchData(){
  
  try{
    const enterName = document.getElementById('nameValue').value.toLowerCase();
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${enterName}&sfw`);
    if(!response.ok){
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    
    let movies = [];
    
    for(i=0; i<data.data.length; i++){
      detail = data.data[i];
      movies.push(detail);
    }
    
    
    let allMovie = ''
    let n =0;
    movies.forEach(detail=>{
      n++;
      if(languageSelect == 0){
        viewedTitle = detail.title_english;
      }
      else{
        viewedTitle = detail.title;
      }
       
      if(viewedTitle == null){
        viewedTitle = detail.title;
      }
      allMovie +=
        `<div class="each-movie">
          <img src= "${detail.images.jpg.image_url}" title= "${viewedTitle}" class ="cover">
          <p>${viewedTitle}</p>
          <span id="status">${detail.status}</span><br>
          <select id ="number-${n}">
            <option value="" disabled selected>Not Watched</option>
            <option value="1">Watching</option>
            <option value="2">Completed</option>
            <option value="3">Dropped</option>
          </select>
        </div>`
      });

    moviesbox.innerHTML = allMovie;

    const imagebox = document.getElementById('imageBox');
    const synopsis = document.getElementById('synopsis');
    
    if(movies.length == 0){
       moviesbox.innerHTML = 'No result found!';
    }
    var status = document.getElementById('status');
    
    status.style.color = 'blue';
  }
  catch(error){
    console.error(error);
  }
}
