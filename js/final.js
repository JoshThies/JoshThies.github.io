function removeButton() {
    var button = document.getElementById("myButton");
    if (button) {
        button.remove();
    }
}

let i = 0;
created = false;

function createButton() {
    if (i < 10) {
        var displayContainer = document.getElementById("displayContainer");
        var buttonContainer = document.getElementById("buttonContainer");

        var button = document.createElement("button");
        button.id = "myButton";
        button.innerHTML = "Click Me!";
        buttonContainer.appendChild(button);

        var countDisplay = document.createElement("span");
        countDisplay.id = "count";
        displayContainer.appendChild(countDisplay);

        // Set initial content of countDisplay to 0
        countDisplay.innerHTML = "0";

        var count = 0;

        button.addEventListener("click", function() {
            count += 1;
            countDisplay.innerHTML = count;
        });

        setTimeout(function() {
            if (count === 0) {
                countDisplay.innerHTML = count; // Display '0' if no clicks
            }
            removeButton();
            i++;
            createButton();
        }, 1000); // One-second timer
    }
    else{
        if (!created){
            created = true;
            var submit = document.createElement("button");
            submit.id = "submitButton";
            submit.innerHTML = "Submit!";
            submitContainer.appendChild(submit);
            submit.addEventListener("click", function(){
                var body = document.body;
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
                var newDivElement = document.createElement("div");

                // Set attributes or properties for the div
                newDivElement.id = "newDivId"; // Set an ID for the new div
                newDivElement.textContent = "Thank you for your submission"; // Set text content for the div

                // Find the body element or any other element where you want to append the new div
                var body = document.body;

                // Append the newly created div to the body
                body.appendChild(newDivElement);
            });
        }
    }
}

var createVanishingButton = document.getElementById("createVanishingButton");
createVanishingButton.addEventListener("click", function() {
    createButton();
    var thisButton = document.getElementById("createVanishingButton");
    thisButton.remove();
});

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function() {
    if(i==10){
        var displayContainer = document.getElementById("displayContainer");
        while (displayContainer.firstChild) {
            displayContainer.removeChild(displayContainer.firstChild);
        }
        i = 0;
        createButton();
    }
});