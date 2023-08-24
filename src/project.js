// project.js

// Showcasing projects



function projectsPop(contentDiv){
    contentDiv.innerHTML = '';
    const testDiv = document.createElement('div');
    testDiv.textContent = 'Test Projects';
    contentDiv.appendChild(testDiv);
}

export default projectsPop;