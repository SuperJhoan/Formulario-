document.getElementById('payment-form').addEventListener('submit', function(event) {
    const form = event.target;
    const errorMessage = document.getElementById('error-message');
    let valid = true;
  
    // Limpiar mensajes de error previos
    errorMessage.textContent = '';
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        valid = false;
        field.classList.add('error');
      }
    });
  
    if (!valid) {
      event.preventDefault(); // Detener envío
      errorMessage.textContent = 'Some fields are missing';
      errorMessage.style.display = 'block';
    }
  });
  