document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // แสดง pop-up ระหว่างการดำเนินการ
    showLoadingPopup();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const apiUrl = 'https://api.sheety.co/3c1a48deb5bbded0b2117ecce485d6eb/schoolTest/sheet1'; // แทนที่ด้วย URL ของชีตจริง

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer taylor1989' // แทนที่ด้วย API key ของคุณ
            },
            body: JSON.stringify({
                sheet1: {  // ปรับให้ตรงกับชื่อชีตของคุณใน Sheety
                    username: username,
                    password: password
                }
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Login successful!');
            // การจัดการเมื่อเข้าสู่ระบบสำเร็จ เช่น การเปลี่ยนหน้า
        } else {
            console.error('Error response:', result);
            document.getElementById('error-message').textContent = result.error || 'Login failed!';
        }
    } catch (error) {
        document.getElementById('error-message').textContent = 'An error occurred: ' + error.message;
    } finally {
        // ซ่อน pop-up เมื่องานเสร็จสิ้น
        hideLoadingPopup();
    }
});

function showLoadingPopup() {
    const popup = document.createElement('div');
    popup.id = 'loadingPopup';
    popup.className = 'loading-popup';
    popup.innerHTML = '<div class="loading-spinner"></div><p>Please wait...</p>';
    document.body.appendChild(popup);
}

function hideLoadingPopup() {
    const popup = document.getElementById('loadingPopup');
    if (popup) {
        document.body.removeChild(popup);
    }
}
