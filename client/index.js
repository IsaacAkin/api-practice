function displayContent(input) {
    const items = document.querySelector('.users-list');
    items.textContent = input;
}

async function showUsers(users, location) {
    for (const user of users) {
        const div = document.createElement('div');
        div.textContent = user;
        location.appendChild(div);
    }
}

async function loadUsers() {
    const item = document.querySelector('.users-list');
    const response = await fetch('users');
    let users;
    if (response.ok) {
        users = await response.json();
    } else {
        users = [{
            user_id: 'failed to load user ID',
            first_name: 'failed to load first name',
            last_name: 'failed to load last name',
            age: 'failed to load age'
        }];
    }

    showUsers(users, item);
}

displayContent();
loadUsers();