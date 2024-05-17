document.querySelectorAll('.interactive-dot').forEach(dot => {
    dot.addEventListener('click', function() {
        const infoBox = document.getElementById('info-box');
        const svgRect = document.querySelector('.interactive-svg').getBoundingClientRect();

        const textX = parseFloat(dot.getAttribute('data-tx')) * svgRect.width / 100; 
        const textY = parseFloat(dot.getAttribute('data-ty')) * svgRect.height / 100; 

        infoBox.style.left = `${textX}px`;
        infoBox.style.top = `${textY}px`;
        infoBox.style.display = 'block';
        infoBox.textContent = dot.getAttribute('data-info');

    });
});

