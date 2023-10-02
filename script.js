const showDays = document.getElementById("days-count")
const showDate = document.querySelector('#date')

let diffDays
showDate.innerText = new Date().toLocaleDateString()
showDays.innerText = 0

var typed = new Typed("#quote", {
    strings: ["Listen when a girl says NO",
        "JUSTICE DELAYED IS JUSTICE DENIED",
        "Stop teaching Don't Get Raped, start teaching Don't Rape",
        "No mercy, Hang the rapists",
        "Sex or Rape? The difference is consent",
        "When rapists getaway, you might get married to one"
    ],
    typeSpeed: 50,
    BackSpeed: 60,
    fadeOut: true,
    loop: true
})

function calculateDays() {
    const date1 = new Date('7/27/2018');
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    updateCounter()
}

function updateCounter() {
    const counterStart = +  showDays.innerText
    const incrementValue = diffDays / 50
    if (counterStart < diffDays) {
        showDays.innerText = `${Math.round(counterStart + incrementValue)}`
        setTimeout(updateCounter, 90)
    } else {
        showDays.innerText = diffDays
    }
}
window.onload = calculateDays()