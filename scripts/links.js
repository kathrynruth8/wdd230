const baseURL = 'https://kathrynruth8.github.io/wdd230/';
const linksURL = 'https://kathrynruth8.github.io/wdd230/data/links.json';
const myLinks = document.querySelector('#links');

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  //   console.log(data);
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  weeks.forEach((week) => {
    //create elements to add to the div.links element
    const lesson = document.createElement('p');
    // build the content to show weeks and links
    lesson.textContent = `${week.week}: `;
    const lessonLinks = week.links;

    lessonLinks.forEach((lessonLink, index) => {
      //create elements to add to the div.links element
      const link = document.createElement('a');
      // build the content to show weeks and links
      link.textContent = `${lessonLink.title}`;
      link.setAttribute('href', lessonLink.url);
      // Append the section(link) with the created elements
      lesson.appendChild(link);

      // Check if it's the last element in lessonLinks before adding spacer
      if (index !== lessonLinks.length - 1) {
        const spacer = document.createElement('span');
        spacer.textContent = ' | ';
        lesson.appendChild(spacer);
      }
    });

    myLinks.appendChild(lesson);
  });
}

getLinks();
