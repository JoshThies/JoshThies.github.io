const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['Ch1_1.png', 'Ch1_2.png', 'Ch1_3.png', 'Ch1_4.png', 'Ch1_5.png'];

/* Declaring the alternative text for each image file */
var altDict = {
    'Ch1_1.png': "Star child over spaceship",
    'Ch1_2.png': "Girl talking to crying star child",
    'Ch1_3.png': "Girl and star child pinky promising",
    'Ch1_4.png': "Girl and star child looking through telescope",
    'Ch1_5.png': "Spaceship leaving the planet"
};

/* Looping through images */
for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click',  e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
}

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });



/* Wiring up the Darken/Lighten button */
