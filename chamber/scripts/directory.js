const url = 'https://kathrynruth8.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#directory-cards');

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.members);
  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    const card = document.createElement('section');
    card.className = 'member-card';
    const name = document.createElement('h2');
    // const address = document.createElement('p');
    const phone = document.createElement('p');
    const description = document.createElement('p');
    const websiteBox = document.createElement('p');
    const website = document.createElement('a');
    const logo = document.createElement('img');
    card.appendChild(name);

    const address = member.address;
    address.forEach((addressLine) => {
      const address = document.createElement('p');
      address.textContent = `${addressLine.line1} ${addressLine.city}, ${addressLine.state} ${addressLine.zipcode}`;
      card.appendChild(address);
    });
    // Build the text content
    name.textContent = member.name;
    address.textContent = `${member.address}`;
    phone.textContent = member.phone;
    description.textContent = member.description;
    description.id = 'directory-description';
    website.setAttribute('href', member.url);
    websiteBox.id = 'directory-website';
    websiteBox.appendChild(website);
    website.textContent = 'Visit Us';
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `logo for ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '250');
    logo.setAttribute('height', 'auto');
    // Append the section(card) with the created elements

    card.appendChild(phone);
    card.appendChild(description);
    card.appendChild(websiteBox);
    card.appendChild(logo);
    cards.appendChild(card);
  });
}
getMemberData();

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#directory-cards');

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener('click', () => {
  // example using arrow function
  display.classList.add('grid');
  display.classList.remove('list');
});

listbutton.addEventListener('click', showList); // example using defined function

function showList() {
  display.classList.add('list');
  display.classList.remove('grid');
}
