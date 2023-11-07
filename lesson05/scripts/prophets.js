const url =
  'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayProphets(data.prophets);
}

function displayProphets(prophets) {
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    card.appendChild(fullName);
    cards.appendChild(card);
  });
}
getProphetData();
