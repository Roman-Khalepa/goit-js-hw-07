const elemInput = document.querySelector('#name-input');
const elemOutput = document.querySelector('#name-output');
elemInput.addEventListener('input', () => {
  const trimmedValue = elemInput.value.trim();
  elemOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
