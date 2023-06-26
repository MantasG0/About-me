const container = document.querySelector('.text1');
const textElement = document.getElementById('p-text');

function adjustFontSize() {
    const originalFontSize = parseFloat(getComputedStyle(textElement).fontSize);

    const computedStyles = getComputedStyle(container);

    const paddingTop = parseFloat(computedStyles.paddingTop);
    const paddingBottom = parseFloat(computedStyles.paddingBottom);

    const containerHeight = container.clientHeight - paddingTop - paddingBottom;


    textElement.style.fontSize = originalFontSize + 'px'; // Reset font size before calculating
    console.log("Container height: "+containerHeight)
    console.log("text height: "+textElement.scrollHeight)
    const currentFontSize = parseFloat(textElement.style.fontSize);
    if (textElement.scrollHeight >= containerHeight) {
        if (currentFontSize <= 1) return;
        
        textElement.style.fontSize = (currentFontSize - 1) + 'px';
    } else if (currentFontSize < 16 && textElement.scrollHeight+ 40<containerHeight) {
        textElement.style.fontSize = (currentFontSize + 1) + 'px';
    }
}

window.addEventListener('resize', adjustFontSize);
adjustFontSize();