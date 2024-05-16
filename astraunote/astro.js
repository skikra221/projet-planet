let previousLine = null; 

document.querySelectorAll('.interactive-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const infoBox = document.getElementById('info-box');
        const rect = dot.getBoundingClientRect(); 
        const svgRect = document.querySelector('.interactive-svg').getBoundingClientRect();

        const dotX = rect.left - svgRect.left + dot.r.baseVal.value; 
        const dotY = rect.top - svgRect.top + dot.r.baseVal.value; 

        const textX = parseFloat(dot.getAttribute('data-tx')) * svgRect.width / 100; 
        const textY = parseFloat(dot.getAttribute('data-ty')) * svgRect.height / 100; 

        infoBox.style.left = `${textX}px`;
        infoBox.style.top = `${textY}px`;
        infoBox.style.display = 'block';
        infoBox.textContent = dot.getAttribute('data-info');

        if (previousLine) {
            previousLine.parentNode.removeChild(previousLine);
        }

        drawLine(dotX, dotY, textX, textY);

        previousLine = document.querySelector('.interactive-svg line');
    });
});

function drawLine(x1, y1, x2, y2) {
    const svg = document.querySelector('.interactive-svg');
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', 'white');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);
}
