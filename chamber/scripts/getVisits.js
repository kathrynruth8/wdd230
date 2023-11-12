function displayMessage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = Date.now();
  const millisecondsInADay = 24 * 60 * 60 * 1000;

  if (!lastVisit) {
    document.getElementById('visits').textContent =
      'Welcome! Let us know if you have any questions.';
  } else {
    const daysBetween = Math.round(
      (currentDate - lastVisit) / millisecondsInADay
    );

    if (daysBetween < 1) {
      document.getElementById('visits').textContent = 'Back so soon! Awesome!';
    } else {
      const message =
        daysBetween === 1
          ? 'You last visited 1 day ago.'
          : `You last visited ${daysBetween} days ago.`;
      document.getElementById('visits').textContent = message;
    }
  }

  localStorage.setItem('lastVisit', currentDate);
}

// Call the displayMessage function when the page loads
displayMessage();
