document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const apiUrl = 'https://api.sheety.co/3c1a48deb5bbded0b2117ecce485d6eb/schoolTest/sheet1'; // Replace with your Sheety API endpoint

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY' // Replace with your API key if needed
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const result = await response.json();

        if (response.ok) {
            // Handle successful login
            alert('Login successful!');
            // Redirect or handle login success here
        } else {
            // Handle errors
            document.getElementById('error-message').textContent = result.error || 'Login failed!';
        }
    } catch (error) {
        document.getElementById('error-message').textContent = 'An error occurred: ' + error.message;
    }
});
