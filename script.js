const h1 = document.querySelector('h1');


const changeBackgroundColor = (event) => {
    let x = event.clientX;
    let y = event.clientY;

    h1.textContent = `${x}, ${y}`

    let red = x / window.innerWidth * 100
    let green = y / window.innerHeight * 100
    let blue = ((x / window.innerWidth + y / window.innerHeight) * 100) / 2

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
}


document.body.addEventListener('mousemove', changeBackgroundColor)