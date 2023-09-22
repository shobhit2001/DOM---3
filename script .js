document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const userList = document.getElementById('user-list');

    // New elements for displaying user details
    const displayedName = document.getElementById('displayed-name');
    const displayedEmail = document.getElementById('displayed-email');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value;
        const email = emailInput.value;

        const user = {
            name: name,
            email: email
        };

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers.push(user);

        localStorage.setItem('users', JSON.stringify(storedUsers));

        nameInput.value = '';
        emailInput.value = '';

        alert('User details have been stored in local storage.');
        displayUserList(storedUsers);

        // Display the last added user's details on the screen
        displayedName.textContent = user.name;
        displayedEmail.textContent = user.email;
    });

    function displayUserList(users) {
        userList.innerHTML = '';
        if (users.length > 0) {
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
                userList.appendChild(listItem);
            });
        } else {
            userList.textContent = 'No user data found in local storage.';
        }
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    displayUserList(storedUsers);
});
