const body = document.getElementsByTagName("body")[0] //this will grab the first element in our list(body tag)

function setColor(name) {
    body.style.backgroundColor = name;    //changes background color to name of button
}

function randomColor() {
    const red = (Math.random() * 255)
    const green = (Math.random() * 255)
    const blue = (Math.random() * 255)
    //will give a random value from 0 - 255

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
    // will create the randomized color and input it on screen.
} 