const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggleBtn');

let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
  // add dark class to body
  body.classList.add('dark');

  // toggle on
  toggleBtn.parentElement.classList.add('on');

  // move the round/circle to the left
  toggleBtn.nextElementSibling.style.transform = 'translateX(-135%)';

  // set darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  // remove dark class from the body
  body.classList.remove('dark');

  // toggle off
  toggleBtn.parentElement.classList.remove('on');

  // move back to the original position
  toggleBtn.nextElementSibling.style.transform = 'translateX(0%)';

  // set darkMode to null
  localStorage.setItem('darkMode', null);
};

// If the user's setting is still enabled dark mode,
// then remain the dark theme
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Event listener
toggleBtn.addEventListener('click', () => {
  // Retrieve current user's localStorage item
  darkMode = localStorage.getItem('darkMode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
