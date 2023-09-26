// Name: Kathryn Lambert
// Class: WDD 230 - 01
// Date: 9/26/2023

//Purpose: Week 2 learning activities, learning the DOM. Top 10 BOM chapters
// Build the following application which allows users to enter their favorite
// Book of Mormon chapters and display them on a list that is updated automatically
// on the screen. Entries can be deleted from the displayed list by the user.

// In your js file, declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
const feedback = document.querySelector("#feedback");

// Create a click event listener for the Add Chapter button using addEventListener and a function.
button.addEventListener("click", () => {
  // In the click event function block {...}, do the following:

  // 1. check to make sure the input is not blank before doing the following
  // remaining tasks with an if block, otherwise provide a message
  // or at least do nothing and return the .focus() to the input field.
  if (input.value) {
    console.log("Clicked");
    // 2. create a li element
    const bomList = document.createElement("li");
    // 3. create a delete button
    const deleteButton = document.createElement("button");
    // 4. populate the li elements textContent or innerHTML with the input value
    bomList.textContent = input.value;
    // 5. populate the button textContent with a "X"
    deleteButton.textContent = "❌";
    // 6. append the li element with the delete button
    bomList.append(deleteButton);
    // 7. append the li element to the unordered list in your HTML
    list.append(bomList);
    // 8. add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener("click", () => {
      list.removeChild(bomList);
      input.focus();
    });
    // 9. send the focus to the input element
    input.focus();
    // 10. change the input value to nothing or the empty string to clean up the interface for the user
    input.value = "";
  }
  // else {
  //     input.focus();
  //     feedback.textContent = "Please enter a book and chapter.";
  //   }
});
