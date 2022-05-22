const originalDaysCount = 1456
const date1 = new Date('5/22/2022');
const date2 = new Date();
const diffTime = Math.abs(date2 - date1);
const diffDays = originalDaysCount + Math.round(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('days-count').innerHTML = diffDays;
document.getElementById("date").innerText = new Date().toLocaleDateString()

var typed = new Typed("#quote", {
    strings: ["Listen when a girl says NO",
        "JUSTICE DELAYED IS JUSTICE DENIED",
        "Stop teaching Don't Get Raped, start teaching Don't Rape",
        "No mercy, Hang the rapists",
        "Sex or Rape? The difference is consent",
        "When rapists getaway, you might get married to one"
    ],
    typeSpeed: 100,
    BackSpeed: 60,
    fadeOut: true,
    loop: true
})