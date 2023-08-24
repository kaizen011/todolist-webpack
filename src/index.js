//index.js
import createAndAppendElements from "./pageLoad";
import './styles.css';
import tabElements from "./tab";
import navbarr from "./navbar";

// Waiting for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', ()=> {
    navbarr();
    const contentDiv = createAndAppendElements();

    const itemi = document.querySelector('.midtab');
    const itemi4 = document.querySelector('.backtab');

    itemi4.addEventListener('click', function(){
        contentDiv.innerHTML = '';
        createAndAppendElements();
    });


    itemi.addEventListener('click', function(){
        tabElements(contentDiv);
    });
    

    console.log("Event listener added"); // checking
});
