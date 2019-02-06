// Your code goes here

//Selectors

//nav Links
let navA = document.querySelectorAll('a');

//funBus Image
let topImg = document.querySelector('img');

//lets go and adventure awaits
let middleContent = document.getElementsByClassName('content-section');

//Sign Me Up buttons
let buttons = document.getElementsByClassName('btn');

let homeAlert = navA[0].addEventListener('click', (event) =>{ alert('You are already at the Home Page')});

let fullVWVH = topImg.addEventListener('mouseenter', (event2) =>{
    topImg.style.width = '100vw';
    topImg.style.height = '100vh';
});

let smallImg = topImg.addEventListener('mouseleave', (event) =>{
    topImg.style.width = '10vw';
    topImg.style.height = '10vw';
});

let colorChange = middleContent[1].addEventListener('dblclick', (event) =>{
    middleContent[0].style.backgroundColor = 'green';
    middleContent[1].style.backgroundColor = 'green';
    middleContent[0].style.color = 'yellow';
    middleContent[1].style.color = 'yellow';
    alert('Click on paragraph just above to revert');
});

let normalize = middleContent[0].addEventListener('mousedown', (event) =>{
    middleContent[0].style.backgroundColor = 'white';
    middleContent[1].style.backgroundColor = 'white';
    middleContent[0].style.color = 'black';
    middleContent[1].style.color = 'black';    
});

let hacked = buttons[0].addEventListener('copy', (event) =>{
    alert('Your computer has been hacked!!!');
});

let saved = buttons[1].addEventListener('mouseup', (event) => {   
    alert('Your computer is now safe');
});

let imageChange = buttons[2].addEventListener('wheel', (event) => {
    topImg.setAttribute('src','https://lp.medicalnewstoday.com/content/images/headlines/271/271157/bananas.jpg');
});
