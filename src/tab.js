// tab.js

function tabElements(contentDiv) {

    // TEST APPENDING
    contentDiv.innerHTML = ''; // Clear the content
    const divi = document.createElement('div');
    divi.textContent = 'Hello World';
    contentDiv.appendChild(divi);
}

export default tabElements;
