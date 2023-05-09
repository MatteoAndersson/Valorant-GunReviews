// Select the dropdown menu element
const selectMenu = document.querySelector('#menu');

// Add an event listener to the dropdown menu that listens for when the user selects an option
selectMenu.addEventListener('change', () => {
  // Get the value of the selected option
  const optionSelected = selectMenu.options[selectMenu.selectedIndex].value;

  // Select all of the gun buttons on the page
  const buttons = document.querySelectorAll('.gun-link');

  // Create an array of objects that includes the button element, the name of the gun, and its rating
  const buttonArray = Array.from(buttons).map(button => {
    const name = button.querySelector('h1').textContent.trim();
    const rating = button.querySelectorAll('.stars-under-gun-properties[src$="filled.png"]').length;
    return {
      button,
      name,
      rating
    };
  });

  // Sort the buttonArray based on the selected option
  if (optionSelected === 'alphabetical') {
    buttonArray.sort((a, b) => b.name.localeCompare(a.name));
  } else if (optionSelected === 'reverse-alphabetical') {
    buttonArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (optionSelected === 'rating') {
    buttonArray.sort((a, b) => a.rating - b.rating);
  } else if (optionSelected === 'reverse-rating') {
    buttonArray.sort((a, b) => b.rating - a.rating);
  }

  // Select the container that holds the gun buttons and clear its contents
  const container = document.querySelector('.gun-selection1');
  container.innerHTML = '';

  // Add the sorted gun buttons to the container
  buttonArray.forEach(item => {
    container.appendChild(item.button);
  });
});