// Define an asynchronous function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);        // Fetch data from API
        const users = await response.json();         // Convert response to JSON

        dataContainer.innerHTML = '';                // Clear loading message

        const userList = document.createElement('ul'); // Create <ul> element

        users.forEach(user => {
            const li = document.createElement('li');  // Create <li> for each user
            li.textContent = user.name;              // Set user name
            userList.appendChild(li);                // Append <li> to <ul>
        });

        dataContainer.appendChild(userList);         // Append <ul> to container
    } catch (error) {
        dataContainer.innerHTML = '';                // Clear content
        dataContainer.textContent = 'Failed to load user data.'; // Show error
        console.error(error);
    }
}

// Run fetchUserData after the DOM content has loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
