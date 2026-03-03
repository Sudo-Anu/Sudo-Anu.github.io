/* player.js — Local Music Player
 *
 * ─── HOW TO ADD YOUR MUSIC ───────────────────────────────
 *  1. Copy your .mp3 files into  assets/music/
 *  2. Edit the tracks[] array below with correct filenames
 *  3. Save — done!
 *
 * ─── HOW TO CHANGE ALBUM ART ─────────────────────────────
 *  Replace  assets/images/player-art.jpg  with your image.
 *  Or set a per-track art path using the `art` property.
 *
 * ─── EXAMPLE ENTRY ───────────────────────────────────────
 *  { name: 'Song Name', artist: 'Artist', file: 'assets/music/song.mp3' }
 *  { name: 'Song Name', artist: 'Artist', file: 'assets/music/song.mp3', art: 'assets/images/cover.jpg' }
 * ──────────────────────────────────────────────────────── */

var tracks = [
  { name: 'Timeless', artist: 'The Weeknd & Playboi Carti', file: 'assets/music/track1.mp3' },
  { name: 'Luther', artist: 'Kendrick Lamar & SZA', file: 'assets/music/track2.mp3' },
  { name: 'Eastside', artist: 'benny blanco, Halsey & Khalid', file: 'assets/music/track3.mp3' }
];

/* ── State ── */
var audio      = new Audio();
var playerOpen = false;
var playing    = false;
var currentIdx = 0;

/* ── DOM refs (set on DOMContentLoaded) ── */
var elName, elArtist, elFill, elCur, elTot, elPlay, elVol, elList, elArtImg, elArtFb;

/* ── Toggle player open / close ── */
function togglePlayer() {
  playerOpen = !playerOpen;
  document.getElementById('music-player').classList.toggle('open', playerOpen);
  document.getElementById('fab-btn').textContent = playerOpen ? '✕' : '🎵';
}

/* ── Load track by index ── */
function loadTrack(idx) {
  if (!tracks.length) return;
  currentIdx = (idx + tracks.length) % tracks.length;
  var t = tracks[currentIdx];

  audio.src = t.file;
  audio.load();

  elName.textContent   = t.name;
  elArtist.textContent = t.artist;

  // Per-track album art override
  if (t.art && elArtImg) {
    elArtImg.src = t.art;
    elArtImg.style.display = 'block';
    if (elArtFb) elArtFb.style.display = 'none';
  }

  elFill.style.width = '0%';
  elCur.textContent  = '0:00';
  elTot.textContent  = '0:00';
  renderList();
}

/* ── Play / Pause ── */
function togglePlay() {
  if (!tracks.length) {
    alert('No tracks loaded.\nAdd .mp3 files to assets/music/ and update the tracks[] array in js/player.js');
    return;
  }
  if (playing) {
    audio.pause();
  } else {
    audio.play().catch(function() {
      alert('Cannot play: ' + tracks[currentIdx].file + '\nMake sure the file exists in assets/music/');
    });
  }
}

function setPlayState(state) {
  playing = state;
  elPlay.innerHTML = playing ? '&#9646;&#9646;' : '&#9654;';
  if (elArtImg) {
    if (playing) elArtImg.classList.add('spinning');
    else         elArtImg.classList.remove('spinning');
  }
}

/* ── Prev / Next ── */
function prevTrack() { loadTrack(currentIdx - 1); if (playing) audio.play(); }
function nextTrack() { loadTrack(currentIdx + 1); if (playing) audio.play(); }

/* ── Volume ── */
function setVolume(val) { audio.volume = val / 100; }

/* ── Audio events ── */
audio.addEventListener('timeupdate', function() {
  if (!audio.duration) return;
  elFill.style.width = (audio.currentTime / audio.duration * 100) + '%';
  elCur.textContent  = fmtTime(audio.currentTime);
  elTot.textContent  = fmtTime(audio.duration);
});
audio.addEventListener('play',  function() { setPlayState(true);  });
audio.addEventListener('pause', function() { setPlayState(false); });
audio.addEventListener('ended', function() {
  loadTrack(currentIdx + 1);
  audio.play().catch(function() {});
});

/* ── Seek on progress bar click ── */
document.addEventListener('DOMContentLoaded', function() {
  var bar = document.getElementById('progress-bar');
  if (bar) {
    bar.addEventListener('click', function(e) {
      if (!audio.duration) return;
      var r = bar.getBoundingClientRect();
      audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
    });
  }
});

/* ── Render track list ── */
function renderList() {
  if (!elList) return;
  elList.innerHTML = '';
  tracks.forEach(function(t, i) {
    var d = document.createElement('div');
    d.className = 'track-item' + (i === currentIdx ? ' active' : '');
    d.innerHTML =
      '<span class="track-item-num">' + (i + 1) + '</span>' +
      '<div class="track-item-info">' +
        '<div class="track-item-name">'   + esc(t.name)   + '</div>' +
        '<div class="track-item-artist">' + esc(t.artist) + '</div>' +
      '</div>';
    d.addEventListener('click', (function(idx) {
      return function() { loadTrack(idx); audio.play().catch(function() {}); };
    })(i));
    elList.appendChild(d);
  });
}

/* ── Helpers ── */
function fmtTime(s) {
  if (isNaN(s)) return '0:00';
  var m   = Math.floor(s / 60);
  var sec = Math.floor(s % 60);
  return m + ':' + (sec < 10 ? '0' : '') + sec;
}

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  elName   = document.getElementById('track-name');
  elArtist = document.getElementById('track-artist');
  elFill   = document.getElementById('progress-fill');
  elCur    = document.getElementById('time-current');
  elTot    = document.getElementById('time-total');
  elPlay   = document.getElementById('play-btn');
  elVol    = document.getElementById('vol-slider');
  elList   = document.getElementById('track-list');
  elArtImg = document.getElementById('player-art-img');
  elArtFb  = document.getElementById('player-art-fallback');

  if (elVol) audio.volume = elVol.value / 100;

  if (tracks.length) {
    loadTrack(0);
  } else {
    if (elName)   elName.textContent   = 'No tracks yet';
    if (elArtist) elArtist.textContent = 'Add music to assets/music/';
  }
});
