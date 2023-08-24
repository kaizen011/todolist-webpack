//pageLoad.js


function createAndAppendElements(){
    const contentDiv = document.getElementById('content');
    // Header Code
    const midbar = document.createElement('div');
    midbar.classList.add('midbar');
    const heading = document.createElement('h1');
    heading.textContent = 'To-Do List :D';

    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Modern yet simplistic to-do list application.';
    


    midbar.appendChild(heading);
    midbar.appendChild(paragraph);

    contentDiv.appendChild(midbar);

    // Content Code
    // const services = document.createElement('div');
    // services.classList.add('services');
    

    //  const service1 = document.createElement('div');
    //  const service2 = document.createElement('div');
    //  const service3 = document.createElement('div');
    //  const service4 = document.createElement('div');

   

    //  let img = document.createElement("img")
    //  img.setAttribute("src", "https://www.e-spincorp.com/wp-content/uploads/2018/02/deeplearning-security.png");
    //  img.setAttribute("height", "280px");
    //  img.setAttribute("width", "250px");

    //  service1.appendChild(img); 
    //  service2.appendChild(img.cloneNode(true));
    //  service3.appendChild(img.cloneNode(true));
    //  service4.appendChild(img.cloneNode(true));
    

    //  services.appendChild(service1);
    //  services.appendChild(service2);
    //  services.appendChild(service3);
    //  services.appendChild(service4);


    //  contentDiv.appendChild(services);


    
     return contentDiv;
}


export default createAndAppendElements;
