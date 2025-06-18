// Create an array with 6 song titles.
const top6 = [
  'Darnell',
  'I luv it',
  'Gangnam style',
  'Blammed',
  'Pico',
  'Assumptions'
];

// Show the first song title in the center of the screen.
document.getElementById('eersteNummer').textContent = top6[0];

// Show the third song title at the bottom right.
document.getElementById('derdeNummer').textContent = "Verzoeknummer: " + top6[2];

// Display all song titles in a numbered list.
const lijst = document.getElementById('hitlijst');
top6.forEach(function(song) {
  const li = document.createElement('li');
  li.textContent = song;
  lijst.appendChild(li);
});