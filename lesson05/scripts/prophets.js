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
    const birthdate = document.createElement('p');
    const placeOfBirth = document.createElement('p');
    const portrait = document.createElement('img');
    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute(
      'alt',
      `portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}
getProphetData();
