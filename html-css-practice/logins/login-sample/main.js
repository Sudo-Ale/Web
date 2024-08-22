document.getElementById('next').addEventListener('click', 
    function() {
        const formData = {
            email: document.getElementById('email').value,
            password: ''
        };

        console.log(formData.email)

        localStorage.setItem('formData', JSON.stringify(formData));

        window.location.href = 'next-index.html';
    }
)