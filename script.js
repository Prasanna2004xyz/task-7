const userDataContainer = document.getElementById('userData');
const reloadBtn = document.getElementById('reloadBtn');

const fetchUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        userDataContainer.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
};

const displayUsers = (users) => {
    userDataContainer.innerHTML = '';
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userDataContainer.appendChild(userDiv);
    });
};

reloadBtn.addEventListener('click', fetchUserData);
document.addEventListener('DOMContentLoaded', fetchUserData);
