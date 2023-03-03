document.getElementById('submit-button').addEventListener('click', function () {
    // user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;

    // user password 
    const userPasswordFiled = document.getElementById('user-password');
    const userPassword = userPasswordFiled.value;

    // validation
    if (userEmail == 'admin5496@gmail.com' && userPassword == 'admin162546') {
        window.location.href = '../banking.html'
    }
    else {
        alert('Please provide valid information')
    }

})