let colors = ["blue", "yellow", "orange", "green", "violet"];

let button = document.getElementById('header');
button.addEventListener('click', function(){
    console.log('test')
    var randomColor = colors[Math.floor(Math.random()* colors.length)]

    let container = document.getElementById('bdy');
    container.style.background = randomColor;
    
});