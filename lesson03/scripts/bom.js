// Name: Kathryn Lambert
// Class: WDD 230 - 01
// Date: 9/26/2023

//Purpose: Week 2 learning activities, learning the DOM. Top 10 BOM chapters
// Build the following application which allows users to enter their favorite
// Book of Mormon chapters and display them on a list that is updated automatically
// on the screen. Entries can be deleted from the displayed list by the user.

// In your js file, declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const feedback = document.querySelector('#feedback');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Create a click event listener for the Add Chapter button using addEventListener and a function.
button.addEventListener('click', () => {
  if (input.value) {
    // make sure input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value); //add chapter to array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; //clear the input
    input.focus(); // set the focus back to the input
  }
});

function displayList(item) {
  let li = document.createElement('li'); // 2. create a li element
  let deleteButton = document.createElement('button'); // 3. create a delete button
  li.textContent = item; // 4. populate the li elements textContent or innerHTML with the item
  deleteButton.textContent = '❌'; // 5. populate the button textContent with a "X"
  deleteButton.classList.add('delete');
  li.append(deleteButton); // 6. append the li element with the delete button
  list.append(li); // 7. append the li element to the unordered list in your HTML
  deleteButton.addEventListener('click', () => {
    // 8. add an event listener to the delete button that removes the li element when clicked
    list.removeChild(li);
    deleteChapter(li.textContent); // new function needed to remove the chapter from the array and localStorage.
    input.focus();
  });
}

function setChapterList() {
  localStorage.setItem('BOMListFavorites', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('BOMListFavorites'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
// else {
//     input.focus();
//     feedback.textContent = "Please enter a book and chapter.";
//   }
