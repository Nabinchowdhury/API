const loadPlayers = (name) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPlayers(data.player))
}

const showPlayers = players => {
    const playersContainer = document.getElementById("players-container")
    playersContainer.innerHTML = ``
    players.forEach(player => {
        // console.log(player)

        const playerCard = document.createElement("div")
        playerCard.classList.add("col")
        playerCard.innerHTML =
            `
        <div class="card" onclick="loadSelectedPlayer(${player.idPlayer})">
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${player.strSport}</h5>
        <p class="card-text">${player.strDescriptionEN?.slice(0, 300)}</p>
        </div>
        </div>
    `
        playersContainer.appendChild(playerCard)
    });
}



const loadSelectedPlayer = (id) => {

    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showSelectedPlayer(data.players[0]))
}

const showSelectedPlayer = (player) => {
    // console.log(player)

    const showSelectedPlayer = document.getElementById("show-selected-player")
    showSelectedPlayer.innerHTML = ``
    const show = document.createElement('div')
    show.classList.add("container")

    show.innerHTML = `
    
        <img src="${player.strThumb}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Nationality:  ${player.strNationality}</h5>
        <h5 class="card-title">Gender:  ${player.strGender}</h5>
        <h5 class="card-title">Height:  ${player.strHeight}</h5>
        <p class="card-text">${player.strDescriptionEN}</p>
        </div>
        </div>
    `
    showSelectedPlayer.appendChild(show)

}

const searchPlayer = () => {
    const searchField = document.getElementById("search-player")
    const searchedPlayer = searchField.value
    loadPlayers(searchedPlayer)
}
loadPlayers("");