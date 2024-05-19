// async function fetchData(){
//   try{
//     const enterName = document.getElementById('nameValue').value.toLowerCase();
//     const response = await fetch(`https://api.jikan.moe/v4/anime?q=${enterName}&sfw`);
//     if(!response.ok){
//       throw new Error('Could not fetch resource');
//     }

//     const data = await response.json();

    
//     const image = data.data[0].images.jpg.image_url;
//     const detail = data.data[5].synopsis;

//     const imagebox = document.getElementById('imageBox');
//     const synopsis = document.getElementById('synopsis');

//     imagebox.src = `${image}`;
//     imagebox.style.display = 'block';
//     synopsis.innerHTML = `${detail}`

//     console.log(movies)
//   }
//   catch(error){
//     console.error(error);
//   }
// }

fetchData();

async function fetchData(){
  const inputElement = document.getElementById('nameValue');
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${inputElement}&sfw`);

  try{
    if(!response.ok){
      throw new Error("Couldnot fetch resources!")
    }

    const data = await response.json();
    console.log(data);
  }
  catch(error){
    console.error(error);
  }
}
