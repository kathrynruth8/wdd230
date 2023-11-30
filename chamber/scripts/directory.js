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
    const card = document.createElement('section');
    const name = document.createElement('h2');
    const address = document.createElement('p');
    const phone = document.createElement('p');
    const website = document.createElement('p');
    const description = document.createElement('p');
  });
}
getMemberData();
