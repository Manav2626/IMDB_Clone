let data = JSON.parse(localStorage.getItem('clicked'));

document.querySelector('.title').innerHTML = data.title;
document.querySelector('.mimg').src = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
document.querySelector('.info').innerHTML= data.overview;
document.querySelector('.lan').innerHTML= data.original_language;
document.querySelector('sup').innerHTML= data.vote_average;
document.querySelector('.rlDate').innerHTML= data.release_date;