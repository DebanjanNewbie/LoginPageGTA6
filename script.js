document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');

    if (savedUsername) {
        document.querySelector('input[type="username"]').value = savedUsername;
        rememberMeCheckbox.checked = true;
    }
    if (savedPassword) {
        document.querySelector('input[type="password"]').value = savedPassword;
    }
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[type="username"]').value;
    const password = document.querySelector('input[type="password"]').value;
    const rememberMeChecked = document.querySelector('input[type="checkbox"]').checked;

    if (rememberMeChecked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMeChecked);

    alert('Form submitted successfully!');
});
