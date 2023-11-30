const url = 'https://kathrynruth8.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#directory-cards');

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.members);
  // displayMembers(data.members);
}
getMemberData();
