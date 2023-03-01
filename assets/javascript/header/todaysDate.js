const todaysDate = document.querySelector('.todays-date');

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // getMonth() returns month from 0 to 11, so add 1 to get the correct month number
const year = currentDate.getFullYear();
const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

todaysDate.innerHTML = formattedDate;