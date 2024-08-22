document.getElementById('sign-in').addEventListener('click', 
    function() {
        const formData = {
            email: '',
            password: document.getElementById('password').value
        };

        console.log(formData.password)

        localStorage.setItem('formData', JSON.stringify(formData));
    }
)