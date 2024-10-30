let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navmenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

let visitCountNews = localStorage.getItem('visitCountNews');


if (visitCountNews === null) {
  visitCountNews = 1;
  localStorage.setItem('visitCountNews', visitCountNews);
} else {
  
  visitCountNews = parseInt(visitCountNews) + 1;
  localStorage.setItem('visitCountNews', visitCountNews);
}
let visitCountNewsElement = document.getElementById('visit-count-news');


visitCountNewsElement.textContent = `You have visited this site ${visitCountNews} times.`;