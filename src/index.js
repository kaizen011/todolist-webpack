//index.js
import createAndAppendElements from "./pageLoad";
import './styles.css';
import tabElements from "./tab";
import navbarr from "./navbar";
import projectsPop from "./project";

// Waiting for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', ()=> {
    navbarr();
    const contentDiv = createAndAppendElements();

    const itemi = document.querySelector('.midtab');
    const itemi4 = document.querySelector('.backtab');
    const itemi2 = document.querySelector('.projects');

    itemi4.addEventListener('click', function(){
        contentDiv.innerHTML = '';
        createAndAppendElements();
    });


    itemi.addEventListener('click', function(){
        tabElements(contentDiv);
    });

    itemi2.addEventListener('click', function(){
        projectsPop(contentDiv);
    });
    
    

    console.log("Event listener added"); // checking
});
