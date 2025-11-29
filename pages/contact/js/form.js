const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const name = formData.get('name');
    const message = formData.get('message');

    alert(`Форма з такими даними надіслана:\nEmail: ${email}\nІм'я: ${name}\nПовідомлення: ${message}`);
});