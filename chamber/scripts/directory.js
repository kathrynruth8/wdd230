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
    card.id = 'member-card';
    const name = document.createElement('h3');
    // const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const description = document.createElement('p');
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
    website.textContent = member.url;
    description.textContent = member.description;
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `logo for ${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', 'auto');
    // Append the section(card) with the created elements

    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(description);
    card.appendChild(logo);
    cards.appendChild(card);
  });
}
getMemberData();
