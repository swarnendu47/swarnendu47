function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = padZero(hours);
  minutes = padZero(minutes);
  seconds = padZero(seconds);

  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = timeString;

  setTimeout(updateClock, 1000); // Update every second
}

function padZero(num) {
  return (num < 10 ? "0" : "") + num;
}

// Start the clock
updateClock();

document.getElementById('search-button').addEventListener('click', function() {
  performSearch();
});

document.getElementById('search-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

function performSearch() {
  var searchQuery = document.getElementById('search-input').value;
  if (searchQuery.trim() !== '') {
    var url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
    window.open(url, '_blank');
  }
}
