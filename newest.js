

fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=ce86edff41331276ca846af0bfe32273&language=en-US&page=1")
  .then((response) => response.json())
  .then((data) => {
    const list = data.results;
    
        newest = [];
        list.forEach((movie) => {
          // const date = new Date(movie.release_date);
          newest.push(movie);
          newest.sort(function (a, b) {
            return new Date(b.release_date) - new Date(a.release_date);
          });
        });
        // console.log(newest);

    
          newest.forEach((item) => {
            const name = item.original_title;
            const poster = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
            const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`;
            document.querySelector(".movies").innerHTML += movie;
          });
  });
