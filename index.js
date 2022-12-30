fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=ce86edff41331276ca846af0bfe32273&language=en-US&page=1"
)
  .then((response) => response.json())
  .then((data) => {
    const list = data.results;
    localStorage.setItem("list", JSON.stringify(list));

    list.forEach((item,k) => {
      
      const name = item.original_title;
      const poster = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
      const movie = `<li  class="mov" onclick="myFun(${k})"><a href="infoPage.html" style="text-decoration: none" id="${k}"><img  src="${poster}"><h2>${name}</h2></a></li>`;
      document.querySelector(".movies").innerHTML += movie;
      
    });
  });

function myFun(k) {
  let data = JSON.parse(localStorage.getItem("list"));
  console.log(data[k]);
  localStorage.setItem("clicked", JSON.stringify(data[k]));
}
function search(){
  let val = document.querySelector("#search-box").value;
  localStorage.setItem("srch", JSON.stringify(val));
}