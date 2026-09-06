const bookingForm = document.querySelector('#booking-form');
const statusMessage = document.querySelector('#form-status');
const serviceDate = document.querySelector('input[name="date"]');

serviceDate.min = new Date().toISOString().split('T')[0];

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const selectedServices = formData.getAll('services');
  const details = [
    `Name: ${formData.get('name')}`,
    `Mobile: ${formData.get('mobile')}`,
    `Current address: ${formData.get('address')}`,
    `Pickup point: ${formData.get('pickup')}`,
    `Drop point: ${formData.get('drop')}`,
    `Required date: ${formData.get('date')}`,
    `Vehicle required: ${formData.get('vehicle')}`,
    `Additional services: ${selectedServices.length ? selectedServices.join(', ') : 'None'}`,
    `Notes: ${formData.get('notes') || 'None'}`
  ].join('\n');

  const subject = `New MoveNest enquiry - ${formData.get('name')}`;
  const mailto = `mailto:sudalairajthangaraj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  statusMessage.textContent = 'Your email draft is ready. Complete and send it in your mail app.';
  window.location.href = mailto;
});
