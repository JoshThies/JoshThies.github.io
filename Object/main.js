const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['FullBox.jpg', 'EmptyBox.jpg', 'ArduinoSetup.jpg', 'LightSensor.jpg', 'Speaker.jpg', 'UltrasonicSensor.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'FullBox.jpg': "Full Box",
    'EmptyBox.jpg': "Empty Box",
    'ArduinoSetup.jpg': "Arduino Setup",
    'LightSensor.jpg': "Light Sensor",
    'Speaker.jpg': "Speaker",
    'UltrasonicSensor.jpg':"Ultrasonic Sensor"
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