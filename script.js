const allMovies = [
  {
    backgroundImage:"https://image.tmdb.org/t/p/original/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
    infoImg:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    title:"THE MATRIX",
    postTitle:"Welcome to the Real World.",
    description:"Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    genre:"Action, Science Fiction",
    productionList:"Village Roadshow Pictures, Groucho II Film Partnership, Silver Pictures, Warner Bros. Pictures",
    release:"1999-03-30",
    time:"136 mins",
    boxOffice:"$463,517,383",
    vote:"8.1 / 10"
  },

  {
    backgroundImage:"https://image.tmdb.org/t/p/original/kQIzFGdVCwsuutMKyCVZ8LrJw3e.jpg",
    infoImg:"https://image.tmdb.org/t/p/w500/8xEVAe84zlL9rkfYT6dZXero4KK.jpg",
    title:"THE MATRIX RELOADED",
    postTitle:"Free your mind.",
    description:"Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and more humans are being freed from the matrix and brought to Zion, the one and only stronghold of the Resistance. Neo himself has discovered his superpowers including super speed, ability to see the codes of the things inside the matrix and a certain degree of pre-cognition. But a nasty piece of news hits the human resistance: 250,000 machine sentinels are digging to Zion and would reach them in 72 hours. As Zion prepares for the ultimate war, Neo, Morpheus and Trinity are advised by the Oracle to find the Keymaker who would help them reach the Source. Meanwhile Neo's recurrent dreams depicting Trinity's death have got him worried and as if it was not enough, Agent Smith has somehow escaped deletion, has become more powerful than before and has fixed Neo as his next target.",
    genre:"Adventure, Action, Thriller, Science Fiction",
    productionList:"Heineken Branded Entertainment, Village Roadshow Pictures, Silver Pictures, NPV Entertainment, Warner Bros. Pictures",
    release:"2003-05-15",
    time:"138 mins",
    boxOffice:"$738,599,701",
    vote:"6.9 / 10"
  }
  ];


  const btns = document.querySelectorAll('.movieBtn');
  const infoImg = document.querySelector('#infoImg');
  const title = document.querySelector('#title');
  const postTitle = document.querySelector('#postTitle');
  const description = document.querySelector('#description');
  const genre = document.querySelector('#genre');
  const productionList = document.querySelector('#productionList');
  const release = document.querySelector('#release');
  const time = document.querySelector('#time');
  const boxOffice = document.querySelector('#boxOffice');
  const vote = document.querySelector('#vote');


  for(let i = 0; i < btns.length; i++)
  {
    btns[i].addEventListener('click', function (event) {
      for (var j = 0; j < allMovies.length; j++) {
        if (btns[i].textContent == allMovies[j].title){
          document.body.style.backgroundImage = "linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgb(0, 0, 0)), url("+ allMovies[j].backgroundImage +")";
          infoImg.src = allMovies[j].infoImg;
          title.textContent = allMovies[j].title;
          postTitle.textContent = allMovies[j].postTitle;
          description.textContent = allMovies[j].description;
          genre.textContent = allMovies[j].genre;
          productionList.textContent = allMovies[j].productionList;
          release.textContent = allMovies[j].release;
          time.textContent = allMovies[j].time;
          boxOffice.textContent = allMovies[j].boxOffice;
          vote.textContent = allMovies[j].vote;
        }
      }
    });
  }
// const movieDataMatrix = {
//   title: "Matrix",
//   description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//   year: 1999,
//   image: "https://image.tmdb.org/t/p/w1280/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
// }

// const movieDataMatrix2 = {
//   title: "Matrix Revolution II",
//   description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//   year: 2001,
//   image: "https://image.tmdb.org/t/p/w1280/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
// }

// const title = document.querySelector('#title').innerText

// const movieBtn = document.querySelector('#movie-btn')

// movieBtn.addEventListener('click', (event) => {
//   console.log('event: ', event)
//   document.querySelector('#title').innerText = movieDataMatrix.title
// })

