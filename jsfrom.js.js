const bookingForm = document.getElementById('booking-form');
const statusMessage = document.getElementById('form-status');
const submitButton = bookingForm.querySelector('.submit-button');
const shippingDate = document.getElementById('shipping-date');

shippingDate.min = new Date().toISOString().split('T')[0];

bookingForm.addEventListener('submit', function (event) {
  if (!bookingForm.checkValidity()) {
    event.preventDefault();
    statusMessage.textContent = 'Please complete each field with valid details.';
    statusMessage.className = 'form-status error';
    bookingForm.reportValidity();
    return;
  }

  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Sending request...';
  statusMessage.textContent = 'Sending your booking details...';
  statusMessage.className = 'form-status';
});
