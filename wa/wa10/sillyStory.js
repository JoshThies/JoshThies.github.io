const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 69 fahrenheit outside, so :insertx: didn't get out of bed. When they fell :inserty:, they accepted their fate, then :insertz:. Bob made a cat noise and ran away — :insertx: weighs 420 pounds, but I don't know why that is relevant.";
var insertX = ["your Mom", "Oliver Twist", "Beyonce"];
var insertY = ["asleep", "victim to the plague", "through the next dimension"];
var insertZ = ["did a TikTok dance", "suddenly got a genius idea for their next Twitter post", "checked their daily horoscope"];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(420/14);
        newStory = newStory.replace("420 pounds", weight + " stone");

        var temperature =  Math.round((69-32) * 5/9);
        newStory = newStory.replace("69 fahrenheit", temperature + " centigrade");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}