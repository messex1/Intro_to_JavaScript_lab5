(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // Event listener for form submission to filter games
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value;
    filterGames(platform);
  });

  function filterGames(platform) {
    const allGameListItems = document.querySelectorAll('.all-games li');
    allGameListItems.forEach(item => {
      if (item.innerText.toLowerCase().includes(platform.toLowerCase())) {
        item.classList.remove('hidden-item');
      } else {
        item.classList.add('hidden-item');
      }
    });
  }


  // Event listener for adding games to the favourites list
  allGameList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      let game = event.target.innerText;
      addToFavouriteGames(game);
    }
  });

  // Add a game to the favourites array and update the UI
  function addToFavouriteGames(game) {
    if (!myGames.includes(game)) {
      myGames.push(game);
      renderFavouriteList();
    }
  }

  // Render the favourites list
  function renderFavouriteList() {
    myGameList.innerHTML = '';
    myGames.forEach(game => {
      myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
  }

  // Event listener for removing games from the favourites list
  myGameList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
      let favGame = event.target.innerText;
      removeFromFavouriteGames(favGame);
    }
  });

  // Remove a game from the favourites list and update the UI
  function removeFromFavouriteGames(game) {
    let index = myGames.indexOf(game);
    if (index > -1) {
      myGames.splice(index, 1);
      renderFavouriteList();
    }
  }
})();
