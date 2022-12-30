let data1 = JSON.parse(localStorage.srch);
data1.toLowerCase();
console.log(data1);

let data2 = JSON.parse(localStorage.getItem("list"));
console.log(data2);

const sorted = data2.filter((name) => {
  let a = name.title.toLowerCase()
//   debugger
//   a.toLowerCase()
//   console.log(a);
//   debugger;
  if (a.includes(data1)) {
    return true;
  }
});
console.log(sorted);



sorted.forEach((item,k) => {
      
    const name = item.original_title;
    const poster = `https://image.tmdb.org/t/p/w500/${item.poster_path}`;
    const movie = `<li  class="mov" onclick="myFun(${k})"><a href="/Fetch/IMDB PROJECT/infoPage.html" style="text-decoration: none" id="${k}"><img  src="${poster}"><h2>${name}</h2></a></li>`;
    document.querySelector(".movies").innerHTML += movie;
    
  });

  function myFun(k) {
    let data = JSON.parse(localStorage.getItem("list"));
    console.log(data[k]);
    localStorage.setItem("clicked", JSON.stringify(data[k]));
  }