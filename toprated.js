fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ce86edff41331276ca846af0bfe32273&language=en-US&page=1")
 .then(response => response.json())
 .then(data => {
    const list = data.results;

    
      ratings = [];
      list.forEach((movie) => {
        ratings.push(movie);
        ratings.sort(function (a, b) {
          return b.vote_average - a.vote_average;
        });
      });
      console.log(ratings);
    
    
          ratings.forEach((item) => {
            const name = item.original_title;
            const poster = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector(".movies").innerHTML += movie;
          });
 })