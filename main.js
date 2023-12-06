const btnSortear = document.querySelector('#btnSortear')
const number = document.querySelector('#number')
const error = document.querySelector('#error')
const resultado = document.querySelector('#resultado')
let numeroAleatorio = Number(Math.floor(Math.random() * 11));

btnSortear.addEventListener('click',(e) => {
    e.preventDefault();
    if(number.value == numeroAleatorio){
        resultado.innerHTML = 'Parabéns!!!'
        resultado.style.color = 'yellow'
    }
})
