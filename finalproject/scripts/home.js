let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

const hambutton = document.querySelector('#hambutton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navmenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

let visitCountHome = localStorage.getItem('visitCountHome');


if (visitCountHome === null) {
  visitCountHome = 1;
  localStorage.setItem('visitCountHome', visitCountHome);
} else {
  
  visitCountHome = parseInt(visitCountHome) + 1;
  localStorage.setItem('visitCountHome', visitCountHome);
}
let visitCountHomeElement = document.getElementById('visit-count-home');


visitCountHomeElement.textContent = `You have visited this site ${visitCountHome} times.`;