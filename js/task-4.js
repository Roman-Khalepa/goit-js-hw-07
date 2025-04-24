const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  let isValid = true;
  const formElements = form.elements;
  Object.values(formElements).forEach(input => {
    if (input.tagName === 'INPUT' && input.type !== 'submit') {
      if (input.value.trim() === '') {
        isValid = false;
      }
    }
  });
  if (!isValid) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value.trim(),
  };
  console.log(formData);
  form.reset();
});
