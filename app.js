const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const time = document.querySelector('.time')
const output = document.querySelector('.output')
const boxs = document.querySelectorAll('.box')
const start = document.querySelector('.start')
let pickRandom = Math.floor(Math.random() * boxs.length)

let allowClick = true;

window.onload = function(){
    allowClick = false
    clearInterval(timer)
}

// Function for Dark Mode
dark.onclick =()=> {
   document.body.classList.add('dark-mode');
    dark.style.display = 'none'
    light.style.display = 'block'
}

// Function for Light Mode

light.onclick =()=> {
    document.body.classList.remove('dark-mode');
     dark.style.display = 'block'
     light.style.display = 'none'
 }


// Add event listener

let timeCount = 8

let timer = setInterval(function(){
    timeCount-=1
    time.innerHTML =`Time: ${timeCount}s`

    if(timeCount < 1){
        time.innerHTML = `Time: 0s`;
        clearInterval(timer)
        allowClick = false;
        output.innerHTML= 'Sorry! Try Again!'
    }

},1000)

boxs.forEach((box, index) => {
    box.addEventListener('click', () =>{
       if(allowClick) {
         findingTreasure(box, index)
         
       } 
    })
 
})


// Function in finding Treasure

const findingTreasure = (box, index) => {

    if (index === pickRandom){
        box.style.background ='none'
        output.innerHTML = 'You found the Treasure!'
        box.innerHTML =`<img src="treasure-png.png" width='250px' height='150px'></img>`
        allowClick = false;
        clearInterval(timer)
        start.style.background = 'green';
    }else{
        box.style.background ='red';
        box.innerHTML ='Wrong Box'
        
    }
 
}

// Start Button
start.onclick = () => {
    start.style.background = 'rgb(58, 247, 58)';
    allowClick = true;
    output.innerHTML='';
    timeCount = 8;
    pickRandom = Math.floor(Math.random() * boxs.length)
    boxs.forEach((box) => {
        box.style.background ='green'
        box.innerHTML ='Check!'
    })

    timer = setInterval(function(){
        timeCount-=1
        time.innerHTML =`Time: ${timeCount}s`
    
        if(timeCount < 1){
            start.style.background = '#008000';
            time.innerHTML = `Time: 0s`
            clearInterval(timer)
            allowClick = false;
            output.innerHTML= 'Sorry! Try Again!'
        }
    
    },1000)
    
}