const container = document.querySelector('.text1');
const textElement = document.getElementById('p-text');

function adjustFontSize() {
    const originalFontSize = parseFloat(getComputedStyle(textElement).fontSize);

    const computedStyles = getComputedStyle(container);

    const paddingTop = parseFloat(computedStyles.paddingTop);
    const paddingBottom = parseFloat(computedStyles.paddingBottom);

    const containerHeight = container.clientHeight - paddingTop - paddingBottom;

    textElement.style.fontSize = originalFontSize + 'px'; // Reset font size before calculating

    while (textElement.scrollHeight > containerHeight) {
        const currentFontSize = parseFloat(textElement.style.fontSize);
        if (currentFontSize <= 1) return;
        
        textElement.style.fontSize = (currentFontSize - 1) + 'px';
    }

    while (textElement.scrollHeight + 40 < containerHeight && parseFloat(textElement.style.fontSize) < 16) {
        const currentFontSize = parseFloat(textElement.style.fontSize);
        textElement.style.fontSize = (currentFontSize + 1) + 'px';
    }
}
window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);
adjustFontSize();