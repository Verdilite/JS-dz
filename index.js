let userName = prompt( "Назовте себя" )
let r = prompt("Укажите радиус цылиндра")
let h = prompt("Укажите высоту цылиндра")
let V =  Math.PI* r**2 * h
console.log("Здравствуйте "+ userName +", Объем цилиндра с параметрами:" + "радиуса = "+ r +" и высотой = " + h +', равен '+ V)
