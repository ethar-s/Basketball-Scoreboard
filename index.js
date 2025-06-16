let homeEl = 0
let guestEl = 0

let home =  document.getElementById("home-el") 
let guest = document.getElementById("guest-el")
let sumHome = 0
let sumGuest = 0

home.textContent = homeEl
guest.textContent = guestEl

function home1() {
    sumHome += 1
    home.textContent = sumHome
}

function home2() {
    sumHome += 2
    home.textContent = sumHome
}

function home3() {
    sumHome += 3
    home.textContent = sumHome
}

function guest1() {
    sumGuest += 1
    guest.textContent = sumGuest
}

function guest2() {
    sumGuest += 2
    guest.textContent = sumGuest
}

function guest3() {
    sumGuest += 3
    guest.textContent = sumGuest
}
