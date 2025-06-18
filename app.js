let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();
date.innerHTML = today.getDate();
day.innerHTML = today.toLocaleString('default', { weekday: 'long' });
month.innerHTML = today.toLocaleString('default', { month: 'long' });
year.innerHTML = today.getFullYear();