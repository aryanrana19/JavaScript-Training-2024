const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

// SONG TITLES
const songs = ['Everglow', 'Sunflower', 'Blinding Lights']

// KEEP TRACK OF SONGS
let songIndex = 0

// INITIALLY LOAD SONG DETAILS INTO DOM
loadSong(songs[songIndex])

// UPDATE SONG DETAILS
function loadSong(song){
  title.innerHTML = song
  audio.src = `assets/${song}.mp3`
  cover.src = `assets/${song}.jpg`
}

// PLAY SONG
function playSong(){
  musicContainer.classList.add("play")
  playBtn.querySelector('i.fa').classList.remove('fa-play')
  playBtn.querySelector('i.fa').classList.add('fa-pause')
  audio.play()
}

// PAUSE SONG
function pauseSong(){
  musicContainer.classList.remove("play")
  playBtn.querySelector('i.fa').classList.add('fa-play')
  playBtn.querySelector('i.fa').classList.remove('fa-pause')
  audio.pause()
}

// PREV SONG
function prevSong(){
  songIndex--
  if(songIndex < 0){
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}

// NEXT SONG
function nextSong(){
  songIndex++
  if(songIndex > songs.length - 1){
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

// UPDATE TIME 
function updateProgress(e){
  const{duration, currentTime} = e.srcElement
  const progressPercent = (currentTime/duration)*100
  progress.style.width = `${progressPercent}%`
}

// SET PROGRESS BAR
function setProgress(e){
  const width = this.clientWidth
  const ClickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (ClickX/width) * duration
}

// EVENT LISTENERS
playBtn.addEventListener('click', ()=> {
  const isPlaying = musicContainer.classList.contains('play')
  if(isPlaying){
    pauseSong()
  }else{
    playSong()
  }
})

// CHANGE SONG
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

// TIME SONG UPDATE
audio.addEventListener('timeupdate', updateProgress)

// CLICK ON PROGRESS BAR
progressContainer.addEventListener('click', setProgress)

// SONG ENDS
audio.addEventListener("ended", nextSong)