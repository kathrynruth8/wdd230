// Function to show or hide the banner based on the day of the week
function toggleBannerVisibility() {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)

  // Show the banner only on Mondays, Tuesdays, and Wednesdays (0, 1, 2)
  const meetGreetBanner = document.getElementById('meetGreetBanner');
  meetGreetBanner.style.display =
    dayOfWeek >= 0 && dayOfWeek <= 2 ? 'block' : 'none';
  // dayOfWeek >= 0 && dayOfWeek <= 6 ? 'block' : 'none';
}

// Function to close the banner when the close button is clicked
function closeBanner() {
  const meetGreetBanner = document.getElementById('meetGreetBanner');
  meetGreetBanner.style.display = 'none';
}

// Add event listener to the close button
const closeBannerButton = document.getElementById('closeBannerButton');
closeBannerButton.addEventListener('click', closeBanner);

// Check and toggle banner visibility when the page loads
window.addEventListener('load', toggleBannerVisibility);
