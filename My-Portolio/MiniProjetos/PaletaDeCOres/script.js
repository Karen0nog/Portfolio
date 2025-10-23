const generateButton = document.querySelector("#generate-button");
const paletteContainer = document.querySelector("#palette");

document.addEventListener("DOMContentLoaded", () => {
  generateColors();
  generateButton.addEventListener("click", generateColors);
  paletteContainer.addEventListener("click", handleColorClick);
});

function generateColors() {
  paletteContainer.innerHTML = "";
  const numberOfColors = 5;
  for (let i = 0; i < numberOfColors; i++) {
    const colorHex = generateRandomColor();
    createColorBlock(colorHex);
  }
}

function createColorBlock(colorHex) {
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');
    colorBlock.style.backgroundColor = colorHex;
    colorBlock.dataset.color = colorHex;

    const colorName = document.createElement('p');
    colorName.innerText = colorHex;

    colorBlock.appendChild(colorName);
    paletteContainer.appendChild(colorBlock);
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function handleColorClick(event) {
    const colorBlock = event.target.closest('.color-block');
    if (colorBlock) {
        const colorCopy = colorBlock.dataset.color;

        navigator.clipboard.writeText(colorCopy).then(() => {
            const originalText = colorBlock.querySelector('p').innerText;
            colorBlock.querySelector('p').innerText = 'Copiado!';

            setTimeout(() => {
                colorBlock.querySelector('p').innerText = originalText;
            },800);
        }).catch (error => {
            console.error('Falha ao copiar:', error);
        });
    }

}
