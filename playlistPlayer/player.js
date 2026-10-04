playlist = document.querySelector("#playlistContainer");
addButton = document.querySelector("#addBtn");
songTitle = document.querySelector("#songTitle");
songArtist = document.querySelector("#songArtist");

function addSong(title, artist) {
  //console.log("test 1");
  let card = document.createElement("article");
  card.classList.add("songCard");
  let songInfo = document.createElement("span");
  songInfo.innerText = `${title} - ${artist}`;
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.innerText = "Delete";
  //console.log(`${card} test 2`);
  card.appendChild(songInfo);
  card.appendChild(deleteButton);
  playlist.appendChild(card);
  //console.log(`${songInfo} test 3`);
}

function inputSong() {
  if (songArtist.value != "" && songTitle.value != "") {
    //console.log("test 0");
    addSong(songTitle.value, songArtist.value);
    songTitle.value = "";
    songArtist.value = "";
  }
}

function deleteSong(eventObject) {
  console.log(
    `event began at ${eventObject.target.className} and has bubbled up to ${eventObject.currentTarget}`,
  );
  if (eventObject.target.classList.contains("deleteBtn") == true) {
    eventObject.target.parentNode.remove();
  }
}

addButton.addEventListener("click", inputSong);
playlist.addEventListener("click", deleteSong);
