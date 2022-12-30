let btn = document.getElementById("search-btn");
abc = "Game";

btn.addEventListener("click", () => {
    let srcText = document.getElementById("search-box").value;
    if(srcText !=""){
    abc = srcText;
}
    
});


const options = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': '6a69c1e9d9msha564f709d9213f2p110988jsn305a569e317a',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    },
  };
  
  

function movieName (name){
    fetch(
        `https://online-movie-database.p.rapidapi.com/auto-complete?q=${name}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          const list = data.d;
    
          list.forEach((item) => {
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector(".movies").innerHTML += movie;
          });
        });
}
movieName("Avengers")