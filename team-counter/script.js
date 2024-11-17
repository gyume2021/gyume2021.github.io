fetch('https://gyume2021.github.io/team-counter/invert_index.json')
  .then(response => response.json())
  .then(data => {
    const avatars = data.avatars;
    const descriptiveMap = data.descriptive;

    // Populate left column with avatar images
    const avatarContainer = document.getElementById('avatar-container');
    Object.keys(avatars).forEach(avatar => {
      const img = document.createElement('img');
      img.src = `avatars/${avatar}.png`;
      img.alt = avatar;
      img.addEventListener('click', () => displayDescriptiveImages(avatar, avatars, descriptiveMap));
      avatarContainer.appendChild(img);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));

// Display descriptive images in the middle column
function displayDescriptiveImages(avatar, avatars, descriptiveMap) {
  const descriptiveContainer = document.getElementById('descriptive-container');
  const statisticalContainer = document.getElementById('statistical-container');
  descriptiveContainer.innerHTML = ''; // Clear previous images
  statisticalContainer.innerHTML = ''; // Clear previous images


  avatars[avatar].forEach(descImg => {
    const img = document.createElement('img');
    img.src = `descriptive/${descImg}`;
    img.alt = descImg;
    img.addEventListener('click', () => displayStatisticalImage(descImg, descriptiveMap));
    descriptiveContainer.appendChild(img);
  });
}

// Display statistical image in the right column
function displayStatisticalImage(descImg, descriptiveMap) {
  const statisticalContainer = document.getElementById('statistical-container');
  statisticalContainer.innerHTML = ''; // Clear previous image

  const statImg = descriptiveMap[descImg];
  const img = document.createElement('img');
  img.src = `statistics/${statImg}`;
  img.alt = statImg;
  statisticalContainer.appendChild(img);
}