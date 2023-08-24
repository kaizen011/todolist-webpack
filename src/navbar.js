//navbar.js


function navbarr(){
    const navibari = document.getElementById('navi');
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar')
    const ul = document.createElement('ul');
    ul.classList.add('nav-list');
    const itemi = document.createElement('li');
    const itemi4 = document.createElement('li');
    const itemi2 = document.createElement('li');
    itemi.textContent = 'Notes';
    itemi4.textContent = 'Home';
    itemi2.textContent = 'Projects';

    itemi.classList.add('midtab');
    itemi4.classList.add('backtab');
    itemi2.classList.add('projects');

    ul.appendChild(itemi);
    ul.appendChild(itemi4);
    ul.appendChild(itemi2);

    navbar.appendChild(ul);

    navibari.appendChild(navbar);

}

export default navbarr;