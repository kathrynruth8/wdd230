const url = 'https://kathrynruth8.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#directory-cards');

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.members);
  // displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    const card = document.createElement('section');
    const name = document.createElement('h2');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const description = document.createElement('p');
    const logo = document.createElement('img');
    const { street1, city, state, zipcode } = member.address;
    // Build the text content 
    address.textContent = `${street1} ${city}, ${state} ${zipcode}`;
    phone.textContent = ${member.phone number}
    
  });
}
getMemberData();
