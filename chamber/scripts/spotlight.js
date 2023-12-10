const myUrl = 'https://kathrynruth8.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('.spotlights-card');

// Assuming 'members' is your JSON data

// Function to get random members with gold or silver membership
function getRandomMembers(members, membershipType) {
  const filteredMembers = members.filter(
    (member) => member.membership === membershipType
  );
  return filteredMembers[Math.floor(Math.random() * filteredMembers.length)];
}

// Function to populate spotlight sections
function populateSpotlights(membersData) {
  const spotlightElements = [
    document.getElementById('spotlight1'),
    document.getElementById('spotlight2'),
    document.getElementById('spotlight3'),
  ];

  // Select three random gold or silver members for spotlights
  const goldMembers = getRandomMembers(membersData, 'gold');
  const silverMembers = getRandomMembers(membersData, 'silver');

  // Populate spotlight sections
  spotlightElements[0].innerHTML = `
      <h2>${goldMembers.name}</h2>
      <img src="${goldMembers.imageurl}" alt="${goldMembers.name}" />
      <ul>
        <li>${goldMembers.description}</li>
        <li>${goldMembers.phone}</li>
        <li>${goldMembers.url}</li>
      </ul>
    `;

  spotlightElements[1].innerHTML = `
      <h3>${silverMembers.name}</h3>
      <img src="${silverMembers.imageurl}" alt="${silverMembers.name}" />
      <ul>
        <li>${silverMembers.description}</li>
        <li>${silverMembers.phone}</li>
        <li>${silverMembers.url}</li>
      </ul>
    `;
}

// Fetch JSON data and populate spotlights when the page loads
window.addEventListener('load', () => {
  fetch(myUrl)
    .then((response) => response.json())
    .then((data) => populateSpotlights(data.members))
    .catch((error) => console.error('Error fetching data:', error));
});
