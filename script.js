const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let min = dateToday.getMinutes()
    let s = dateToday.getSeconds()

    if (hr <10) hr ='0' + hr
    if (min <10) min = '0' + min
    if (s <10) s = '0' + s

    if ( hr >1 && hr <=6) {
        document.body.style.backgroundColor = 'gray'
    } else if (hr <=12) {
        document.body.style.backgroundColor = 'yelow'
    } else if (hr <=18 ) {
        document.body.style.backgroundColor = 'orange'
    } else {
        document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.877)'
    }


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = s

    
})